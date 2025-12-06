'use client';

import React, { useEffect, useRef, useState } from 'react';
import Banner1 from '../public/img/bmc-banner-1.jpg';
import Banner2 from '../public/img/bmc-banner-2.jpg';
import Banner3 from '../public/img/bmc-banner-3.jpg';
import mobileBanner1 from '../public/img/bmc-moblie-banner-1.jpg';
import mobileBanner2 from '../public/img/bmc-moblie-banner-2.jpg';
import mobileBanner3 from '../public/img/bmc-moblie-banner-3.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<any>(null);

  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img5Ref = useRef(null);
  const img7Ref = useRef(null);
  const imgLogo = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const bannerImages = [
    { id: 1, url: isMobile ? mobileBanner1 : Banner1, link: "/products" },
    { id: 2, url: isMobile ? mobileBanner2 : Banner2, link: "/products" },
    { id: 3, url: isMobile ? mobileBanner3 : Banner3, link: "/products" },
  ];

  useEffect(() => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;

    const images = [
      { ref: img1Ref, x: -150, y: 200, scale: 1.5, rotate: 15, delay: 0 },
      { ref: img2Ref, x: 150, y: 200, scale: 1.5, rotate: -10, delay: 0.2 },
      { ref: img3Ref, x: 125, y: -175, scale: 1.5, rotate: 5, delay: 0.4 },
      { ref: img5Ref, x: -100, y: -200, scale: 1.2, rotate: 0, delay: 0.5 },
      { ref: img7Ref, x: 0, y: -200, scale: 1.5, rotate: 5, delay: 0.5 },
      { ref: imgLogo, x: 0, y: -100, scale: 1.2, rotate: 5, delay: 0.5 },
    ];

    images.forEach(({ ref, x, y, scale, rotate }) => {
      gsap.set(ref.current, {
        x: x * scrollProgress,
        y: y * scrollProgress,
        scale: 1 + (scale - 1) * scrollProgress,
        rotate: rotate * scrollProgress,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    images.forEach(({ ref, x, y, scale, rotate, delay }) => {
      tl.to(
        ref.current,
        {
          x,
          y,
          scale,
          rotate,
          ease: 'power2.inOut',
          duration: 1.5,
        },
        delay
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white shadow-md"
    >
      <ChevronRight className="text-blue-600 w-5 h-5" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white shadow-md"
    >
      <ChevronLeft className="text-blue-600 w-5 h-5" />
    </div>
  );
};

  const sliderSettings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  arrows: true,
  fade: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (_: number, next: number) => {
    const slides = document.querySelectorAll('.slick-slide .zoom-slide');
    slides.forEach((slide) => slide.classList.remove('scale-100'));
    setTimeout(() => {
      const active = document.querySelector('.slick-active .zoom-slide');
      if (active) active.classList.add('scale-100');
    }, 100);
  },
};


  return (
    <div className="relative h-[70vh] md:h-[70vh] overflow-hidden hero-container">
      <Slider ref={sliderRef} {...sliderSettings}>
        {bannerImages.map((banner) => (
          <div key={banner.id}>
            <Link href={banner.link}>
              <div
                className="zoom-slide transition-transform duration-1000 ease-in-out h-[60vh] md:h-[70vh] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${banner.url?.src || banner.url})`,
                }}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
