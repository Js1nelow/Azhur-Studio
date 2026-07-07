import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

interface LeadRequest {
  name?: string;
  phone: string;
  comment?: string;
  source?: string;
  details?: string;
}

// API route to send lead to Max Bot
app.post('/api/send-lead', async (req: express.Request<{}, {}, LeadRequest>, res: express.Response) => {
  try {
    const { name, phone, comment, source, details } = req.body;
    
    // Format the message
    let messageText = `🔥 Новая заявка с сайта!\n\n`;
    if (source) messageText += `Форма: ${source}\n`;
    if (name) messageText += `Имя: ${name}\n`;
    messageText += `Телефон: ${phone}\n`;
    if (details) messageText += `Детали: ${details}\n`;
    if (comment) messageText += `Комментарий: ${comment}\n`;

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
    res.status(500).json({ success: false, error: error.message || 'Failed to send lead' });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
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
