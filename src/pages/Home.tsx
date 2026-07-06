import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Layout/Navbar';
import { HeroBlock } from '../components/HeroBlock';
import { WorksBento } from '../components/WorksBento';
import { ServicesBlock } from '../components/ServicesBlock';
import { ReviewsBlock } from '../components/ReviewsBlock';
import { DreamCeilingBlock } from '../components/DreamCeilingBlock';
import { AboutBlock } from '../components/AboutBlock';
import { FaqBlock } from '../components/FaqBlock';
import { ContactFormBlock } from '../components/ContactFormBlock';

interface HomeProps {
  onOpenCalculator: (serviceName?: string) => void;
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
      <HeroBlock onOpenCalculator={onOpenCalculator} />
      <WorksBento onOpenCalculator={onOpenCalculator} />
      <ServicesBlock onOpenCalculator={onOpenCalculator} />
      <DreamCeilingBlock onOpenCalculator={onOpenCalculator} />
      <ReviewsBlock />
      <AboutBlock />
      <FaqBlock />
      <ContactFormBlock />
    </>
  );
}
