import { motion } from 'motion/react';

export function AboutBlock() {
  const stats = [
    { value: "16+", label: "лет опыта" },
    { value: "200+", label: "реализованных объектов" },
    { value: "10 лет", label: "гарантия на материалы" }
  ];

  return (
    <section id="about" className="relative bg-brand-black py-24 md:py-32 overflow-hidden border-t border-brand-light/5">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] rounded-full bg-brand-red/5 blur-[90px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Олег Portrait Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start group">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[420px] aspect-[3/4] rounded-xl overflow-hidden bg-brand-card border border-brand-light/5 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent z-10" />
              <img
                src="/azhur/photo/o_nas.jpg"
                alt="Олег — основатель Ажур Студии"
                className="w-full h-full object-cover md:grayscale md:brightness-90 md:group-hover:grayscale-0 grayscale-0 brightness-100 transition-all duration-1000 ease-out"
              />
              
              {/* Floating aesthetic label overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="font-display text-lg uppercase tracking-tight text-white leading-none">
                  Олег
                </p>
                <p className="font-mono text-[10px] text-brand-red uppercase tracking-widest mt-1">
                  Основатель Ажур Студии
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-brand-red uppercase tracking-widest">[ О НАС ]</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium leading-[1.1] text-brand-light uppercase tracking-tight">
                Мы не просто вешаем потолки
              </h2>
              <p className="text-brand-gray text-base md:text-lg leading-relaxed font-sans max-w-2xl font-light">
                Ажур Студия — это команда которая берёт на себя всё. От первого звонка до сдачи объекта. Мы работаем только с проверенными материалами и не беремся за проекты которые не можем сделать хорошо.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-brand-light/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="space-y-1.5"
                >
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-red leading-none">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-brand-gray uppercase tracking-wider leading-snug">
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
