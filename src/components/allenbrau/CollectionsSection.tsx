'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight, SlidersHorizontal } from 'lucide-react';

export function CollectionsSection() {
  const [activeTab, setActiveTab] = useState('activity');

  const collections = [
    { id: 'activity', name: 'Activity', desc: 'Продуманные формы, современный дизайн и максимальная функциональность.' },
    { id: 'glority', name: 'Glority', desc: 'Утонченные грани, эстетика минимализма и непревзойденный комфорт.' },
    { id: 'eclipse', name: 'Eclipse', desc: 'Глубокие матовые оттенки и мягкая геометрия премиального интерьера.' },
    { id: 'fantasy', name: 'Fantasy', desc: 'Смелые архитектурные решения и эксклюзивная фурнитура.' },
    { id: 'gravity', name: 'Gravity', desc: 'Массивные силуэты и монументальная надежность немецких компонентов.' },
  ];

  const products = [
    {
      category: 'Смесители для раковин',
      name: 'Allen Brau Activity One',
      code: 'Art. 4.1001.21',
      image: '/images/allenbrau/Смесители_для_раковин_1040x1040.jpg',
      finish: 'Хром / Матовый черный / Брашированное золото'
    },
    {
      category: 'Встраиваемые смесители',
      name: 'Allen Brau Activity Box',
      code: 'Art. 4.1002.34',
      image: '/images/allenbrau/Смесители_для_раковины_встраиваемые_1040x1040.jpg',
      finish: 'Скрытый монтаж, керамический картридж Sedal'
    },
    {
      category: 'Душевые системы',
      name: 'Allen Brau Thermostat Pro',
      code: 'Art. 5.2001.10',
      image: '/images/allenbrau/Душевые_системы_с_термостатом_1920x760.jpg',
      finish: 'Термостат Vernet (Франция), тропический душ 300 мм'
    },
    {
      category: 'Ванны из литьевого камня',
      name: 'Allen Brau Eclipse Stand',
      code: 'Art. 7.5001.01',
      image: '/images/allenbrau/Свободностоящие_ванны_1040x1040.jpg',
      finish: 'Каменный композит, бархатистая матовая текстура'
    },
    {
      category: 'Подвесная мебель',
      name: 'Тумба с раковиной Glority 100',
      code: 'Art. 8.1003.55',
      image: '/images/allenbrau/Подвесные_тумбы_1040x1040.jpg',
      finish: 'Влагостойкий МДФ, фурнитура Blum с доводчиками'
    },
    {
      category: 'Санитарная керамика',
      name: 'Унитаз подвесной Rimless',
      code: 'Art. 2.1001.00',
      image: '/images/allenbrau/Унитазы_подвесные_1040x1040.jpg',
      finish: 'Безободковый смыв Tornado, сиденье микролифт Duroplast'
    }
  ];

  return (
    <section id="collections" className="bg-white text-black py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-suisse block mb-3">
              Каталог продукции
            </span>
            <h2 className="title-100 text-black">
              Коллекции <span className="title-100i text-gray-500">Allen Brau</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-md font-suisse leading-relaxed">
            Каждая серия сантехники создана как единый законченный ансамбль для ванной комнаты премиум-класса.
          </p>
        </div>

        {/* Tab Buttons Pills (Allen Brau signature) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {collections.map((col) => (
            <button
              key={col.id}
              onClick={() => setActiveTab(col.id)}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.18em] font-suisse transition-all cursor-pointer whitespace-nowrap ${
                activeTab === col.id
                  ? 'bg-black text-white font-medium shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {col.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 border border-gray-200/70 p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-gray-300 transition-all duration-300"
            >
              {/* Image box */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white mb-6 p-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-suisse tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                  {item.category}
                </span>
              </div>

              {/* Specs and title */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>{item.code}</span>
                  <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={13} />
                  </div>
                </div>

                <h3 className="text-lg font-suisse font-normal text-black group-hover:text-gray-600 transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500 font-suisse leading-relaxed">
                  {item.finish}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
