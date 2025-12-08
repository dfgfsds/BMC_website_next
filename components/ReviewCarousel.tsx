'use client'

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Star } from 'lucide-react'

const reviews = [
    {
        stars: 5,
        text: `I purchased a high-performance laptop from Brilliant Memory Computers and the experience was fantastic. Their staff helped me choose the perfect configuration for my work in programming. Great pricing, genuine products, and super-fast delivery. Easily the best laptop shop in Chennai!`,
        name: 'Rohit S. – Software Developer, TCS',
    },
    {
        stars: 5,
        text: `I got my gaming PC built here, and the team exceeded my expectations. They suggested the right graphics card, cooling setup, and storage combination based on my games and streaming needs. The performance is insane! If you want a gaming PC build in Chennai, this is the place.`,
        name: 'Arjun K. – Gamer & Streamer',
    },
    {
        stars: 5,
        text: `I bought a refurbished Lenovo laptop for my online classes. It looks brand-new and runs smoothly for everything I need. They also gave me a warranty, which gave me a lot of confidence. Very happy with the purchase!`,
        name: 'Priya R. – College Student',
    },
]

export default function ReviewCarousel() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
    })

    return (
        <section className="py-10 px-4 bg-white">
            <div className="text-center mb-8">
                <h3 className='text-2xl font-bold text-blue-500 mb-10 mt-4 text-center'>What our customer says!</h3>
            </div>

            <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto ">
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="keen-slider__slide p-6 bg-[#181822] text-white rounded-lg shadow-md"
                    >
                        <div className="flex gap-1 mb-4">
                            {[...Array(review.stars)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" />
                            ))}
                        </div>
                        <p className="mb-6 leading-relaxed">{review.text}</p>
                        <p className="font-semibold">{review.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
