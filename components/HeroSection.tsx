'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';
import Banner1 from '../public/img/bmc-banner-1.webp';
import Banner2 from '../public/img/bmc-banner-2.webp';
import Banner3 from '../public/img/bmc-banner-3.jpg';
import mobileBanner1 from '../public/img/bmc-moblie-banner-1.webp';
import mobileBanner2 from '../public/img/bmc-moblie-banner-2.webp';
import mobileBanner3 from '../public/img/bmc-moblie-banner-3.webp';

const STATIC_BANNERS = [
  {
    id: 1,
    title: 'Banner 1',
    image_url: Banner1.src,
    type: 'Web View',
    target_url: '/',
  },
  {
    id: 2,
    title: 'Banner 2',
    image_url: Banner2.src,
    type: 'Web View',
    target_url: '/shop',
  },
  {
    id: 3,
    title: 'Banner 3',
    image_url: Banner3.src,
    type: 'Web View',
    target_url: '/categories',
  },
  {
    id: 4,
    title: 'Mobile Banner 1',
    image_url: mobileBanner1.src,
    type: 'Mobile View',
    target_url: '/',
  },
  {
    id: 5,
    title: 'Mobile Banner 2',
    image_url: mobileBanner2.src,
    type: 'Mobile View',
    target_url: '/shop',
  },
  {
    id: 6,
    title: 'Mobile Banner 3',
    image_url: mobileBanner3.src,
    type: 'Mobile View',
    target_url: '/categories',
  },
];

export default function HeroSection({ banners: initialBanners }: { banners?: any[] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners] = useState<any[]>(initialBanners || STATIC_BANNERS);
  const router = useRouter();
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Filter banners based on type
  const filteredBanners = banners.filter(banner =>
    isMobile ? banner.type === 'Mobile View' : banner.type === 'Web View'
  );

  // Auto-play logic
  useEffect(() => {
    if (filteredBanners.length === 0) return;

    const startAutoplay = () => {
      autoplayIntervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % filteredBanners.length);
      }, 3000);
    };

    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [filteredBanners]);

  const handlePrev = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    setCurrentIndex(prev => (prev - 1 + filteredBanners.length) % filteredBanners.length);
    restartAutoplay();
  };

  const handleNext = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    setCurrentIndex(prev => (prev + 1) % filteredBanners.length);
    restartAutoplay();
  };

  const restartAutoplay = () => {
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredBanners.length);
    }, 3000);
  };

  const handleBannerClick = (banner: any) => {
    if (banner?.target_url) {
      router.push(banner.target_url);
    }
  };

  if (filteredBanners.length === 0) return null;

  return (
    <div className="relative h-[70vh] md:h-[70vh] overflow-hidden w-full">
      {/* Slider Wrapper */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {filteredBanners.map((banner: any, index: number) => (
          <div
            key={banner.id}
            className={`${index === currentIndex ? 'relative opacity-100' : 'absolute opacity-0'} inset-0 transition-opacity duration-500 cursor-pointer`}
            onClick={() => handleBannerClick(banner)}
          >
            <img
              className={`w-full h-full object-cover transition-transform duration-600 md:rounded-lg ${index === currentIndex ? 'scale-105' : 'scale-100'}`}
              src={banner.image_url}
              alt={banner.title || 'banner'}
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-blue-600 w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="text-blue-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
