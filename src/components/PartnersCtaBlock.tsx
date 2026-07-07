import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';

export function PartnersCtaBlock() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-black border-t border-brand-light/5 overflow-hidden">
      <div className="absolute inset-0 bg-brand-red/5 mix-blend-color-dodge pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-card/50 border border-brand-light/10 rounded-full mb-6">
            <Briefcase className="w-3 h-3 text-brand-red" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gray">Для партнёров и дизайнеров</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white mb-4">
            Надежный партнер для <span className="text-brand-red">ваших проектов</span>
          </h2>
          
          <p className="text-brand-light/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
            Предлагаем специальные условия для дизайнеров интерьера, архитекторов и строительных компаний. 
            Реализуем проекты любой сложности с гарантией качества и соблюдением сроков.
          </p>
          
          <Link
            to="/partners"
            className="inline-flex items-center justify-center gap-2 bg-brand-light hover:bg-white text-brand-black px-8 py-4 font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group"
          >
            Узнать условия
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
