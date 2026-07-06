import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { CostModal } from './components/CostModal';
import { Home } from './pages/Home';
import { Partners } from './pages/Partners';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenCalculator = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseCalculator = () => {
    setIsModalOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-black text-brand-light selection:bg-brand-red selection:text-white overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar onOpenCalculator={() => handleOpenCalculator()} />
        
        <Routes>
          <Route path="/" element={<Home onOpenCalculator={handleOpenCalculator} />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
        
        {/* Footer Section */}
        <Footer />

        {/* Interactive Callback & Pricing Calculator Modal */}
        <CostModal 
          isOpen={isModalOpen} 
          onClose={handleCloseCalculator} 
          selectedService={selectedService} 
        />
      </div>
    </BrowserRouter>
  );
}
