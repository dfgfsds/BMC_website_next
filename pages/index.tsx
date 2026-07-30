import Head from "next/head";
import Script from "next/script";
import BestSellers from "@/components/BestSellers";
import Categories from "@/components/CategoriesSlider";
import HeroSection from "@/components/HeroSection";
import ReviewCarousel from "@/components/ReviewCarousel";
import SpecialSection from "@/components/SpecialSection";
import HomeSeoSection from "@/components/homeseocontent";
import LogoImg from "../public/img/bmc-logo.png";
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
        <title>Best Computer Shop in Chennai for Laptops & PCs | BMC</title>
        <meta
          name="description"
          content="Best computer shop in Chennai for new & refurbished laptops, gaming computers and accessories. Shop quality products at affordable prices."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Brilliant Memory Computers" />
        <meta name="application-name" content="Brilliant Memory Computers" />
        
        {/* GEO Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0685569;80.2696705" />
        <meta name="ICBM" content="13.0685569, 80.2696705" />
        <meta
          name="keywords"
          content="best computer shop in Chennai, computer shop Chennai, Chennai computer shop, computer wholesale shop, computer wholesale shop in Chennai, computer store Chennai, laptop shop in Chennai, refurbished laptops in Chennai, refurbished laptops and computer store, gaming PC build in Chennai, custom PC builds Chennai, PC builders in Chennai, gaming computer shop Chennai, computer accessories shop in Chennai, laptop and desktop store Chennai"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brilliantmemorycomputers.in/" />

        {/* Open Graph (FB & LinkedIn) */}
        <meta property="og:title" content="Best Computer Shop in Chennai for Laptops & PCs | BMC" />
        <meta
          property="og:description"
          content="Best computer shop in Chennai for new & refurbished laptops, gaming computers and accessories. Shop quality products at affordable prices."
        />
        <meta property="og:url" content="https://www.brilliantmemorycomputers.in/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://www.brilliantmemorycomputers.in/${LogoImg.src}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Computer Shop in Chennai for Laptops & PCs" />
        <meta
          name="twitter:description"
          content="Best computer shop in Chennai for new & refurbished laptops, gaming computers and accessories. Shop quality products at affordable prices."
        />
        <meta
          name="twitter:image"
          content={`https://www.brilliantmemorycomputers.in/${LogoImg.src}`}
        />



        {/* Schema JSON-LD */}
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.brilliantmemorycomputers.in/#business",
              "name": "Brilliant Memory Computers",
              "alternateName": "BMC",
              "url": "https://www.brilliantmemorycomputers.in/",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://www.brilliantmemorycomputers.in/#logo",
                "url": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png"
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-banner-1.ebb75824.jpg"
              },
              "description": "Brilliant Memory Computers is a computer and laptop store in Chennai offering brand-new laptops, gaming PCs, custom PC builds, refurbished computers, components and computer accessories.",
              "telephone": "+91-7788996684",
              "email": "info@brilliantmemorycomputers.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7788996684",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": [
                  "English",
                  "Tamil"
                ]
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

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "@id": "https://www.brilliantmemorycomputers.in/#computer-services",
              "name": "Computer Sales, Custom PC Builds & IT Hardware Services in Chennai",
              "url": "https://www.brilliantmemorycomputers.in/",
              "description": "Brilliant Memory Computers provides laptops, desktop computers, gaming PCs, custom PC builds, refurbished computers, computer components and accessories in Chennai.",
              "serviceType": [
                "Laptop Sales",
                "Desktop Computer Sales",
                "Gaming PC Builds",
                "Custom PC Builds",
                "Refurbished Laptop Sales",
                "Refurbished Computer Sales",
                "Computer Components",
                "Computer Accessories"
              ],
              "provider": {
                "@id": "https://www.brilliantmemorycomputers.in/#business"
              },
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "BMC Computer Products and Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brand-New Laptops and Desktop Computers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gaming PCs and Gaming Laptops"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom PC Builds in Chennai"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Refurbished Laptops and Computers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Computer Accessories and Peripherals"
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://www.brilliantmemorycomputers.in/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.brilliantmemorycomputers.in/"
                }
              ]
            })
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://www.brilliantmemorycomputers.in/#webpage",
              "url": "https://www.brilliantmemorycomputers.in/",
              "name": "Best Computer Shop in Chennai for Laptops & PCs | BMC",
              "headline": "The Best Laptop & Computer Shop in Chennai",
              "description": "Best computer shop in Chennai for new & refurbished laptops, gaming computers and accessories. Shop quality products at affordable prices.",
              "inLanguage": "en-IN",
              "isPartOf": {
                "@id": "https://www.brilliantmemorycomputers.in/#website"
              },
              "about": {
                "@id": "https://www.brilliantmemorycomputers.in/#business"
              },
              "mainEntity": {
                "@id": "https://www.brilliantmemorycomputers.in/#business"
              },
              "breadcrumb": {
                "@id": "https://www.brilliantmemorycomputers.in/#breadcrumb"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "@id": "https://www.brilliantmemorycomputers.in/#primaryimage",
                "url": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-banner-1.ebb75824.jpg"
              }
            })
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "@id": "https://www.brilliantmemorycomputers.in/#business",
              "name": "Brilliant Memory Computers",
              "alternateName": "BMC",
              "url": "https://www.brilliantmemorycomputers.in/",
              "description": "Brilliant Memory Computers is a computer shop in Chennai offering laptops, desktop computers, gaming PCs, custom PC builds, refurbished laptops, computer components and accessories.",
              "image": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-banner-1.ebb75824.jpg",
              "logo": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
              "telephone": "+91-7788996684",
              "email": "info@brilliantmemorycomputers.in",
              "openingHours": "Mo-Sa 09:00-21:00",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Chennai"
                },
                {
                  "@type": "State",
                  "name": "Tamil Nadu"
                }
              ],
              "knowsAbout": [
                "Laptops",
                "Desktop Computers",
                "Gaming PCs",
                "Custom PC Builds",
                "Refurbished Laptops",
                "Computer Components",
                "Computer Accessories",
                "Gaming Accessories",
                "PC Upgrades"
              ]
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
    {
      id: 1,
      title: 'Banner 1',
      // image_url: Banner1.src,
      image_url: Banner4.src,
      type: 'Web View',
      target_url: '/',
    },
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
    {
      id: 4,
      title: 'Mobile Banner 4',
      // image_url: mobileBanner1.src,
      image_url: mobileBanner4.src,
      type: 'Mobile View',
      target_url: '/',
    },
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
