import { useState } from "react";
import Script from "next/script";
import Head from "next/head";

export default function ShopBriefContent() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ===================== SEO META TAGS START ===================== */}
            <Head>
                {/* Primary Meta Tags */}
                <title>Laptop Showroom Chennai | Best Laptop Store in Chennai</title>
                <meta
                    name="description"
                    content="Buy laptops at the best laptop showroom Chennai. Explore top brands, latest models, and computer accessories in Chennai with expert support."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="best laptop shop in Chennai, laptop store Chennai, buy laptops Chennai, new laptops Chennai, refurbished laptops Chennai, used laptops Chennai, custom PC builder Chennai, gaming PC Chennai, gaming desktop Chennai, computer shop Chennai, computer store Chennai, desktop computers Chennai, laptop accessories Chennai, PC accessories Chennai, Brilliant Memory Computers, laptop sales Chennai, business laptops Chennai, student laptops Chennai, workstation PC Chennai"
                />

                {/* Canonical */}
                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/shop" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="Laptop Showroom Chennai | Best Laptop Store in Chennai" />
                <meta
                    property="og:description"
                    content="Shop new laptops, custom PCs, refurbished systems, gaming desktops, and accessories at Chennai’s trusted laptop store."
                />
                <meta property="og:url" content="https://www.brilliantmemorycomputers.in/shop" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://www.brilliantmemorycomputers.in/img/bmc-banner-2.jpg"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Laptop Showroom Chennai | Best Laptop Store in Chennai" />
                <meta
                    name="twitter:description"
                    content="Shop new laptops, custom PCs, refurbished systems, gaming desktops, and accessories at Chennai’s trusted laptop store."
                />
                <meta
                    name="twitter:image"
                    content="https://www.brilliantmemorycomputers.in/img/bmc-banner-2.jpg"
                />

                {/* Local Business Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ElectronicsStore",
                            "name": "Brilliant Memory Computers",
                            "image": "https://www.brilliantmemorycomputers.in/img/bmc-logo.png",
                            "url": "https://www.brilliantmemorycomputers.in/",
                            "telephone": "+91-7788996684",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                                "addressLocality": "Chennai",
                                "addressRegion": "TN",
                                "postalCode": "600002",
                                "addressCountry": "IN",
                            },
                            "description":
                                "Best laptop shop in Chennai offering new laptops, custom-built PCs, refurbished laptops, gaming PCs, and computer accessories.",
                            "priceRange": "₹₹",
                        }),
                    }}
                />
            </Head>


            {/* ===================== SEO META TAGS END ===================== */}

            {/* ===================== READ MORE SECTION ===================== */}
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="w-full">
                    {/* HIDDEN CONTENT */}
                    <div className={`transition-all duration-500 overflow-hidden ${open ? "max-h-[5000px] mt-6" : "max-h-0"}`}>

                        {/* ===================== UPDATED CONTENT START ===================== */}

                        <section className="w-full bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
                            <div className="mx-auto">

                                <div className="text-center mb-16">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
                                        Buy Laptops, Computers & Gaming PCs | Laptop Showroom Chennai
                                    </h3>
                                    <span className="block w-28 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
                                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                                        Welcome to Brilliant Memory Computers, your trusted laptop showroom Chennai for the latest laptops, desktop computers, and complete IT solutions at competitive prices. We are a leading laptop store Chennai offering a wide range of laptops, assembled computers, custom PC builds, gaming PCs, and IT accessories for students, professionals, businesses, and gamers.
                                    </p>
                                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">Whether you are looking for a budget laptop for daily use, a powerful desktop for office work, or a high-performance gaming system, our laptop showroom Chennai provides end-to-end solutions with expert guidance, genuine products, and reliable after-sales service.</p>
                                </div>

                                <div className="space-y-8 text-gray-700 leading-relaxed">


                                    {/* <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand New Laptops and Desktops</h3>
                                        <p>
                                            At Brilliant Memory Computers, we stock laptops and desktops from all major brands, making us the preferred choice for customers searching for the best laptop dealers in Chennai and the best laptop showroom in Chennai. Our inventory includes high-performance business laptops, student laptops, and ultra-portable notebooks designed for work, study, and personal use.


                                        </p>
                                        <p className="mt-3">
                                            Customers looking for the best laptop store in Chennai will find a wide range of options that cater to every budget. We also carry desktops for office, professional, and home use, ensuring that every customer can find the perfect system.
                                        </p>
                                        <p className="mt-3">Our store is also the go-to destination for those seeking the best computer shop in Ritchie Street Chennai, the heart of Chennai’s computer market. We offer competitive prices, genuine products, and expert advice to help you make informed choices.</p>
                                        <p className="mt-3">We also provide repair services, making us the best laptop repair shop in Chennai, along with an extensive selection of computer accessories to complete your setup.   </p>

                                    </div> */}

                                    {/* CUSTOM PC BUILDS */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Laptop Store in Chennai for All Needs</h3>
                                        <p>As one of the best laptop shop in Chennai, we offer laptops for every requirement:</p>
                                        <ul className="mt-3 list-disc ml-6">
                                            <li>Student laptops for online classes and studies</li>
                                            <li>Business laptops for office and corporate use</li>
                                            <li>

                                                Gaming laptops with high-end graphics
                                            </li>
                                            <li>Laptops for video editing and design work</li>
                                            <li>Lightweight laptops for travel and personal use</li>
                                        </ul>
                                        <p className="mt-3">At our laptop store Chennai, you can explore multiple brands, compare specifications, and choose the right laptop based on your budget and performance needs.</p>
                                    </div>

                                    {/* REFURBISHED LAPTOPS */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Shop Laptops at Our Laptop Showroom Chennai</h3>
                                        <p>Our laptop showroom in Chennai features laptops from leading brands with the latest processors, SSD storage, and modern designs. Every laptop is carefully selected to ensure quality, performance, and long-term reliability.</p>
                                        <p className="mt-3">When you visit our laptop showroom in Chennai, our technical experts help you understand configurations such as RAM, storage, graphics, and battery life so you can make an informed decision.</p>


                                    </div>

                                    {/* GAMING LAPTOPS */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Gaming Laptops and Desktops</h3>
                                        <p>
                                            For gaming enthusiasts in Chennai, Brilliant Memory Computers offers a premium selection of gaming laptops Chennai and gaming desktops Chennai. We understand the importance of smooth performance, fast refresh rates, and superior graphics for a complete gaming experience.
                                        </p>
                                    </div>

                                    {/* ACCESSORIES */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Accessories in Chennai</h3>
                                        <p>Along with laptops, we also provide a wide range of computer accessories Chennai, including:</p>
                                        <ul className="mt-3 list-disc ml-6">
                                            <li>Laptop chargers and adapters</li>
                                            <li>Keyboards and mouse</li>
                                            <li>External hard drives and SSDs</li>
                                            <li>Laptop bags and cooling pads</li>
                                            <li>Printers and monitors</li>
                                        </ul>
                                        <p className="mt-3">You can buy all essential accessories from one trusted laptop shop in Chennai, making it easy to set up your complete system in one place.</p>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Choose Brilliant Memory Computers?</h2>
                                <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>


                                <ul className="mt-3 text-left list-disc ml-6">
                                    <li>Trusted laptop showroom Chennai</li>
                                    <li>Competitive and transparent pricing</li>
                                    <li>Genuine laptops with warranty</li>
                                    <li>Expert technical support</li>
                                    <li>After-sales service
                                    </li>
                                    <li>Fast delivery and secure payment options</li>
                                </ul>
                                <p className="mt-3 text-left">We focus on customer satisfaction and long-term support, which makes us one of the most preferred laptop sellers in the city.</p>
                            </div>
                        </section>

                        <section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Buy Laptops Online from Our Laptop Shop in Chennai</h2>
                                <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>

                                <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
                                    You can easily browse and buy laptops online from our laptop shop in Chennai through our website. Explore product categories, compare features, and place your order with confidence.
                                </p>
                                <p className="text-gray-700 mt-3 text-lg leading-relaxed max-w-3xl mx-auto">Our laptop showroom Chennai ensures quick order processing, safe packaging, and reliable delivery across Chennai.</p>
                            </div>
                        </section>

                        {/* ===================== UPDATED CONTENT END ===================== */}

                    </div>

                    {/* READ MORE BUTTON */}
                    <div className="mt-6 bg-white text-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            {open ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-17447812618"
                strategy="afterInteractive"
            />

            <Script id="google-ads-tag" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'AW-17447812618');
                `}
            </Script>
        </>
    );

}
