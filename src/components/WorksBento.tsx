import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Maximize2, Minimize2, ChevronLeft, ChevronRight, Clock, Banknote, Ruler } from 'lucide-react';
import { LazyVideo } from './LazyVideo';

interface WorksBentoProps {
  onOpenCalculator: (service?: string) => void;
}

interface BentoItem {
  id: number;
  title: string;
  location: string;
  used: string;
  area: string;
  duration: string;
  cost: string;
  thumbnailVideo?: string;
  thumbnailImage?: string;
  galleryImages: string[];
  gridClass: string;
  serviceName: string;
}

const bentoItems: BentoItem[] = [
  {
    id: 1,
    title: "Парящий потолок с дизайнерским освещением",
    location: "Лобня, ЖК Победа",
    used: "Полотно Teqtum Euro, профиль Flexy Borzz Fly Max, встраиваемый карниз Flexy Borzz P45",
    area: "34 м²",
    duration: "1 день (6 часов)",
    cost: "42 500 ₽ под ключ",
    thumbnailVideo: "/new_image_azhur/lobnya.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[350px] sm:h-[400px] lg:h-[624px]",
    serviceName: "Натяжные потолки"
  },
  {
    id: 2,
    title: "Теневое примыкание EuroKraab в загородном доме",
    location: "Озерецкое",
    used: "Потолки MSD Evolution, теневое примыкание EuroKraab, встраиваемые карнизы ПК14",
    area: "26 м²",
    duration: "5 часов",
    cost: "34 800 ₽ под ключ",
    thumbnailVideo: "/new_image_azhur/ozereckoe.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-1 lg:col-span-1 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[300px]",
    serviceName: "Теневой профиль"
  },
  {
    id: 3,
    title: "Парящий контур и скрытые ниши для штор",
    location: "Звенигород",
    used: "Теневой профиль EuroKraab, парящий Flexy Borz Fly, ниши под электрокарнизы Lumfer, треки",
    area: "19 м²",
    duration: "4 часа",
    cost: "28 300 ₽ под ключ",
    thumbnailVideo: "/new_image_azhur/zvenigorod.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-1 lg:col-span-1 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[300px]",
    serviceName: "Карнизные решения"
  },
  {
    id: 4,
    title: "Световые линии и матовое полотно",
    location: "Клинский район",
    used: "Плёнка ПВХ Bauf 270 (Германия), теневое и парящее примыкания, световые линии 30 мм",
    area: "22 м²",
    duration: "1 день",
    cost: "31 000 ₽ под ключ",
    thumbnailVideo: "/new_image_azhur/klinskiy.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-2 lg:col-span-2 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[300px]",
    serviceName: "Световые линии и треки"
  },
  {
    id: 5,
    title: "Стильная спальня с бесшовной нишей Lumfer",
    location: "Москва, ул. Нежинская",
    used: "Потолок Bauf 270, теневое примыкание EuroKraab, ниша для штор Lumfer PDK100",
    area: "18 м²",
    duration: "4 часа",
    cost: "24 500 ₽ под ключ",
    thumbnailVideo: "/new_image_azhur/nezhinskaya/1.mp4",
    galleryImages: [
      "/new_image_azhur/nezhinskaya/1.webp",
      "/new_image_azhur/nezhinskaya/2.webp",
      "/new_image_azhur/nezhinskaya/3.webp",
      "/new_image_azhur/nezhinskaya/4.webp",
      "/new_image_azhur/nezhinskaya/5.webp"
    ],
    gridClass: "sm:col-span-2 lg:col-span-4 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[320px]",
    serviceName: "Натяжные потолки"
  }
];

export function WorksBento({ onOpenCalculator }: WorksBentoProps) {
  const [activeItem, setActiveItem] = useState<BentoItem | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMaximized) {
          setIsMaximized(false);
        } else {
          setActiveItem(null);
        }
      }
    };
    if (activeItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsMaximized(false);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeItem, isMaximized]);

  return (
    <section id="works" className="relative bg-brand-dark pt-20 pb-16 md:pt-28 md:pb-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header styled like Allen Brau */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span className="font-suisse text-xs text-brand-red uppercase tracking-[0.2em] font-medium">
                Реализованные кейсы
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-suisse font-normal text-white leading-tight" id="works-title">
              <span className="font-serif-italic italic text-brand-red">Наши работы</span> с точной сметой
            </h2>
          </div>
          
          <p className="text-sm md:text-base text-brand-gray font-suisse max-w-md leading-relaxed border-l border-white/10 pl-4 py-1" id="works-subtitle">
            Мы показываем реальные объекты с указанием площади, срока монтажа и итоговой цены под ключ.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" id="works-bento-grid">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative group overflow-hidden border border-white/10 bg-brand-card flex flex-col justify-between p-6 cursor-pointer ${item.gridClass}`}
              onClick={() => {
                setActiveItem(item);
                setCurrentGalleryIndex(0);
              }}
            >
              {/* Blur-up overlay & shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10 transition-all duration-500 group-hover:via-brand-black/20" />

              {/* Media content */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-brand-black/50">
                {item.thumbnailVideo ? (
                  <LazyVideo
                    src={item.thumbnailVideo}
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.75] group-hover:brightness-[0.85] group-hover:scale-105"
                  />
                ) : item.thumbnailImage ? (
                  <img
                    src={item.thumbnailImage}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.75] group-hover:brightness-[0.85] group-hover:scale-105"
                  />
                ) : null}
              </div>

              {/* Top tag */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="text-[11px] font-suisse uppercase px-2.5 py-1 rounded bg-brand-black/80 backdrop-blur-sm text-brand-red border border-white/10">
                  {item.location}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-brand-black/80 text-brand-gray group-hover:text-white group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Bottom content with price and specs */}
              <div className="relative z-20 space-y-2">
                <h3 className="text-sm sm:text-base font-suisse text-white font-medium leading-snug group-hover:text-brand-light transition-colors">
                  {item.title}
                </h3>
                
                {/* Price and duration badge */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs font-suisse font-semibold text-brand-red bg-brand-red/10 border border-brand-red/30 px-2.5 py-0.5 rounded">
                    {item.cost}
                  </span>
                  <span className="text-[11px] font-suisse text-gray-300">
                    {item.area} • {item.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Fullscreen Image Preview */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black/95 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={() => {
              setActiveItem(null);
              setIsMaximized(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className={`relative bg-brand-card border border-white/10 rounded-xl flex flex-col overflow-hidden shadow-2xl transition-all duration-300 ${
                isMaximized 
                  ? 'w-full h-full max-w-none bg-brand-black border-none justify-center items-center' 
                  : 'max-w-5xl w-full md:grid md:grid-cols-5'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              {!isMaximized && (
                <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                  <button
                    onClick={() => setIsMaximized(true)}
                    className="p-2 text-brand-gray hover:text-white bg-brand-black/60 rounded-lg border border-white/10 hover:border-brand-red transition-all cursor-pointer"
                    title="Во весь экран"
                  >
                    <Maximize2 size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      setIsMaximized(false);
                    }}
                    className="p-2 text-brand-gray hover:text-white bg-brand-black/60 rounded-lg border border-white/10 hover:border-brand-red transition-all cursor-pointer"
                    title="Закрыть"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* Media preview */}
              <div className={`bg-brand-black flex items-center justify-center relative overflow-hidden ${
                isMaximized 
                  ? 'w-full h-full p-4 md:p-12' 
                  : 'md:col-span-3 h-[320px] sm:h-[420px] md:h-[520px]'
              }`}>
                {(() => {
                  const media: { type: 'video' | 'image', url: string }[] = [];                  
                  if (activeItem.thumbnailVideo) media.push({ type: 'video', url: activeItem.thumbnailVideo });
                  if (activeItem.galleryImages && activeItem.galleryImages.length > 0) {
                    activeItem.galleryImages.forEach(img => media.push({ type: 'image', url: img }));
                  } else if (!activeItem.thumbnailVideo && activeItem.thumbnailImage) {
                    media.push({ type: 'image', url: activeItem.thumbnailImage });
                  }
                  if (media.length === 0) {
                    media.push({ type: 'image', url: "https://placehold.co/800x600/1a1a1a/4a4a4a?text=Фото+объекта" });
                  }

                  const safeIndex = currentGalleryIndex >= media.length ? 0 : currentGalleryIndex;
                  const currentMedia = media[safeIndex];

                  return (
                    <>
                      {currentMedia.type === 'video' ? (
                        <video
                          key={`vid-${safeIndex}`}
                          src={currentMedia.url}
                          controls
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="object-contain w-full h-full max-h-[85vh]"
                        />
                      ) : (
                        <img
                          key={`img-${safeIndex}`}
                          src={currentMedia.url}
                          alt={activeItem.title}
                          className="object-contain w-full h-full max-h-[85vh]"
                        />
                      )}

                      {media.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentGalleryIndex(prev => prev > 0 ? prev - 1 : media.length - 1);
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-black/60 text-white hover:bg-brand-red transition-all cursor-pointer"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentGalleryIndex(prev => prev < media.length - 1 ? prev + 1 : 0);
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand-black/60 text-white hover:bg-brand-red transition-all cursor-pointer"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* Right panel with parameters & CTA */}
              {!isMaximized && (
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between bg-brand-card border-t md:border-t-0 md:border-l border-white/10">
                  <div className="space-y-4">
                    <span className="text-[11px] font-suisse uppercase tracking-wider text-brand-red px-2 py-0.5 rounded bg-brand-red/10 border border-brand-red/20 inline-block">
                      {activeItem.serviceName}
                    </span>

                    <h3 className="text-lg sm:text-xl font-suisse font-medium text-white leading-snug">
                      {activeItem.title}
                    </h3>

                    <div className="py-4 border-y border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs font-suisse">
                        <span className="text-brand-gray flex items-center gap-1.5"><Banknote size={14} /> Стоимость под ключ:</span>
                        <span className="text-white font-semibold text-brand-red">{activeItem.cost}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-suisse">
                        <span className="text-brand-gray flex items-center gap-1.5"><Ruler size={14} /> Площадь:</span>
                        <span className="text-white">{activeItem.area}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs font-suisse">
                        <span className="text-brand-gray flex items-center gap-1.5"><Clock size={14} /> Время монтажа:</span>
                        <span className="text-white">{activeItem.duration}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-brand-gray font-suisse mb-1">
                        Использованные материалы
                      </span>
                      <p className="text-xs text-gray-300 font-suisse leading-relaxed">
                        {activeItem.used}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        const service = activeItem.serviceName;
                        setActiveItem(null);
                        setTimeout(() => {
                          onOpenCalculator(service);
                        }, 200);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-suisse text-xs uppercase tracking-wider py-4 px-6 rounded-lg transition-all cursor-pointer font-semibold shadow-lg shadow-brand-red/20"
                    >
                      <span>Рассчитать похожее решение</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
