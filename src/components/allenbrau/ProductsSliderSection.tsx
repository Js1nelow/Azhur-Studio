'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface CategoryCard {
  title: string;
  image: string;
  link: string;
  items: {
    name: string;
    image: string;
  }[];
  moreCount?: number;
}

export function ProductsSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories: CategoryCard[] = [
    {
      title: 'Керамика',
      image: '/images/allenbrau/svwrzk6pdppkbup4co731visgumbhxpf.jpg',
      link: '/catalog/keramika/',
      items: [
        { name: 'Унитазы подвесные', image: '/images/allenbrau/Унитазы_подвесные_1040x1040.jpg' },
        { name: 'Унитазы с бачком', image: '/images/allenbrau/Унитазы_напольные_с_бачком_1040x1040.jpg' },
        { name: 'Унитазы приставные', image: '/images/allenbrau/Унитазы_приставные_1040x1040.jpg' },
      ],
      moreCount: 9,
    },
    {
      title: 'Инсталляции',
      image: '/images/allenbrau/1111.jpg',
      link: '/catalog/installyatsii/',
      items: [
        { name: 'Для унитазов', image: '/images/allenbrau/Инсталляции_для_унитазов_1040x1040.jpg' },
        { name: 'Для биде', image: '/images/allenbrau/Инсталляции_для_биде_1040x1040.jpg' },
        { name: 'Кнопки смыва', image: '/images/allenbrau/Кнопки_смыва_1040x1040.jpg' },
      ],
      moreCount: 2,
    },
    {
      title: 'Душевые системы и поддоны',
      image: '/images/allenbrau/Душевые_поддоны_1920x760.jpg',
      link: '/catalog/dushevye-poddony-i-ograzhdeniya/',
      items: [
        { name: 'Душевые поддоны', image: '/images/allenbrau/Душевые_поддоны_1920x760.jpg' },
        { name: 'Душевые системы', image: '/images/allenbrau/Душевые_системы_с_термостатом_1920x760.jpg' },
        { name: 'Душевые лейки', image: '/images/allenbrau/Душевые_лейки_1040x1040.jpg' },
      ],
      moreCount: 3,
    },
    {
      title: 'Смесители',
      image: '/images/allenbrau/Смесители_для_раковин_1040x1040.jpg',
      link: '/catalog/smesiteli/',
      items: [
        { name: 'Для раковины', image: '/images/allenbrau/Смесители_для_раковин_1040x1040.jpg' },
        { name: 'Встраиваемые', image: '/images/allenbrau/Смесители_для_раковины_встраиваемые_1040x1040.jpg' },
        { name: 'Для ванны и душа', image: '/images/allenbrau/Смесители_для_ванны_и_душа_1040x1040.jpg' },
      ],
      moreCount: 6,
    },
    {
      title: 'Ванны',
      image: '/images/allenbrau/Свободностоящие_ванны_1040x1040.jpg',
      link: '/catalog/vanny/',
      items: [
        { name: 'Свободностоящие', image: '/images/allenbrau/Свободностоящие_ванны_1040x1040.jpg' },
        { name: 'Угловые ванны', image: '/images/allenbrau/Ванны_угловые_1040x1040.jpg' },
        { name: 'Пристенные', image: '/images/allenbrau/Пристенные_ванны_1040x1040.jpg' },
      ],
      moreCount: 4,
    },
    {
      title: 'Мебель для ванной',
      image: '/images/allenbrau/Напольные_тумбы_1040x1040.jpg',
      link: '/catalog/mebel-dlya-vannoy/',
      items: [
        { name: 'Напольные тумбы', image: '/images/allenbrau/Напольные_тумбы_1040x1040.jpg' },
        { name: 'Пеналы', image: '/images/allenbrau/Пеналы_1040x1040.jpg' },
      ],
      moreCount: 5,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#f7f7f7] text-black py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-gray-200">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Top bar with typography and slider buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-suisse block mb-3">
              Ассортимент Allen Brau
            </span>
            <h2 className="title-100i font-serif italic text-black leading-tight">
              Продукты
            </h2>
            <p className="text-lg sm:text-2xl text-gray-600 font-suisse max-w-2xl mt-4 leading-relaxed">
              Всё самое необходимое для обустройства и рационального использования пространства ванной комнаты
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-sm"
              aria-label="Previous products"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer shadow-sm"
              aria-label="Next products"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Scrollable Categories Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
        >
          {categories.map((card, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[320px] sm:w-[420px] lg:w-[480px] bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Category Photo */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-50 mb-6 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Title & Arrow */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl sm:text-3xl font-medium font-suisse text-black">
                  {card.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Sub-item Previews */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {card.items.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      title={sub.name}
                      className="w-12 h-12 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-1 flex items-center justify-center hover:border-black transition-colors"
                    >
                      <img src={sub.image} alt={sub.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
                {card.moreCount && (
                  <span className="text-xs uppercase tracking-wider font-suisse text-gray-400">
                    + ещё {card.moreCount}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
