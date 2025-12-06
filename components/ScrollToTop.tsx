'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react'; 

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); 
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-[#35355C] hover:bg-[#2c2c4f] text-white p-3 rounded-md shadow-md transition-all"
        aria-label="Scroll to Top"
      >
        <ChevronUp size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
