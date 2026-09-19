import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Download, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { usePhoneInput } from '../hooks/usePhoneInput';
import { reachMetrikaGoal } from './YandexMetrika';
import { PrivacyConsent } from './PrivacyConsent';

export function CatalogDownloadBlock() {
  const { phone, handlePhoneChange, isPhoneValid, resetPhone } = usePhoneInput();
  const [messenger, setMessenger] = useState<'whatsapp' | 'telegram' | 'pdf'>('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !isPhoneValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Запрос каталога/прайса',
          phone,
          source: `Лид-магнит: Прайс-лист (${messenger})`,
          details: `Клиент запросил каталог и прайс-лист 2026 через ${messenger}`
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        reachMetrikaGoal('lead_submit');
        reachMetrikaGoal('lead_catalog_download');
        setIsSubmitted(true);
        resetPhone();
      } else {
        setError(data?.error || 'Не удалось отправить запрос. Попробуйте еще раз.');
      }
    } catch (err) {
      console.error(err);
      setError('Ошибка сети при отправке.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catalog-download" className="relative bg-brand-dark py-24 md:py-32 border-t border-white/5 overflow-hidden text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="bg-gradient-to-br from-brand-card via-[#1c1d22] to-brand-card border border-white/10 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-red/10 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Text & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-suisse text-xs uppercase tracking-[0.2em] text-brand-red font-semibold">
                  Прайс-лист и каталог 2026
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal leading-[1.08] tracking-tight">
                Получите <span className="font-serif-italic italic text-brand-red">актуальный прайс</span> <br className="hidden sm:inline" />
                и каталог фактур в PDF
              </h2>

              <p className="text-brand-gray text-sm sm:text-base font-suisse leading-relaxed max-w-xl">
                Мы подготовили понятный гид по стоимости: цены за м², примеры смет для 1-к, 2-к квартир и комнат, 
                сравнение фактур полотен (MSD, Bauf, Teqtum) и трековых систем освещения.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <FileText size={16} />
                  </div>
                  <span className="text-xs font-suisse text-gray-300">
                    PDF 12 МБ (актуально на 2026 г.)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-xs font-suisse text-gray-300">
                    Реальные сметы под ключ
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-red shrink-0">
                    <MessageSquare size={16} />
                  </div>
                  <span className="text-xs font-suisse text-gray-300">
                    Отправим в удобный мессенджер
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-brand-black/90 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h4 className="text-base sm:text-lg font-suisse font-medium text-white mb-1">
                        Куда отправить документ?
                      </h4>
                      <p className="text-xs text-brand-gray font-suisse">
                        Документ придёт моментально в автоматическом режиме
                      </p>
                    </div>

                    {/* Messenger selector */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setMessenger('whatsapp')}
                        className={`py-2 px-3 text-xs font-suisse rounded-lg border transition-all cursor-pointer ${
                          messenger === 'whatsapp'
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 font-medium'
                            : 'border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setMessenger('telegram')}
                        className={`py-2 px-3 text-xs font-suisse rounded-lg border transition-all cursor-pointer ${
                          messenger === 'telegram'
                            ? 'bg-sky-500/10 border-sky-500 text-sky-400 font-medium'
                            : 'border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        Telegram
                      </button>
                      <button
                        type="button"
                        onClick={() => setMessenger('pdf')}
                        className={`py-2 px-3 text-xs font-suisse rounded-lg border transition-all cursor-pointer ${
                          messenger === 'pdf'
                            ? 'bg-brand-red/10 border-brand-red text-brand-red font-medium'
                            : 'border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        По SMS
                      </button>
                    </div>

                    {error && (
                      <div className="p-3 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs rounded">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-brand-gray font-suisse mb-1.5">
                        Ваш номер телефона <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full bg-brand-card border border-white/10 focus:border-brand-red px-4 py-3.5 rounded-lg text-sm text-white font-suisse outline-none transition-colors"
                      />
                    </div>

                    <PrivacyConsent />

                    <button
                      type="submit"
                      disabled={isSubmitting || !isPhoneValid}
                      className={`w-full py-4 rounded-lg font-suisse text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isPhoneValid
                          ? 'bg-brand-red hover:bg-brand-red-hover text-white shadow-lg shadow-brand-red/25'
                          : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Отправляем каталог...</span>
                      ) : (
                        <>
                          <Download size={14} />
                          <span>Получить прайс-лист бесплатно</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={28} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-suisse font-medium text-white">
                        Прайс-лист отправлен!
                      </h4>
                      <p className="text-xs text-brand-gray font-suisse leading-relaxed">
                        Мы отправили ссылку на скачивание каталога и прайс-листа на указанный номер. Наш технолог также готов ответить на любые вопросы по смете.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-suisse text-brand-gray underline hover:text-white pt-2 cursor-pointer"
                    >
                      Отправить на другой номер
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
