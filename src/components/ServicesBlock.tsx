import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Cpu, Sliders, Layers, Eye, ShieldCheck, ChevronRight } from 'lucide-react';

interface ServicesBlockProps {
  onOpenCalculator: (service: string) => void;
}

export function ServicesBlock({ onOpenCalculator }: ServicesBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "01",
      title: "Натяжные потолки",
      subtitle: "Бесшовные системы A-Класса",
      description: "Идеально ровные матовые, сатиновые или глянцевые полотна премиум-качества. Монтаж без швов и трещин за 1 день.",
      icon: Layers,
      specs: [
        { label: "Материал", value: "MSD Premium / Teqtum" },
        { label: "Экологичность", value: "Класс А+ (без запаха)" },
        { label: "Ширина полотна", value: "До 5.5 м без швов" },
        { label: "Срок службы", value: "Гарантия 15 лет" }
      ],
      features: ["Монтаж без пыли за 1 день", "Идеальная белизна полотна", "Выдерживает до 100л воды/м²"]
    },
    {
      id: "02",
      title: "Теневой профиль",
      subtitle: "Архитектурный зазор EuroKRAAB",
      description: "Современное примыкание EuroKRAAB. Создает визуальный зазор 6 мм, избавляя от резиновых уголков-заглушек.",
      icon: Sliders,
      specs: [
        { label: "Технология", value: "Бесщелевой теневой зазор" },
        { label: "Ширина шва", value: "6 мм (идеальная геометрия)" },
        { label: "Материал", value: "Анодированный алюминий" },
        { label: "Цвет профиля", value: "Черный муар / Матовый" }
      ],
      features: ["Идеально ровный зазор по всему периметру", "Отсутствие маскировочной ленты", "Эффект парящих стен"]
    },
    {
      id: "03",
      title: "Карнизные решения",
      subtitle: "Скрытая интеграция и электропривод",
      description: "Скрытые ниши для штор с интеграцией электрокарниза. Подбираем систему под задачу — от простого карниза до конструкции с местом для подсветки и бесшумными крючками на колёсиках.",
      icon: Cpu,
      specs: [
        { label: "Формируется ниша", value: "да" },
        { label: "Место для электрокарниза", value: "предусмотрено" },
        { label: "Минимальный опуск потолка", value: "от 4 см" },
        { label: "Управление", value: "ручное или электро" }
      ],
      features: ["Скрытый монтаж без видимых крепежей", "Бесшумный плавный ход штор", "Интеграция с натяжным потолком"]
    },
    {
      id: "04",
      title: "Световые линии и треки",
      subtitle: "Магнитные системы и контурный свет",
      description: "Прогрессивное освещение: встроенные магнитные шинопроводы, световые полосы и линейные рассеиватели.",
      icon: Eye,
      specs: [
        { label: "Ширина линий", value: "15 мм / 30 мм / 50 мм" },
        { label: "Светодиоды", value: "Samsung Premium LED (CRI >90)" },
        { label: "Безопасность", value: "Низковольтная шина 48V" },
        { label: "Управление", value: "Диммирование / Сценарии" }
      ],
      features: ["Удобное перемещение светильников", "Основной или декоративный свет", "Стильный футуристичный дизайн"]
    }
  ];

  return (
    <section id="services" className="relative bg-brand-black pt-20 pb-24 md:pt-28 md:pb-36 overflow-hidden border-t border-brand-light/5">
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
              <span className="font-mono text-xs text-brand-red uppercase tracking-[0.2em] block">[ НАПРАВЛЕНИЯ ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-brand-light leading-[1.1] uppercase tracking-tight" id="services-title">
              Архитектура <br className="hidden sm:inline" />потолков нового уровня
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-brand-gray text-xs sm:text-sm font-mono uppercase tracking-widest leading-relaxed border-l border-brand-red/40 pl-4 py-1" id="services-subtitle">
              Премиальные конструктивные решения и световой дизайн с безукоризненным качеством исполнения.
            </p>
          </div>
        </div>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Menu Selector */}
          <div className="col-span-5 space-y-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative p-6 cursor-pointer border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
                    isActive 
                      ? 'bg-brand-card border-brand-light/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.5)]' 
                      : 'bg-transparent border-transparent hover:border-brand-light/5 hover:bg-brand-card/20'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeServiceIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-red"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start gap-5">
                    {/* Index Number */}
                    <span className={`font-mono text-xs tracking-widest font-bold transition-colors duration-300 ${
                      isActive ? 'text-brand-red' : 'text-brand-gray/60 group-hover:text-brand-red/70'
                    }`}>
                      {service.id}
                    </span>

                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <Icon size={16} className={`transition-colors duration-300 ${
                          isActive ? 'text-brand-red' : 'text-brand-gray group-hover:text-brand-light'
                        }`} />
                        <h3 className={`font-display text-lg uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-white font-medium' : 'text-brand-gray/80 group-hover:text-brand-light'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className={`text-xs leading-relaxed transition-all duration-500 ${
                        isActive ? 'text-brand-gray opacity-100' : 'text-brand-gray/40 group-hover:text-brand-gray/60'
                      }`}>
                        {service.subtitle}
                      </p>
                    </div>

                    <ChevronRight size={16} className={`mt-1 transition-all duration-300 transform ${
                      isActive ? 'text-brand-red translate-x-1' : 'text-brand-gray/30 group-hover:text-brand-light/50 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Display Panel */}
          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-brand-card border border-brand-light/10 p-8 xl:p-12 relative overflow-hidden flex flex-col justify-between min-h-[500px] shadow-2xl"
              >
                {/* Tech Grid Background Deco */}
                <div className="absolute top-0 right-0 w-48 h-48 border-b border-l border-brand-light/5 pointer-events-none font-mono text-[8px] text-brand-gray/20 p-2 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <span>[ DECO_GRID_01 ]</span>
                    <span>SEC_0{activeIndex + 1}</span>
                  </div>
                  <div className="text-right">A-CLASS STUDIO</div>
                </div>

                <div>
                  {/* Header info */}
                  <div className="space-y-3 mb-8">
                    <span className="font-mono text-[10px] text-brand-red uppercase tracking-[0.2em] block">
                      // {services[activeIndex].subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-light font-medium">
                      {services[activeIndex].title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed max-w-xl">
                      {services[activeIndex].description}
                    </p>
                  </div>

                  {/* Technical Specifications Block */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-brand-light/5 mb-8">
                    {services[activeIndex].specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-brand-gray/60 block">
                          {spec.label}
                        </span>
                        <span className="font-mono text-xs sm:text-sm text-brand-light font-medium block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* High Quality Features List */}
                  <div className="space-y-2.5 pt-6 border-t border-brand-light/5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-brand-gray/60 block mb-3">
                      Особенности технологии:
                    </span>
                    {services[activeIndex].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs text-brand-light">
                        <ShieldCheck size={14} className="text-brand-red shrink-0" />
                        <span className="font-mono uppercase tracking-wide text-[10px] text-brand-gray-light">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary CTA Red Button */}
                <div className="mt-10 pt-6 border-t border-brand-light/5">
                  <button
                    onClick={() => onOpenCalculator(services[activeIndex].title)}
                    className="group bg-brand-red hover:bg-brand-red/90 text-white font-mono text-xs uppercase tracking-[0.15em] py-4 px-8 transition-all duration-300 font-medium flex items-center justify-center gap-3 cursor-pointer shadow-lg shadow-brand-red/10"
                  >
                    Запустить расчет сметы
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / Tablet Responsive Showcase */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-card border border-brand-light/10 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Mobile header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className="text-brand-red" />
                        <span className="font-mono text-[9px] text-brand-red uppercase tracking-widest">// {service.id}</span>
                      </div>
                      <h3 className="font-display text-lg uppercase tracking-tight text-white font-medium">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Mobile Tech Specs */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-brand-light/5 mb-6">
                    {service.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-brand-gray/60 block">
                          {spec.label}
                        </span>
                        <span className="font-mono text-[10px] text-brand-light block leading-snug">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenCalculator(service.title)}
                  className="w-full bg-brand-red hover:bg-brand-red/95 text-white font-mono text-[10px] uppercase tracking-widest py-3.5 px-4 transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  Узнать стоимость
                  <ArrowRight size={12} />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

