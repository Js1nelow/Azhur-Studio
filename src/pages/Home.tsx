import { useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { HeroBlock } from '../components/HeroBlock';
import { MarqueeBlock } from '../components/MarqueeBlock';
import { ServicesBlock } from '../components/ServicesBlock';
import { ReasonsBlock } from '../components/ReasonsBlock';
import { WorksBento } from '../components/WorksBento';
import { CatalogDownloadBlock } from '../components/CatalogDownloadBlock';
import { DreamCeilingBlock } from '../components/DreamCeilingBlock';
import { ReviewsBlock } from '../components/ReviewsBlock';
import { AboutBlock } from '../components/AboutBlock';
import { PartnersCtaBlock } from '../components/PartnersCtaBlock';
import { FaqBlock } from '../components/FaqBlock';
import { ContactFormBlock } from '../components/ContactFormBlock';

interface HomeProps {
  onOpenCalculator: (serviceName?: string) => void;
}

function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Home({ onOpenCalculator }: HomeProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      {/* 1. Hero Block with Allen Brau typography & pricing offer */}
      <HeroBlock onOpenCalculator={onOpenCalculator} />
      
      {/* 2. Running Ticker with Core USPs */}
      <MarqueeBlock />

      {/* 3. Modern Collection Showcase with Transparent Rates */}
      <FadeIn>
        <ServicesBlock onOpenCalculator={onOpenCalculator} />
      </FadeIn>

      {/* 4. Reasons to choose Azhur Studio with big italic numbers */}
      <FadeIn>
        <ReasonsBlock onOpenCalculator={onOpenCalculator} />
      </FadeIn>

      {/* 5. Real Case Studies with Pricing and Durations */}
      <FadeIn>
        <WorksBento onOpenCalculator={onOpenCalculator} />
      </FadeIn>

      {/* 6. Lead Magnet: Price List & Catalog PDF Download */}
      <FadeIn>
        <CatalogDownloadBlock />
      </FadeIn>

      {/* 7. Installation Stages from Measurement to Handover */}
      <FadeIn>
        <DreamCeilingBlock onOpenCalculator={onOpenCalculator} />
      </FadeIn>

      {/* 8. Customer Reviews & Social Proof */}
      <FadeIn>
        <ReviewsBlock />
      </FadeIn>

      {/* 9. About Studio & Lead Engineer Oleg */}
      <FadeIn>
        <AboutBlock />
      </FadeIn>

      {/* 10. Designer & Contractor Partnership */}
      <FadeIn>
        <PartnersCtaBlock />
      </FadeIn>

      {/* 11. FAQ Accordion */}
      <FadeIn>
        <FaqBlock />
      </FadeIn>

      {/* 12. Final Consultation Form */}
      <FadeIn>
        <ContactFormBlock />
      </FadeIn>
    </>
  );
}
