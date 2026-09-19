'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="bg-white text-black py-28 sm:py-36 overflow-hidden border-b border-gray-100">
      
      {/* Running Marquee Headline: The most important. Your wish. */}
      <div className="w-full overflow-hidden border-b border-gray-200 pb-10 mb-16 sm:mb-24">
        <div className="flex gap-12 w-max animate-[marquee_25s_linear_infinite] select-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="text-4xl sm:text-6xl lg:text-8xl font-normal tracking-tight font-suisse flex items-center gap-6 whitespace-nowrap text-gray-900">
              <span>The most</span>
              <span className="font-serif italic text-gray-500">important.</span>
              <span>Your</span>
              <span className="font-serif italic text-gray-500">wish.</span>
              <span className="text-gray-300 text-3xl sm:text-5xl">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Yakobs Peters Profile */}
          <div className="lg:col-span-6 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-200/80 flex flex-col justify-between min-h-[540px]">
            
            <div className="flex items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-medium font-suisse text-black">
                  Якобс Петерс
                </h3>
                <p className="text-sm sm:text-base text-gray-500 font-suisse mt-1">
                  Генеральный директор ImpEx Allen Brau DE
                </p>
              </div>

              {/* ImpEx Quality Stamp */}
              <div className="w-20 sm:w-24 aspect-square shrink-0">
                <img
                  src="/images/allenbrau/jakobs-stamp.webp"
                  alt="ImpEx Germany seal"
                  className="w-full h-full object-contain filter grayscale opacity-80"
                />
              </div>
            </div>

            {/* Portrait Image */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-200">
              <img
                src="/images/allenbrau/jakobs-photo.webp"
                alt="Якобс Петерс"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
            </div>

          </div>

          {/* Right Column: Brand Philosophy & Story */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10 lg:pt-4">
            
            <div className="space-y-6 text-xl sm:text-2xl text-gray-700 font-suisse font-light leading-relaxed">
              <p>
                Наша продукция международного дизайн-бюро <strong className="text-black font-normal">ImpEx International</strong> основана в 1993 году в Германии.
              </p>
              <p>
                В 2021 году немецкий бренд премиальной сантехники был официально представлен на российском рынке.
              </p>
              <p className="text-base sm:text-xl text-gray-500 leading-relaxed">
                Производство товаров осуществляется по эксклюзивным контрактам и распределено между ведущими фабриками Турции, Китая и России, проводится в строгом соблюдении немецких стандартов качества и под непрерывным контролем специальной службы инспекции.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <a
                href="/about_company/"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black font-medium border-b border-black pb-2 hover:text-gray-600 hover:border-gray-600 transition-all group"
              >
                <span>Больше о компании Allen Brau</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
