import Head from "next/head";
import CategoriesPage from '@/components/categories';

export default function CartPage() {


    return (
    <>
    
<Head>
  {/* Title */}
  <title>Shop Computer Hardware Categories & Accessories | BMC India</title>

  {/* Meta Description */}
  <meta
    name="description"
    content="Explore the top computer hardware shop in India – Browse categories for PCs, Laptops, RAM, SSDs, Graphics Cards & more. Discover quality tech products with fast shipping."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Computer Hardware, Laptops, Graphics Cards, Motherboards, Processors, RAM, SSD, HDD, Cabinets, Power Supply, Monitors, Desktops, Printers, Computer Accessories, BMC Chennai"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.brilliantmemorycomputers.in/categories"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://www.brilliantmemorycomputers.in/categories"
  />
  <meta
    property="og:title"
    content="Shop Computer Hardware Categories & Accessories | BMC"
  />
  <meta
    property="og:description"
    content="Explore the top computer hardware shop in India – PCs, laptops, RAM, SSDs & accessories. Fast shipping and great prices."
  />
  <meta
    property="og:image"
    content="https://www.brilliantmemorycomputers.in/img/bmc-logo.png"
  />
  <meta property="og:site_name" content="Brilliant Memory Computers" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:url"
    content="https://www.brilliantmemorycomputers.in/categories"
  />
  <meta
    name="twitter:title"
    content="Shop Computer Hardware Categories & Accessories | BMC"
  />
  <meta
    name="twitter:description"
    content="Explore the top computer hardware shop in India – PCs, laptops, RAM, SSDs & accessories. Discover quality tech products."
  />
  <meta
    name="twitter:image"
    content="https://www.brilliantmemorycomputers.in/img/bmc-logo.png"
  />

  {/* JSON-LD Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "@id":
              "https://www.brilliantmemorycomputers.in/categories#collectionpage",
            url: "https://www.brilliantmemorycomputers.in/categories",
            name: "Shop Computer Hardware Categories & Accessories | BMC India",
            description:
              "Explore computer hardware categories including PCs, laptops, RAM, SSDs, graphics cards, monitors and accessories from Brilliant Memory Computers India.",
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.brilliantmemorycomputers.in/#website",
            },
            about: {
              "@type": "Thing",
              name: "Computer Hardware Categories",
            },
          },
          {
            "@type": "BreadcrumbList",
            "@id":
              "https://www.brilliantmemorycomputers.in/categories#breadcrumb",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.brilliantmemorycomputers.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Categories",
                item: "https://www.brilliantmemorycomputers.in/categories",
              },
            ],
          },
          {
            "@type": "Organization",
            "@id": "https://www.brilliantmemorycomputers.in/#organization",
            name: "Brilliant Memory Computers",
            url: "https://www.brilliantmemorycomputers.in/",
            logo: {
              "@type": "ImageObject",
              url: "https://www.brilliantmemorycomputers.in/img/bmc-logo.png",
            },
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              areaServed: "IN",
              availableLanguage: ["English", "Tamil"],
            },
          },
        ],
      }),
    }}
  />
</Head>
    <CategoriesPage />;
    </>)
}
