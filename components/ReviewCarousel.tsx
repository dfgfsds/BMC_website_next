'use client'

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Star } from 'lucide-react'

const reviews = [
    {
        stars: 5,
        text: `Having the distressing experience with some online shops before decided to say “THANK YOU” to all personnel of this store. You are not only friendly but deliver really good products in the shortest possible terms. In a word, I am absolutely happy with my purchase and the service. Everything was perfect!`,
        name: 'Virginia Ubert',
    },
    {
        stars: 5,
        text: `Fast delivery and the product quality is amazing! Customer support was responsive and polite.`,
        name: 'Jonathan Wells',
    },
    {
        stars: 4,
        text: `Good experience overall, would purchase again. A bit slow delivery but worth the wait.`,
        name: 'Sandra Kim',
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
                                <Star key={i} className="w-5 h-5 text-white fill-white" />
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
