'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, MapPin } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Коллекции', href: '#collections' },
    { label: 'Продукция', href: '#production' },
    { label: '7 причин', href: '#reasons' },
    { label: 'О бренде', href: '#about' },
    { label: 'Каталоги', href: '#documents' },
    { label: 'Где купить', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Left: City & Language */}
        <div className="hidden lg:flex items-center gap-6 text-xs text-white/70">
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
            <MapPin size={14} />
            <span>Москва</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
            <Globe size={14} />
            <span className="font-semibold text-white">RU</span>
          </div>
        </div>

        {/* Center: Brand Logo */}
        <Link href="/" className="flex items-center select-none">
          <span className="text-xl sm:text-2xl font-suisse font-light tracking-[0.25em] text-white uppercase">
            ALLEN BRAU
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-suisse text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Search & Burger */}
        <div className="flex items-center gap-5 text-white">
          <button
            type="button"
            className="p-2 hover:text-white/70 transition-colors cursor-pointer"
            aria-label="Поиск"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:text-white/70 transition-colors cursor-pointer xl:hidden"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 bg-black z-40 flex flex-col pt-24 pb-12 px-8 xl:hidden min-h-screen">
          <nav className="flex flex-col gap-6 text-xl font-suisse uppercase tracking-widest text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Москва, Россия</span>
            </div>
            <div>
              © Allen Brau. Немецкая сантехника и мебель для ванной комнаты.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
