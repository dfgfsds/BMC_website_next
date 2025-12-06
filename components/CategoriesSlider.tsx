'use client';

import React from 'react';
import Slider from 'react-slick';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useCategories } from '@/context/CategoriesContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';

export default function Categories() {
    const { categories } = useCategories();
    const router = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // default for large screens
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // below 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640, // below 640px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10 px-4 bg-white">
            <Slider {...settings}>
                {categories?.data?.map((item: any, index: number) => (
                    <div key={index} className="px-2">
                        <div className="bg-[#eef1ff] rounded-lg p-6 flex flex-col md:flex-row items-center justify-between min-h-[300px]">
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#2b2e4a]">{item?.name}</h2>
                                <p className="text-gray-600">{item?.name}</p>
                                <button
                                    onClick={() => router.push(`/categories/${item?.id}`)}
                                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded inline-flex items-center justify-center"
                                >
                                    <ArrowRight />
                                </button>
                            </div>
                            <div className="w-[200px] h-[200px] mx-auto flex items-center justify-center">
                                <Image
                                    src={item?.image}
                                    alt={item.title}
                                    width={180}
                                    height={180}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
