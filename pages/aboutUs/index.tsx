
import Head from "next/head";
import AboutUs from '@/components/AboutUs';
import TrendingTabs from './TrendingTabs';
import LogoImg from "../../public/img/bmc-logo.png";
import imgabout from "../../public/img/bmc1.webp"

export default function AboutPage() {
    return <>
          
      <Head>
        <title>Best Laptop Store in Chennai | Brilliant Memory Computers</title>
        <meta
          name="description"
          content="Best Laptop Store in Chennai: Laptops, desktops, custom PC builds, refurbished gaming PCs, IT accessories & more at Brilliant Memory Computers — Chennai’s trusted tech store."
        />
        <meta
          name="keywords"
          content="laptop store in Chennai, best laptop shop Chennai, refurbished laptops Chennai, custom PC Chennai, gaming desktops Chennai, computer accessories shop Chennai"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brilliantmemorycomputers.in/about-us" />

        {/* Open Graph */}
        <meta property="og:title" content="Best Laptop Store in Chennai | Brilliant Memory Computers" />
        <meta
          property="og:description"
          content="Your trusted laptop & PC store for new laptops, refurbished systems, gaming PCs, IT accessories & custom PC builds."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Brilliant Memory Computers" />
        <meta property="og:url" content="https://www.brilliantmemorycomputers.in/about-us" />
        <meta property="og:image"  content= {`https://www.brilliantmemorycomputers.in/${imgabout.src}`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Laptop Store in Chennai | Brilliant Memory Computers" />
        <meta
          name="twitter:description"
          content="Chennai's best laptop store for new & refurbished laptops, gaming PCs, and IT accessories."
        />
        <meta name="twitter:image" content= {`https://www.brilliantmemorycomputers.in/${imgabout.src}`}  />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              "name": "Brilliant Memory Computers",
              "url": "https://www.brilliantmemorycomputers.in",
              "description":
                "Best Laptop Store in Chennai offering new laptops, refurbished laptops, desktops, gaming PCs, IT accessories, and custom PC builds.",
              "logo": `https://www.brilliantmemorycomputers.in/${LogoImg.src}`,
              "image": `https://www.brilliantmemorycomputers.in/${imgabout.src}`,
              "telephone": "+91-7788996684",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road Gaiety Palace, Anna Salai",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN",
              },
              "openingHours": "Mo-Su 10:00-20:00",
              "sameAs": [
                "https://www.facebook.com/brilliantmemorycomputers/",
                "https://www.instagram.com/brilliant_memory_computers/",
                "https://www.youtube.com/channel/UC_OZsZxKSGvkBb_hEMyLL5A",
              ],
            }),
          }}
        />
      </Head>
        <AboutUs />
        <TrendingTabs />
    </>;
}