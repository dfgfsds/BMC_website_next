import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import WhyChooseBNComputers from "@/components/WhyChooseBNComputers";
import PcFaqSection from "@/components/pcFaq";
import {
    Cpu, CircuitBoard, MemoryStick, HardDrive,
    MonitorPlay, Zap, Server, Wind
} from "lucide-react";
import {
    Gamepad2,
    Monitor,

    Video,
    Box,
    Code,
    Briefcase
} from "lucide-react";

const components = [
    {
        num: "01", t: "Processor", d: "Intel / AMD latest gen CPUs",
        Icon: Cpu, ic: "bg-blue-50 text-blue-600", line: "from-sky-400 to-blue-600"
    },
    {
        num: "02", t: "Motherboard", d: "Gaming / Professional chipset",
        Icon: CircuitBoard, ic: "bg-violet-50 text-violet-600", line: "from-violet-400 to-violet-700"
    },
    {
        num: "03", t: "RAM", d: "DDR4 / DDR5 high-speed memory",
        Icon: MemoryStick, ic: "bg-green-50 text-green-600", line: "from-green-400 to-green-600"
    },
    {
        num: "04", t: "Storage", d: "NVMe SSD / SATA / HDD options",
        Icon: HardDrive, ic: "bg-orange-50 text-orange-500", line: "from-orange-400 to-orange-600"
    },
    {
        num: "05", t: "Graphics Card", d: "NVIDIA / AMD GPUs",
        Icon: MonitorPlay, ic: "bg-rose-50 text-rose-600", line: "from-rose-400 to-rose-600"
    },
    {
        num: "06", t: "Power Supply", d: "High-efficiency SMPS",
        Icon: Zap, ic: "bg-yellow-50 text-yellow-500", line: "from-yellow-400 to-yellow-500"
    },
    {
        num: "07", t: "Cabinet", d: "High airflow & premium design",
        Icon: Server, ic: "bg-indigo-50 text-indigo-600", line: "from-indigo-400 to-indigo-600"
    },
    {
        num: "08", t: "Cooling", d: "Air cooling / Liquid cooling",
        Icon: Wind, ic: "bg-cyan-50 text-cyan-600", line: "from-cyan-400 to-cyan-600"
    },
];


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
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto max-w-md mx-auto md:max-w-full rounded-2xl shadow-2xl hover:scale-105 transition"
                        />
                    </div>


                    {/* Glow Shapes */}
                    {/* <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute bottom-0 -left-20 w-72 h-72 bg-blue-500 rounded-full opacity-30 blur-3xl"></div> */}

                </section>

                <WhyChooseBNComputers />

                <section className="relative py-16 overflow-hidden bg-gray-50">
                    {/* Background blobs */}
                    <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-100 rounded-full opacity-40 blur-3xl pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-4">
                                Build Your Machine
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                                Customize Every{" "}
                                <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                                    Component
                                </span>
                            </h2>
                            <p className="text-gray-400 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                                Choose components based on performance, budget and future upgrade plans.
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {components.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-gray-100 rounded-2xl p-5 overflow-hidden hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Number */}
                                    <p className="text-xs font-bold tracking-widest text-gray-200 mb-3">
                                        {item.num}
                                    </p>

                                    {/* Icon */}
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.ic} group-hover:scale-110 transition-transform duration-200`}>
                                        <item.Icon size={24} strokeWidth={1.8} />
                                    </div>

                                    {/* Text */}
                                    <h3 className="font-bold text-gray-800 text-sm mb-1">{item.t}</h3>
                                    <p className="text-xs text-gray-400 font-light leading-relaxed">{item.d}</p>

                                    {/* Bottom accent line */}
                                    <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.line}`} />
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
                                height={500}
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
                    <div className=" max-w-7xl mx-auto px-4 py-12">
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

                <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-6xl mx-auto px-4">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                Custom PC vs Branded Desktop
                            </h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                Understand the difference and choose the best system for your needs and budget.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Custom PC */}
                            <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-blue-100 shadow-xl hover:shadow-2xl transition duration-300">
                                <h3 className="text-xl font-bold text-blue-600 mb-6">
                                    Custom PC Build
                                </h3>

                                <ul className="space-y-4 text-gray-700">
                                    {[
                                        "Better price-performance ratio",
                                        "Fully upgradeable & future-ready",
                                        "Choose Intel / AMD & NVIDIA / AMD GPUs",
                                        "No unnecessary pre-installed software",
                                        "Optimized cooling & airflow",
                                        "Component-level warranty"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Branded Desktop */}
                            <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">
                                    Branded Desktop
                                </h3>

                                <ul className="space-y-4 text-gray-700">
                                    {[
                                        "Limited configuration options",
                                        "Restricted hardware upgrades",
                                        "Fixed specifications",
                                        "Comes with unwanted bloatware",
                                        "Standard cooling design",
                                        "Limited service-based warranty"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                Custom PC Build Price in Chennai
                            </h2>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                                Choose the right configuration based on your needs — from budget to high-performance builds.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                            {[
                                { t: "Budget Office PC", p: "₹25,000+" },
                                { t: "Budget Gaming PC", p: "₹40,000+" },
                                { t: "Mid-Range Gaming", p: "₹60k - ₹90k" },
                                { t: "High-End Gaming", p: "₹1,00,000+" },
                                { t: "Workstation PC", p: "Config Based" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center transition duration-300 hover:shadow-xl hover:-translate-y-1"
                                >

                                    {/* Top subtle line */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

                                    {/* Title */}
                                    <p className="text-gray-700 font-medium mb-2 group-hover:text-gray-900 transition">
                                        {item.t}
                                    </p>

                                    {/* Price */}
                                    <p className="text-2xl md:text-3xl font-extrabold text-gray-900">
                                        {item.p}
                                    </p>

                                </div>
                            ))}

                        </div>

                        {/* Bottom Note */}
                        <p className="text-center mt-10 text-gray-600">
                            Transparent pricing with configuration-based quotation.
                            <span className="font-semibold text-gray-900"> No hidden charges.</span>
                        </p>

                    </div>
                </section>

                <section className="relative py-24 bg-white overflow-hidden">

                    {/* Soft Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">

                        {/* Heading */}
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                Get Your Custom PC Build in Chennai Today
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mt-6">
                                Build your dream system with expert guidance, genuine components, and safe delivery across Tamil Nadu.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mb-14">

                            {[
                                "Free consultation",
                                "Performance-based recommendations",
                                "Transparent pricing",
                                "Genuine branded components",
                                "Warranty support",
                                "All Over Tamil Nadu Free Shipping",
                                "EMI Option Available"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center text-gray-700 font-medium shadow-sm hover:shadow-md transition"
                                >
                                    {item}
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
