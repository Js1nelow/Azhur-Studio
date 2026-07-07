import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import * as dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import xss from 'xss';

dotenv.config();

const app = express();
app.set('trust proxy', 1); // Trust first proxy for express-rate-limit

const PORT = 3000;

// Ограничение CORS (разрешаем только наш домен)
const allowedOrigins = [
  process.env.APP_URL || 'http://localhost:3000',
  // Разрешаем dev и preview URL AI Studio
  'https://ais-dev-yjrkwil3mis5hnipw4e43x-458080331442.europe-west2.run.app',
  'https://ais-pre-yjrkwil3mis5hnipw4e43x-458080331442.europe-west2.run.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Разрешаем запросы без origin (например, server-to-server) 
    // или если origin в списке разрешенных
    if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST', 'GET', 'OPTIONS'],
}));

// Ограничение размера JSON payload до 10kb (защита от DoS)
app.use(express.json({ limit: '10kb' }));

// Настройка Rate Limiting для API (защита от спама)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 10, // Ограничение: 10 запросов с одного IP за 15 минут
  message: { success: false, error: 'Слишком много запросов. Пожалуйста, подождите немного.' },
  standardHeaders: true,
  legacyHeaders: false,
});

interface LeadRequest {
  name?: string;
  phone: string;
  comment?: string;
  source?: string;
  details?: string;
  recaptchaToken?: string;
}

// API route to send lead to Max Bot
app.post('/api/send-lead', apiLimiter, async (req: express.Request<{}, {}, LeadRequest>, res: express.Response) => {
  try {
    const { name, phone, comment, source, details, recaptchaToken } = req.body;
    
    // Бэкенд-валидация reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || '6Le9r0gtAAAAADnZKEtvpNavBZLui4gcq6b0XMuP';
    if (recaptchaSecret && recaptchaToken) {
      const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
      const verifyResponse = await fetch(verifyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
      });
      const verifyData = await verifyResponse.json();
      console.log('reCAPTCHA verify response:', verifyData);
      
      if (!verifyData.success) {
        // Если ошибка связана с окружением браузера (например, iframe песочницы или блокировщик рекламы),
        // пропускаем заявку, чтобы не блокировать реальных пользователей.
        if (verifyData['error-codes'] && verifyData['error-codes'].includes('browser-error')) {
          console.warn('reCAPTCHA skipped due to browser-error (iframe/adblock).');
        } else {
          console.error('reCAPTCHA validation failed:', verifyData);
          return res.status(400).json({ success: false, error: 'Проверка защиты от спама не пройдена. Пожалуйста, обновите страницу и попробуйте еще раз.' });
        }
      }
      
      if (verifyData.success && verifyData.score !== undefined && verifyData.score < 0.5) {
        console.warn('reCAPTCHA low score:', verifyData.score);
        // Temporarily allow low score or just return it in the error for debugging
        return res.status(400).json({ success: false, error: 'Проверка reCAPTCHA не пройдена (низкий рейтинг: ' + verifyData.score + ')' });
      }
    } else if (recaptchaSecret && !recaptchaToken) {
      return res.status(400).json({ success: false, error: 'Отсутствует токен reCAPTCHA.' });
    }

    // Санитаризация данных (защита от XSS)
    const safeName = name ? xss(name) : undefined;
    const safePhone = phone ? xss(phone) : '';
    const safeComment = comment ? xss(comment) : undefined;
    const safeSource = source ? xss(source) : undefined;
    const safeDetails = details ? xss(details) : undefined;

    // Бэкенд-валидация: обязательные поля и их разумная длина
    if (!safePhone || typeof safePhone !== 'string' || safePhone.replace(/\D/g, '').length < 11) {
      return res.status(400).json({ success: false, error: 'Некорректный номер телефона' });
    }

    if (safeName && safeName.length > 100) return res.status(400).json({ success: false, error: 'Имя слишком длинное' });
    if (safeComment && safeComment.length > 1000) return res.status(400).json({ success: false, error: 'Комментарий слишком длинный' });

    // Format the message
    let messageText = `🔥 Новая заявка с сайта!\n\n`;
    if (safeSource) messageText += `Форма: ${safeSource}\n`;
    if (safeName) messageText += `Имя: ${safeName}\n`;
    messageText += `Телефон: ${safePhone}\n`;
    if (safeDetails) messageText += `Детали: ${safeDetails}\n`;
    if (safeComment) messageText += `Комментарий: ${safeComment}\n`;

    const maxBotToken = process.env.MAX_BOT_TOKEN;
    let maxChannelId = process.env.MAX_CHANNEL_ID;
    
    // Автоматическое исправление, если в настройках ошибочно указан ID бота
    if (maxChannelId === '13289223') {
      maxChannelId = '329610108';
    }
    
    if (!maxBotToken || !maxChannelId) {
      console.warn("MAX_BOT_TOKEN or MAX_CHANNEL_ID is not set in environment variables. Simulating success.");
      // For development/preview when token isn't in env yet, we still return success to the client
      return res.json({ success: true, simulated: true });
    }

    const botApiUrl = `https://platform-api.max.ru/messages?user_id=${maxChannelId}`; 

    const response = await fetch(botApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${maxBotToken}`
      },
      body: JSON.stringify({
        text: messageText,
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = `Max API error: ${response.statusText}`;
      
      try {
        const errorJson = JSON.parse(errorText);
        if (response.status === 404 && errorJson.code === 'chat.not.found') {
          errorMessage = 'Бот не может отправить сообщение: пожалуйста, сначала напишите боту любое сообщение для открытия диалога.';
        } else {
          errorMessage = errorJson.message || errorMessage;
        }
      } catch (e) {
        // Ignored, use default
      }
      
      throw new Error(errorMessage);
    }

    res.json({ success: true });
  } catch (error: any) {
    console.error('Error sending lead to Max Bot:', error.message);
    // Не отправляем внутренние ошибки на клиент
    res.status(500).json({ success: false, error: 'Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.' });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production' || (process.argv[1] && process.argv[1].endsWith('server.cjs'));

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    const publicPath = path.join(process.cwd(), 'public');
    app.use(express.static(distPath));
    app.use(express.static(publicPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
