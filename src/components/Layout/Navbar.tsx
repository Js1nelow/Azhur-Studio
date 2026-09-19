import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTransition } from '../../contexts/TransitionContext';

interface NavbarProps {
  onOpenCalculator: (service?: string) => void;
}

export function Navbar({ onOpenCalculator }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const location = useLocation();
  const { navigateWithTransition } = useTransition();

  useEffect(() => {
    if (location.pathname !== '/') return;
    const sections = ['hero', 'catalog', 'works', 'reasons', 'process', 'reviews', 'about', 'faq', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/') {
      setIsOpen(false);
      return;
    }
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { href: '#catalog', id: 'catalog', label: 'Каталог и цены' },
    { href: '#works', id: 'works', label: 'Кейсы' },
    { href: '#reasons', id: 'reasons', label: 'Преимущества' },
    { href: '#catalog-download', id: 'catalog-download', label: 'Прайс-лист' },
    { href: '#reviews', id: 'reviews', label: 'Отзывы' },
    { href: '#contact', id: 'contact', label: 'Контакты' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-brand-black/85 backdrop-blur-md"
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between w-full">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-6">
          <Link 
            to="/#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')} 
            className="flex items-baseline gap-1 select-none group"
          >
            <span className="font-suisse font-bold text-2xl uppercase tracking-tight text-white group-hover:text-brand-light transition-colors">
              AZHUR
            </span>
            <span className="font-serif-italic italic text-brand-red text-xl font-normal">
              Studio
            </span>
          </Link>

          <span className="hidden xl:inline-block text-[11px] text-brand-gray font-suisse border-l border-white/10 pl-4 py-0.5">
            Потолки и свет в Москве и МО
          </span>
        </div>

        {/* Center: Nav links */}
        <div className="hidden lg:flex items-center justify-center">
          <nav className="flex items-center gap-6 xl:gap-8 font-suisse text-xs uppercase tracking-wider font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors duration-200 py-1.5 relative ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-brand-gray hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side: Phone, Messenger & Estimate CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Phone block */}
          <div className="hidden sm:flex flex-col items-end">
            <a 
              href="tel:+74959713123" 
              className="font-suisse font-semibold text-sm text-white hover:text-brand-red transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} className="text-brand-red" />
              <span>+7 (495) 971-31-23</span>
            </a>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-suisse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ежедневно 9:00 – 21:00</span>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={() => onOpenCalculator()}
            className="hidden md:flex bg-brand-red hover:bg-brand-red-hover text-white px-5 py-2.5 rounded-lg font-suisse text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shadow-md shadow-brand-red/20"
          >
            Рассчитать смету
          </button>
          
          {/* Mobile Menu Trigger */}
          <button 
            className="relative z-[60] text-white p-2 -mr-2 hover:text-brand-red transition-colors lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-brand-black z-50 flex flex-col pt-24 pb-10 px-6 min-h-screen"
          >
            <nav className="flex flex-col items-center justify-center gap-6 font-suisse text-lg uppercase tracking-tight text-white text-center flex-1">
              <Link 
                to="/#hero" 
                onClick={(e) => handleLinkClick(e, '#hero')} 
                className="hover:text-brand-red transition-colors"
              >
                Главная
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-brand-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-4 w-full max-w-xs mx-auto shrink-0 mt-6">
              <a 
                href="tel:+74959713123" 
                className="font-suisse font-semibold text-lg text-white flex items-center gap-2"
              >
                <Phone size={16} className="text-brand-red" />
                <span>+7 (495) 971-31-23</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCalculator();
                }}
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-suisse text-xs uppercase tracking-wider py-4 rounded-xl transition-all font-semibold text-center cursor-pointer shadow-lg shadow-brand-red/25"
              >
                Рассчитать стоимость со скидкой 15%
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  navigateWithTransition('/partners', 'ПАРТНЕРЫ');
                }}
                className="text-xs font-suisse text-brand-gray hover:text-white pt-2 cursor-pointer"
              >
                Для дизайнеров и прорабов
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
