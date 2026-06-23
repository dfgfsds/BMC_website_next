import Head from "next/head";
import CategoriesPage from '@/components/categories';

export default function CartPage() {


  return (
    <>

      <Head>
        {/* Title */}
        <title>Computer Categories | Laptops, PCs & Accessories Chennai</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Browse computer categories including laptops, desktops, gaming PCs, printers, accessories and IT products from Brilliant Memory Computers Chennai."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="Computer Hardware, Laptops, Graphics Cards, Motherboards, Processors, RAM, SSD, HDD, Cabinets, Power Supply, Monitors, Desktops, Printers, Computer Accessories, BMC Chennai, computer categories, laptop categories, desktop computers, gaming pc, computer accessories, printers, networking products, IT products Chennai, computer shop Chennai, Brilliant Memory Computers"
        />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brilliantmemorycomputers.in/categories"
        />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Computer Categories | Laptops, PCs & Accessories Chennai" />
        <meta property="og:description" content="Explore laptops, desktops, gaming PCs, printers, networking products and computer accessories from Brilliant Memory Computers Chennai." />
        <meta property="og:url" content="https://www.brilliantmemorycomputers.in/categories" />
        <meta property="og:site_name" content="Brilliant Memory Computers" />
        <meta property="og:image" content="https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Computer Categories | Laptops, PCs & Accessories Chennai" />
        <meta name="twitter:description" content="Browse laptops, desktops, printers, gaming PCs and IT accessories from Brilliant Memory Computers Chennai." />
        <meta name="twitter:image" content="https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png" />

        {/* IMAGE_SRC Tag */}
        <link rel="image_src" href="https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png" />

        {/* GEO Tags */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827,80.2707" />

        {/* AEO (Answer Engine Optimization) Tags */}
        <meta name="subject" content="Computer Product Categories" />
        <meta name="topic" content="Computer Categories Chennai" />
        <meta name="summary" content="Browse laptops, desktops, gaming PCs, printers, networking devices and computer accessories." />
        <meta name="classification" content="Computer Store" />
        <meta name="coverage" content="Chennai, Tamil Nadu, India" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="Businesses, Students, Gamers, IT Professionals" />
        <meta name="audience" content="Computer Buyers" />
        <meta name="revisit-after" content="7 days" />

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brilliant Memory Computers",
              "url": "https://www.brilliantmemorycomputers.in",
              "logo": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
              "description": "Brilliant Memory Computers provides laptops, desktops, gaming PCs, printers, accessories and IT solutions in Chennai.",
              "email": "info@brilliantmemorycomputers.in",
              "telephone": "+91-7788996684",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road, Gaiety Palace, Anna Salai,chennai-600002",
                "addressLocality": "Chennai",
                "postalCode": "600002",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Computer Sales and IT Products",
              "provider": {
                "@type": "Organization",
                "name": "Brilliant Memory Computers"
              },
              "serviceType": "Computer Sales, Laptops, Desktops, Gaming PCs, Accessories",
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "url": "https://www.brilliantmemorycomputers.in/categories"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.brilliantmemorycomputers.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Categories",
                  "item": "https://www.brilliantmemorycomputers.in/categories"
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Computer Categories",
              "url": "https://www.brilliantmemorycomputers.in/categories",
              "description": "Browse computer categories including laptops, desktops, gaming PCs, printers, accessories and networking products.",
              "isPartOf": {
                "@type": "WebSite",
                "name": "Brilliant Memory Computers",
                "url": "https://www.brilliantmemorycomputers.in"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "name": "Brilliant Memory Computers",
              "url": "https://www.brilliantmemorycomputers.in",
              "image": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
              "telephone": "+91-7788996684",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road, Gaiety Palace, Anna Salai",
                "addressLocality": "Chennai-600002",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.0827",
                "longitude": "80.2707"
              }
            })
          }}
        />
      </Head>
      <CategoriesPage />;
    </>)
}
