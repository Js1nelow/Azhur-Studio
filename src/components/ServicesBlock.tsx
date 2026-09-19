import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, Layers, Sliders, Cpu, Eye, Sun } from 'lucide-react';

interface ServicesBlockProps {
  onOpenCalculator: (service: string) => void;
}

export function ServicesBlock({ onOpenCalculator }: ServicesBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const collections = [
    {
      id: "matte",
      num: "01",
      name: "Матовые и сатиновые",
      tag: "Базовый комфорт",
      price: "от 650 ₽/м²",
      title: "Классические бесшовные потолки",
      description: "Идеально ровная матовая или сатиновая поверхность, неотличимая от качественной штукатурки. Никаких трещин от усадки дома, идеальная белизна на десятилетия.",
      image: "/new_image_azhur/nezhinskaya/1.webp",
      specs: [
        { label: "Материал полотна", value: "MSD Premium / Bauf (Германия)" },
        { label: "Экологичность", value: "Класс А+ (без запаха и токсинов)" },
        { label: "Срок монтажа", value: "1 рабочий день" },
        { label: "Защита от затопления", value: "Выдерживает до 100 л/м²" }
      ],
      features: [
        "Бесшовное полотно шириной до 5.5 метров",
        "Не желтеет и не впитывает кухонные запахи",
        "Быстрый чистый монтаж перфоратором с пылесосом"
      ]
    },
    {
      id: "shadow",
      num: "02",
      name: "Теневой профиль EuroKRAAB",
      tag: "Хит 2026 года",
      price: "от 1 200 ₽/м.п.",
      title: "Архитектурный теневой зазор",
      description: "Премиальное бесщелевое примыкание потолка к стене. Ровный теневой зазор 7 мм по всему периметру без устаревших резиновых заглушек и плинтусов.",
      image: "/new_image_azhur/nezhinskaya/2.webp",
      specs: [
        { label: "Профиль системы", value: "Оригинальный EuroKRAAB 2.0" },
        { label: "Ширина зазора", value: "Ровно 7 мм по периметру" },
        { label: "Цвет профиля", value: "Глубокий черный муар" },
        { label: "Совместимость", value: "Краска, обои, рейки, керамогранит" }
      ],
      features: [
        "Эффект парящих стен и идеальной геометрии",
        "Удобно переклеивать обои без демонтажа потолка",
        "Выбор современных дизайнеров интерьера"
      ]
    },
    {
      id: "curtain",
      num: "03",
      name: "Скрытые карнизы для штор",
      tag: "Уют и эстетика",
      price: "от 1 800 ₽/м.п.",
      title: "Ниши для штор со скрытой интеграцией",
      description: "Шторы элегантно ниспадают прямо из плоскости потолка. Возможность установки скрытой теплой LED-подсветки и автоматических электрокарнизов с Алисой.",
      image: "/new_image_azhur/nezhinskaya/3.webp",
      specs: [
        { label: "Конструкция", value: "Встраиваемый профиль Lumfer / ПК14" },
        { label: "Управление", value: "Ручное или привод (Tuya/Aqara/Алиса)" },
        { label: "Опуск потолка", value: "Минимальный (от 4 см)" },
        { label: "Ход бегунков", value: "Бесшумный на колесиках" }
      ],
      features: [
        "Никаких видимых крючков, труб и креплений",
        "Возможность мягкой контурной подсветки штор",
        "Идеальное сопряжение с теневым профилем"
      ]
    },
    {
      id: "lines",
      num: "04",
      name: "Световые линии и треки",
      tag: "Современный свет",
      price: "от 2 200 ₽/м.п.",
      title: "Встраиваемое линейное и магнитное освещение",
      description: "Современная замена громоздким люстрам. Магнитные шинопроводы 48V и световые линии формируют основной свет или сценарии зонирования комнаты.",
      image: "/new_image_azhur/nezhinskaya/4.webp",
      specs: [
        { label: "Безопасность", value: "Низковольтная система 48V" },
        { label: "Светодиоды", value: "High CRI > 90 (естественный спектр)" },
        { label: "Ширина линий", value: "15 мм / 30 мм / 50 мм" },
        { label: "Управление", value: "Диммирование, настенное или со смартфона" }
      ],
      features: [
        "Светильники на магнитах легко двигать руками",
        "Идеальное равномерное рассеивание без мерцания",
        "Экономия электроэнергии в 5-7 раз по сравнению с лампами"
      ]
    },
    {
      id: "floating",
      num: "05",
      name: "Парящие потолки",
      tag: "Атмосферный свет",
      price: "от 1 100 ₽/м.п.",
      title: "Контурная подсветка периметра комнаты",
      description: "Потолок визуально отделяется от стен мягким ореолом света. Создает ощущение визуального расширения пространства и расслабляющую вечернюю атмосферу.",
      image: "/new_image_azhur/nezhinskaya/5.webp",
      specs: [
        { label: "Профиль системы", value: "Парящий профиль Flexy Fly Max" },
        { label: "Тип ленты", value: "LED лента 120-240 диодов/метр" },
        { label: "Температура света", value: "Теплый (3000K) / Нейтральный (4000K)" },
        { label: "Рассеиватель", value: "Матовый силиконовый экран" }
      ],
      features: [
        "Зрительно поднимает высоту комнаты на 10-15%",
        "Идеальный ночник для спальни или коридора",
        "Скрытый источник света — диоды не слепят глаза"
      ]
    }
  ];

  const current = collections[activeIndex];

  return (
    <section id="catalog" className="relative bg-brand-snow text-[#111113] py-24 md:py-32 border-t border-black/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header styled like Allen Brau */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="font-suisse text-xs uppercase tracking-[0.2em] text-brand-red font-medium">
                Каталог решений 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal leading-[1.08] tracking-tight text-[#111113]">
              <span className="font-serif-italic italic">Качественные</span> потолки <br />
              под любой интерьер и задачу
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-600 max-w-md font-suisse leading-relaxed border-l-2 border-brand-red/30 pl-4 py-1">
            Работаем только с сертифицированными полотнами. От классических белых потолков до сложных дизайнерских систем со светом.
          </p>
        </div>

        {/* Tab Pills (Allen Brau collection buttons style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {collections.map((col, idx) => (
            <button
              key={col.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-suisse tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeIndex === idx
                  ? 'bg-brand-black text-white shadow-lg shadow-black/10'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className={activeIndex === idx ? 'text-brand-red font-semibold' : 'text-gray-400'}>
                {col.num}
              </span>
              <span>{col.name}</span>
            </button>
          ))}
        </div>

        {/* Active Collection Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left: Media Preview */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[320px] lg:min-h-[520px] bg-gray-100 overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Badges on image */}
              <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-black/90 text-white backdrop-blur-md rounded-full text-xs font-suisse font-medium">
                  {current.tag}
                </span>
                <span className="px-3 py-1 bg-brand-red text-white rounded-full text-xs font-suisse font-bold">
                  {current.price}
                </span>
              </div>
            </div>

            {/* Right: Technical Details & CTA */}
            <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="font-suisse text-xs text-brand-red uppercase tracking-wider font-semibold">
                    {current.name}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    КОД РЕШЕНИЯ // {current.num}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-suisse font-normal text-[#111113] tracking-tight mb-4">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 font-suisse leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Tech Specs Table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-y border-gray-100 mb-6">
                  {current.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="space-y-0.5">
                      <div className="text-[11px] font-suisse uppercase tracking-wider text-gray-400">
                        {spec.label}
                      </div>
                      <div className="text-xs sm:text-sm font-suisse font-medium text-gray-900">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullet Features */}
                <div className="space-y-2.5 mb-8">
                  {current.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-suisse">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={2.5} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenCalculator(current.name)}
                  className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white font-suisse text-sm font-medium tracking-wide px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand-red/20"
                >
                  <span>Рассчитать стоимость помещения</span>
                  <ArrowRight size={16} />
                </button>
                
                <div className="text-xs text-gray-500 font-suisse text-center sm:text-left">
                  Цена под ключ: <strong>{current.price}</strong>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
