import { motion } from 'motion/react';
import { Shield, FileSpreadsheet, Smile, ChevronRight } from 'lucide-react';

interface HeroBlockProps {
  onOpenCalculator: (service?: string) => void;
}

export function HeroBlock({ onOpenCalculator }: HeroBlockProps) {
  // 3 cards required in the prompt:
  const cards = [
    {
      icon: <Shield className="text-brand-red w-6 h-6 stroke-[1.25]" />,
      text: "Результат без сюрпризов — гарантия 10 лет",
    },
    {
      icon: <FileSpreadsheet className="text-brand-red w-6 h-6 stroke-[1.25]" />,
      text: "Прозрачная смета — цена не меняется",
    },
    {
      icon: <Smile className="text-brand-red w-6 h-6 stroke-[1.25]" />,
      text: "Спокойствие на каждом этапе",
    },
  ];

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-black pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-brand-light/5 blur-[100px] pointer-events-none" />
        
        {/* Architectural grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-medium leading-[1.05] tracking-tighter text-brand-light mb-6 uppercase text-balance"
              id="hero-title"
            >
              Ажур Студия — <br className="hidden sm:inline" />
              потолки и свет <span className="text-brand-red">А-класса</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gray text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 md:mb-12"
              id="hero-subtitle"
            >
              Натяжные потолки и карнизные решения любой сложности — без случайных решений, в Москве и МО
            </motion.p>

            {/* Mobile-Only Portrait (Shown under subtitle on screens < 768px) */}
            <div className="block md:hidden mb-8 relative flex justify-center items-center w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[320px] aspect-[3/4] border border-brand-light/10 bg-brand-card p-3 shadow-2xl overflow-hidden group"
              >
                {/* Inner glow and frames */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-80" />
                <div className="absolute inset-1.5 border border-brand-light/5 z-20 pointer-events-none" />
                
                <img
                  src="/azhur/photo/hero.webp"
                  alt="Главный инженер Олег"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 filter brightness-95 group-hover:brightness-100"
                />

                {/* Master details overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 z-30 bg-brand-black/95 backdrop-blur-md border border-brand-light/10 p-3 font-mono text-left">
                  <div className="text-xs uppercase font-display text-white tracking-tight">
                    Олег
                  </div>
                  <div className="text-[8px] text-brand-gray mt-0.5 uppercase">
                    12 лет опыта • Контроль монтажа и смет
                  </div>
                </div>

                {/* Tech corner accents */}
                <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-brand-light/30 z-20" />
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-brand-light/30 z-20" />
                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-brand-light/30 z-20" />
                <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-brand-light/30 z-20" />
              </motion.div>
            </div>

            {/* Three Cards with Icons */}
            <div className="space-y-4 max-w-xl mb-10" id="hero-feature-cards">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 border border-brand-light/10 bg-brand-card/50 p-4 hover:border-brand-light/20 transition-all group"
                >
                  <div className="flex-shrink-0 p-2 bg-brand-black group-hover:bg-brand-red/10 transition-colors border border-brand-light/5">
                    {card.icon}
                  </div>
                  <span className="font-mono text-xs md:text-sm uppercase tracking-wide text-brand-light">
                    {card.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Interactive Call-To-Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <button
                onClick={() => onOpenCalculator('Натяжные потолки')}
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/90 text-white font-mono text-xs uppercase tracking-widest px-8 py-5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                id="hero-cta-btn"
              >
                Рассчитать проект онлайн
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Portrait Placeholder (or beautifully stylized illustration of engineer) */}
          <div className="hidden md:flex lg:col-span-5 relative justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[3/4] border border-brand-light/10 bg-brand-card p-4 shadow-2xl overflow-hidden group"
              id="hero-portrait-container"
            >
              {/* Inner glow and frames */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10 opacity-80" />
              <div className="absolute inset-2 border border-brand-light/5 z-20 pointer-events-none" />
              
              <img
                src="/azhur/photo/hero.webp"
                alt="Главный инженер Олег"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 filter brightness-90 group-hover:brightness-100 group-hover:scale-105"
              />

              {/* Master details overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 z-30 bg-brand-black/90 backdrop-blur-md border border-brand-light/10 p-4 font-mono text-left">
                <div className="text-xs uppercase font-display text-brand-light tracking-tight">
                  Олег
                </div>
                <div className="text-[9px] text-brand-gray mt-1 uppercase">
                  12 лет опыта • Контроль монтажа и смет
                </div>
              </div>

              {/* Tech corner accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-brand-light/30 z-20" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-brand-light/30 z-20" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-brand-light/30 z-20" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-brand-light/30 z-20" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
