'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';
import Banner1 from '../public/img/bmc-banner-1.webp';
import Banner2 from '../public/img/bmc-banner-2.webp';
import Banner3 from '../public/img/bmc-banner-3.webp';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners] = useState<any[]>(initialBanners || STATIC_BANNERS);
  const router = useRouter();
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Group into responsive slides
  const webBanners = banners.filter(b => b.type === 'Web View');
  const mobileBanners = banners.filter(b => b.type === 'Mobile View');

  const slides = (webBanners.length > 0 ? webBanners : banners).map((webBanner, index) => {
    const mobBanner = mobileBanners[index] || webBanner;
    return {
      id: webBanner.id,
      title: webBanner.title,
      target_url: webBanner.target_url,
      desktop_url: webBanner.image_url,
      mobile_url: mobBanner.image_url,
    };
  });

  // Auto-play logic
  useEffect(() => {
    if (slides.length <= 1) return;

    const startAutoplay = () => {
      autoplayIntervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
      }, 3000);
    };

    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [slides.length]);

  const handlePrev = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    restartAutoplay();
  };

  const handleNext = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    setCurrentIndex(prev => (prev + 1) % slides.length);
    restartAutoplay();
  };

  const restartAutoplay = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    autoplayIntervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 3000);
  };

  const handleBannerClick = (slide: any) => {
    if (slide?.target_url) {
      router.push(slide.target_url);
    }
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative h-[80vh] md:h-[80vh] overflow-hidden w-full">
      {/* Slider Wrapper */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {slides.map((slide: any, index: number) => (
          <div
            key={slide.id}
            className={`${index === currentIndex ? 'relative opacity-100 z-10' : 'absolute opacity-0 pointer-events-none'} inset-0 transition-opacity duration-500 cursor-pointer w-full h-full`}
            onClick={() => handleBannerClick(slide)}
          >
            <picture className="w-full h-full block">
              <source media="(max-width: 768px)" srcSet={slide.mobile_url} />
              <img
                className={`w-full h-full object-cover transition-transform duration-600 md:rounded-lg ${index === currentIndex ? 'scale-105' : 'scale-100'}`}
                src={slide.desktop_url}
                alt={slide.title || 'banner'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding={index === 0 ? 'sync' : 'async'}
              />
            </picture>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-blue-600 w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="text-blue-600 w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
