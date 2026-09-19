import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { LazyVideo } from './LazyVideo';

interface DreamCeilingBlockProps {
  onOpenCalculator: (service?: string) => void;
}

export function DreamCeilingBlock({ onOpenCalculator }: DreamCeilingBlockProps) {
  const [activeStep, setActiveStep] = useState<string | null>("01");

  const steps = [
    {
      num: "01",
      title: "Заявка и предварительный расчет",
      desc: "за 5 минут",
      details: "Вы оставляете заявку или звоните нам. Уточняем площадь, пожелания по фактуре (матовый, сатин, теневой, треки) и озвучиваем понятный диапазон стоимости."
    },
    {
      num: "02",
      title: "Бесплатный выезд инженера с образцами",
      desc: "в удобный день",
      details: "Технолог приедет с чемоданом образцов профилей и полотен. Проведет лазерный замер, оценит стены и поможет выбрать оптимальный вариант под ваш бюджет."
    },
    {
      num: "03",
      title: "Точная смета и договор",
      desc: "цена не меняется",
      details: "Фиксируем финальную стоимость и перечень работ в официальном договоре с гарантией 10 лет. Никаких доплат и скрытых платежей в процессе монтажа."
    },
    {
      num: "04",
      title: "Чистый монтаж без пыли",
      desc: "за 1 рабочий день",
      details: "Монтажники приезжают точно вовремя со взрывобезопасными композитными баллонами и перфораторами с пылесосами. Вся комната делается за 3-5 часов без грязи."
    },
    {
      num: "05",
      title: "Приёмка работы и оплата по факту",
      desc: "вы платите за результат",
      details: "Вы лично проверяете идеальную натяжку полотна, работу освещения и ровность углов. Оплата производится только после того, как вы полностью довольны результатом."
    }
  ];

  return (
    <section id="process" className="relative bg-brand-black py-24 md:py-32 overflow-hidden border-t border-white/5 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Headline & Video */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-suisse text-xs text-brand-red uppercase tracking-[0.2em] font-medium">
                  Прозрачный процесс
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal leading-[1.08] tracking-tight text-white">
                От первого звонка <br />
                до <span className="font-serif-italic italic text-brand-red">идеального потолка</span>
              </h2>

              <p className="text-sm md:text-base text-brand-gray font-suisse leading-relaxed">
                Мы избавили процесс ремонта от стресса: прозрачные этапы, точные сроки и оплата только после вашей приемки.
              </p>
            </div>
            
            {/* Video container */}
            <div className="my-8 aspect-[4/3] w-full max-w-[440px] rounded-xl overflow-hidden bg-brand-card border border-white/10 relative shadow-xl">
              <LazyVideo
                src="/azhur/photo/pro.mp4"
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Stages List */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {steps.map((step, index) => {
                const isOpen = activeStep === step.num;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group"
                  >
                    <button
                      onClick={() => setActiveStep(isOpen ? null : step.num)}
                      className="w-full text-left py-6 md:py-7 flex items-start gap-4 sm:gap-6 cursor-pointer"
                    >
                      {/* Number Accent */}
                      <span className={`font-serif-italic text-2xl sm:text-3xl italic transition-colors duration-300 w-10 shrink-0 ${
                        isOpen ? 'text-brand-red font-bold' : 'text-brand-gray group-hover:text-white'
                      }`}>
                        {step.num}
                      </span>
                      
                      {/* Content Container */}
                      <div className="flex-grow flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 pr-4">
                        <h3 className={`text-base sm:text-lg font-suisse font-medium transition-colors ${
                          isOpen ? 'text-white' : 'text-white/85 group-hover:text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <span className={`font-suisse text-xs uppercase tracking-wider shrink-0 ${
                          isOpen ? 'text-brand-red font-semibold' : 'text-brand-gray'
                        }`}>
                          — {step.desc}
                        </span>
                      </div>

                      {/* Accordion Indicator Icon */}
                      <div className="shrink-0 mt-0.5 text-brand-gray group-hover:text-brand-red transition-colors">
                        {isOpen ? <Minus size={16} className="text-brand-red" /> : <Plus size={16} />}
                      </div>
                    </button>

                    {/* Expandable details container */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-14 sm:pl-16 max-w-2xl">
                            <p className="text-sm md:text-base text-brand-gray font-suisse leading-relaxed">
                              {step.details}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={() => onOpenCalculator('Обсуждение проекта')}
                className="bg-brand-red hover:bg-brand-red-hover text-white font-suisse text-xs uppercase tracking-wider px-8 py-4 rounded-lg transition-all font-semibold flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-red/20"
              >
                <span>Обсудить мой проект</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
