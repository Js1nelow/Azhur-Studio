import { motion } from 'motion/react';

export function AboutBlock() {
  const stats = [
    { value: "17+", label: "лет непрерывного опыта" },
    { value: "2 400+", label: "сданных объектов в Москве и МО" },
    { value: "10 лет", label: "гарантия по договору" }
  ];

  return (
    <section id="about" className="relative bg-brand-black py-24 md:py-32 overflow-hidden border-t border-white/5 text-white">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Олег Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start group">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden bg-brand-card border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent z-10" />
              <img
                src="/azhur/photo/o_nas.webp"
                alt="Олег — основатель и ведущий инженер Azhur Studio"
                className="w-full h-full object-cover transition-all duration-700 brightness-95 group-hover:scale-105"
              />
              
              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="font-suisse text-xl font-medium text-white leading-none">
                  Олег
                </p>
                <p className="font-suisse text-xs text-brand-red uppercase tracking-wider mt-1 font-semibold">
                  Основатель и ведущий технолог Azhur Studio
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red" />
                <span className="font-suisse text-xs text-brand-red uppercase tracking-[0.2em] font-medium">
                  О философии компании
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal leading-[1.08] tracking-tight text-white">
                <span className="font-serif-italic italic text-brand-red">Мы не просто</span> натягиваем полотно — <br className="hidden sm:inline" />
                мы создаём уют и тишину
              </h2>
              
              <p className="text-brand-gray text-base md:text-lg leading-relaxed font-suisse">
                Azhur Studio начиналась более 17 лет назад с одной простой идеи: делать установку потолков честно, быстро и аккуратно, как для себя. Без навязывания лишних услуг, без строительной грязи и без изменения сметы в конце дня.
              </p>
              <p className="text-brand-gray text-sm md:text-base leading-relaxed font-suisse">
                Мы сами закупаем оригинальные полотна напрямую у официальных дистрибьюторов (MSD, Bauf, Teqtum), работаем на европейском инструменте с пылеудалением и лично несём гарантийные обязательства по договору.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="font-suisse text-3xl sm:text-4xl font-bold text-brand-red leading-none">
                    {stat.value}
                  </div>
                  <div className="font-suisse text-xs text-brand-gray uppercase tracking-wider leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
