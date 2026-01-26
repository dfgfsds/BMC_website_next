'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12">
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
                                Brilliant Memory Computers is known as the best computer shop in Chennai because we offer a wide range of brand-new laptops, <b> custom PC builds</b>, gaming computers, and certified refurbished laptops at competitive prices. With genuine products, expert consultation, warranty support, and after-sales service, we have earned the trust of thousands of customers across Chennai.
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
                                If you’re searching for a reliable <Link href="/categories/desktops">computer shop in Chennai</Link>, Brilliant Memory Computers is your trusted destination. We specialize in laptops, desktops, gaming PCs, and computer accessories, providing expert guidance and budget-friendly options for students, professionals, gamers, and businesses.
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
                                Yes, we are one of the top sellers of <Link href="/categories/laptops">refurbished laptops in Chennai.</Link> All our refurbished laptops and computers are thoroughly tested, performance-optimized, and come with warranty support. These systems are ideal for students, office users, and work-from-home professionals looking for affordable and reliable devices.
                            </p>
                        )}
                    </div>

                    {/* FAQ 4 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 3 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(3)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 3 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Can I buy brand-new laptops from your laptop showroom in Chennai?
                            </h5>
                            {activeIndex === 3 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 3 && (
                            <p className="mt-3 text-gray-700">
                                Absolutely. Our laptop showroom in Chennai offers the latest brand-new laptops from leading brands like Dell, HP, Lenovo, Asus, Acer, and more. You can choose from student laptops, business laptops, ultrabooks, and high-performance machines under one roof.
                            </p>
                        )}
                    </div>

                    {/* FAQ 5 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 4 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(4)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 4 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Do you provide custom PC builds in Chennai?
                            </h5>
                            {activeIndex === 4 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 4 && (
                            <p className="mt-3 text-gray-700">
                                Yes, we specialize in custom PC builds in Chennai. Whether you need a gaming PC, workstation, or editing system, our expert PC builders help you select the right components for your needs. From processors and graphics cards to cooling and RGB setups, we build high-performance custom PCs tailored just for you.
                            </p>
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
                                Definitely. We are one of the most trusted shops for gaming PC builds in Chennai. We offer high-refresh-rate gaming laptops, powerful gaming desktops, liquid-cooled systems, and high-end GPU configurations designed for smooth gameplay and streaming performance.
                            </p>
                        )}
                    </div>
                    {/* FAQ 7 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 6 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(6)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 6 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Are refurbished computers good for students and office use?
                            </h5>
                            {activeIndex === 6 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 6 && (
                            <p className="mt-3 text-gray-700">
                                Yes. Our refurbished laptops and computers in Chennai are perfect for students, small businesses, and home offices. Each system is quality-checked, cleaned, and upgraded where required, offering excellent performance at a much lower cost than new systems.
                            </p>
                        )}
                    </div>
                    {/* FAQ 8 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 7 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(7)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 7 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Do you sell computer accessories and peripherals in Chennai?
                            </h5>
                            {activeIndex === 7 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 7 && (
                            <p className="mt-3 text-gray-700">
                                Yes, we are also a leading <Link href="/shop"> computer accessories shop in Chennai</Link>. We supply keyboards, mouse, monitors, SSDs, RAM, graphics cards, gaming accessories, routers, laptop chargers, and more—all at competitive prices.
                            </p>
                        )}
                    </div>
                    {/* FAQ 9 */}
                    <div
                        className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 8 ? 'border-blue-700 bg-slate-50' : ''
                            }`}
                    >
                        <button
                            onClick={() => toggle(8)}
                            className="w-full flex justify-between text-left"
                        >
                            <h5
                                className={`text-lg font-semibold ${activeIndex === 8 ? 'text-blue-700' : 'text-gray-900'
                                    }`}
                            >
                                Why should I choose BMC over other computer shops in Chennai?
                            </h5>
                            {activeIndex === 8 ? (
                                <HiMinusSm className="text-2xl text-blue-700" />
                            ) : (
                                <HiPlusSm className="text-2xl" />
                            )}
                        </button>

                        {activeIndex === 8 && (
                            <div className="mt-3 text-gray-700 space-y-2">
                                <p>
                                    Brilliant Memory Computers stands out among computer shops in Chennai due
                                    to our strong commitment to quality, pricing, and customer satisfaction.
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Genuine and brand-new computer products</li>
                                    <li>Best price guarantee in Chennai</li>
                                    <li>Expert technical support</li>
                                    <li>Custom PC build specialists</li>
                                    <li>Fast delivery and quick service</li>
                                    <li>Reliable warranty and after-sales support</li>
                                </ul>
                                <p>
                                    We focus on performance, reliability, and long-term value for every
                                    customer.
                                </p>
                            </div>
                        )}
                    </div>

                       {/* FAQ 10 */}
                    <div className={`border rounded-xl p-5 bg-white shadow-sm ${activeIndex === 9 ? 'border-blue-700 bg-slate-50' : ''}`}>
                        <button onClick={() => toggle(9)} className="w-full flex justify-between text-left">
                            <h5 className={`text-lg font-semibold ${activeIndex === 9 ? 'text-blue-700' : 'text-gray-900'}`}>
                                Do you offer both online and in-store PC and laptop purchases?
                            </h5>
                            {activeIndex === 9 ? <HiMinusSm className="text-2xl text-blue-700" /> : <HiPlusSm className="text-2xl" />}
                        </button>
                        {activeIndex === 9 && (
                            <p className="mt-3 text-gray-700">
                            Yes. You can visit our computer shop and laptop showroom in Chennai or contact us online to explore laptops, desktops, refurbished systems, accessories, and custom PC builds with expert assistance.

                            </p>
                        )}
                    </div>


                </div>
            </div>
        </section>
    );
}
