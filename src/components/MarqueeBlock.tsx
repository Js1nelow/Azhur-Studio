import React from 'react';

export function MarqueeBlock() {
  const items = [
    "МОНТАЖ БЕЗ ПЫЛИ ЗА 1 ДЕНЬ",
    "ВЗРЫВОБЕЗОПАСНЫЕ ПОЛИМЕРНЫЕ БАЛЛОНЫ",
    "ФИКСИРОВАННАЯ СМЕТА В ДОГОВОРЕ",
    "БЕСПЛАТНЫЙ ВЫЕЗД ЗАМЕРЩИКА С ОБРАЗЦАМИ",
    "ПОЛОТНА MSD PREMIUM И BAUF (КЛАСС А+)",
    "ГАРАНТИЯ 10 ЛЕТ ПО ДОГОВОРУ",
    "ОПЛАТА ПОСЛЕ ПРИЁМКИ РАБОТЫ",
    "ОПЫТ РАБОТЫ БОЛЕЕ 17 ЛЕТ",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-brand-red/90 text-white py-3.5 border-y border-brand-red select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-suisse text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
        ))}
      </div>
    </div>
  );
}
