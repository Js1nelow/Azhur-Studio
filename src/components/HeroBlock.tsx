import { motion } from 'motion/react';
import { Shield, Sparkles, FileText, CheckCircle2, ChevronRight, Download, Flame } from 'lucide-react';
import { useTransition } from '../contexts/TransitionContext';

interface HeroBlockProps {
  onOpenCalculator: (service?: string) => void;
  onOpenCatalog?: () => void;
}

export function HeroBlock({ onOpenCalculator, onOpenCatalog }: HeroBlockProps) {
  const { navigateWithTransition } = useTransition();

  const trustBadges = [
    {
      title: "Чистый монтаж без пыли",
      desc: "Работаем с перфораторами с пылеудалением",
      icon: <Sparkles className="text-brand-red w-5 h-5 shrink-0" />
    },
    {
      title: "Безопасные баллоны",
      desc: "100% безопасные композитные полимерные баллоны",
      icon: <Shield className="text-brand-red w-5 h-5 shrink-0" />
    },
    {
      title: "Честная смета без переплат",
      desc: "Цена фиксируется в договоре и не растет",
      icon: <FileText className="text-brand-red w-5 h-5 shrink-0" />
    },
    {
      title: "Эко-полотна без запаха",
      desc: "MSD Premium, Bauf, Teqtum (класс А+)",
      icon: <CheckCircle2 className="text-brand-red w-5 h-5 shrink-0" />
    }
  ];

  return (
    <section id="hero" className="relative min-h-[92svh] flex items-center overflow-hidden bg-brand-black pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-brand-red/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
        
        {/* Architectural subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 w-full">
        {/* Promotional Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 mb-6 backdrop-blur-sm"
        >
          <Flame size={14} className="text-brand-red animate-pulse" />
          <span className="font-suisse text-xs text-brand-light font-medium tracking-wide">
            Акция месяца: комплект светильников или карниз в подарок к заказу
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Title inspired by Allen Brau typography (Grotesk + Italic Serif contrast) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-suisse font-normal leading-[1.05] tracking-tight text-white mb-6 text-balance"
              id="hero-title"
            >
              <span className="font-serif-italic italic text-white/90">Идеальные</span> натяжные потолки. <br />
              <span className="font-serif-italic italic text-brand-red">Честная</span> цена от 650 ₽/м²
            </motion.h1>

            {/* Subtitle with transparent commercial proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-suisse"
              id="hero-subtitle"
            >
              Монтаж натяжных потолков любой сложности и современного трекового освещения в Москве и МО за 1 день. 
              Без пыли, с гарантией 10 лет. Бесплатный замер с каталогом образцов уже сегодня.
            </motion.p>

            {/* Mobile Engineer Portrait (Screens < 1024px) */}
            <div className="block lg:hidden mb-8">
              <div className="relative w-full max-w-[340px] mx-auto aspect-[3/4] border border-white/10 bg-brand-card p-2 shadow-2xl overflow-hidden group">
                <img
                  src="/azhur/photo/hero.webp"
                  alt="Главный инженер Олег"
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 backdrop-blur-md border border-white/10 p-3 font-suisse text-left">
                  <div className="text-sm font-medium text-white">
                    Олег — ведущий инженер
                  </div>
                  <div className="text-xs text-brand-gray mt-0.5">
                    17 лет опыта • Личный контроль смет и монтажа
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Trust Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mb-8" id="hero-trust-badges">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                  className="flex items-start gap-3 p-3.5 bg-brand-card/60 border border-white/5 hover:border-white/15 transition-all"
                >
                  <div className="p-1.5 bg-brand-black/80 rounded-md border border-white/5">
                    {badge.icon}
                  </div>
                  <div>
                    <div className="font-suisse text-xs sm:text-sm font-medium text-white">
                      {badge.title}
                    </div>
                    <div className="font-suisse text-[11px] text-brand-gray leading-snug mt-0.5">
                      {badge.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center"
            >
              <button
                onClick={() => onOpenCalculator('Натяжные потолки')}
                className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white font-suisse text-sm font-medium tracking-wider px-8 py-4 transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-brand-red/20"
                id="hero-cta-btn"
              >
                <span>Рассчитать стоимость со скидкой 15%</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#catalog-download"
                className="w-full sm:w-auto border border-white/20 hover:border-white/40 hover:bg-white/5 text-brand-light font-suisse text-sm font-normal tracking-wide px-7 py-4 transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Download size={16} className="text-brand-red" />
                <span>Скачать прайс-лист 2026 (PDF)</span>
              </a>
            </motion.div>

            {/* Micro proof line under CTAs */}
            <div className="mt-4 flex items-center gap-2 text-xs text-brand-gray font-suisse">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Бесплатный выезд технолога на замер возможен уже сегодня</span>
            </div>

          </div>

          {/* Right Side: Large Master Card on Desktop */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[3/4] border border-white/10 bg-brand-card p-3 shadow-2xl overflow-hidden group"
              id="hero-portrait-container"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10 pointer-events-none" />
              
              <img
                src="/azhur/photo/hero.webp"
                alt="Главный инженер Олег"
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95 group-hover:scale-105 group-hover:brightness-100"
              />

              {/* Master details overlay badge */}
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-brand-black/95 backdrop-blur-md border border-white/10 p-4 font-suisse text-left shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-white">
                    Олег
                  </span>
                  <span className="text-[11px] px-2 py-0.5 bg-brand-red/20 text-brand-red font-medium rounded">
                    Главный инженер
                  </span>
                </div>
                <p className="text-xs text-brand-gray mt-1.5 leading-relaxed">
                  17 лет опыта в натяжных потолках. Лично отвечает за точность сметы и идеальный результат без переделок.
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80">
                  <span>Объектов сдано: <strong>2 400+</strong></span>
                  <span>Гарантия: <strong>10 лет</strong></span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
