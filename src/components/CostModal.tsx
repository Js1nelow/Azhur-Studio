import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calculator, Phone, Sparkles, Gift } from 'lucide-react';
import { reachMetrikaGoal } from './YandexMetrika';
import { PrivacyConsent } from './PrivacyConsent';
import { usePhoneInput } from '../hooks/usePhoneInput';

interface CostModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export function CostModal({ isOpen, onClose, selectedService = 'Натяжные потолки' }: CostModalProps) {
  const [services, setServices] = useState<string[]>([selectedService]);
  const [roomType, setRoomType] = useState('Гостиная / спальня');
  const [area, setArea] = useState(22);
  const [name, setName] = useState('');
  const { phone, handlePhoneChange, isPhoneValid, resetPhone } = usePhoneInput();
  const [honeypotValue, setHoneypotValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync state with selectedService prop when modal opens
  useEffect(() => {
    if (isOpen && selectedService) {
      setServices([selectedService]);
    }
  }, [isOpen, selectedService]);

  const toggleService = (item: string) => {
    if (services.includes(item)) {
      if (services.length > 1) {
        setServices(services.filter((s) => s !== item));
      }
    } else {
      setServices([...services, item]);
    }
  };

  // Dynamic live price calculation
  const estimatedPrice = useMemo(() => {
    let baseRatePerMeter = 750; // base matte / satin
    if (services.includes('Теневой профиль')) baseRatePerMeter += 500;
    if (services.includes('Карнизные решения')) baseRatePerMeter += 350;
    if (services.includes('Световые линии и треки')) baseRatePerMeter += 600;

    const baseSum = area * baseRatePerMeter;
    const minPrice = Math.round(baseSum * 0.95 / 100) * 100;
    const maxPrice = Math.round(baseSum * 1.15 / 100) * 100;

    return {
      min: minPrice.toLocaleString('ru-RU'),
      max: maxPrice.toLocaleString('ru-RU'),
      withDiscount: Math.round(minPrice * 0.85 / 100) * 100
    };
  }, [area, services]);

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
          name: name || 'Клиент из калькулятора', 
          phone, 
          source: 'Калькулятор стоимости (Allen Brau Redesign)',
          details: `Помещение: ${roomType}. Решения: ${services.join(', ')}. Площадь: ${area} м². Расчетная вилка: ${estimatedPrice.min} - ${estimatedPrice.max} ₽`
        })
      });
      
      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        reachMetrikaGoal('lead_form_success');
        reachMetrikaGoal('lead_submit');
        reachMetrikaGoal('lead_calculator');
        setIsSubmitted(true);
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

  const handleReset = () => {
    setName('');
    resetPhone();
    setHoneypotValue('');
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-black/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-brand-card border border-white/10 p-6 md:p-8 rounded-2xl text-white z-10 shadow-2xl my-8 max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-gray hover:text-white transition-colors p-2 cursor-pointer rounded-full bg-white/5 hover:bg-white/10"
              aria-label="Закрыть"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red shrink-0">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-suisse font-medium text-white tracking-tight">
                      Калькулятор стоимости потолка
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-gray font-suisse mt-1">
                      Укажите параметры вашей комнаты для мгновенного предварительного расчета
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot anti-spam */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                    <input
                      type="text"
                      name="check_website_bot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypotValue}
                      onChange={(e) => setHoneypotValue(e.target.value)}
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs rounded-lg">
                      {error}
                    </div>
                  )}

                  {/* Room Type Buttons */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-brand-gray font-suisse">
                      1. Тип помещения
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Гостиная', 'Спальня', 'Кухня', 'Вся квартира'].map((room) => (
                        <button
                          key={room}
                          type="button"
                          onClick={() => setRoomType(room)}
                          className={`py-2 px-3 text-xs font-suisse rounded-lg border text-center transition-all cursor-pointer ${
                            roomType === room
                              ? 'bg-white text-black border-white font-medium'
                              : 'border-white/10 text-gray-300 hover:border-white/30'
                          }`}
                        >
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Area Slider */}
                  <div className="space-y-2 bg-brand-black/50 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between items-center text-xs font-suisse">
                      <span className="text-brand-gray uppercase tracking-wider">2. Площадь комнаты</span>
                      <span className="text-lg font-suisse font-bold text-brand-red">{area} м²</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full accent-brand-red cursor-pointer bg-white/10 h-1.5 rounded-lg outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                      <span>5 м² (санузел)</span>
                      <span>20 м² (комната)</span>
                      <span>100 м² (коттедж)</span>
                    </div>
                  </div>

                  {/* Solutions selector */}
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-brand-gray font-suisse">
                      3. Дополнительные опции
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Натяжные потолки',
                        'Теневой профиль',
                        'Карнизные решения',
                        'Световые линии и треки',
                      ].map((item) => {
                        const isSelected = services.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleService(item)}
                            className={`text-left px-3.5 py-2.5 rounded-lg text-xs font-suisse border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'border-brand-red text-white bg-brand-red/10'
                                : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                            }`}
                          >
                            <span>{item}</span>
                            {isSelected && <Check size={14} className="text-brand-red" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Live Price Estimation Box */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-brand-red/10 via-brand-red/5 to-transparent border border-brand-red/20 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-gray font-suisse">Ориентировочная смета под ключ:</span>
                      <span className="text-base sm:text-lg font-suisse font-bold text-white">
                        ~{estimatedPrice.min} – {estimatedPrice.max} ₽
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-suisse">
                      <Gift size={13} />
                      <span>Скидка 15% + комплект светильников закреплены за вашим номером</span>
                    </div>
                  </div>

                  {/* Lead input fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-brand-gray font-suisse mb-1">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Алексей"
                        className="w-full bg-brand-black border border-white/10 focus:border-brand-red px-3.5 py-3 rounded-lg text-sm text-white font-suisse outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-brand-gray font-suisse mb-1">
                        Телефон <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (999) 000-00-00"
                        className="w-full bg-brand-black border border-white/10 focus:border-brand-red px-3.5 py-3 rounded-lg text-sm text-white font-suisse outline-none"
                      />
                    </div>
                  </div>

                  <PrivacyConsent />

                  <button
                    type="submit"
                    disabled={isSubmitting || !isPhoneValid}
                    className={`w-full py-4 rounded-xl font-suisse text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPhoneValid
                        ? 'bg-brand-red hover:bg-brand-red-hover text-white shadow-lg shadow-brand-red/25'
                        : 'bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <span>Отправка данных...</span>
                    ) : (
                      <>
                        <Phone size={14} />
                        <span>Зафиксировать цену со скидкой 15%</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-brand-gray text-center font-suisse">
                    Бесплатная консультация инженера. Никакого навязчивого спама.
                  </p>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-suisse font-medium text-white">
                    Расчет зафиксирован!
                  </h3>
                  <p className="text-sm text-brand-gray font-suisse max-w-md mx-auto leading-relaxed">
                    Спасибо, {name || 'уважаемый клиент'}! Мы закрепили за вашим номером телефона скидку 15% и бесплатный выезд замерщика с каталогом образцов. Инженер свяжется с вами в течение 15 минут.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-lg border border-white/20 hover:border-white text-white font-suisse text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Закрыть калькулятор
                  </button>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
