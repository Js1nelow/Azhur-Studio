'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export function ReasonsSection() {
  const [activeReason, setActiveReason] = useState<string | null>("01");

  const reasons = [
    {
      num: "01",
      title: "Немецкие стандарты точного инжиниринга",
      desc: "Идеальная геометрия каждого узла, строжайший контроль допусков и посадочных мест. Продукция разрабатывается в соответствии с директивами DIN EN."
    },
    {
      num: "02",
      title: "Материалы высшей пробы",
      desc: "Смесители отливаются из первичной пищевой латуни марки CW617N с пониженным содержанием свинца. Ванны изготавливаются из литьевого акрила и натуральной мраморной крошки."
    },
    {
      num: "03",
      title: "10 лет безусловной гарантии",
      desc: "Мы уверены в качестве сплавов и керамики. На корпуса смесителей и чаши ванн действует 10-летняя заводская гарантия с авторизованным сервисным обслуживанием."
    },
    {
      num: "04",
      title: "Европейские компоненты премиум-класса",
      desc: "Внутри смесителей работают картриджи Sedal (Испания) с ресурсом более 500 000 циклов, аэраторы Neoperl (Германия) и термоэлементы Vernet (Франция)."
    },
    {
      num: "05",
      title: "Комплексная интерьерная гармония",
      desc: "Вам не нужно подбирать сантехнику разных брендов: смесители, душ, мебель, зеркала и аксессуары идеально сочетаются по цвету покрытия и геометрии."
    },
    {
      num: "06",
      title: "Инновационные покрытия PVD",
      desc: "Технология вакуумного напыления PVD создает молекулярное сцепление цвета с металлом. Покрытия не стираются, устойчивы к царапинам и агрессивной бытовой химии."
    },
    {
      num: "07",
      title: "Складская программа и оперативная логистика",
      desc: "Более 95% позиций каталога поддерживаются в наличии на центральном складе в Москве. Быстрая доставка по всей территории РФ и СНГ."
    }
  ];

  return (
    <section id="reasons" className="bg-black text-white py-24 sm:py-36 px-6 sm:px-10 lg:px-16 border-t border-white/10">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <h2 className="title-160i text-white leading-none mb-2">
            7 причин
          </h2>
          <h3 className="title-100 text-white/90">
            выбрать Allen Brau
          </h3>
        </div>

        {/* Reasons List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {reasons.map((item) => {
            const isOpen = activeReason === item.num;
            return (
              <div key={item.num} className="group">
                <button
                  onClick={() => setActiveReason(isOpen ? null : item.num)}
                  className="w-full py-8 sm:py-10 flex items-start justify-between gap-6 sm:gap-12 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-6 sm:gap-16 flex-1">
                    <span className={`title-100i italic transition-colors duration-300 w-16 sm:w-24 shrink-0 ${
                      isOpen ? 'text-white font-normal' : 'text-white/40 group-hover:text-white'
                    }`}>
                      {item.num}
                    </span>

                    <div className="space-y-3 pr-4 flex-1">
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-suisse font-normal text-white">
                        {item.title}
                      </h4>
                      {isOpen && (
                        <p className="text-sm sm:text-base text-white/60 font-suisse leading-relaxed max-w-3xl pt-2">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:border-white transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
