import Head from "next/head";

import BestSellers from "@/components/BestSellers";
import Categories from "@/components/CategoriesSlider";
import HeroSection from "@/components/HeroSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import SpecialSection from "@/components/SpecialSection";
import HomeSeoSection from "@/components/homeseocontent";
import LogoImg from "../public/img/bmc-logo.png";

export default function Home() {

  return (
    <>
      <Head>
        <title>Best Laptops & Computer Shop in Chennai | BMC</title>
        <meta
          name="description"
          content="Best computer shop in Chennai for refurbished laptops, gaming computers and accessories. Affordable prices, fast delivery and expert support."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="laptops in Chennai, refurbished laptops Chennai, gaming computer Chennai, computer shop Chennai, budget laptops, BMC Chennai"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brilliantmemorycomputers.in/" />

        {/* Open Graph (FB & LinkedIn) */}
        <meta property="og:title" content="Best Laptops & Computer Shop in Chennai | BMC" />
        <meta
          property="og:description"
          content="Best computer shop in Chennai for refurbished laptops, gaming computers and accessories. Affordable prices, fast delivery and expert support."
        />
        <meta property="og:url" content="https://www.brilliantmemorycomputers.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://www.brilliantmemorycomputers.in/${LogoImg.src}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Laptops & Computer Shop in Chennai | BMC" />
        <meta
          name="twitter:description"
          content="Best computer shop in Chennai for refurbished laptops, gaming computers and accessories. Affordable prices, fast delivery and expert support."
        />
        <meta
          name="twitter:image"
          content={`https://www.brilliantmemorycomputers.in/${LogoImg.src}`}
        />

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "name": "Brilliant Memory Computers",
                  "url": "https://www.brilliantmemorycomputers.in/",
                  "image": `https://www.brilliantmemorycomputers.in/${LogoImg.src}`,
                  "description":
                    "Best computer shop in Chennai for refurbished laptops, gaming computers and accessories. Affordable prices, fast delivery and expert support.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress":
                      "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                    "addressLocality": "Chennai",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "600002",
                    "addressCountry": "IN"
                  },
                  "telephone": "+91-7788996684",
                  "openingHours": "Mo-Sa 10:00-20:00",
                  "priceRange": "₹₹",
                  "sameAs": [
                    "https://www.facebook.com/brilliantmemorycomputers/",
                    "https://www.instagram.com/brilliant_memory_computers/",
                    "https://www.youtube.com/channel/UC_OZsZxKSGvkBb_hEMyLL5A"
                  ]
                },
                {
                  "@type": "WebSite",
                  "name": "Brilliant Memory Computers",
                  "url": "https://www.brilliantmemorycomputers.in/",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target":
                      "https://www.brilliantmemorycomputers.in/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* PAGE CONTENT SECTION */}
      <HeroSection />
      <Categories />
      <BestSellers />
      <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Welcome to BMC – Chennai’s Trusted Computer & Laptop Store
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            <span className="block mb-4">
              Looking for Brand new laptops &  Computer in Chennai, the latest gaming computer for high performance? You’ve come to the right place!
            </span>
            At Brilliant Memory Computers, we’re proud to be the best computer shop in Chennai, offering refurbished laptops, gaming laptops, and computer accessories at unbeatable prices.

          </p>

          <div className="mt-10 flex justify-center">
            <div className="w-32 h-1 bg-blue-600 rounded"></div>
          </div>
        </div>
      </div>
      <ReviewCarousel />



      <div className="w-full max-w-3xl mx-auto my-8 px-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/azYMOjWgMCs?si=hW3TK9AdmXBlT0TW"
            title="BMC Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            <span className="text-2xl font-bold text-blue-500 mb-10 mt-4 text-center">Brilliant Memory Computers </span> <br /> The Best Laptop & Computer Shop in Chennai
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Searching for the best computer shop in Chennai? Brilliant Memory Computers is your trusted destination for brand-new laptops, custom-built PCs, refurbished systems, and all types of computer accessories. Whether you’re a student, professional, gamer, or business owner, we bring you powerful machines at unbeatable prices.
          </p>

          <HomeSeoSection />
        </div>

      </div>

      <SpecialSection />
    </>
  );
}
