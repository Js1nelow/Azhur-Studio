'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function NewsSection() {
  const articles = [
    {
      date: '17 ноя',
      title: 'Новые душевые трапы Allen Brau Priority с технологией GENOM',
      link: '/blog/news/novye-dushevye-trapy-allen-brau-s-tekhnologiey-genom/',
    },
    {
      date: '10 сен',
      title: 'Сайт Allen Brau получил премию «Сайт дня» от CSS Design Awards',
      link: '/blog/news/sayt-allen-brau-poluchil-premiyu-sayt-dnya-ot-css-design-awards/',
    },
    {
      date: '09 сен',
      title: 'Обновление линейки мебели из коллекции INFINITY',
      link: '/blog/news/obnovlenie-lineyki-mebeli-iz-kollektsii-infinity/',
    },
    {
      date: '01 авг',
      title: 'Коллекция GRAVITY - стильное воплощение современного дизайна и высокого качества',
      link: '/blog/news/kollektsiya-gravity-stilnoe-voploshchenie-sovremennogo-dizayna-i-vysokogo-kachestva/',
    },
    {
      date: '30 апр',
      title: 'Горячая новинка осени 2024 - коллекция смесителей PRIORITY 4.0',
      link: '/blog/news/goryachaya-novinka-oseni-2024-kollektsiya-smesiteley-priority-4-0/',
    },
    {
      date: '28 апр',
      title: 'Коллекция мебели PARIS - изысканная классика в современном исполнении',
      link: '/blog/news/kollektsiya-mebeli-paris-izyskannaya-klassika-v-sovremennom-ispolnenii/',
    },
    {
      date: '08 ноя',
      title: 'Сайт Allen Brau стал трижды призёром Tagline Awards 2024',
      link: '/blog/news/sayt-allen-brau-stal-trizhdy-prizyerom-tagline-awards-2024/',
    },
  ];

  return (
    <section className="bg-white text-black py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-gray-200">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-suisse block mb-3">
              Медиа и события
            </span>
            <h2 className="title-100 text-black">
              Наши <span className="title-100i font-serif italic text-gray-800">новости</span>
            </h2>
          </div>

          <a
            href="/blog/news/"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-black font-medium border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all group"
          >
            <span>Все новости</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-gray-100">
          {articles.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:px-4 hover:bg-gray-50/70 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-baseline gap-6 sm:gap-12">
                <span className="text-sm sm:text-base font-suisse text-gray-400 shrink-0 uppercase tracking-wider w-16">
                  {item.date}
                </span>
                <h3 className="text-lg sm:text-2xl font-normal font-suisse text-black group-hover:text-gray-600 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gray-400 group-hover:text-black transition-colors shrink-0">
                <span className="hidden sm:inline">Подробнее</span>
                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
