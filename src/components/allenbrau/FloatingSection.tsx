'use client';

import React from 'react';

export function FloatingSection() {
  return (
    <section className="relative bg-white text-black py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Full-width artistic showcase container */}
        <div className="relative w-full rounded-3xl bg-[#0d0d0d] text-white p-8 sm:p-16 lg:p-24 overflow-hidden min-h-[640px] flex flex-col justify-between">
          
          {/* Background overlay texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
            <img
              src="/images/allenbrau/float-bg.webp"
              alt="Texture backdrop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top text block */}
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-suisse block">
              Философия бренда
            </span>
            <h2 className="title-100 leading-[1.05]">
              <span className="title-100i font-serif italic text-white/95">Реализуйте</span> <br />
              свои желания
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 font-suisse leading-relaxed pt-2">
              Создавайте индивидуальные интерьеры с характером в короткие сроки
            </p>
          </div>

          {/* Central 3D Render & Floating Marble Element */}
          <div className="relative z-10 w-full flex items-center justify-center py-8">
            <div className="relative max-w-xl w-full flex justify-center">
              <img
                src="/images/allenbrau/Model_two_White01-min.jpg"
                alt="Allen Brau Collection Piece"
                className="w-full max-h-[420px] object-contain drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Marble Accents */}
              <div className="absolute -bottom-10 -right-6 w-32 sm:w-44 pointer-events-none drop-shadow-2xl animate-pulse">
                <img
                  src="/images/allenbrau/float-marble.webp"
                  alt="Marble mineral accent"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 font-suisse uppercase tracking-widest">
            <span>Allen Brau Design Excellence</span>
            <span>Made for bespoke living spaces</span>
          </div>

        </div>

      </div>
    </section>
  );
}
