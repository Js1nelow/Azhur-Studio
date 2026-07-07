import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, X, Maximize2, Minimize2, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorksBentoProps {
  onOpenCalculator: (service?: string) => void;
}

interface BentoItem {
  id: number;
  title: string;
  location: string;
  used: string;
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
    location: "Лобня",
    used: "Полотно Teqtum Euro, профиль Flexy Borzz Fly Max, встраиваемый карниз Flexy Borzz P45",
    thumbnailVideo: "/new_image_azhur/lobnya.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-2 lg:col-span-2 lg:row-span-2 h-[350px] sm:h-[400px] lg:h-[624px]",
    serviceName: "Натяжные потолки"
  },
  {
    id: 2,
    title: "Теневое примыкание в частном доме",
    location: "Озерецкое",
    used: "Потолки MSD Evolution, теневое примыкание EuroKraab X, встраиваемые карнизы ПК14",
    thumbnailVideo: "/new_image_azhur/ozereckoe.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-1 lg:col-span-1 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[300px]",
    serviceName: "Теневой профиль"
  },
  {
    id: 3,
    title: "Парящий потолок с магнитными треками",
    location: "Звенигород",
    used: "Теневой профиль EuroKraab 2.0, парящий Flexy Borz Fly Max, ниши под электрокарнизы Lumfer PDK60, встраиваемые магнитные треки",
    thumbnailVideo: "/new_image_azhur/zvenigorod.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-1 lg:col-span-1 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[300px]",
    serviceName: "Карнизные решения"
  },
  {
    id: 4,
    title: "Классика и современность в одном решении",
    location: "Клинский район",
    used: "Плёнка ПВХ Bauf 270, теневое и парящее примыкания к стенам",
    thumbnailVideo: "/new_image_azhur/klinskiy.mp4",
    galleryImages: [],
    gridClass: "sm:col-span-2 lg:col-span-2 lg:row-span-1 h-[250px] sm:h-[280px] lg:h-[300px]",
    serviceName: "Световые линии и треки"
  },
  {
    id: 5,
    title: "Стильная спальня с нишей для штор",
    location: "Москва, ул. Нежинская",
    used: "Потолок ПВХ Bauf 270, теневое примыкание EuroKraab, ниша для штор Lumfer PDK100",
    thumbnailVideo: "/new_image_azhur/nezhinskaya/1.mp4",
    galleryImages: [
      "/new_image_azhur/nezhinskaya/1.jpg",
      "/new_image_azhur/nezhinskaya/2.jpg",
      "/new_image_azhur/nezhinskaya/3.jpg",
      "/new_image_azhur/nezhinskaya/4.jpg",
      "/new_image_azhur/nezhinskaya/5.jpg"
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
    <section id="works" className="relative bg-brand-dark pt-20 pb-8 md:pt-28 md:pb-12 hairline-b overflow-hidden">
      {/* Decorative light line */}
      <div className="absolute top-0 left-1/3 w-[1px] h-32 bg-gradient-to-b from-brand-red to-transparent opacity-50" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-brand-red uppercase tracking-widest">[ НАШЕ ПОРТФОЛИО ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-display font-medium text-brand-light leading-none uppercase tracking-tight mb-4" id="works-title">
            Работы, которые не стыдно показать
          </h2>
          <p className="text-brand-gray text-sm md:text-base font-mono uppercase tracking-wider max-w-3xl" id="works-subtitle">
            Натяжные потолки, световые линии и карнизные решения — смотрите сами
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
              className={`relative group overflow-hidden border border-brand-light/10 bg-brand-card flex flex-col justify-end p-6 cursor-pointer ${item.gridClass}`}
              onClick={() => {
                setActiveItem(item);
                setCurrentGalleryIndex(0);
              }}
            >
              {/* Blur-up overlay & shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-transparent z-10 transition-all duration-500 group-hover:via-brand-black/25" />
              <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 mix-blend-color-dodge" />

              {/* Actual Image or Video content */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-brand-black/50">
                {item.thumbnailVideo ? (
                  <video
                    src={item.thumbnailVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.7] group-hover:brightness-[0.8] group-hover:scale-105"
                  />
                ) : item.thumbnailImage ? (
                  <img
                    src={item.thumbnailImage}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.7] group-hover:brightness-[0.8] group-hover:scale-105"
                  />
                ) : null}
              </div>

              {/* Top Accent Lines */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-light/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-20" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500 z-20" />

              {/* Grid content overlay */}
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase text-brand-red tracking-wider">
                    {item.location}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-brand-light/10 flex items-center justify-center bg-brand-black/80 text-brand-gray group-hover:text-brand-light group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-mono uppercase tracking-wide text-brand-light leading-snug group-hover:text-white transition-colors">
                  {item.title}
                </h3>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`relative bg-brand-card border border-brand-light/10 flex flex-col overflow-hidden shadow-2xl transition-all duration-300 ${
                isMaximized 
                  ? 'w-full h-full max-w-none bg-brand-black/80 border-none justify-center items-center' 
                  : 'max-w-5xl w-full md:grid md:grid-cols-5'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header controls top-right corner of the entire card */}
              {!isMaximized && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-30 flex items-center gap-2">
                  <button
                    onClick={() => setIsMaximized(true)}
                    className="p-2.5 text-brand-gray hover:text-brand-light bg-brand-black/40 border border-brand-light/10 hover:border-brand-red transition-all cursor-pointer flex items-center justify-center"
                    title="Во весь экран"
                    aria-label="Во весь экран"
                  >
                    <Maximize2 size={16} />
                  </button>
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      setIsMaximized(false);
                    }}
                    className="p-2.5 text-brand-gray hover:text-brand-light bg-brand-black/40 border border-brand-light/10 hover:border-brand-red transition-all cursor-pointer flex items-center justify-center"
                    title="Закрыть"
                    aria-label="Закрыть"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}

              {/* Image Container */}
              <div className={`bg-brand-black flex items-center justify-center transition-all duration-300 relative overflow-hidden ${
                isMaximized 
                  ? 'w-full h-full p-4 md:p-12' 
                  : 'md:col-span-3 h-[350px] sm:h-[450px] md:h-[550px]'
              }`}>
                {/* Image Corner Controls for convenient fullscreen access */}
                {isMaximized && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setIsMaximized(false)}
                      className="p-2.5 text-brand-gray hover:text-brand-light bg-brand-black/85 border border-brand-light/15 hover:border-brand-red transition-all cursor-pointer flex items-center justify-center shadow-lg"
                      title="Свернуть"
                      aria-label="Свернуть"
                    >
                      <Minimize2 size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setActiveItem(null);
                        setIsMaximized(false);
                      }}
                      className="p-2.5 text-brand-gray hover:text-brand-light bg-brand-black/85 border border-brand-light/15 hover:border-brand-red transition-all cursor-pointer flex items-center justify-center shadow-lg"
                      title="Закрыть"
                      aria-label="Закрыть"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Premium lightbox media */}
                {(() => {
                  const hasImages = activeItem.galleryImages.length > 0;

                  if (!hasImages && activeItem.thumbnailVideo) {
                    return (
                      <video
                        src={activeItem.thumbnailVideo}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`object-contain transition-all duration-300 w-full h-full z-10 ${
                          isMaximized 
                            ? 'max-h-[85vh] max-w-[90vw]' 
                            : 'max-h-full max-w-full'
                        }`}
                      />
                    );
                  }
                  
                  if (!hasImages && activeItem.thumbnailImage) {
                    return (
                      <img
                        src={activeItem.thumbnailImage}
                        alt={activeItem.title}
                        className={`object-contain transition-all duration-300 w-full h-full z-10 ${
                          isMaximized 
                            ? 'max-h-[85vh] max-w-[90vw]' 
                            : 'max-h-full max-w-full'
                        }`}
                      />
                    );
                  }

                  const images = hasImages ? activeItem.galleryImages : ["https://placehold.co/800x600/1a1a1a/4a4a4a?text=Фото+в+процессе+обработки"];
                  const currentImage = images[currentGalleryIndex];
                  
                  return (
                    <>
                      <img
                        key={currentGalleryIndex}
                        src={currentImage}
                        alt={`${activeItem.title} - фото ${currentGalleryIndex + 1}`}
                        className={`object-contain transition-all duration-300 w-full h-full z-10 ${
                          isMaximized 
                            ? 'max-h-[85vh] max-w-[90vw]' 
                            : 'max-h-full max-w-full'
                        }`}
                      />
                      
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentGalleryIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-brand-light bg-brand-black/50 hover:bg-brand-red transition-colors rounded-full backdrop-blur-sm"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentGalleryIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-brand-light bg-brand-black/50 hover:bg-brand-red transition-colors rounded-full backdrop-blur-sm"
                          >
                            <ChevronRight size={24} />
                          </button>
                          
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-2 bg-brand-black/30 backdrop-blur-sm rounded-full">
                            {images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentGalleryIndex(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentGalleryIndex ? 'bg-brand-red scale-125' : 'bg-brand-light/50 hover:bg-brand-light'}`}
                                aria-label={`Фото ${idx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  );
                })()}


              </div>

              {/* Info & CTA Panel */}
              {!isMaximized && (
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between bg-brand-dark border-t md:border-t-0 md:border-l border-brand-light/10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest px-2 py-0.5 border border-brand-red/20 bg-brand-red/5">
                        {activeItem.serviceName}
                      </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-display uppercase tracking-tight text-brand-light leading-snug">
                      {activeItem.title}
                    </h3>
                    
                    <div className="py-3 border-y border-brand-light/5 flex flex-col gap-3">
                      <div>
                        <span className="block font-mono text-[10px] uppercase text-brand-gray tracking-wider mb-1">Объект</span>
                        <span className="text-sm font-mono text-brand-light">{activeItem.location}</span>
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] uppercase text-brand-gray tracking-wider mb-1">Использовано</span>
                        <span className="text-sm font-mono text-brand-light leading-relaxed">{activeItem.used}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => {
                        const service = activeItem.serviceName;
                        setActiveItem(null);
                        setTimeout(() => {
                          onOpenCalculator(service);
                        }, 200);
                      }}
                      className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red/90 text-white font-mono text-xs uppercase tracking-widest py-4 px-6 border border-brand-red transition-all duration-300"
                    >
                      <span>Хочу так же</span>
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
