'use client';

import React, { useState } from 'react';
import { ArrowDown, Play, X } from 'lucide-react';

export function HeroSection() {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-black text-white px-6 sm:px-10 lg:px-16 pt-36 pb-16 overflow-hidden">
      
      {/* Background Video or Cinematic Backdrop */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/allenbrau/bwgtbbri581gp22e01nslrerdy0ew4r8.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />
      </div>

      {/* Main Greetings Text */}
      <div className="relative z-10 max-w-[1720px] mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="space-y-2 select-none">
          <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
            <span className="title-100i text-white/90">Самое</span>
            <span className="title-100 text-white font-normal">важное.</span>
          </div>
          <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6">
            <span className="title-100 text-white font-normal">Ваше</span>
            <span className="title-100i text-white/90">желание.</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Video button & Scroll down */}
      <div className="relative z-10 max-w-[1720px] mx-auto w-full flex items-end justify-between border-t border-white/15 pt-8">
        
        {/* Video Trigger */}
        <button
          onClick={() => setVideoModal(true)}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
            <Play size={14} className="translate-x-0.5" />
          </div>
          <span className="hidden sm:inline">Смотреть презентацию</span>
        </button>

        {/* Scroll indicator */}
        <a
          href="#collections"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="hidden sm:inline">Листать вниз</span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
            <ArrowDown size={14} />
          </div>
        </a>

      </div>

      {/* Video Modal */}
      {videoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setVideoModal(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-3 cursor-pointer"
          >
            <X size={28} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src="/images/allenbrau/bwgtbbri581gp22e01nslrerdy0ew4r8.mp4"
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
