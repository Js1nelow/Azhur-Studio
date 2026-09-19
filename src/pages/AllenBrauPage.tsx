import React from 'react';
import { Header } from '../components/allenbrau/Header';
import { HeroSection } from '../components/allenbrau/HeroSection';
import { SequenceSection } from '../components/allenbrau/SequenceSection';
import { ProductsSliderSection } from '../components/allenbrau/ProductsSliderSection';
import { CollectionsSection } from '../components/allenbrau/CollectionsSection';
import { ReasonsSection } from '../components/allenbrau/ReasonsSection';
import { FloatingSection } from '../components/allenbrau/FloatingSection';
import { DesignProjectMarqueeSection } from '../components/allenbrau/DesignProjectMarqueeSection';
import { AboutSection } from '../components/allenbrau/AboutSection';
import { DocumentsSection } from '../components/allenbrau/DocumentsSection';
import { NewsSection } from '../components/allenbrau/NewsSection';
import { Footer } from '../components/allenbrau/Footer';

export function AllenBrauPage() {
  return (
    <div className="min-h-screen bg-black text-white font-suisse selection:bg-white selection:text-black">
      {/* 00. Top Fixed Header with Navigation & Search */}
      <Header />

      {/* 01. Hero Section with Video Background, Signature Typography & Overlay Logo */}
      <HeroSection />

      {/* 02. German Precision & Materiality Sequence Showcase */}
      <SequenceSection />

      {/* 03. Product Categories Swiper */}
      <ProductsSliderSection />

      {/* 04. Signature Collections */}
      <CollectionsSection />

      {/* 05. 7 Reasons to Choose Allen Brau Interactive Numeric Slider */}
      <ReasonsSection />

      {/* 06. Floating Showcase: Bespoke Interior Spaces & Minerals */}
      <FloatingSection />

      {/* 07. Interior Design Project Continuous Render Marquee */}
      <DesignProjectMarqueeSection />

      {/* 08. Brand Heritage & Leadership (Yakobs Peters, ImpEx Germany) */}
      <AboutSection />

      {/* 09. Catalogs & Price Lists with PDF Download Feature */}
      <DocumentsSection />

      {/* 10. Latest News & International Design Awards */}
      <NewsSection />

      {/* 11. Multi-Column European Luxury Footer */}
      <Footer />
    </div>
  );
}
