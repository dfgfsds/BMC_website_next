import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import LogoImg from '../../public/img/bmc-logo.png';
import {
    Globe,
    MapPin,
    Phone,
    Mail,
    MessageSquare,
    Star,
    Laptop,
    Monitor,
    Keyboard,
    Printer,
    Network,
    Building2,
    Package,
    ShoppingCart,
    ChevronDown,
    Clock,
    Users,
    CheckCircle2,
    ExternalLink,
    ArrowRight,
    ShieldCheck,
    Award
} from 'lucide-react';
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaWhatsapp,
    FaGoogle
} from 'react-icons/fa6';

export default function Connect() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const breadcrumbItems = [
        { name: 'Home', href: '/' },
        { name: 'Connect', href: '/connect', isActive: true },
    ];

    // Official Social Hub Platforms
    const socialPlatforms = [
        {
            name: 'Official Website',
            description: 'Explore products, pricing & online store',
            url: 'https://www.brilliantmemorycomputers.in',
            icon: Globe,
            color: 'from-blue-600 to-indigo-600',
            badge: 'Website',
            btnText: 'Visit Website',
        },
        {
            name: 'WhatsApp Support',
            description: 'Instant customer query & bulk pricing support',
            url: 'https://wa.me/917788996684',
            icon: FaWhatsapp,
            color: 'from-emerald-500 to-green-600',
            badge: 'WhatsApp',
            btnText: 'Chat Now',
        },
        {
            name: 'Google Store Location',
            description: 'Locate us in Gaiety Palace, Anna Salai',
            url: 'https://maps.app.goo.gl/4MuHiEu9AXvB2D2t6',
            icon: MapPin,
            color: 'from-red-500 to-rose-600',
            badge: 'Google Maps',
            btnText: 'Get Directions',
        },
        {
            name: 'Facebook',
            description: 'Follow announcements, deals & product updates',
            url: 'https://www.facebook.com/brilliantmemorycomputers/',
            icon: FaFacebookF,
            color: 'from-blue-700 to-blue-500',
            badge: 'Facebook',
            btnText: 'Follow Us',
        },
        {
            name: 'Instagram',
            description: 'Check latest arrivals, shop videos & tech reels',
            url: 'https://www.instagram.com/brilliant_memory_computers/',
            icon: FaInstagram,
            color: 'from-pink-600 via-purple-600 to-amber-500',
            badge: 'Instagram',
            btnText: 'Follow Us',
        },
        {
            name: 'YouTube',
            description: 'Watch video reviews, unboxing & product tours',
            url: 'https://www.youtube.com/channel/UC_OZsZxKSGvkBb_hEMyLL5A',
            icon: FaYoutube,
            color: 'from-red-600 to-red-700',
            badge: 'YouTube',
            btnText: 'Subscribe',
        },
        {
            name: 'X (Twitter)',
            description: 'Stay updated with quick tech news & offers',
            url: 'https://x.com/Bmc_computer',
            icon: FaXTwitter,
            color: 'from-slate-900 to-slate-700',
            badge: 'X / Twitter',
            btnText: 'Follow Us',
        },
    ];

    // Featured Services
    const featuredServices = [
        { name: 'Laptops', desc: 'Refurbished & new premium laptops', icon: Laptop, color: 'text-blue-600 bg-blue-50' },
        { name: 'Desktop Computers', desc: 'Workstations, all-in-ones & gaming PCs', icon: Monitor, color: 'text-indigo-600 bg-indigo-50' },
        { name: 'Computer Accessories', desc: 'Keyboards, mice, cables & storage', icon: Keyboard, color: 'text-purple-600 bg-purple-50' },
        { name: 'Printers & Peripherals', desc: 'Laser, inkjet printers & office gear', icon: Printer, color: 'text-emerald-600 bg-emerald-50' },
        { name: 'Networking Products', desc: 'Routers, switches, LAN & Wi-Fi solutions', icon: Network, color: 'text-teal-600 bg-teal-50' },
        { name: 'Corporate IT Solutions', desc: 'Enterprise IT infrastructure & maintenance', icon: Building2, color: 'text-amber-600 bg-amber-50' },
        { name: 'Wholesale Computer Supply', desc: 'Bulk computer supply for resellers & institutions', icon: Package, color: 'text-red-600 bg-red-50' },
        { name: 'Retail Computer Sales', desc: 'Direct showroom purchasing with warranty', icon: ShoppingCart, color: 'text-cyan-600 bg-cyan-50' },
    ];

    // Who Can Benefit
    const targetAudiences = [
        { title: 'Retail Customers', desc: 'Individual buyers looking for top quality personal computers & accessories.' },
        { title: 'Students', desc: 'Affordable laptops & desktops optimized for learning, coding & projects.' },
        { title: 'Working Professionals', desc: 'High-performance laptops and multi-monitor setups for remote & office work.' },
        { title: 'Small Businesses', desc: 'Cost-effective IT equipment setups for growing commercial teams.' },
        { title: 'Startups', desc: 'Scalable tech procurement solutions with competitive budget options.' },
        { title: 'Educational Institutions', desc: 'Computer lab setups, bulk desktop deployment, and school hardware.' },
        { title: 'Corporate Offices', desc: 'End-to-end corporate IT hardware supply with technical support.' },
        { title: 'Government Organizations', desc: 'Reliable computer procurement adhering to institutional specifications.' },
        { title: 'System Integrators', desc: 'Component sourcing, motherboards, networking gear & bulk hardware.' },
        { title: 'IT Service Providers', desc: 'Wholesale hardware stock for maintenance & enterprise support.' },
        { title: 'Bulk Purchase Customers', desc: 'Specialized volume pricing and customized invoice quotes.' },
    ];

    // FAQ Items
    const faqList = [
        {
            q: 'What is Brilliant Memory Computers?',
            a: 'Brilliant Memory Computers is a wholesale and retail computer store in Chennai offering laptops, desktops, computer accessories, networking products and business IT solutions.',
        },
        {
            q: 'Where is Brilliant Memory Computers located?',
            a: 'Brilliant Memory Computers is located at Shop No 2, GF 1/L, Blackers Road, Gaiety Palace, Anna Salai, Chennai, Tamil Nadu 600002.',
        },
        {
            q: 'Does Brilliant Memory Computers offer wholesale computer sales?',
            a: 'Yes. Brilliant Memory Computers provides wholesale computer products, bulk purchase solutions and corporate IT procurement services.',
        },
        {
            q: 'Can I contact Brilliant Memory Computers through WhatsApp?',
            a: 'Yes. You can contact Brilliant Memory Computers through WhatsApp at +91 7788996684 during business hours.',
        },
        {
            q: 'What products does Brilliant Memory Computers sell?',
            a: 'Brilliant Memory Computers sells laptops, desktop computers, printers, networking products, computer accessories, peripherals and business IT solutions.',
        },
    ];

    // 1. Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://www.brilliantmemorycomputers.in/#organization',
        'name': 'Brilliant Memory Computers',
        'url': 'https://www.brilliantmemorycomputers.in',
        'logo': 'https://www.brilliantmemorycomputers.in/logo.png',
        'email': 'info@brilliantmemorycomputers.in',
        'telephone': '+91-7788996684',
        'sameAs': [
            'https://www.facebook.com/brilliantmemorycomputers/',
            'https://www.instagram.com/brilliant_memory_computers/',
            'https://www.youtube.com/channel/UC_OZsZxKSGvkBb_hEMyLL5A',
            'https://x.com/Bmc_computer',
        ],
    };

    // 2. LocalBusiness Schema
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'ComputerStore',
        '@id': 'https://www.brilliantmemorycomputers.in/#localbusiness',
        'name': 'Brilliant Memory Computers',
        'url': 'https://www.brilliantmemorycomputers.in',
        'image': 'https://www.brilliantmemorycomputers.in/logo.png',
        'logo': 'https://www.brilliantmemorycomputers.in/logo.png',
        'telephone': '+91-7788996684',
        'email': 'info@brilliantmemorycomputers.in',
        'priceRange': '₹₹',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Shop No 2, GF 1/L, Blackers Road, Gaiety Palace, Anna Salai',
            'addressLocality': 'Chennai',
            'addressRegion': 'Tamil Nadu',
            'postalCode': '600002',
            'addressCountry': 'IN',
        },
        'openingHoursSpecification': [
            {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                ],
                'opens': '09:00 AM',
                'closes': '09:00 PM',
            },
        ],
        'sameAs': [
            'https://www.facebook.com/brilliantmemorycomputers/',
            'https://www.instagram.com/brilliant_memory_computers/',
            'https://www.youtube.com/channel/UC_OZsZxKSGvkBb_hEMyLL5A',
            'https://x.com/Bmc_computer',
        ],
    };

    // 3. WebPage Schema
    const webPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://www.brilliantmemorycomputers.in/connect',
        'url': 'https://www.brilliantmemorycomputers.in/connect',
        'name': 'Brilliant Memory Computers Connect',
        'description':
            'Connect with Brilliant Memory Computers in Chennai. Explore laptops, desktops, computer accessories, wholesale computer supply, retail sales, customer support and business IT solutions.',
        'isPartOf': {
            '@type': 'WebSite',
            'name': 'Brilliant Memory Computers',
            'url': 'https://www.brilliantmemorycomputers.in',
        },
        'inLanguage': 'en-IN',
    };

    // 4. Breadcrumb Schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.brilliantmemorycomputers.in',
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Connect',
                'item': 'https://www.brilliantmemorycomputers.in/connect',
            },
        ],
    };

    // 5. FAQ Schema
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqList.map((item) => ({
            '@type': 'Question',
            'name': item.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': item.a,
            },
        })),
    };

    return (
        <>
            {/* ⭐ SEO Meta Tags & 5 Structured JSON-LD Schemas */}
            <Head>
                <title>Connect with Brilliant Memory Computers | Best Computer Store in Chennai</title>
                <meta
                    name="description"
                    content="Connect with BMC in Chennai. Explore laptops, desktops, computer accessories, wholesale computer supply, retail sales and business IT solutions."
                />
                <meta
                    name="keywords"
                    content="Brilliant Memory Computers connect, computer store Chennai, refurbished laptops Chennai, wholesale computer dealer Anna Salai, laptop shop Blackers road, IT solutions Chennai"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/connect" />

                {/* Open Graph */}
                <meta property="og:title" content="Connect with Brilliant Memory Computers | Wholesale & Retail Computer Store Chennai" />
                <meta
                    property="og:description"
                    content="Connect with BMC in Chennai. Explore laptops, desktops, computer accessories, wholesale computer supply, retail sales and business IT solutions."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Brilliant Memory Computers" />
                <meta property="og:url" content="https://www.brilliantmemorycomputers.in/connect" />
                <meta property="og:image" content={`https://www.brilliantmemorycomputers.in${LogoImg.src}`} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Connect with Brilliant Memory Computers | Wholesale & Retail Computer Store Chennai" />
                <meta
                    name="twitter:description"
                    content="Connect with BMC in Chennai. Explore laptops, desktops, computer accessories, wholesale computer supply, retail sales and business IT solutions."
                />
                <meta name="twitter:image" content={`https://www.brilliantmemorycomputers.in${LogoImg.src}`} />

                {/* 1. Organization Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />

                {/* 2. LocalBusiness Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />

                {/* 3. WebPage Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
                />

                {/* 4. Breadcrumb Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />

                {/* 5. FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>

            <div className="bg-slate-50 min-h-screen text-slate-800">
                {/* Breadcrumbs Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <section className="relative overflow-hidden py-2 mx-4 sm:mx-6 lg:mx-8 my-4">
                    <div className="max-w-6xl mx-auto text-center">

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-black max-w-5xl mx-auto">
                            Brilliant Memory Computers – New & Refurbished Laptops, Desktops & Computer Accessories Chennai
                        </h1>

                    </div>
                </section>
                {/* Hero Section */}
                <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-4 shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-purple-600/20"></div>
                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6 backdrop-blur-md">
                            <Award className="w-4 h-4 text-blue-400" /> Official Social & Business Hub
                        </span>
                        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                            Brilliant Memory Computers – Refurbished Laptops, Desktops & Computer Accessories Chennai
                        </h1> */}
                        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            Welcome to the official Brilliant Memory Computers Connect page. Whether you're looking for laptops, desktops, computer accessories, networking products, business IT solutions, bulk computer purchases, or expert technical guidance, this page helps you connect with all of Brilliant Memory Computers' official platforms in one place. Discover quality computer products, competitive wholesale pricing, retail technology solutions, business support, and expert assistance through our website, social media channels, WhatsApp support, customer reviews, and Chennai showroom.
                        </p>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="https://wa.me/917788996684"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
                            </a>
                            <a
                                href="tel:+917788996684"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <Phone className="w-5 h-5" /> Call +91 77889 96684
                            </a>
                            <a
                                href="#store-location"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all duration-300"
                            >
                                <MapPin className="w-5 h-5 text-red-400" /> Visit Store
                            </a>
                        </div>
                    </div>
                </section>

                {/* Connect With Brilliant Memory Computers (Social Hub Grid) */}
                <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                            Connect With Brilliant Memory Computers
                        </h2>
                        <p className="text-slate-600 mt-3 text-base sm:text-lg">
                            Stay connected through our official platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {socialPlatforms.map((platform) => {
                            const IconComp = platform.icon;
                            return (
                                <div
                                    key={platform.name}
                                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${platform.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                                            >
                                                <IconComp className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                {platform.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                            {platform.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                            {platform.description}
                                        </p>
                                    </div>
                                    <a
                                        href={platform.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-100 group-hover:bg-blue-600 text-slate-800 group-hover:text-white transition-all duration-300"
                                    >
                                        {platform.btnText} <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Featured Services Section */}
                <section className="py-12 lg:py-16 bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-8 shadow-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-blue-400">
                                Products & Solutions
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                                Featured Services
                            </h2>
                            <p className="text-slate-400 mt-2 text-base">
                                Discover our complete range of computer hardware, wholesale supply & IT services.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredServices.map((service) => {
                                const ServiceIcon = service.icon;
                                return (
                                    <div
                                        key={service.name}
                                        className="bg-slate-800/80 backdrop-blur border border-slate-700/60 p-6 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group"
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <ServiceIcon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Leave a Google Review Section */}
                <section className="py-12 lg:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/50 border border-amber-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-amber-300/20 rounded-full blur-2xl pointer-events-none"></div>

                        <div className="inline-flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                            ))}
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                            Leave a Google Review
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
                            Your feedback helps us continue delivering quality refurbished computers and reliable technology solutions. If you've purchased a laptop, desktop, computer accessory, or received support from our team, we'd love to hear about your experience. Your review helps others discover a trusted computer store in Chennai.
                        </p>

                        <a
                            href="https://maps.app.goo.gl/4MuHiEu9AXvB2D2t6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-600 text-slate-900 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                        >
                            <FaGoogle className="w-5 h-5 text-slate-900" /> Leave a Review
                        </a>
                    </div>
                </section>

                {/* Visit Our Store & Business Hours Grid */}
                <section id="store-location" className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Showroom Location
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                            Visit Our Store
                        </h2>
                        <p className="text-slate-600 mt-2 text-base sm:text-lg">
                            Experience quality products, expert advice, and reliable support at our Chennai showroom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Address, Landmarks & Direct Contacts */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Brilliant Memory Computers</h3>
                                        <p className="text-sm text-slate-500">Chennai Store Location</p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                        <p className="font-semibold text-slate-900">Address:</p>
                                        <p>Shop No 2, GF 1/L, Blackers Road</p>
                                        <p>Gaiety Palace, Anna Salai</p>
                                        <p>Chennai – 600002, Tamil Nadu, India</p>
                                    </div>

                                    <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 text-blue-900 text-sm">
                                        <p className="font-bold flex items-center gap-1.5 mb-1">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600" /> Key Landmarks:
                                        </p>
                                        <p>📍 Near Casino Theatre</p>
                                        <p>📍 Next to Ola Electric Store</p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                                    <a
                                        href="tel:+917788996684"
                                        className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                                    >
                                        <Phone className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="font-medium">+91 77889 96684</span>
                                    </a>
                                    <a
                                        href="mailto:info@brilliantmemorycomputers.in"
                                        className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                                    >
                                        <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="font-medium">info@brilliantmemorycomputers.in</span>
                                    </a>
                                    <a
                                        href="https://wa.me/917788996684"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors"
                                    >
                                        <FaWhatsapp className="w-5 h-5 text-emerald-600 shrink-0" />
                                        <span className="font-medium">WhatsApp Support (+91 77889 96684)</span>
                                    </a>
                                </div>

                                <a
                                    href="https://maps.app.goo.gl/4MuHiEu9AXvB2D2t6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-colors"
                                >
                                    <MapPin className="w-4 h-4" /> Open in Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Google Maps Embed & Business Hours Table */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Map Embed */}
                            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-80 relative">
                                <iframe
                                    title="Brilliant Memory Computers Store Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.536968772393!2d80.2687123!3d13.0649774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52661c9aa0cb6f%3A0x6b87b7a2d1e2e1c!2sBlackers%20Rd%2C%20Mount%20Road%2C%20Anna%20Salai%2C%20Triplicane%2C%20Chennai%2C%20Tamil%20Nadu%20600002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            {/* Business Hours Card */}
                            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Open All Days
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm sm:text-base">
                                        <thead>
                                            <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                                                <th className="pb-3">Day</th>
                                                <th className="pb-3 text-right">Opening Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-slate-700">
                                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                                <tr key={day} className="hover:bg-slate-50 transition-colors">
                                                    <td className="py-2.5 font-medium">{day}</td>
                                                    <td className="py-2.5 text-right font-semibold text-blue-600">9:00 AM – 9:00 PM</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl font-bold">Contact Information</h2>
                            <p className="text-slate-400 mt-2">Get in touch with our Chennai sales & support representatives.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <a
                                href="mailto:info@brilliantmemorycomputers.in"
                                className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 hover:border-blue-500 transition-all group text-center"
                            >
                                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Us</h3>
                                <p className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                                    info@brilliantmemorycomputers.in
                                </p>
                            </a>

                            <a
                                href="tel:+917788996684"
                                className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 hover:border-blue-500 transition-all group text-center"
                            >
                                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Customer Support</h3>
                                <p className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                                    +91 77889 96684
                                </p>
                            </a>

                            <a
                                href="https://wa.me/917788996684"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-slate-800 p-6 rounded-2xl border border-slate-700/60 hover:border-emerald-500 transition-all group text-center"
                            >
                                <FaWhatsapp className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">WhatsApp Support</h3>
                                <p className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                                    +91 77889 96684
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit From Brilliant Memory Computers? */}
                <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Tailored Solutions
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1">
                            Who Can Benefit From Brilliant Memory Computers?
                        </h2>
                        <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-3xl mx-auto">
                            Whether you need a single laptop, office computer setup, networking equipment, accessories, or large-scale corporate procurement, Brilliant Memory Computers provides reliable technology solutions tailored to your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {targetAudiences.map((audience, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">{audience.title}</h3>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">{audience.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call To Action Banner */}
                <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
                                Get the Right Technology for Your Needs
                            </h2>
                            <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8">
                                Follow Brilliant Memory Computers across our official social media channels, connect with our team on WhatsApp, and stay updated with the latest laptops, desktops, accessories, networking products, business solutions, wholesale offers, and technology updates. We look forward to helping individuals, businesses, and organizations find the right technology products at the right price.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="https://wa.me/917788996684"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white text-blue-700 hover:bg-slate-100 shadow-lg transition-all hover:scale-105"
                                >
                                    <FaWhatsapp className="w-5 h-5 text-emerald-600" /> Connect on WhatsApp
                                </a>
                                <a
                                    href="tel:+917788996684"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-lg transition-all hover:scale-105"
                                >
                                    <Phone className="w-5 h-5 text-blue-400" /> Speak With Expert
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ (AEO Optimized) Section */}
                <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            AEO & Customer FAQ
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                            Frequently Asked Questions (FAQ)
                        </h2>
                        <p className="text-slate-600 mt-2 text-base">
                            Quick answers about Brilliant Memory Computers products, store location & wholesale services.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqList.map((item, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-base sm:text-lg hover:text-blue-600 transition-colors focus:outline-none"
                                    >
                                        <span>{item.q}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''
                                                }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1">
                                            <p className="pt-3">{item.a}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}

