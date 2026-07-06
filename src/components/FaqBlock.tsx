import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const faqItems: FaqItem[] = [
  {
    q: "Сколько времени занимает монтаж?",
    a: "В большинстве случаев один день. Сложные многоуровневые конструкции — до двух дней. Точные сроки скажем после замера."
  },
  {
    q: "Можно ли делать потолок пока идёт другой ремонт?",
    a: "Натяжные потолки — финальный этап отделки. Устанавливаем после всех черновых и чистовых работ, шпаклёвки и покраски стен."
  },
  {
    q: "Как формируется цена?",
    a: "Цена зависит от площади, типа материала и сложности конструкции. Точную стоимость фиксируем после бесплатного замера — она не меняется."
  },
  {
    q: "Вы убираете за собой после монтажа?",
    a: "Да. Защищаем мебель и пол до начала работ, убираем весь мусор после. Вы принимаете уже готовый результат."
  },
  {
    q: "Даёте ли гарантию?",
    a: "Да. Подробности уточняем индивидуально — зависит от типа работ и материалов."
  }
];

export function FaqBlock() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-brand-black py-24 md:py-32 overflow-hidden border-t border-brand-light/5">
      {/* Decorative vertical background indicator */}
      <div className="absolute top-0 right-1/4 w-[1px] h-32 bg-gradient-to-b from-brand-red/10 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-brand-red uppercase tracking-widest">[ ЧАСТЫЕ ВОПРОСЫ ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-[1.1] text-brand-light uppercase tracking-tight">
              Частые вопросы
            </h2>
            <p className="text-brand-gray text-sm md:text-base leading-relaxed max-w-sm font-sans">
              Отвечаем честно на важные технические и организационные моменты
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 divide-y divide-brand-light/10 border-b border-brand-light/10">
            {faqItems.map((item, index) => {
              const isOpen = activeIdx === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group"
                >
                  <button
                    onClick={() => setActiveIdx(isOpen ? null : index)}
                    className="w-full text-left py-6 md:py-8 flex items-start gap-6 hover:border-brand-red/30 transition-colors duration-300 focus:outline-none cursor-pointer"
                  >
                    {/* Index with brand accent */}
                    <span className={`font-mono text-sm md:text-base leading-none select-none transition-all duration-300 ${
                      isOpen ? 'text-brand-red scale-110' : 'text-brand-gray group-hover:text-brand-red group-hover:scale-105'
                    }`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </span>

                    {/* Question text */}
                    <div className="flex-grow pr-4">
                      <h3 className={`text-base sm:text-lg md:text-xl font-display uppercase tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-brand-light group-hover:text-white'
                      }`}>
                        {item.q}
                      </h3>
                    </div>

                    {/* Plus/Minus Indicator */}
                    <div className="shrink-0 mt-0.5 text-brand-gray group-hover:text-brand-red transition-colors duration-300">
                      {isOpen ? (
                        <Minus size={16} className="text-brand-red" />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expansion Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 md:pb-8 pl-12 md:pl-14 max-w-2xl">
                          <p className="text-sm md:text-base text-brand-gray leading-relaxed font-sans font-light">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
