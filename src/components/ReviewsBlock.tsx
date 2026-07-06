import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  city: string;
  project: string;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Делали парящий потолок в гостиной. Приехали вовремя, убрали за собой, всё сделали за день. Олег лично контролировал каждый этап — это чувствуется в результате.",
    author: "Марина К.",
    city: "Москва",
    project: "Парящий потолок"
  },
  {
    id: 2,
    rating: 5,
    text: "Долго выбирали между разными студиями. Остановились на Ажур — и не пожалели. Смета не изменилась ни на рубль, всё как договорились.",
    author: "Дмитрий В.",
    city: "Москва",
    project: "Карнизные решения + световые линии"
  },
  {
    id: 3,
    rating: 5,
    text: "Сделали теневой профиль по всему периметру. Эффект парящего потолка — именно то что хотели. Спасибо за терпение при выборе решения.",
    author: "Анна С.",
    city: "Подмосковье",
    project: "Теневой профиль EuroKRAAB"
  }
];

export function ReviewsBlock() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // Slide animations mapping
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="relative bg-brand-dark py-20 md:py-28 overflow-hidden border-t border-brand-light/5">
      {/* Aesthetic lines / dots decoration */}
      <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-brand-red/10 to-transparent" />
      <div className="absolute top-1/2 right-10 w-[200px] h-[200px] rounded-full bg-brand-red/5 blur-[80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-brand-red uppercase tracking-widest">[ ОТЗЫВЫ О НАШЕЙ РАБОТЕ ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-brand-light leading-none uppercase tracking-tight">
            Что говорят клиенты
          </h2>
        </div>

        {/* Desktop: 3 Columns Grid of reviews */}
        <div className="hidden md:grid grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-brand-card/35 border border-brand-light/5 hover:border-brand-red/30 transition-all duration-500 p-8 flex flex-col justify-between group relative"
            >
              {/* Star Rating & Accent line */}
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-red text-brand-red shrink-0" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-brand-light/90 text-sm sm:text-base leading-relaxed mb-8 font-sans font-light italic">
                  «{review.text}»
                </p>
              </div>

              {/* Review Author & Project details */}
              <div className="border-t border-brand-light/5 pt-5 mt-auto">
                <div className="font-display text-sm text-brand-light uppercase tracking-wider font-semibold group-hover:text-brand-red transition-colors duration-300">
                  {review.author}
                </div>
                <div className="font-mono text-[10px] text-brand-gray uppercase tracking-widest mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>{review.city}</span>
                  <span className="text-brand-red/60">•</span>
                  <span className="text-brand-light/70">{review.project}</span>
                </div>
              </div>

              {/* Top and side hover highlights */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-brand-red transition-all duration-500 group-hover:w-full" />
              <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-brand-red transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Swipeable Carousel */}
        <div className="md:hidden flex flex-col items-stretch space-y-6">
          <div 
            className="relative min-h-[280px] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-brand-card/35 border border-brand-light/5 p-8 flex flex-col justify-between min-h-[280px] relative w-full"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-red text-brand-red shrink-0" />
                    ))}
                  </div>

                  <p className="text-brand-light/90 text-sm leading-relaxed mb-8 font-sans font-light italic">
                    «{reviews[activeIndex].text}»
                  </p>
                </div>

                <div className="border-t border-brand-light/5 pt-5 mt-auto">
                  <div className="font-display text-sm text-brand-light uppercase tracking-wider font-semibold">
                    {reviews[activeIndex].author}
                  </div>
                  <div className="font-mono text-[10px] text-brand-gray uppercase tracking-widest mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>{reviews[activeIndex].city}</span>
                    <span className="text-brand-red/60">•</span>
                    <span className="text-brand-light/70">{reviews[activeIndex].project}</span>
                  </div>
                </div>

                {/* Aesthetic slide indicator corner */}
                <div className="absolute top-4 right-4 font-mono text-[10px] text-brand-gray/40">
                  {activeIndex + 1} / {reviews.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls: Buttons & Dots */}
          <div className="flex items-center justify-between px-2 pt-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-6 bg-brand-red' : 'w-1.5 bg-brand-light/10 hover:bg-brand-light/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Red Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 bg-brand-card border border-brand-light/5 text-brand-light hover:text-brand-red hover:border-brand-red/30 transition-colors duration-300"
                aria-label="Previous Review"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-brand-card border border-brand-light/5 text-brand-light hover:text-brand-red hover:border-brand-red/30 transition-colors duration-300"
                aria-label="Next Review"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Yandex Maps Note */}
        <div className="mt-10 md:mt-12 text-center md:text-left">
          <p className="font-sans text-xs text-brand-gray/60">
            Собираем отзывы на Яндекс Картах — скоро добавим ссылку
          </p>
        </div>

      </div>
    </section>
  );
}
