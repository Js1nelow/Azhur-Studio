'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Download, FileText, Check } from 'lucide-react';

export function DocumentsSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="relative bg-black text-white py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-white/10">
      
      {/* Parallax background artwork */}
      <div className="absolute inset-0 z-0 opacity-25 filter brightness-75">
        <img
          src="/images/allenbrau/catalog-parallax.webp"
          alt="Catalogs backdrop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Title & Texts */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-suisse block">
              Материалы для скачивания
            </span>
            <h2 className="title-100 text-white leading-[1.05]">
              <span className="title-100i font-serif italic text-white/90">Каталоги</span> <br />
              и прайс-листы
            </h2>
            <p className="text-xl sm:text-2xl text-white/70 font-suisse max-w-xl leading-relaxed pt-2">
              Наши актуальные каталоги и прайс-листы всегда у вас под рукой, чтобы вы могли их скачать и распечатать.
            </p>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium font-suisse text-white">Полный каталог Allen Brau 2026</h4>
                <p className="text-xs text-white/50 font-suisse mt-0.5">PDF • 48 МБ • Актуальные коллекции</p>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="w-full py-4 rounded-full bg-white text-black text-xs uppercase tracking-[0.2em] font-medium font-suisse hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
            >
              {downloaded ? (
                <>
                  <Check size={16} className="text-emerald-600" />
                  <span>Каталог скачан</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Скачать каталог и цены</span>
                </>
              )}
            </button>

            <a
              href="/documentation/"
              className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/60 hover:text-white pt-2 border-t border-white/10 transition-colors group"
            >
              <span>Вся документация и сертификаты</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
