'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.brilliantmemorycomputers.in/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why is Brilliant Memory Computers considered the best computer shop in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brilliant Memory Computers is considered the best computer shop in Chennai for its wide range of brand-new laptops, custom PC builds, gaming computers, and certified refurbished laptops at competitive prices. With genuine products, expert consultation, warranty support, and after-sales service, BMC continues to serve customers across Chennai with dependable computer solutions."
                }
            },
            {
                "@type": "Question",
                "name": "Where is the most reliable computer shop in Chennai for laptops and PCs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you’re searching for a reliable computer shop in Chennai, Brilliant Memory Computers is a trusted destination for laptops, desktops, gaming PCs, and computer accessories. We provide expert guidance and budget-friendly options to help students, professionals, gamers, and businesses choose the right system for their needs."
                }
            },
            {
                "@type": "Question",
                "name": "Do you sell refurbished laptops in Chennai with warranty?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We are one of the top sellers of refurbished laptops in Chennai, offering refurbished laptops and computers that are thoroughly tested, performance-optimized, and supported with warranty coverage. These affordable and reliable devices are ideal for students, office users, and work-from-home professionals who need dependable everyday performance."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide custom PC builds in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we specialize in custom PC builds in Chennai for gaming, professional work, and content creation. Whether you need a gaming PC, workstation, or editing system, our expert PC builders help you choose the right components for your performance needs. From processors and graphics cards to cooling and RGB setups, we build high-performance custom PCs tailored to your requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I choose BMC over other computer shops in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brilliant Memory Computers stands out among computer shops in Chennai for its strong focus on quality, pricing, customer satisfaction, and dependable service. We offer genuine and brand-new computer products, best price guarantee in Chennai, expert technical support, custom PC build specialists, fast delivery and quick service, and reliable warranty and after-sales support. We focus on performance, reliability and long-term value, helping every customer choose the right products and solutions for their computing needs."
                }
            },
            {
                "@type": "Question",
                "name": "Can I build a gaming PC at Brilliant Memory Computers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Definitely. We are one of the most trusted shops for gaming PC builds in Chennai. We offer high-refresh-rate gaming laptops, powerful gaming desktops, liquid-cooled systems, and high-end GPU configurations designed for smooth gameplay and streaming performance."
                }
            }
        ]
    };

    return (
        <section className="py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions (FAQs)
                    </h2>
                    <p className="text-gray-600 mt-3">
                        Everything you need to know about <b>Brilliant Memory Computers</b>
                    </p>
                </div>

                <div className="space-y-6">

                    {/* FAQ 1 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 0 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(0)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 0 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Why is Brilliant Memory Computers considered the best computer shop in Chennai?
                            </h5>
                            {activeIndex === 0 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 0 && (
                            <p className="mt-3 text-gray-700">
                                Brilliant Memory Computers is considered the best computer shop in Chennai for its wide range of brand-new laptops, custom PC builds, gaming computers, and certified refurbished laptops at competitive prices. With genuine products, expert consultation, warranty support, and after-sales service, BMC continues to serve customers across Chennai with dependable computer solutions.
                            </p>
                        )}
                    </div>

                    {/* FAQ 2 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 1 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(1)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 1 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Where is the most reliable computer shop in Chennai for laptops and PCs?
                            </h5>
                            {activeIndex === 1 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 1 && (
                            <p className="mt-3 text-gray-700">
                                If you’re searching for a reliable computer shop in Chennai, Brilliant Memory Computers is a trusted destination for laptops, desktops, gaming PCs, and computer accessories. We provide expert guidance and budget-friendly options to help students, professionals, gamers, and businesses choose the right system for their needs.
                            </p>
                        )}
                    </div>

                    {/* FAQ 3 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 2 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(2)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 2 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Do you sell refurbished laptops in Chennai with warranty?
                            </h5>
                            {activeIndex === 2 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 2 && (
                            <p className="mt-3 text-gray-700">
                                Yes. We are one of the top sellers of refurbished laptops in Chennai, offering refurbished laptops and computers that are thoroughly tested, performance-optimized, and supported with warranty coverage. These affordable and reliable devices are ideal for students, office users, and work-from-home professionals who need dependable everyday performance.
                            </p>
                        )}
                    </div>

                    {/* FAQ 4 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 3 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(3)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 3 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Do you provide custom PC builds in Chennai?
                            </h5>
                            {activeIndex === 3 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 3 && (
                            <p className="mt-3 text-gray-700">
                                Yes, we specialize in custom PC builds in Chennai for gaming, professional work, and content creation. Whether you need a gaming PC, workstation, or editing system, our expert PC builders help you choose the right components for your performance needs. From processors and graphics cards to cooling and RGB setups, we build high-performance custom PCs tailored to your requirements.
                            </p>
                        )}
                    </div>

                    {/* FAQ 5 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 4 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(4)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 4 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Why should I choose BMC over other computer shops in Chennai?
                            </h5>
                            {activeIndex === 4 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 4 && (
                            <div className="mt-3 text-gray-700 space-y-2">
                                <p>Brilliant Memory Computers stands out among computer shops in Chennai for its strong focus on quality, pricing, customer satisfaction & dependable service.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Genuine and brand-new computer products</li>
                                    <li>Best price guarantee in Chennai</li>
                                    <li>Expert technical support</li>
                                    <li>Custom PC build specialists</li>
                                    <li>Fast delivery and quick service</li>
                                    <li>Reliable warranty and after-sales support</li>
                                </ul>
                                <p>We focus on performance, reliability, and long-term value, helping every customer choose the right products and solutions for their computing needs.</p>
                            </div>
                        )}
                    </div>

                    {/* FAQ 6 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 5 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(5)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 5 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Can I build a gaming PC at Brilliant Memory Computers?
                            </h5>
                            {activeIndex === 5 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 5 && (
                            <p className="mt-3 text-gray-700">
                                Definitely. We are one of the most trusted shops for gaming PC builds in Chennai. We offer high-refresh-rate gaming laptops, powerful gaming desktops, liquid-cooled systems & high-end GPU configurations designed for smooth gameplay & streaming performance.
                            </p>
                        )}
                    </div>


                </div>
            </div>
        </section>
    );
}
