import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Cpu, CircuitBoard, MemoryStick, HardDrive,
    MonitorPlay, Zap, Server, Wind,
    ShieldCheck, IndianRupee, Gamepad2, Wrench,
    BadgeCheck, Headphones, Check, Star, ChevronDown, ChevronUp
} from "lucide-react";

const componentsList = [
    {
        num: "01",
        t: "Processor",
        d: "Intel / AMD latest generation CPUs",
        Icon: Cpu,
        ic: "bg-blue-50 text-blue-600",
        line: "from-sky-400 to-blue-600"
    },
    {
        num: "02",
        t: "Motherboard",
        d: "Gaming / Professional chipset options",
        Icon: CircuitBoard,
        ic: "bg-violet-50 text-violet-600",
        line: "from-violet-400 to-violet-700"
    },
    {
        num: "03",
        t: "RAM",
        d: "DDR4 / DDR5 high-speed memory",
        Icon: MemoryStick,
        ic: "bg-green-50 text-green-600",
        line: "from-green-400 to-green-600"
    },
    {
        num: "04",
        t: "Storage",
        d: "NVMe SSD / SATA SSD / HDD options",
        Icon: HardDrive,
        ic: "bg-orange-50 text-orange-500",
        line: "from-orange-400 to-orange-600"
    },
    {
        num: "05",
        t: "Graphics Card",
        d: "NVIDIA / AMD GPUs",
        Icon: MonitorPlay,
        ic: "bg-rose-50 text-rose-600",
        line: "from-rose-400 to-rose-600"
    },
    {
        num: "06",
        t: "Power Supply",
        d: "High-efficiency SMPS options",
        Icon: Zap,
        ic: "bg-yellow-50 text-yellow-500",
        line: "from-yellow-400 to-yellow-500"
    },
    {
        num: "07",
        t: "Cabinet",
        d: "High-airflow designs & premium finishes",
        Icon: Server,
        ic: "bg-indigo-50 text-indigo-600",
        line: "from-indigo-400 to-indigo-600"
    },
    {
        num: "08",
        t: "Cooling",
        d: "Air cooling / Liquid cooling solutions",
        Icon: Wind,
        ic: "bg-cyan-50 text-cyan-600",
        line: "from-cyan-400 to-cyan-600"
    },
];

const comparisonData = [
    {
        custom: "Better price-performance ratio",
        branded: "Limited configuration options"
    },
    {
        custom: "Easy upgrades for future needs",
        branded: "Restricted hardware upgrades"
    },
    {
        custom: "Choose Intel / AMD CPUs and NVIDIA / AMD GPUs",
        branded: "Fixed specifications"
    },
    {
        custom: "No unnecessary pre-installed software",
        branded: "May include unwanted bloatware"
    },
    {
        custom: "Cooling & airflow tailored to components",
        branded: "Standard cooling design"
    },
    {
        custom: "Component-level warranty options",
        branded: "Service-based warranty terms"
    }
];

const priceRanges = [
    {
        title: "Budget Office PC",
        price: "Starting from ₹25,000"
    },
    {
        title: "Budget Gaming PC",
        price: "Starting from ₹40,000"
    },
    {
        title: "Mid-Range Gaming PC",
        price: "₹60,000–₹90,000"
    },
    {
        title: "High-End Gaming PC",
        price: "₹1,00,000+"
    },
    {
        title: "Workstation PC",
        price: "Based on configuration"
    }
];

const customerReviews = [
    {
        text: "“Excellent Custom Gaming PC Build in Chennai! Clean cable management and great performance. Highly recommended for gamers.”",
        author: "– Customer, Chennai"
    },
    {
        text: "“Brilliant Memory Computers helped me choose a high-performance workstation PC in Chennai for video editing. Genuine components and smooth performance.”",
        author: "– Business Client, Chennai"
    },
    {
        text: "“A great place for Custom PC Build in Chennai, with transparent pricing, helpful guidance and reliable warranty support.”",
        author: "– Happy Customer"
    },
    {
        text: "“Good customer care and prompt responses. Happy with my customized PC purchase from Brilliant Memory Computers.”",
        author: "– Happy Customer"
    },
    {
        text: "“A satisfying PC purchase that stayed within my budget. Thank you, BMC!”",
        author: "– Happy Customer"
    }
];

const faqItems = [
    {
        question: "Why choose Brilliant Memory Computers for custom PC build in Chennai?",
        answer: "We provide expert guidance, genuine components, professional assembly, stress testing and after-sales support."
    },
    {
        question: "Can I choose specific components?",
        answer: "Yes. Choose your processor, motherboard, RAM, storage, GPU, cooling, cabinet and power supply to suit your requirements."
    },
    {
        question: "How long does it take to build a custom PC?",
        answer: "Most PC builds take 1–3 business days, depending on the configuration."
    },
    {
        question: "Are custom PCs upgradeable?",
        answer: "Yes. Custom PCs can be upgraded with compatible components as your needs change."
    },
    {
        question: "Do you provide warranty?",
        answer: "Yes. Components come with applicable manufacturer warranties and support."
    },
    {
        question: "Can you build a gaming PC under a budget?",
        answer: "Yes. We offer budget gaming PC builds tailored to your performance needs and budget."
    }
];

export default function BuildPC() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why choose Brilliant Memory Computers for custom PC build in Chennai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide expert guidance, genuine components, professional assembly, stress testing and after-sales support."
                }
            },
            {
                "@type": "Question",
                "name": "Can I choose specific components?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Choose your processor, motherboard, RAM, storage, GPU, cooling, cabinet and power supply to suit your requirements."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to build a custom PC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most PC builds take 1–3 business days, depending on the configuration."
                }
            },
            {
                "@type": "Question",
                "name": "Are custom PCs upgradeable?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Custom PCs can be upgraded with compatible components as your needs change."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide warranty?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Components come with applicable manufacturer warranties and support."
                }
            },
            {
                "@type": "Question",
                "name": "Can you build a gaming PC under a budget?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer budget gaming PC builds tailored to your performance needs and budget."
                }
            }
        ]
    };

    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.brilliantmemorycomputers.in/custom-pc-build#collection",
        "url": "https://www.brilliantmemorycomputers.in/custom-pc-build",
        "name": "Custom PC Build in Chennai",
        "description": "Explore custom PC builds in Chennai, including gaming PCs, workstation PCs and desktop configurations tailored to different budgets and performance needs.",
        "inLanguage": "en-IN",
        "isPartOf": {
            "@type": "WebSite",
            "name": "Brilliant Memory Computers",
            "url": "https://www.brilliantmemorycomputers.in/"
        },
        "about": {
            "@type": "Thing",
            "name": "Custom PC Building"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Brilliant Memory Computers",
            "url": "https://www.brilliantmemorycomputers.in"
        }
    };

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Custom PC Build Options in Chennai",
        "description": "Custom PC configurations for gaming, professional workloads, business use and different budgets.",
        "numberOfItems": 5,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Custom Gaming PC Build in Chennai"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Workstation PC Build in Chennai"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Budget Office PC"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Mid-Range Gaming PC"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "High-End Gaming PC"
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.brilliantmemorycomputers.in/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Custom PC Build in Chennai",
                "item": "https://www.brilliantmemorycomputers.in/custom-pc-build"
            }
        ]
    };

    return (
        <>
            <Head>
                <title>Custom PC Builder in Chennai | Brilliant Memory Computers</title>
                <meta name="description" content="Build your dream PC with Brilliant Memory Computers in Chennai. Explore custom gaming PCs, workstations, genuine components and flexible configurations." />
                <meta name="keywords" content="custom PC builder Chennai, custom desktop computer Chennai, gaming PC build Chennai, workstation PC Chennai, PC assembly Chennai, budget gaming PC Chennai, video editing PC Chennai, 3D rendering PC Chennai, custom computer configuration, IT Fixer" />
                <link rel="canonical" href="https://www.itfixer.in/custom-pc-build" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="Brilliant Memory Computers" />
                <meta property="og:title" content="Custom PC Builder in Chennai | Brilliant Memory Computers" />
                <meta property="og:description" content="Build your dream PC in Chennai with custom gaming PCs, workstation systems, genuine components and configurations tailored to your needs." />
                <meta property="og:url" content="https://www.brilliantmemorycomputers.in/custom-pc-build" />
                <meta property="og:image" content="https://www.brilliantmemorycomputers.in/REPLACE-WITH-ACTUAL-PC-BUILD-IMAGE.jpg" />
                <meta property="og:image:alt" content="Custom gaming PC and workstation builds by Brilliant Memory Computers in Chennai" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Custom PC Builder in Chennai | Brilliant Memory Computers" />
                <meta name="twitter:description" content="Explore custom gaming PCs, workstation builds and personalized desktop configurations at Brilliant Memory Computers in Chennai." />
                <meta name="twitter:image" content="https://www.brilliantmemorycomputers.in/REPLACE-WITH-ACTUAL-PC-BUILD-IMAGE.jpg" />
                <meta name="twitter:image:alt" content="Custom PC builds for gaming and professional work in Chennai" />

                <link rel="image_src" href="https://www.brilliantmemorycomputers.in/REPLACE-WITH-ACTUAL-PC-BUILD-IMAGE.jpg" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            </Head>

            <main className="bg-[#f0f5ff] text-gray-800 overflow-hidden">

                {/* 1. Hero Section: H1 & H2 */}
                <section className="relative py-16 md:py-24 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
                    <div className="md:w-1/2 space-y-6 z-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                            Custom PC Build in Chennai – <span className="text-blue-600">Brilliant Memory Computers</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                            Build Your Dream PC in Chennai
                        </h2>

                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            Looking for a reliable Custom PC Build in Chennai? Brilliant Memory Computers helps you build a PC that suits your budget, performance needs and everyday requirements.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                            Whether you need a powerful gaming PC, a professional workstation PC or an affordable home/office system, we assemble custom desktop computers with genuine components and warranty support, tailored to your specific needs.
                        </p>

                        <div className="pt-2">
                            <Link href="/categories">
                                <button className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-blue-700 hover:scale-105 transition shadow-lg inline-flex items-center gap-2">
                                    START BUILD
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 z-10 flex justify-center">
                        <Image
                            src="/img/pc-1.png"
                            alt="Custom PC Build in Chennai – Brilliant Memory Computers"
                            width={600}
                            height={500}
                            priority
                            className="w-full h-auto max-w-md md:max-w-full rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
                        />
                    </div>
                </section>

                {/* 2. Why Choose Brilliant Memory Computers Section */}
                <section className="py-12 sm:py-16 md:py-24 bg-white border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[260px] sm:h-[340px] md:h-[440px]">
                                <Image
                                    src="/img/pc-2.png"
                                    alt="Why Choose Brilliant Memory Computers for Custom PC Build in Chennai"
                                    width={600}
                                    height={440}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 text-white">
                                    <h3 className="text-lg sm:text-2xl font-bold">
                                        Custom PC Experts
                                    </h3>
                                    <p className="text-xs sm:text-sm opacity-90">
                                        Trusted PC Builders in Chennai
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                    Why Choose Brilliant Memory Computers for Custom PC Build in Chennai?
                                </h2>

                                <p className="text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                    Brilliant Memory Computers makes building your ideal PC easier with expert guidance, reliable hardware and careful assembly tailored to your needs.
                                </p>

                                <div className="space-y-3.5 sm:space-y-4">
                                    {[
                                        { icon: <Cpu />, text: "Expert configuration guidance" },
                                        { icon: <ShieldCheck />, text: "Genuine branded components only" },
                                        { icon: <IndianRupee />, text: "Budget-friendly & high-performance builds" },
                                        { icon: <Gamepad2 />, text: "Gaming, editing, business & office solutions" },
                                        { icon: <Wrench />, text: "Professional cable management & airflow optimization" },
                                        { icon: <BadgeCheck />, text: "Thorough stress testing before delivery" },
                                        { icon: <Headphones />, text: "Local Chennai support & after-sales service" }
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-2 rounded-xl transition hover:bg-gray-50">
                                            <div className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5">
                                                {feature.icon}
                                            </div>
                                            <p className="text-sm sm:text-base font-medium text-gray-800">
                                                {feature.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Customize Every Component */}
                <section className="relative py-16 md:py-20 overflow-hidden bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-3">
                                Build Your Machine
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                                Customize Every Component
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                                Choose each component to suit your performance requirements, budget and future upgrade plans.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {componentsList.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-gray-100 rounded-2xl p-6 overflow-hidden hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <p className="text-xs font-bold tracking-widest text-gray-300 mb-3">
                                        {item.num}
                                    </p>

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.ic} group-hover:scale-110 transition-transform duration-200`}>
                                        <item.Icon size={26} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.t}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.d}</p>

                                    <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.line}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4 & 5. Gaming PC Build in Chennai & Workstation PC Build in Chennai */}
                <section className="py-16 md:py-20 bg-[#f0f5ff]">
                    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Gaming PC Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 flex flex-col justify-between hover:shadow-xl transition duration-300">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">
                                    Gaming PC Build in Chennai
                                </h2>
                                <p className="mb-4 text-gray-700 leading-relaxed">
                                    Looking for a Custom Gaming PC in Chennai? We build gaming systems tailored to your play style, preferred resolution and performance goals.
                                </p>
                                <ul className="space-y-2.5 mb-6 text-gray-700">
                                    {[
                                        "High FPS gaming",
                                        "Streaming setups",
                                        "1080p / 1440p / 4K gaming",
                                        "eSports players",
                                        "RGB gaming setups"
                                    ].map((pt, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 italic bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                                From budget gaming PCs to high-end performance rigs, every build is planned around your gaming needs.
                            </p>
                        </div>

                        {/* Workstation PC Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-md border border-violet-100 flex flex-col justify-between hover:shadow-xl transition duration-300">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-600">
                                    Workstation PC Build in Chennai
                                </h2>
                                <p className="mb-4 text-gray-700 leading-relaxed">
                                    Looking for a reliable Workstation PC Build in Chennai? We configure systems for demanding professional workloads, creative projects and everyday business tasks.
                                </p>
                                <p className="font-semibold text-gray-900 mb-2">Ideal for:</p>
                                <ul className="space-y-2.5 mb-6 text-gray-700">
                                    {[
                                        "Video editing",
                                        "3D rendering",
                                        "Architecture & design",
                                        "Software development",
                                        "Business productivity"
                                    ].map((pt, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 italic bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                                Our workstation builds combine multi-core CPUs, higher RAM capacity and powerful GPUs to handle demanding tasks smoothly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Why Choose a Custom PC Instead of a Branded Desktop? */}
                <section className="bg-white py-16 md:py-20 border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    Why Choose a Custom PC Instead of a Branded Desktop?
                                </h2>

                                <ul className="space-y-3.5 sm:space-y-4 mb-6">
                                    {[
                                        "Better performance for your budget",
                                        "Easy upgrades for future needs",
                                        "No unnecessary pre-installed software",
                                        "Component-level warranty",
                                        "Improved cooling & airflow",
                                        "Full control over configuration"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-800 text-base font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    A custom desktop computer in Chennai lets you choose the right components for your needs while offering flexibility and long-term value.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <Image
                                    src="/img/pc-3.png"
                                    alt="Why Choose a Custom PC Instead of a Branded Desktop?"
                                    width={600}
                                    height={500}
                                    className="rounded-2xl shadow-xl hover:scale-105 transition duration-300 w-full max-w-md lg:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Our Custom PC Build Process */}
                <section className="bg-gray-50 py-16 md:py-20">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Our Custom PC Build Process
                            </h2>
                        </div>

                        <div className="space-y-5">
                            {[
                                "01 – Discuss your requirements & budget",
                                "02 – Select components & receive a transparent quotation",
                                "03 – Professional assembly & cable management",
                                "04 – Performance checks & stress testing",
                                "05 – Final delivery or in-store pickup"
                            ].map((step, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-blue-300 transition duration-200"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                                        0{i + 1}
                                    </div>
                                    <p className="text-base sm:text-lg font-semibold text-gray-800">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8 & 11. Best Place for Custom PC Build in Chennai & Trusted Custom PC Builder in Chennai */}
                <section className="bg-white py-16 md:py-20 border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        {/* Best Place */}
                        <div className="mb-14">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Best Place for Custom PC Build in Chennai
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                                Based in Chennai, Brilliant Memory Computers helps customers find the right hardware for their needs and budget. As a reliable Custom PC Builder in Chennai, we stay updated on the latest hardware to deliver value and dependable performance.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                Whether you’re a gamer, content creator, professional or business owner, we’re here to help with your Custom PC Build in Chennai.
                            </p>
                        </div>

                        {/* Trusted Builder */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Trusted Custom PC Builder in Chennai
                            </h2>
                            <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                                Brilliant Memory Computers builds performance-focused Custom PCs in Chennai with carefully selected, compatible components. Our technical team handles BIOS configuration and stability testing before delivery.
                            </p>

                            <p className="font-semibold text-gray-900 text-lg mb-4">
                                We prioritize:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Genuine components with manufacturer warranty",
                                    "Safe packaging & delivery",
                                    "Transparent pricing",
                                    "Long-term upgrade support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="w-2.5 h-2.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                                        <span className="font-medium text-gray-800 text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. Custom PC vs Branded Desktop – Which Is Better? */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Custom PC vs Branded Desktop – Which Is Better?
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                                Choosing between a Custom PC Build in Chennai and a branded desktop depends on your budget, performance needs and upgrade plans.
                            </p>
                        </div>

                        {/* Comparison Cards / Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Custom PC */}
                            <div className="p-8 rounded-3xl bg-white border-2 border-blue-500 shadow-xl">
                                <h3 className="text-2xl font-bold text-blue-600 mb-6 pb-3 border-b border-blue-100">
                                    Custom PC Build in Chennai
                                </h3>
                                <ul className="space-y-4">
                                    {comparisonData.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check size={14} strokeWidth={3} />
                                            </span>
                                            <span className="text-gray-800 font-medium text-base">{item.custom}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Branded Desktop */}
                            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-100">
                                    Branded Desktop
                                </h3>
                                <ul className="space-y-4">
                                    {comparisonData.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="text-gray-600 text-base">{item.branded}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Follow-up paragraph */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                A Custom Desktop Computer in Chennai offers greater flexibility over components and upgrades. Whether you need a Gaming PC Build in Chennai or a professional workstation, you can choose a configuration that suits your workload and budget.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 10. Custom PC Build in Chennai Price */}
                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                                Custom PC Build in Chennai Price
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
                                The Custom PC Build in Chennai Price varies based on your chosen components, performance needs and intended use.
                            </p>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 inline-block px-4 py-1 rounded-full">
                                Estimated Price Range:
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                            {priceRanges.map((item, i) => (
                                <div
                                    key={i}
                                    className="group relative bg-white border border-gray-200 rounded-2xl p-6 text-center transition duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 flex flex-col justify-between"
                                >
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

                                    <h3 className="text-gray-700 font-semibold text-base mb-3 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </h3>

                                    <p className="text-xl sm:text-2xl font-extrabold text-gray-900">
                                        {item.price}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-center mt-10 text-gray-600 text-base sm:text-lg">
                            We provide transparent pricing and configuration-based quotations with no hidden charges.
                        </p>
                    </div>
                </section>

                {/* 12. Get Your Custom PC Build in Chennai Today */}
                <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-50 via-white to-blue-50 overflow-hidden border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                                Get Your Custom PC Build in Chennai Today
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Ready to build your dream system? Get expert guidance and a configuration that fits your needs and budget.
                            </p>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-10">
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
                                    className="bg-white border border-blue-200 text-gray-800 font-medium px-4 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:shadow-md hover:border-blue-400 transition"
                                >
                                    ✓ {item}
                                </div>
                            ))}
                        </div>

                        {/* Bottom Paragraph */}
                        <div className="max-w-3xl mx-auto text-center bg-white p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-md">
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Call us today or visit our Chennai showroom to start your Custom PC Build in Chennai. Enjoy secure packaging, safe delivery across Tamil Nadu and flexible EMI options for your Gaming PC or Workstation PC.
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-4">
                                <Link href="/categories">
                                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow">
                                        Explore Components
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 13. What Our Customers Say About Our Custom PC Build in Chennai */}
                <section className="py-16 md:py-20 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full inline-block mb-3">
                                Testimonials
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                What Our Customers Say About Our Custom PC Build in Chennai
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {customerReviews.map((rev, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex text-amber-400 mb-3">
                                            {[...Array(5)].map((_, s) => (
                                                <Star key={s} size={18} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic text-base leading-relaxed mb-4">
                                            {rev.text}
                                        </p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900 border-t border-gray-200 pt-3">
                                        {rev.author}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 14. Frequently Asked Questions – Custom PC Build in Chennai */}
                <section className="py-16 md:py-24 bg-[#f0f5ff]">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                Frequently Asked Questions – Custom PC Build in Chennai
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqItems.map((faq, index) => {
                                const isOpen = openFaqIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`border rounded-2xl transition-all duration-200 bg-white overflow-hidden shadow-sm ${isOpen ? "border-blue-500 shadow-md" : "border-gray-200"
                                            }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleFaq(index)}
                                            className="w-full flex items-center justify-between p-5 text-left text-gray-900 font-bold text-base sm:text-lg hover:text-blue-600 transition"
                                        >
                                            <span>{faq.question}</span>
                                            <span className="ml-4 text-blue-600 flex-shrink-0">
                                                {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5 text-gray-700 text-base leading-relaxed border-t border-gray-100 pt-3">
                                                <p>{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
