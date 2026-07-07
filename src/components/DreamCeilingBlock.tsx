import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

interface DreamCeilingBlockProps {
  onOpenCalculator: (service?: string) => void;
}

export function DreamCeilingBlock({ onOpenCalculator }: DreamCeilingBlockProps) {
  const [activeStep, setActiveStep] = useState<string | null>("01");

  const steps = [
    {
      num: "01",
      title: "Погружение в проект",
      desc: "чтобы не переделывать",
      details: "Слушаем вас, смотрим пространство, задаём вопросы. Понимаем задачу прежде чем предлагать решения."
    },
    {
      num: "02",
      title: "Подбор решения под задачу и бюджет",
      desc: "без потери качества",
      details: "Не навязываем дорогое. Подбираем то что реально подходит вашему интерьеру и кошельку."
    },
    {
      num: "03",
      title: "Точная смета",
      desc: "цена не меняется",
      details: "Фиксируем стоимость до начала работ. Цена не меняется в процессе."
    },
    {
      num: "04",
      title: "Подготовка и координация",
      desc: "вы не тратите нервы",
      details: "Согласуем дату, подготавливаем материалы, приезжаем вовремя."
    },
    {
      num: "05",
      title: "Монтаж от мастеров",
      desc: "за один день",
      details: "Работаем аккуратно, без пыли и грязи. Один день — и потолок готов."
    },
    {
      num: "06",
      title: "Сдача объекта с гарантией",
      desc: "10 лет",
      details: "Принимаем работу вместе с вами. Устраняем замечания на месте. Выдаём гарантийный документ."
    }
  ];

  return (
    <section id="process" className="relative bg-brand-black py-24 md:py-36 overflow-hidden border-t border-brand-light/5">
      {/* Subtle minimalist background visual elements */}
      <div className="absolute top-0 right-1/4 w-[1px] h-48 bg-gradient-to-b from-brand-red/20 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-brand-red uppercase tracking-widest">[ КАК РОЖДАЕТСЯ ПОТОЛОК ВАШЕЙ МЕЧТЫ ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-display font-bold leading-[1.1] text-brand-light uppercase tracking-tight text-balance">
                Берём на себя всё — от идеи до финальной сдачи
              </h2>
            </div>
            
            {/* Dark placeholder image with 4:3 aspect ratio */}
            <div className="my-8 lg:my-10 aspect-[4/3] w-full max-w-[460px] rounded-none overflow-hidden bg-brand-card/50 border border-brand-light/5 relative group/img">
              <div className="absolute inset-0 bg-brand-black/20 md:group-hover/img:bg-brand-black/10 transition-colors duration-500 z-10" />
              <img
                src="/azhur/photo/pro.webp"
                alt="Процесс создания потолка"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover/img:scale-105 group-hover/img:scale-100"
              />
            </div>
            
            {/* Desktop spacer or decoration to balance negative space */}
            <div className="hidden lg:block mt-auto">
              <div className="h-[1px] w-24 bg-brand-red" />
              <p className="mt-4 font-mono text-[10px] text-brand-gray uppercase tracking-widest leading-relaxed">
                Индивидуальное проектирование <br />
                и безупречная реализация
              </p>
            </div>
          </div>

          {/* Right Column: Stages List */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="divide-y divide-brand-light/10 border-b border-brand-light/10">
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
                      className="w-full text-left py-6 md:py-8 flex items-start gap-6 hover:border-brand-red/30 transition-colors duration-300 focus:outline-none cursor-pointer"
                    >
                      {/* Number Accent */}
                      <span className={`font-display text-xl md:text-2xl font-medium leading-none select-none transition-all duration-300 ${
                        isOpen ? 'text-brand-red scale-110' : 'text-brand-gray group-hover:text-brand-red group-hover:scale-105'
                      }`}>
                        {step.num}
                      </span>
                      
                      {/* Content Container */}
                      <div className="flex-grow flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-4 pr-4">
                        <h3 className={`text-base sm:text-lg md:text-xl font-display uppercase tracking-tight transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-brand-light group-hover:text-white'
                        }`}>
                          {step.title}
                        </h3>
                        <span className={`font-mono text-xs md:text-sm uppercase tracking-wider shrink-0 transition-colors duration-300 ${
                          isOpen ? 'text-brand-red' : 'text-brand-gray group-hover:text-brand-light'
                        }`}>
                          — {step.desc}
                        </span>
                      </div>

                      {/* Accordion Indicator Icon */}
                      <div className="shrink-0 mt-0.5 text-brand-gray group-hover:text-brand-red transition-colors duration-300">
                        {isOpen ? (
                          <Minus size={16} className="text-brand-red" />
                        ) : (
                          <Plus size={16} />
                        )}
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
                          <div className="pb-6 md:pb-8 pl-12 md:pl-14 max-w-2xl">
                            <p className="text-sm md:text-base text-brand-gray leading-relaxed font-sans">
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

            {/* Red outline Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex justify-start"
            >
              <button
                onClick={() => onOpenCalculator('Обсуждение проекта')}
                className="group relative inline-flex items-center justify-center gap-3 border border-brand-red hover:bg-brand-red hover:shadow-lg hover:shadow-brand-red/10 text-brand-light hover:text-white font-mono text-xs uppercase tracking-widest px-8 py-5 transition-all duration-300 font-medium cursor-pointer"
              >
                <span>Обсудить проект</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

