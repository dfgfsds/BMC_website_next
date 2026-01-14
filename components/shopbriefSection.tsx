import { useState } from "react";
import Script from "next/script";
import Head from "next/head";
import LogoImg from "../public/img/bmc-logo.png";

export default function ShopBriefContent() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ===================== SEO META TAGS START ===================== */}
            <Head>
                {/* Primary Meta Tags */}
                <title>Best Laptop Shop in Chennai | New Laptops, Custom PCs & Refurbished Systems</title>
                <meta
                    name="description"
                    content="Shop new laptops, custom PCs, refurbished systems, gaming desktops, and accessories at Brilliant Memory Computers — Chennai’s trusted laptop and computer store."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="best laptop shop in Chennai, laptop store Chennai, buy laptops Chennai, new laptops Chennai, refurbished laptops Chennai, used laptops Chennai, custom PC builder Chennai, gaming PC Chennai, gaming desktop Chennai, computer shop Chennai, computer store Chennai, desktop computers Chennai, laptop accessories Chennai, PC accessories Chennai, Brilliant Memory Computers, laptop sales Chennai, business laptops Chennai, student laptops Chennai, workstation PC Chennai"
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.brilliantmemorycomputers.in/shop" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="Best Laptop Shop in Chennai | New Laptops, Custom PCs & Refurbished Systems" />
                <meta property="og:description" content="Shop new laptops, custom PCs, refurbished systems, gaming desktops, and accessories at Chennai’s trusted laptop store." />
                <meta property="og:url" content="https://www.brilliantmemorycomputers.com/shop" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={`https://www.brilliantmemorycomputers.in/${LogoImg.src}`} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Best Laptop Shop in Chennai | New Laptops, Custom PCs & Refurbished Systems" />
                <meta name="twitter:description" content="Shop new laptops, custom PCs, refurbished systems, gaming desktops, and accessories at Chennai’s trusted laptop store." />
                <meta name="twitter:image" content={`https://www.brilliantmemorycomputers.in/${LogoImg.src}`} />

                {/* Local Business Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ElectronicsStore",
                            "name": "Brilliant Memory Computers",
                            "image": `https://www.brilliantmemorycomputers.in/${LogoImg.src}`,
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
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
                                        Shop – Brilliant Memory Computers
                                    </h2>
                                    <span className="block w-28 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>
                                    <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
                                        We are Brilliant Memory Computers, your one-stop destination for all your computing needs in Chennai. Whether you are looking for brand-new laptops, custom-built PCs, refurbished systems, gaming machines, or IT accessories, we provide a wide range of products to meet every requirement. As the best laptop shop in Chennai and a trusted computer shop in Chennai, we combine quality, affordability, and service excellence to deliver unmatched customer satisfaction.
                                    </p>
                                </div>

                                <div className="space-y-8 text-gray-700 leading-relaxed">

                                    {/* BRAND NEW LAPTOPS */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand New Laptops and Desktops</h3>
                                        <p>
                                            At Brilliant Memory Computers, we stock laptops and desktops from all major brands, making us the preferred choice for customers searching for the best laptop dealers in Chennai and the best laptop showroom in Chennai. Our inventory includes high-performance business laptops, student laptops, and ultra-portable notebooks designed for work, study, and personal use.


                                        </p>
                                        <p className="mt-3">
                                            Customers looking for the best laptop store in Chennai will find a wide range of options that cater to every budget. We also carry desktops for office, professional, and home use, ensuring that every customer can find the perfect system.
                                        </p>
                                        <p className="mt-3">Our store is also the go-to destination for those seeking the best computer shop in Ritchie Street Chennai, the heart of Chennai’s computer market. We offer competitive prices, genuine products, and expert advice to help you make informed choices.</p>
                                        <p className="mt-3">We also provide repair services, making us the best laptop repair shop in Chennai, along with an extensive selection of computer accessories to complete your setup.   </p>

                                    </div>

                                    {/* CUSTOM PC BUILDS */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom PC Builds</h3>
                                        <p>For enthusiasts, professionals, and gamers, Brilliant Memory Computers offers expert custom PC build services. Whether you want to build PC online or need a complete workstation designed for performance, our team of skilled custom PC builders in Chennai can help.<br /> We specialize in custom build PCs, tailored to your specific needs. From high-end gaming setups to video editing workstations, we ensure that every component is chosen for optimal performance and reliability.</p>
                                        <ul className="mt-3 list-disc ml-6">
                                            <li>Gaming PC builder solutions for smooth gameplay and high FPS</li>
                                            <li>Custom PC build for professional and creative work</li>
                                            <li>

                                                PC build online options for easy ordering from home
                                            </li>
                                            <li>Expert guidance from pc builders in Chennai to ensure your system performs at its best</li>
                                        </ul>
                                        <p className="mt-3">We are recognized as one of the best PC build shops in Chennai, providing high-quality assemblies, component upgrades, and fully optimized systems for gaming and professional use.</p>
                                    </div>

                                    {/* REFURBISHED LAPTOPS */}
                                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Refurbished and Used Laptops and PCs</h3>
                                        <p>Brilliant Memory Computers is a trusted provider of refurbished laptops in Chennai and second hand laptops in Chennai. Our collection of certified refurbished systems includes both laptops and desktops that are carefully tested, upgraded, and performance-optimized. <br /> For gaming enthusiasts, we offer refurbished gaming PC laptops, used gaming desktops, and used gaming desktop PCs. Each system is performance-tested to ensure smooth gameplay and reliable operation, making them a cost-effective solution for high-performance computing.<br /> We also stock refurbished systems suitable for students, office users, and home setups. Popular options include:</p>

                                        <ul className="mt-3 list-disc ml-6">
                                            <li>Used lapt ops for sale Chennai</li>
                                            <li>Refurbished laptops dealers in Chennai</li>
                                            <li>Best place to buy second hand laptop in Chennai</li>

                                        </ul>
                                        <p className="mt-3">

                                            All refurbished products come with warranties and quality assurance, ensuring that our customers get reliable devices at affordable prices.
                                        </p>
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
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Accessories, Speakers, and Home Entertainment</h3>
                                        <p>Apart from computers and laptops, we offer a wide range of IT accessories, including:</p>
                                        <ul className="mt-3 list-disc ml-6">
                                            <li>Keyboards, mouse devices, and external drives</li>
                                            <li>SSDs, RAM, and component upgrades</li>
                                            <li>Cables, adapters, and chargers</li>
                                            <li>CCTV cameras, routers, and networking equipment</li>
                                        </ul>
                                        <p className="mt-3">We also provide speakers, home theaters, and audio systems for customers looking to enhance their home entertainment experience. From Bluetooth speakers to full home theater setups, our range is designed to deliver rich, immersive sound for music, movies, and gaming. <br /> Our store is also recognized as the best computer accessories shop in Chennai, offering products that combine quality, durability, and competitive pricing.</p>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Choose Brilliant Memory Computers</h2>
                                <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>

                                <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
                                    Brilliant Memory Computers is more than just a shop; we are your long-term technology partner in Chennai. Here’s why customers trust us:
                                </p>

                                <ul className="mt-3 text-left list-disc ml-6">
                                    <li>Wide Selection of Products – Brand-new laptops, desktops, gaming PCs, refurbished systems, and accessories</li>
                                    <li>Expert Guidance – Professional advice for laptops, PCs, and custom builds</li>
                                    <li>Competitive Pricing – Cost-effective solutions with uncompromised quality</li>
                                    <li>Custom PC Builds – Personalized systems for gaming, editing, programming, and professional use</li>
                                    <li>Performance-Optimized Refurbished Systems – Reliable second-hand laptops, desktops, and gaming machines
                                    </li>
                                    <li>

                                        After-Sales Support – Technical assistance, repair services, and warranty coverage</li>
                                </ul>
                            </div>
                        </section>

                        <section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
                            <div className="max-w-5xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Shop with Confidence</h2>
                                <span className="block w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></span>

                                <p className="text-gray-700 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
                                    Whether you’re looking for the best laptop shop in Chennai, a custom PC builder, or refurbished gaming computers, Brilliant Memory Computers has you covered. Our goal is to provide every customer with the right product, the best service, and a complete technology solution. <br /> Visit Brilliant Memory Computers today and experience the convenience, reliability, and performance of Chennai’s most trusted IT store.
                                </p>
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
