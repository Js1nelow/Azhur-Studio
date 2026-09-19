'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function DesignProjectMarqueeSection() {
  const renders = [
    { src: '/images/allenbrau/marquee-1.webp', alt: 'Allen Brau interior concept 1', rotate: 'rotate-1' },
    { src: '/images/allenbrau/marquee-2.webp', alt: 'Allen Brau interior concept 2', rotate: '-rotate-2' },
    { src: '/images/allenbrau/marquee-3.webp', alt: 'Allen Brau interior concept 3', rotate: 'rotate-2' },
    { src: '/images/allenbrau/marquee-4.webp', alt: 'Allen Brau interior concept 4', rotate: '-rotate-1' },
    { src: '/images/allenbrau/marquee-1.webp', alt: 'Allen Brau interior concept 1 repeat', rotate: 'rotate-1' },
    { src: '/images/allenbrau/marquee-2.webp', alt: 'Allen Brau interior concept 2 repeat', rotate: '-rotate-2' },
    { src: '/images/allenbrau/marquee-3.webp', alt: 'Allen Brau interior concept 3 repeat', rotate: 'rotate-2' },
    { src: '/images/allenbrau/marquee-4.webp', alt: 'Allen Brau interior concept 4 repeat', rotate: '-rotate-1' },
  ];

  return (
    <section className="bg-black text-white py-28 sm:py-40 overflow-hidden border-b border-white/10">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-16 sm:mb-24">
        
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-[0.25em] text-white/40 font-suisse block mb-4">
              Архитектурные решения
            </span>
            <h2 className="title-100 text-white leading-[1.05]">
              Закажите <span className="title-100i font-serif italic text-white/90">желаемый</span> дизайн-проект
            </h2>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <p className="text-lg sm:text-2xl text-white/70 font-suisse leading-relaxed">
              Оцените, как будет выглядеть мебель и сантехника в вашем помещении ещё перед началом ремонта.
            </p>
            <a
              href="/design-project/"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white font-medium border-b border-white/40 pb-2 hover:border-white transition-all group"
            >
              <span>Подробнее о дизайн-проекте</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>

      {/* Infinite Marquee Strip */}
      <div className="relative w-full overflow-hidden py-6">
        <div className="flex gap-8 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {renders.map((item, idx) => (
            <div
              key={idx}
              className={`w-[360px] sm:w-[460px] lg:w-[540px] aspect-[16/10] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shrink-0 shadow-2xl transition-transform duration-500 hover:scale-[1.03] ${item.rotate}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover filter brightness-95 hover:brightness-105 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
