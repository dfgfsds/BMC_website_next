import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WhyChooseBNComputers from "@/components/WhyChooseBNComputers";
import PcFaqSection from "@/components/pcFaq";

export default function BuildPC() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why choose Brilliant Memory Computers for custom PC build in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer expert guidance, genuine components, professional assembly, stress testing, and reliable local after-sales support in Chennai."
                }
            },
            {
                "@type": "Question",
                "name": "Can I choose specific components for my custom PC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. You can select the processor, motherboard, RAM, storage, GPU, cooling system, cabinet, and power supply based on your requirements. We customize and build it according to your needs."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to build a custom PC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most custom PC builds are completed within 1 to 3 business days depending on the selected configuration and component availability."
                }
            },
            {
                "@type": "Question",
                "name": "Are custom PCs upgradeable?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. All our custom-built systems are fully upgradeable and designed to be future-ready."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide warranty on custom PCs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. All components come with manufacturer warranty and we provide local support assistance in Chennai."
                }
            },
            {
                "@type": "Question",
                "name": "Can you build a gaming PC under a budget?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer budget-friendly gaming PC builds optimized for performance while maintaining quality and reliability."
                }
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Custom PC Build in Chennai | Gaming & Workstation PCs</title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Looking for Custom PC Build in Chennai? Get gaming PCs, workstation builds & budget desktop systems with warranty at Brilliant Memory Computers." />
                <meta name="keywords" content="Custom PC build in Chennai, gaming PC build Chennai, workstation PC build Chennai, budget gaming PC Chennai, custom desktop computer Chennai, high-performance desktop systems, PC builder in Chennai, Intel and AMD gaming PCs, NVIDIA graphics PC Chennai, video editing workstation PC Chennai, affordable gaming PC Chennai, RGB gaming PC Chennai, EMI gaming PC Chennai, Tamil Nadu PC delivery, Brilliant Memory Computers Chennai." />
                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/custom-pc-build" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>

            <main className="bg-[#f0f5ff] overflow-hidden">
                <section className="relative text-gray-800 py-24 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">

                    {/* Content */}
                    <div className="md:w-1/2 space-y-6 z-10">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
                            Custom PC Build in Chennai – <span className="text-blue-600">Brilliant Memory Computers</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl font-bold text-gray-700">
                            Build Your Dream PC in Chennai
                        </h2>

                        <p className="opacity-90 leading-relaxed text-gray-700">
                            Looking for a reliable Custom PC Build in Chennai that matches your performance needs and budget?
                            Brilliant Memory Computers is your trusted destination for high-performance, future-ready custom desktop computers.
                        </p>

                        <p className="opacity-90 leading-relaxed text-gray-700">
                            Whether you need a gaming PC, professional workstation PC or an affordable home/office system,
                            we design and assemble systems tailored exactly to your requirements with genuine components and warranty support.
                        </p>

                        <Link href="/categories">
                            <button className="bg-blue-600 mt-4 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 hover:scale-105 transition shadow-lg">
                                START BUILD
                            </button>
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 z-10">
                        <Image
                            src="/img/pc-1.png"
                            alt="Custom PC Build in Chennai"
                            width={600}
                            height={600}
                            className="rounded-2xl shadow-2xl hover:scale-105 transition"
                        />
                    </div>

                    {/* Glow Shapes */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>

                </section>

                <WhyChooseBNComputers />

                <section className="relative py-16 overflow-hidden bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
                                Customize Every Component
                            </h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                Customize your PC by choosing components based on performance, budget and future upgrade plans:
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {[
                                { t: "Processor", d: "Intel / AMD latest generation CPUs" },
                                { t: "Motherboard", d: "Gaming / Professional chipset" },
                                { t: "RAM", d: "DDR4 / DDR5 high-speed memory" },
                                { t: "Storage", d: "NVMe SSD / SATA SSD / HDD options" },
                                { t: "Graphics Card", d: "NVIDIA / AMD GPUs" },
                                { t: "Power Supply", d: "High-efficiency SMPS" },
                                { t: "Cabinet", d: "High airflow & premium design" },
                                { t: "Cooling", d: "Air cooling / Liquid cooling solutions" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 hover:shadow-lg hover:border-blue-200 transition">
                                    <h3 className="font-semibold text-gray-800">{item.t}</h3>
                                    <p className="text-sm text-gray-500">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-[#f0f5ff]">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Gaming PC Build in Chennai</h2>
                            <p className="mb-4 font-semibold text-gray-800">Want a powerful Custom Gaming PC in Chennai? We build systems for:</p>
                            <ul className="space-y-2 mb-4 list-disc pl-5 text-gray-700">
                                <li>High FPS gaming</li>
                                <li>Streaming setups</li>
                                <li>1080p / 1440p / 4K gaming</li>
                                <li>eSports players</li>
                                <li>RGB gaming setups</li>
                            </ul>
                            <p className="text-gray-600 italic">From budget gaming PCs to high-end performance rigs, we build according to your exact gaming goals.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                            <h2 className="text-2xl font-bold mb-4 text-blue-600">Workstation PC Build in Chennai</h2>
                            <p className="mb-4 font-semibold text-gray-800">Need a professional Workstation PC Build in Chennai? Ideal for:</p>
                            <ul className="space-y-2 mb-4 list-disc pl-5 text-gray-700">
                                <li>Video editing</li>
                                <li>3D rendering</li>
                                <li>Architecture & design</li>
                                <li>Software development</li>
                                <li>Business productivity</li>
                            </ul>
                            <p className="text-gray-600 italic">Our workstation builds focus on multi-core CPUs, higher RAM capacity and powerful GPUs for smooth performance.</p>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Why Choose a Custom PC Instead of a Branded Desktop?
                            </h2>

                            <ul className="space-y-3 sm:space-y-4">
                                {[
                                    "Better performance for your budget",
                                    "Fully upgradeable & future-ready",
                                    "No unnecessary pre-installed software",
                                    "Component-level warranty",
                                    "Optimized cooling & airflow",
                                    "Complete control over configuration"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-600 text-sm sm:text-base mt-5 sm:mt-6">
                                A custom desktop computer in Chennai gives you flexibility, power and long-term value.
                            </p>
                        </div>

                        <div className="order-first lg:order-last">
                            <Image
                                src="/img/pc-3.png"
                                alt="Custom PC Build in Chennai"
                                width={600}
                                height={600}
                                className="rounded-2xl shadow-2xl hover:scale-105 transition"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="max-w-7xl mx-auto px-4 py-16 ">
                        <h2 className="text-3xl font-semibold text-center mb-14 text-gray-900">
                            Our Custom PC Build Process
                        </h2>

                        <div className="space-y-10">
                            {[
                                "01- Requirement discussion & budget planning",
                                "02 - Component selection & transparent quotation",
                                "03 - Professional assembly & cable management",
                                "04 - Performance & stress testing",
                                "05 - Final delivery or in-store pickup"
                            ].map((step, i) => (
                                <div key={i} className={`flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                    <div className="bg-[#f0f5ff] p-6 rounded-xl w-full md:w-1/2 border border-blue-100 shadow-sm font-semibold text-gray-800">
                                        {step}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="bg-[#f0f5ff] rounded-lg shadow-md max-w-7xl mx-auto px-4 py-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                            Best Place for Custom PC Build in Chennai
                        </h2>
                        <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Located in Chennai, <strong>Brilliant Memory Computers</strong> has built a strong reputation as a reliable Custom PC Builder in Chennai. Our team stays updated with the latest hardware trends to ensure maximum value with good performance PC’s.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Whether you are a gamer, a content creator, professional or business owner, Brilliant Memory Computers is your trusted solution for Custom PC Build in Chennai.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
                            Trusted Custom PC Builder in Chennai
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Brilliant Memory Computers has years of experience in assembling performance-optimized Custom PCs in Chennai. Our technical team carefully selects compatible components, ensures proper BIOS configuration and performs stability testing before delivery.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Genuine components with manufacturer warranty",
                                "Safe packaging & delivery",
                                "Transparent pricing",
                                "Long-term upgrade support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="font-semibold text-gray-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-900">Custom PC vs Branded Desktop – Which is Better?</h2>
                        <p className="text-center mb-8 text-gray-600">When choosing between a Custom PC Build in Chennai and a branded desktop, understanding the difference which helps you make a smarter investment in your money.</p>
                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="p-4 border-b border-blue-500">Custom PC Build in Chennai</th>
                                        <th className="p-4 border-b border-blue-500">Branded Desktop</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {[
                                        { c: "Better price-performance ratio", b: "Limited configuration options" },
                                        { c: "Fully upgradeable & future-ready", b: "Restricted hardware upgrades" },
                                        { c: "Choose Intel / AMD & NVIDIA / AMD GPUs", b: "Fixed specifications" },
                                        { c: "No unnecessary pre-installed software", b: "Comes with unwanted bloatware" },
                                        { c: "Optimized cooling & airflow", b: "Standard cooling design" },
                                        { c: "Component-level warranty", b: "Limited service-based warranty" }
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                                            <td className="p-4 border-b">{row.c}</td>
                                            <td className="p-4 border-b">{row.b}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f0f5ff] py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-gray-900">Custom PC Build in Chennai Price</h2>
                        <p className="text-center mb-8 text-gray-600">The cost of a Custom PC Build in Chennai depends on performance requirements, components, and usage type.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                            {[
                                { t: "Budget Office PC", p: "₹25,000+" },
                                { t: "Budget Gaming PC", p: "₹40,000+" },
                                { t: "Mid-Range Gaming", p: "₹60k - ₹90k" },
                                { t: "High-End Gaming", p: "₹1,00,000+" },
                                { t: "Workstation PC", p: "Config Based" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center border-b-4 border-blue-600">
                                    <p className="font-bold text-gray-800 mb-2">{item.t}</p>
                                    <p className="text-2xl font-extrabold text-blue-600">{item.p}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center font-bold text-gray-700 underline decoration-blue-500">We are providing transparent pricing and configuration-based quotations with no hidden charges.</p>
                    </div>
                </section>

                <section className="bg-blue-600 py-16 text-white text-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Get Your Custom PC Build in Chennai Today</h2>
                        <p className="text-xl mb-12 opacity-90">Ready to build your dream system? We ensure secure packaging, safe delivery across Tamil Nadu and flexible EMI options.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {[
                                "Free consultation",
                                "Performance-based recommendations",
                                "Transparent pricing",
                                "Genuine branded components",
                                "Warranty support",
                                "All Over Tamil Nadu Free Shipping",
                                "EMI Option Available"
                            ].map((item, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <p className="font-bold">{item}</p>
                                </div>
                            ))}
                        </div>
                        <Link href='/contact-us'>
                            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-extrabold text-xl hover:bg-gray-100 hover:scale-105 transition shadow-2xl">
                                CONTACT US NOW
                            </button>
                        </Link>
                    </div>
                </section>

                <section className="bg-white py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-12 text-gray-900">What Our Customers Say About Our Custom PC Build in Chennai</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { t: "Excellent Custom Gaming PC Build in Chennai with clean cable management and powerful performance. Highly recommended for serious gamers.", a: "Customer, Chennai" },
                                { t: "Brilliant Memory Computers helped me build a high-performance workstation PC in Chennai for video editing. Genuine components and smooth performance.", a: "Business Client, Chennai" },
                                { t: "Best place for Custom PC Build in Chennai. Transparent pricing, expert guidance, and reliable warranty support.", a: "Happy Customer" },
                                { t: "Good customer care and proper response, happy to purchase a customized pc from Brilliant Memory computers.", a: "Happy Customer" },
                                { t: "Most satisfied purchase pc also its worth of my budget, thankyou BMC", a: "Happy Customer" }
                            ].map((test, i) => (
                                <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic relative">
                                    <span className="text-4xl text-blue-200 absolute top-2 right-4 leading-none">"</span>
                                    <p className="text-gray-700 mb-4 z-10 relative">{test.t}</p>
                                    <p className="text-blue-600 font-bold not-italic">– {test.a}</p>
                                    <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bg-white">
                    <PcFaqSection />
                </div>
            </main>
        </>
    );
}
