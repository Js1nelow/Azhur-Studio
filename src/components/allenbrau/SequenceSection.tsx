'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function SequenceSection() {
  return (
    <section className="relative bg-white text-black py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Top Text Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-24">
          <div className="lg:col-span-8 space-y-1">
            <h2 className="title-100 text-black leading-[1.05]">
              Загляните в мир <span className="title-100i font-serif italic text-gray-800">изысканности</span>
            </h2>
            <h2 className="title-100 text-black leading-[1.05]">
              <span className="title-100i font-serif italic text-gray-800">и качества</span> нашей премиальной сантехники
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-xl sm:text-2xl text-gray-600 font-suisse leading-relaxed">
              Узнайте больше, почему <strong className="text-black font-medium">Allen Brau</strong> — ваш идеальный выбор для ванной комнаты.
            </p>
          </div>
        </div>

        {/* Dynamic Centerpiece Showcase */}
        <div className="relative w-full rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100/60 border border-gray-200/80 p-8 sm:p-14 min-h-[560px] flex items-center justify-center overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl pointer-events-none" />

          {/* Central 3D Product Render */}
          <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">
            <img
              src="/images/allenbrau/Model_One_White_135-min.webp"
              alt="Allen Brau Precision Engineering"
              className="w-full max-h-[380px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-suisse mt-4">
              Model One White • Немецкое проектирование
            </span>
          </div>

          {/* Floating Detail Photo 1 - Left Top */}
          <div className="hidden md:block absolute top-10 left-10 w-44 lg:w-52 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-white group hover:scale-105 transition-all duration-500">
            <img
              src="/images/allenbrau/1.jpg"
              alt="Engineering detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Detail Photo 2 - Left Bottom */}
          <div className="hidden md:block absolute bottom-10 left-16 w-36 lg:w-44 aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-white group hover:scale-105 transition-all duration-500">
            <img
              src="/images/allenbrau/2.jpg"
              alt="Material detail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Detail Photo 3 - Right Top */}
          <div className="hidden md:block absolute top-12 right-12 w-40 lg:w-48 aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-white group hover:scale-105 transition-all duration-500">
            <img
              src="/images/allenbrau/3.jpg"
              alt="Craftsmanship"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Detail Photo 4 - Right Bottom */}
          <div className="hidden md:block absolute bottom-10 right-14 w-44 lg:w-56 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/80 bg-white group hover:scale-105 transition-all duration-500">
            <img
              src="/images/allenbrau/4.jpg"
              alt="Interior texture"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Floating Marble Sphere Badge */}
          <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 pointer-events-none drop-shadow-lg animate-pulse">
            <img
              src="/images/allenbrau/btbr1j47l95d27py23o33fgypwwttxvj.png"
              alt="Marble emblem"
              className="w-full h-full object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
