import Head from "next/head";
import Script from "next/script";
import BestSellers from "@/components/BestSellers";
import Categories from "@/components/CategoriesSlider";
import HeroSection from "@/components/HeroSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import SpecialSection from "@/components/SpecialSection";
import HomeSeoSection from "@/components/homeseocontent";
import FaqSection from "@/components/FaqSection";
import { GetServerSideProps } from "next";
import Banner1 from "../public/img/bmc-banner-1.jpg";
import Banner2 from "../public/img/bmc-banner-2.jpg";
import Banner3 from "../public/img/bmc-banner-3.jpg";
import Banner4 from "../public/img/bmc-banner-4.webp";
import mobileBanner1 from "../public/img/bmc-moblie-banner-1.jpg";
import mobileBanner2 from "../public/img/bmc-moblie-banner-2.jpg";
import mobileBanner3 from "../public/img/bmc-moblie-banner-3.jpg";
import mobileBanner4 from "../public/img/bmc-moblie-banner-4.jpeg";


export default function Home({ banners }: { banners: any[] }) {

  return (
    <>
      <Head>
        <title>Computer Shop in Chennai | Laptops, PCs & More in BMC</title>
        <meta
          name="description"
          content="Looking for the best computer shop in Chennai? Explore laptops, desktops, gaming PCs, custom builds and computer accessories at BMC."
        />
        <meta
          name="keywords"
          content="computer store in Chennai, laptop store in Chennai, computer shop in Chennai, laptop shop in Chennai, best computer shop in Chennai, best laptop shop in Chennai, computer showroom in Chennai, laptop showroom in Chennai, gaming PC in Chennai, gaming PC build in Chennai, custom PC builder in Chennai, custom PC build in Chennai, refurbished laptops in Chennai, refurbished computers in Chennai, computer accessories in Chennai, PC components in Chennai, desktop computers in Chennai, gaming computers in Chennai, buy laptops online Chennai, buy computers online Chennai, PC builder Chennai, computer dealer Chennai, laptop dealer Chennai, computer wholesale shop in Chennai, IT hardware store Chennai, gaming laptop Chennai, custom gaming PC, refurbished laptop store, desktop shop Chennai, computer peripherals Chennai"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.brilliantmemorycomputers.in/" />

        {/* Robots Tag */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* OG Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Computer Shop in Chennai | Laptops, PCs & More in BMC" />
        <meta
          property="og:description"
          content="Looking for the best computer shop in Chennai? Explore laptops, desktops, gaming PCs, custom builds and computer accessories at BMC."
        />
        <meta property="og:url" content="https://www.brilliantmemorycomputers.in/" />
        <meta property="og:site_name" content="Brilliant Memory Computers" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png" />
        <meta property="og:image:alt" content="Brilliant Memory Computers - Laptops, Computers and Gaming PCs in Chennai" />

        {/* TWITTER Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Computer Shop in Chennai | Laptops, PCs & More in BMC" />
        <meta
          name="twitter:description"
          content="Looking for the best computer shop in Chennai? Explore laptops, desktops, gaming PCs, custom builds and computer accessories at BMC."
        />
        <meta name="twitter:image" content="https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png" />
        <meta name="twitter:image:alt" content="Brilliant Memory Computers - Laptops, Computers and Gaming PCs in Chennai" />

        {/* IMAGE_SRC Tags */}
        <link rel="image_src" href="https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png" />

        {/* GEO Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />

        {/* SCHEMA: 1. Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.brilliantmemorycomputers.in/#website",
              "url": "https://www.brilliantmemorycomputers.in/",
              "name": "Brilliant Memory Computers",
              "alternateName": "BMC",
              "description": "Looking for the best computer shop in Chennai? Explore laptops, desktops, gaming PCs, custom builds and computer accessories at BMC.",
              "publisher": {
                "@id": "https://www.brilliantmemorycomputers.in/#localbusiness"
              },
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.brilliantmemorycomputers.in/shop?search={search_term_string}"
                },
                "query-input": {
                  "@type": "PropertyValueSpecification",
                  "valueRequired": true,
                  "valueName": "search_term_string"
                }
              }
            })
          }}
        />

        {/* SCHEMA: 2. Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "@id": "https://www.brilliantmemorycomputers.in/#localbusiness",
              "name": "Brilliant Memory Computers",
              "alternateName": "BMC",
              "url": "https://www.brilliantmemorycomputers.in/",
              "logo": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
              "image": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
              "description": "Looking for the best computer shop in Chennai? Explore laptops, desktops, gaming PCs, custom builds and computer accessories at BMC.",
              "telephone": "+91-7788996684",
              "email": "info@brilliantmemorycomputers.in",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "sameAs": [
                "https://www.brilliantmemorycomputers.in",
                "https://www.instagram.com/brilliant_memory_computers",
                "https://www.youtube.com/@BrilliantMemoryComputers",
                "https://x.com/bmc_computer",
                "https://www.facebook.com/brilliantmemorycomputers/",
                "https://www.linkedin.com/company/bmc-brilliant-memory-computers/"
              ]
            })
          }}
        />

        {/* SCHEMA: 3. WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.brilliantmemorycomputers.in/#webpage",
              "url": "https://www.brilliantmemorycomputers.in/",
              "name": "Computer Shop in Chennai | Laptops, PCs & More in BMC",
              "headline": "Brilliant Memory Computers - The Best Laptop & Computer Shop in Chennai",
              "description": "Looking for the best computer shop in Chennai? Explore laptops, desktops, gaming PCs, custom builds and computer accessories at BMC.",
              "isPartOf": {
                "@id": "https://www.brilliantmemorycomputers.in/#website"
              },
              "about": {
                "@id": "https://www.brilliantmemorycomputers.in/#localbusiness"
              },
              "publisher": {
                "@id": "https://www.brilliantmemorycomputers.in/#localbusiness"
              },
              "inLanguage": "en-IN",
              "mainEntity": {
                "@id": "https://www.brilliantmemorycomputers.in/#localbusiness"
              }
            })
          }}
        />
      </Head>

      {/* PAGE CONTENT SECTION */}
      <HeroSection banners={banners} />
      <Categories />
      <BestSellers />
      <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Welcome to BMC – Chennai’s Trusted Computer & Laptop Store
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            <span className="block mb-4">
              Looking for brand new laptops & computers in Chennai, the latest gaming computer for high performance or a reliable computer wholesale shop for your PC requirements? You’ve come to the right place!
            </span>
            At Brilliant Memory Computers, we’re proud to be the best computer shop in Chennai, offering refurbished laptops, gaming laptops, computer accessories and wholesale computer solutions at affordable prices.

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
            Searching for the best computer shop in Chennai? Brilliant Memory Computers is your trusted destination and a long-term computer wholesale shop in Chennai for brand-new laptops, custom-built PCs, refurbished systems and all types of computer accessories. Whether you’re a student, professional, gamer or business owner, we bring you powerful machines at unbeatable prices.
          </p>

          <HomeSeoSection />
        </div>

      </div>

      <SpecialSection />
      < FaqSection />

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const STATIC_BANNERS = [
    // {
    //   id: 1,
    //   title: 'Banner 1',
    //   // image_url: Banner1.src,
    //   image_url: Banner4.src,
    //   type: 'Web View',
    //   target_url: '/',
    // },
    {
      id: 2,
      title: 'Banner 2',
      image_url: Banner2.src,
      type: 'Web View',
      target_url: '/shop',
    },
    {
      id: 3,
      title: 'Banner 3',
      image_url: Banner3.src,
      type: 'Web View',
      target_url: '/categories',
    },
    // {
    //   id: 4,
    //   title: 'Mobile Banner 4',
    //   // image_url: mobileBanner1.src,
    //   image_url: mobileBanner4.src,
    //   type: 'Mobile View',
    //   target_url: '/',
    // },
    {
      id: 5,
      title: 'Mobile Banner 2',
      image_url: mobileBanner2.src,
      type: 'Mobile View',
      target_url: '/shop',
    },
    {
      id: 6,
      title: 'Mobile Banner 3',
      image_url: mobileBanner3.src,
      type: 'Mobile View',
      target_url: '/categories',
    },
    {
      id: 7,
      title: 'Mobile Banner 1',
      image_url: mobileBanner1.src,
      type: 'Mobile View',
      target_url: '/categories',
    },
    {
      id: 8,
      title: 'Banner 7',
      // image_url: Banner4.src,
      image_url: Banner1.src,
      type: 'Web View',
      target_url: '/aadi-sale-2026',
    },
  ];

  return {
    props: {
      banners: STATIC_BANNERS,
    },
  };
};
