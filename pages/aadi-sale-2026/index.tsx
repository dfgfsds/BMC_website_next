import Head from 'next/head';
import Script from 'next/script';
import { 
  Monitor, Cpu, Keyboard, CheckCircle2, 
  MapPin, PhoneCall, ChevronDown, MonitorPlay, ShieldCheck, 
  Wifi, Printer, Package, Users, Info, Mouse, Speaker, HardDrive
} from 'lucide-react';
import { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setFaqOpen(!faqOpen)}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${faqOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${faqOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function AadiSale() {
  return (
    <>
      <Head>
        <title>Aadi Sale 2026 Chennai – PC, Laptop & Gaming Offers | BMC</title>
        <meta name="description" content="Shop BMC Aadi Sale 2026 in Chennai for office PCs, gaming PCs, laptops and accessories. Call +91 77889 96684 for prices and stock." />
        <meta name="keywords" content="Aadi sale 2026 Chennai, Aadi computer sale Chennai, BMC Aadi sale, laptop offers Chennai, desktop offers Chennai, gaming PC offers Chennai, computer wholesale sale Chennai, office PC offer Chennai, computer accessories offers Chennai, bulk computer purchase Chennai" />
        <link rel="canonical" href="https://www.brilliantmemorycomputers.in/aadi-sale-2026" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        <meta name="author" content="Brilliant Memory Computers" />
        <meta name="publisher" content="Brilliant Memory Computers" />
        <meta name="application-name" content="BMC" />
        <meta name="theme-color" content="#8ccf45" />
        <meta name="format-detection" content="telephone=yes" />
        
        <link rel="alternate" hrefLang="en-IN" href="https://www.brilliantmemorycomputers.in/aadi-sale-2026" />
        <link rel="alternate" hrefLang="x-default" href="https://www.brilliantmemorycomputers.in/aadi-sale-2026" />
        
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Brilliant Memory Computers" />
        <meta property="og:title" content="BMC Aadi Sale 2026 – Computer Offers in Chennai" />
        <meta property="og:description" content="Explore BMC Aadi Sale offers on office PCs, Ryzen gaming PCs, laptops, accessories and bulk computer purchases in Chennai." />
        <meta property="og:url" content="https://www.brilliantmemorycomputers.in/aadi-sale-2026" />
        <meta property="og:image" content="https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg" />
        <meta property="og:image:secure_url" content="https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg" />
        <meta property="og:image:alt" content="BMC Aadi Wholesale Sale 2026 office PC, gaming PC and laptop offers in Chennai" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BMC Aadi Sale 2026 – PC and Laptop Offers Chennai" />
        <meta name="twitter:description" content="Call BMC for Aadi offers on office PCs, Ryzen gaming PCs, laptops, accessories and bulk computer purchases in Chennai." />
        <meta name="twitter:image" content="https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg" />
        <meta name="twitter:image:alt" content="BMC Aadi Wholesale Sale 2026 computer offers in Chennai" />
        
        <link rel="image_src" href="https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg" />
        
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0685569;80.2696705" />
        <meta name="ICBM" content="13.0685569, 80.2696705" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.brilliantmemorycomputers.in/#organization",
              "name": "Brilliant Memory Computers",
              "alternateName": "BMC",
              "url": "https://www.brilliantmemorycomputers.in/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png"
              },
              "email": "info@brilliantmemorycomputers.in",
              "telephone": "+91-7788996684",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road, Gaiety Palace",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7788996684",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": [
                  "English",
                  "Tamil"
                ]
              }
            })
          }}
        />

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
              "inLanguage": "en-IN",
              "publisher": {
                "@id": "https://www.brilliantmemorycomputers.in/#organization"
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
              "@id": "https://www.brilliantmemorycomputers.in/#store",
              "name": "Brilliant Memory Computers",
              "alternateName": "BMC",
              "url": "https://www.brilliantmemorycomputers.in/",
              "image": "https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg",
              "logo": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
              "telephone": "+91-7788996684",
              "email": "info@brilliantmemorycomputers.in",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road, Gaiety Palace",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.0685569,
                "longitude": 80.2696705
              },
              "hasMap": "https://www.google.com/maps/place/Brilliant+Memory+Computers/@13.0685569,80.2696705",
              "areaServed": {
                "@type": "City",
                "name": "Chennai"
              },
              "parentOrganization": {
                "@id": "https://www.brilliantmemorycomputers.in/#organization"
              },
              "makesOffer": [
                {
                  "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#office-pc-offer"
                },
                {
                  "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#gaming-pc-offer"
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
              "@type": "CollectionPage",
              "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#webpage",
              "url": "https://www.brilliantmemorycomputers.in/aadi-sale-2026",
              "name": "BMC Aadi Wholesale Sale 2026 – Computer Deals for Every Need",
              "description": "Explore BMC Aadi Sale 2026 offers on office PCs, gaming PCs, laptops, computer components, accessories and bulk computer purchases in Chennai.",
              "inLanguage": "en-IN",
              "isPartOf": {
                "@id": "https://www.brilliantmemorycomputers.in/#website"
              },
              "publisher": {
                "@id": "https://www.brilliantmemorycomputers.in/#organization"
              },
              "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg"
              },
              "breadcrumb": {
                "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#breadcrumb"
              },
              "mainEntity": {
                "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#offers"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Aadi computer sale in Chennai"
                },
                {
                  "@type": "Thing",
                  "name": "Office PC offers"
                },
                {
                  "@type": "Thing",
                  "name": "Gaming PC offers"
                },
                {
                  "@type": "Thing",
                  "name": "Laptop offers in Chennai"
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
              "@type": "BreadcrumbList",
              "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#breadcrumb",
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
                  "name": "Aadi Sale 2026",
                  "item": "https://www.brilliantmemorycomputers.in/aadi-sale-2026"
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
              "@type": "ItemList",
              "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#offers",
              "name": "BMC Aadi Sale 2026 Computer Offers",
              "numberOfItems": 2,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Product",
                    "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#office-pc-bundle",
                    "name": "BMC Aadi Sale Office PC Bundle",
                    "category": "Office Desktop Computer Bundle",
                    "image": "https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg",
                    "description": "Office PC bundle with Intel Core i3 3rd Generation processor, H61 motherboard, 4GB DDR3 RAM, 128GB SSD, cabinet with SMPS, 19-inch monitor, keyboard and mouse.",
                    "additionalProperty": [
                      {
                        "@type": "PropertyValue",
                        "name": "Processor",
                        "value": "Intel Core i3 3rd Generation"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Motherboard",
                        "value": "H61 motherboard"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Memory",
                        "value": "4GB DDR3 RAM"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Storage",
                        "value": "128GB SSD"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Display",
                        "value": "19-inch monitor"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Promotional additions",
                        "value": "Digital speaker, Wi-Fi dongle, USB hub, Kaspersky antivirus and computer table, subject to confirmation"
                      }
                    ],
                    "offers": {
                      "@type": "Offer",
                      "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#office-pc-offer",
                      "url": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#office-pc-offer",
                      "priceCurrency": "INR",
                      "price": "9999",
                      "availability": "https://schema.org/LimitedAvailability",
                      "seller": {
                        "@id": "https://www.brilliantmemorycomputers.in/#store"
                      }
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Product",
                    "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#gaming-pc-bundle",
                    "name": "BMC Aadi Sale Ryzen Gaming PC Bundle",
                    "category": "Gaming Desktop Computer Bundle",
                    "image": "https://www.brilliantmemorycomputers.in/images/bmc-aadi-wholesale-sale-2026-chennai.jpg",
                    "description": "Gaming PC bundle with AMD Ryzen 5 5600GT processor, Gigabyte B450M motherboard, Crucial 8GB DDR4 RAM, 512GB NVMe SSD, RGB gaming cabinet, RGB keyboard and mouse, and a 19-inch monitor.",
                    "additionalProperty": [
                      {
                        "@type": "PropertyValue",
                        "name": "Processor",
                        "value": "AMD Ryzen 5 5600GT"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Motherboard",
                        "value": "Gigabyte B450M motherboard"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Memory",
                        "value": "Crucial 8GB DDR4 RAM"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Storage",
                        "value": "512GB NVMe SSD"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Display",
                        "value": "19-inch monitor"
                      },
                      {
                        "@type": "PropertyValue",
                        "name": "Promotional additions",
                        "value": "HP Ink Tank printer, Kaspersky antivirus and digital speaker, subject to confirmation"
                      }
                    ],
                    "offers": {
                      "@type": "Offer",
                      "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#gaming-pc-offer",
                      "url": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#gaming-pc-offer",
                      "priceCurrency": "INR",
                      "price": "49999",
                      "availability": "https://schema.org/LimitedAvailability",
                      "seller": {
                        "@id": "https://www.brilliantmemorycomputers.in/#store"
                      }
                    }
                  }
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
              "@type": "Service",
              "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#bulk-purchase-service",
              "name": "Bulk Computer Purchase and PC Configuration Support",
              "serviceType": "Bulk computer sales assistance and custom PC configuration",
              "description": "Purchase assistance for businesses, offices, schools, training centres, institutions and resellers requiring multiple desktops, laptops, gaming PCs or computer accessories.",
              "url": "https://www.brilliantmemorycomputers.in/aadi-sale-2026",
              "provider": {
                "@id": "https://www.brilliantmemorycomputers.in/#store"
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
              "availableChannel": {
                "@type": "ServiceChannel",
                "servicePhone": {
                  "@type": "ContactPoint",
                  "telephone": "+91-7788996684",
                  "contactType": "sales"
                }
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.brilliantmemorycomputers.in/aadi-sale-2026#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is included in the BMC Aadi Sale 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The sale covers office and gaming PC bundles, laptops, desktops, components, accessories, bulk-purchase options and limited-stock clearance deals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much is the Office PC offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The advertised Office PC bundle is ₹9,999, including the desktop configuration, 19-inch monitor, keyboard and mouse. Promotional extras require confirmation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What comes with the ₹49,999 Gaming PC offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It includes a Ryzen 5 5600GT CPU, B450M motherboard, 8GB DDR4 RAM, 512GB NVMe SSD, RGB cabinet, RGB keyboard and mouse, and a 19-inch monitor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the printer and computer table included free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "They are listed as promotional products. Call BMC to confirm stock, conditions and whether they are included with the applicable bundle."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are laptop offers available during the Aadi sale?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Call for current laptop brands, specifications, prices and stock because available models can change during the sale."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I confirm a BMC Aadi offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Call +91 77889 96684 and mention BMC Aadi Sale 2026. Confirm the configuration, promotional products, warranty and stock before visiting."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-20541JBJRX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-20541JBJRX');
        `}
      </Script>

      <div className="bg-white dark:bg-[#0a0a0a] min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-indigo-500 selection:text-white">
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden bg-white dark:bg-[#0a0a0a]">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-70 animate-pulse" />
            {/* Traditional Top Decoration Line (Toran vibe) */}
            <div className="absolute top-0 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMEwyMCAyMEw0MCAwaC0yMEgwWiIgZmlsbD0iI2ZiOTIzYyIgb3BhY2l0eT0iMC42Ii8+PC9zdmc+')] opacity-30 bg-repeat-x" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
              
              {/* Text Content (Left Side) */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-8 shadow-sm border border-indigo-200 dark:border-indigo-800">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                  Limited Time Event
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                  BMC Aadi Wholesale Sale <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">2026</span>
                </h1>
                <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                  Computer Deals for Every Need
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
                  Make this Aadi season the right time to upgrade your computer setup. Brilliant Memory Computers brings the BMC Aadi Wholesale Sale to Chennai with special prices on office desktops, gaming PCs, laptops, and accessories.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a href="tel:+917788996684"
                     className="call-cta"
                     aria-label="Call Brilliant Memory Computers for Aadi Sale 2026 offers">
                     Call Now: +91 77889 96684
                  </a>
                  <a href="#offers" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold text-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto">
                    View Offers <ChevronDown className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
                  Available while stocks last. Suitable for students, professionals, and gamers.
                </p>
              </div>

              {/* Banner Image (Right Side) */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-900 aspect-[4/3] lg:aspect-square flex items-center justify-center transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10 pointer-events-none" />
                  <img 
                    src="/aadi_hero_computers_text_bg.png" 
                    alt="BMC Aadi Sale Computer Deals" 
                    className="w-full h-full object-cover object-center scale-105"
                  />
                  
                  {/* Floating Aadi Vibe Elements purely for the image container */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400/30 blur-[20px] rounded-full animate-float-slow z-20 pointer-events-none" />
                  <div className="absolute bottom-8 right-8 w-16 h-16 bg-red-500/30 blur-[25px] rounded-full animate-float-medium z-20 pointer-events-none" />
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-yellow-300 rounded-full shadow-[0_0_15px_rgba(253,224,71,0.8)] animate-pulse-slow z-20 pointer-events-none" />
                </div>
                
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 dark:opacity-30 blur-2xl rounded-[3rem] -z-10 pointer-events-none" />
              </div>
              
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Sale Highlights in Chennai</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">The campaign brings several options together in one showroom.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Monitor, title: 'Office PCs', desc: 'Complete bundles from ₹9,999' },
                { icon: MonitorPlay, title: 'Gaming PCs', desc: 'Ryzen bundles at ₹49,999' },
                { icon: Cpu, title: 'Desktops', desc: 'From ₹9,000 to ₹90,000' },
                { icon: Cpu, title: 'Pro Gaming', desc: 'Configs from ₹49k to above ₹5L' },
                { icon: Package, title: 'Laptops', desc: 'Across brands at special prices' },
                { icon: Keyboard, title: 'Accessories', desc: 'Components & peripherals' },
                { icon: Users, title: 'Bulk Purchase', desc: 'Support & dealer-price enquiries' },
                { icon: ShieldCheck, title: 'Clearance', desc: 'Limited-stock clearance deals' },
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-indigo-100 dark:border-indigo-800/50">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center shrink-0">
                <Info className="w-8 h-8 text-indigo-600 dark:text-indigo-300" />
              </div>
              <div>
                <p className="text-lg text-indigo-900 dark:text-indigo-200 font-medium">
                  Whether you need one affordable home computer or multiple systems for an office, institution or resale requirement, call with your quantity and intended use. The team can explain what is available and help you compare suitable options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section id="offers" className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            
            {/* Offer 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden mb-16 border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300 uppercase tracking-wide">Essential Setup</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Office PC Bundle</h2>
                <div className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6">₹9,999</div>
                
                <div className="w-full mb-6 block rounded-2xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-700">
                  <img src="/office_pc_bundle_ai.png" alt="Office PC Bundle Offer" className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Intended for billing, browsing, online classes, document work, email, data entry and other basic applications.
                </p>
                <a href="tel:+917788996684"
                   className="call-cta"
                   aria-label="Call BMC to enquire about the 9999 rupees Office PC Aadi offer">
                   Call for ₹9,999 Office PC Offer
                </a>
              </div>
              <div className="lg:w-1/2 p-8 md:p-12">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Monitor className="w-5 h-5 text-indigo-500" /> Bundle Includes
                    </h3>
                    <ul className="space-y-3">
                      {['Intel Core i3 3rd Gen', 'H61 motherboard', '4GB DDR3 RAM', '128GB SSD', 'Cabinet with SMPS', '19-inch monitor', 'Keyboard and mouse'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-purple-500" /> Promotional Additions
                    </h3>
                    <ul className="space-y-3">
                      {['Digital speaker', 'Wi-Fi dongle', 'USB hub', 'Kaspersky antivirus', 'Computer table'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Component brands, product condition and warranty may vary, so confirm the exact specification during your call. This offer is most relevant for buyers who need an essential desktop setup.
                  </p>
                </div>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col lg:flex-row-reverse relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
              
              <div className="lg:w-1/2 p-8 md:p-12 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>
                <div className="absolute top-0 right-0 p-4 z-10">
                  <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/30 uppercase tracking-wide shadow-[0_0_10px_rgba(168,85,247,0.5)]">RGB Setup</span>
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Ryzen Gaming PC</h2>
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 drop-shadow-sm">₹49,999</div>
                  
                  <div className="w-full mb-6 block rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.2)] border border-gray-700">
                    <img src="/gaming_pc_bundle_ai.png" alt="Gaming PC Bundle Offer" className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-gray-300 mb-8 text-lg">
                    For stronger multitasking and a modern RGB-style setup. Great for entry-level gaming, study, and content creation.
                  </p>
                  <a href="tel:+917788996684"
                     className="call-cta"
                     aria-label="Call BMC to enquire about the 49999 rupees Gaming PC Aadi offer">
                     Call for ₹49,999 Gaming PC Offer
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-purple-500" /> Advertised Config
                    </h3>
                    <ul className="space-y-3">
                      {['AMD Ryzen 5 5600GT CPU', 'Gigabyte B450M motherboard', 'Crucial 8GB DDR4 RAM', '512GB NVMe SSD', 'RGB gaming cabinet', 'RGB gaming keyboard/mouse', '19-inch monitor'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Printer className="w-5 h-5 text-pink-500" /> Promotional Extras
                    </h3>
                    <ul className="space-y-3">
                      {['HP Ink Tank printer', 'Kaspersky antivirus', 'Digital speaker'].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Gaming performance depends on titles and hardware used. Ask whether the system uses integrated graphics or a separate GPU. Discuss RAM upgrades, PSU, and cooling if planning demanding use.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* More Info Sections */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <MonitorPlay className="w-6 h-6 text-indigo-500" /> Laptops & More
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The BMC Aadi Sale is not limited to the two featured bundles. Customers can enquire about laptops for students, office users, programmers, designers and business teams. Desktop options cover different budgets, while custom gaming computers can be configured for entry-level gaming, competitive titles, streaming, editing and performance-focused work.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You can also check current deals on RAM, SSDs, hard drives, monitors, keyboards, mouse devices, speakers, printers, networking products, cabinets and other PC components. Brands and stock can change, so calling first helps you check before travelling.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                  <Users className="w-6 h-6 text-indigo-500" /> Bulk & Dealer Prices
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Businesses, schools, training centres, offices, resellers and institutions can enquire about multiple laptops, desktops or accessories. Share the required quantity, preferred specification, budget and delivery expectation when calling.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  A clear requirement helps the team prepare a relevant quotation. An office may need matching desktops for administration, while a training centre may prioritise monitors and keyboards. Resellers can ask about available clearance products.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Call Before Visiting?</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  'Confirm that an offer is available',
                  'Check exact component brands and models',
                  'Understand warranty and product-condition details',
                  'Verify promotional extras and applicable terms',
                  'Discuss upgrades or alternative configurations',
                  'Get directions to the Chennai showroom'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 italic">
                Prices, bundle contents and promotional products are subject to stock availability and final confirmation. Landing-page product images should be treated as representative.
              </div>
            </div>
          </div>
        </section>

        {/* Visit & FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            
            <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white mb-20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <MapPin className="w-12 h-12 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Brilliant Memory Computers</h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Shop No. 2, GF 1/L, Blackers Road, Gaiety Palace, Anna Salai, Chennai – 600002. Near Casino Theatre and next to the Ola Electric Store.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+917788996684"
                     className="call-cta"
                     aria-label="Call Brilliant Memory Computers for Aadi Sale 2026 offers">
                     Call Now: +91 77889 96684
                  </a>
                  
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                <FaqItem 
                  question="What is included in the BMC Aadi Sale 2026?"
                  answer="The sale covers office and gaming PC bundles, laptops, desktops, components, accessories, bulk-purchase options and limited-stock clearance deals."
                />
                <FaqItem 
                  question="How much is the Office PC offer?"
                  answer="The advertised Office PC bundle is ₹9,999, including the desktop configuration, 19-inch monitor, keyboard and mouse. Promotional extras require confirmation."
                />
                <FaqItem 
                  question="What comes with the ₹49,999 Gaming PC offer?"
                  answer="It includes a Ryzen 5 5600GT CPU, B450M motherboard, 8GB DDR4 RAM, 512GB NVMe SSD, RGB cabinet, RGB keyboard and mouse, and a 19-inch monitor."
                />
                <FaqItem 
                  question="Are the printer and computer table included free?"
                  answer="They are listed as promotional products. Call BMC to confirm stock, conditions and whether they are included with the applicable bundle."
                />
                <FaqItem 
                  question="Are laptop offers available?"
                  answer="Yes. Call for current laptop brands, specifications, prices and stock because available models can change during the sale."
                />
                <FaqItem 
                  question="How do I confirm an Aadi offer?"
                  answer="Call +91 77889 96684 and mention BMC Aadi Sale 2026. Confirm the configuration, promotional products, warranty and stock before visiting."
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
