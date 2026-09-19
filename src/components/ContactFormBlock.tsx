import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calculator, Ruler, CheckCircle, ArrowRight, ShieldCheck, Gift } from 'lucide-react';
import { reachMetrikaGoal } from './YandexMetrika';
import { PrivacyConsent } from './PrivacyConsent';
import { usePhoneInput } from '../hooks/usePhoneInput';

export function ContactFormBlock() {
  const [name, setName] = useState('');
  const { phone, handlePhoneChange, isPhoneValid, resetPhone } = usePhoneInput();
  const [comment, setComment] = useState('');
  const [honeypotValue, setHoneypotValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !isPhoneValid) return;
    if (honeypotValue) return;

    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: name || 'Клиент из формы замера', 
          phone, 
          comment,
          source: 'Блок записи на замер (Allen Brau Redesign)',
          user_website_trap: honeypotValue
        })
      });
      
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        reachMetrikaGoal('lead_form_success');
        reachMetrikaGoal('lead_submit');
        reachMetrikaGoal('lead_contact');
        setIsSubmitted(true);
        setName('');
        resetPhone();
        setComment('');
      } else {
        const errorMsg = data?.error || 'Не удалось отправить заявку. Попробуйте позже.';
        setError(errorMsg);
      }
    } catch (err) {
      console.error('Network error:', err);
      setError('Ошибка сети. Проверьте подключение и попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Ruler size={18} className="text-brand-red shrink-0" />,
      title: "Бесплатный точный замер",
      text: "Инженер приедет с лазерным дальномером и чемоданом образцов"
    },
    {
      icon: <Calculator size={18} className="text-brand-red shrink-0" />,
      title: "Смета на месте за 15 минут",
      text: "Рассчитаем 2-3 варианта комплектации под ваш бюджет"
    },
    {
      icon: <Gift size={18} className="text-brand-red shrink-0" />,
      title: "Скидка 15% + подарок",
      text: "Светильники или скрытый карниз в подарок при заказе"
    },
    {
      icon: <ShieldCheck size={18} className="text-brand-red shrink-0" />,
      title: "Гарантия 10 лет в договоре",
      text: "Личная ответственность ведущего инженера за каждый объект"
    }
  ];

  return (
    <section id="contact" className="relative bg-brand-black py-24 md:py-32 overflow-hidden border-t border-white/5 text-white">
      {/* Background glow */}
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-suisse text-xs text-brand-red uppercase tracking-[0.2em] font-medium">
                  Вызов технолога
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal leading-[1.08] tracking-tight text-white">
                Запишитесь на <br />
                <span className="font-serif-italic italic text-brand-red">бесплатный замер</span>
              </h2>
              
              <p className="text-brand-gray text-sm sm:text-base leading-relaxed font-suisse">
                Оставьте номер — инженер свяжется в течение 15 минут, ответит на вопросы и согласует удобное время визита с образцами полотен.
              </p>
            </div>

            {/* Benefit Badges */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3 rounded-lg bg-brand-card/40 border border-white/5">
                  <div className="p-2 rounded bg-brand-black border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <div className="font-suisse text-xs sm:text-sm font-medium text-white">
                      {feature.title}
                    </div>
                    <div className="font-suisse text-xs text-brand-gray mt-0.5">
                      {feature.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Honeypot */}
                    <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }} aria-hidden="true">
                      <input
                        type="text"
                        name="user_website_trap"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypotValue}
                        onChange={(e) => setHoneypotValue(e.target.value)}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-suisse font-medium text-white mb-1">
                        Заполните заявку на замер
                      </h3>
                      <p className="text-xs text-brand-gray font-suisse">
                        Это бесплатно и ни к чему вас не обязывает
                      </p>
                    </div>

                    {error && (
                      <div className="p-3 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs rounded-lg">
                        {error}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="block font-suisse text-xs uppercase tracking-wider text-brand-gray">Ваше имя</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Как к вам обращаться"
                        className="w-full bg-brand-black border border-white/10 focus:border-brand-red px-4 py-3.5 text-sm text-white rounded-lg outline-none transition-colors font-suisse"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-suisse text-xs uppercase tracking-wider text-brand-gray">
                        Телефон <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full bg-brand-black border border-white/10 focus:border-brand-red px-4 py-3.5 text-sm text-white rounded-lg outline-none transition-colors font-suisse"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-suisse text-xs uppercase tracking-wider text-brand-gray">
                        Комментарий или адрес (необязательно)
                      </label>
                      <textarea
                        rows={2}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Например: 2-комнатная квартира, новостройка, нужен теневой профиль"
                        className="w-full bg-brand-black border border-white/10 focus:border-brand-red px-4 py-3 text-sm text-white rounded-lg outline-none transition-colors font-suisse resize-none"
                      />
                    </div>

                    <PrivacyConsent />

                    <button
                      type="submit"
                      disabled={isSubmitting || !isPhoneValid}
                      className={`w-full font-suisse text-xs uppercase tracking-wider py-4 rounded-xl transition-all font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                        isPhoneValid
                          ? 'bg-brand-red hover:bg-brand-red-hover text-white shadow-brand-red/25'
                          : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? (
                        <span>Отправляем заявку...</span>
                      ) : (
                        <>
                          <span>Вызвать замерщика бесплатно</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-brand-gray font-suisse pt-1">
                      <Phone size={12} className="text-brand-red" />
                      <span>Или позвоните нам напрямую: <a href="tel:+74959713123" className="text-white hover:text-brand-red underline">+7 (495) 971-31-23</a></span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle size={36} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-suisse font-medium text-white">
                        Заявка принята!
                      </h3>
                      <p className="text-brand-gray font-suisse text-sm max-w-sm mx-auto leading-relaxed">
                        Спасибо, {name || 'уважаемый клиент'}! Наш инженер свяжется с вами в течение 15 минут для уточнения удобного времени замера.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg border border-white/20 hover:border-white text-white font-suisse text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Отправить другую заявку
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
