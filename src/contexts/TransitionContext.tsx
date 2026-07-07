import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface TransitionContextType {
  navigateWithTransition: (to: string, label: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) throw new Error('useTransition must be used within TransitionProvider');
  return context;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [label, setLabel] = useState('');

  const navigateWithTransition = (to: string, newLabel: string) => {
    if (isTransitioning) return;
    setLabel(newLabel);
    setIsTransitioning(true);

    // Wait until the screen is fully covered by the black block (approx 750ms)
    setTimeout(() => {
      // Navigate under the black screen
      navigate(to);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      // Hold the text and fully covered state for a moment, then trigger the exit animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800); 
    }, 800); 
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* Red block */}
            <motion.div
              className="fixed inset-0 z-[9998] bg-brand-red pointer-events-auto"
              initial={{ y: '100%' }}
              animate={{ y: '0%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
              exit={{ y: '-100%', transition: { duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] } }}
            />
            {/* Black block */}
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-black pointer-events-auto"
              initial={{ y: '100%' }}
              animate={{ y: '0%', transition: { duration: 0.6, delay: 0.15, ease: [0.76, 0, 0.24, 1] } }}
              exit={{ y: '-100%', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.6, ease: 'easeOut' } }}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.3, ease: 'easeIn' } }}
                className="text-white font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-center px-4"
              >
                {label}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
