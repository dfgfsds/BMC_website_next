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
                "name": "Why Choose Brilliant Memory Computers as the Best Computer Shop in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brilliant Memory Computers offers brand-new laptops, custom-built PCs, gaming computers, and certified refurbished laptops at competitive prices. Customers looking for the best computer shop in Chennai can explore suitable options with expert guidance, genuine products, warranty support, and after-sales assistance. BMC helps individuals and businesses find computer solutions that match their needs and budgets."
                }
            },
            {
                "@type": "Question",
                "name": "Where Is the Most Reliable Computer Shop in Chennai for Laptops and PCs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brilliant Memory Computers is a trusted computer shop in Chennai, offering laptops, desktops, gaming PCs, and computer accessories. With expert guidance and budget-friendly options, we help students, professionals, gamers, and businesses choose the right systems for their needs."
                }
            },
            {
                "@type": "Question",
                "name": "Do you sell refurbished laptops in Chennai with warranty?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer refurbished laptops in Chennai with warranty coverage, along with refurbished computers that undergo thorough testing and performance optimisation. These affordable devices suit students, office users, and work-from-home professionals looking for reliable computers for everyday tasks."
                }
            },
            {
                "@type": "Question",
                "name": "Do You Provide Custom PC Builds in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Brilliant Memory Computers specializes in custom PC builds in Chennai for gaming, content creation, and professional work. Our expert PC builders help you select suitable processors, graphics cards, cooling systems, and RGB components to create a high-performance PC that matches your requirements and budget."
                }
            },
            {
                "@type": "Question",
                "name": "Why Should I Choose BMC Over Other Computer Shops in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brilliant Memory Computers stands out among computer shops in Chennai through its product quality, competitive pricing, and customer-focused service.Genuine, brand-new computer products, Competitive prices across Chennai, Expert technical guidance, Custom PC build specialists, Fast delivery and prompt service, Warranty and after-sales support. We help customers choose reliable computer products that match their needs and budget, with a focus on performance and long-term value."
                }
            },
            {
                "@type": "Question",
                "name": "Can I Build a Gaming PC at Brilliant Memory Computers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Definitely! Brilliant Memory Computers specializes in gaming PC builds in Chennai, offering high-refresh-rate gaming laptops, powerful gaming desktops, liquid-cooled systems, and high-end GPU configurations for smooth gameplay and streaming. Our team helps you choose a setup that suits your gaming preferences and budget."
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
                                Why Choose Brilliant Memory Computers as the Best Computer Shop in Chennai?
                            </h5>
                            {activeIndex === 0 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 0 && (
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Brilliant Memory Computers offers brand-new laptops, custom-built PCs, gaming computers, and certified refurbished laptops at competitive prices. Customers looking for the best computer shop in Chennai can explore suitable options with expert guidance, genuine products, warranty support, and after-sales assistance. BMC helps individuals and businesses find computer solutions that match their needs and budgets.
                            </p>
                        )}
                    </div>

                    {/* FAQ 2 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 1 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(1)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 1 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Where Is the Most Reliable Computer Shop in Chennai for Laptops and PCs?
                            </h5>
                            {activeIndex === 1 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 1 && (
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Brilliant Memory Computers is a trusted computer shop in Chennai, offering laptops, desktops, gaming PCs, and computer accessories. With expert guidance and budget-friendly options, we help students, professionals, gamers, and businesses choose the right systems for their needs.
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
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Yes. We offer refurbished laptops in Chennai with warranty coverage, along with refurbished computers that undergo thorough testing and performance optimisation. These affordable devices suit students, office users, and work-from-home professionals looking for reliable computers for everyday tasks.
                            </p>
                        )}
                    </div>

                    {/* FAQ 4 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 3 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(3)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 3 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Do You Provide Custom PC Builds in Chennai?
                            </h5>
                            {activeIndex === 3 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 3 && (
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Yes, Brilliant Memory Computers specializes in custom PC builds in Chennai for gaming, content creation, and professional work. Our expert PC builders help you select suitable processors, graphics cards, cooling systems, and RGB components to create a high-performance PC that matches your requirements and budget.
                            </p>
                        )}
                    </div>

                    {/* FAQ 5 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 4 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(4)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 4 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Why Should I Choose BMC Over Other Computer Shops in Chennai?
                            </h5>
                            {activeIndex === 4 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 4 && (
                            <div className="mt-3 text-gray-700 space-y-2 leading-relaxed">
                                <p>Brilliant Memory Computers stands out among computer shops in Chennai through its product quality, competitive pricing, and customer-focused service.</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Genuine, brand-new computer products</li>
                                    <li>Competitive prices across Chennai</li>
                                    <li>Expert technical guidance</li>
                                    <li>Custom PC build specialists</li>
                                    <li>Fast delivery and prompt service</li>
                                    <li>Warranty and after-sales support</li>
                                </ul>
                                <p>We help customers choose reliable computer products that match their needs and budget, with a focus on performance and long-term value.</p>
                            </div>
                        )}
                    </div>

                    {/* FAQ 6 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 5 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(5)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 5 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Can I Build a Gaming PC at Brilliant Memory Computers?
                            </h5>
                            {activeIndex === 5 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 5 && (
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Definitely! Brilliant Memory Computers specializes in gaming PC builds in Chennai, offering high-refresh-rate gaming laptops, powerful gaming desktops, liquid-cooled systems, and high-end GPU configurations for smooth gameplay and streaming. Our team helps you choose a setup that suits your gaming preferences and budget.
                            </p>
                        )}
                    </div>


                </div>
            </div>
        </section>
    );
}
