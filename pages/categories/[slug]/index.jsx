import Head from 'next/head';
import CategoriesBasedProduct from '../../../components/CategoriesProduct';
import seoJson from '../../../data/categorySeo.json';

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const seo = seoJson[slug] || null;

    return {
        props: {
            slug,
            seo
        }
    };
}

export default function Page({ slug, seo }) {

    const schema = seo && [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Brilliant Memory Computers",
            "url": "https://www.brilliantmemorycomputers.in",
            "logo": "https://www.brilliantmemorycomputers.in/_next/static/media/bmc-logo.796edd81.png",
            "description": seo.meta.description,
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
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${slug.charAt(0).toUpperCase() + slug.slice(1)} Sales in Chennai`,
            "provider": {
                "@type": "Organization",
                "name": "Brilliant Memory Computers"
            },
            "serviceType": `${slug.charAt(0).toUpperCase() + slug.slice(1)} Sales`,
            "areaServed": {
                "@type": "City",
                "name": "Chennai"
            },
            "description": seo.meta.description
        },
        {
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
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": slug.charAt(0).toUpperCase() + slug.slice(1),
                    "item": seo.meta.canonical
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": seo.meta.title,
            "url": seo.meta.canonical,
            "description": seo.meta.description,
            "inLanguage": "en-IN",
            "isPartOf": {
                "@type": "WebSite",
                "name": "Brilliant Memory Computers",
                "url": "https://www.brilliantmemorycomputers.in"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "ComputerStore",
            "name": "Brilliant Memory Computers",
            "url": "https://www.brilliantmemorycomputers.in",
            "image": seo.meta.image_src,
            "telephone": "+91-7788996684",
            "priceRange": "₹₹",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop No 2, GF 1/L, Blackers Road, Gaiety Palace, Anna Salai,chennai-600002",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600002",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.0827",
                "longitude": "80.2707"
            },
            "areaServed": "Chennai"
        }
    ];

    if (seo && seo.faq) {
        schema.push(seo.faq);
    }

    return (
        <>
            <Head>
                {seo ? (
                    <>
                        <title>{seo.meta.title}</title>
                        <meta name="description" content={seo.meta.description} />
                        <meta name="keywords" content={seo.meta.keywords} />
                        <link rel="canonical" href={seo.meta.canonical} />
                        {seo.meta.robots && <meta name="robots" content={seo.meta.robots} />}
                        {seo.meta.image_src && <link rel="image_src" href={seo.meta.image_src} />}

                        {/* Open Graph */}
                        <meta property="og:type" content={seo.openGraph.type} />
                        <meta property="og:title" content={seo.openGraph.title} />
                        <meta property="og:description" content={seo.openGraph.description} />
                        <meta property="og:url" content={seo.openGraph.url} />
                        <meta property="og:site_name" content={seo.openGraph.site_name} />
                        <meta property="og:image" content={seo.openGraph.image} />
                        <meta property="og:locale" content={seo.openGraph.locale || "en_IN"} />

                        {/* Twitter */}
                        <meta name="twitter:card" content={seo.twitter.card} />
                        <meta name="twitter:title" content={seo.twitter.title} />
                        <meta name="twitter:description" content={seo.twitter.description} />
                        <meta name="twitter:image" content={seo.twitter.image} />
                        {seo.twitter.site && <meta name="twitter:site" content={seo.twitter.site} />}
                        {seo.twitter.image_alt && <meta name="twitter:image:alt" content={seo.twitter.image_alt} />}

                        {/* GEO Tags */}
                        {seo.geo && (
                            <>
                                <meta name="geo.region" content={seo.geo.region} />
                                <meta name="geo.placename" content={seo.geo.placename} />
                                <meta name="geo.position" content={seo.geo.position} />
                                <meta name="ICBM" content={seo.geo.ICBM} />
                            </>
                        )}

                        {/* AEO Tags */}
                        {seo.aeo && (
                            <>
                                {seo.aeo.subject && <meta name="subject" content={seo.aeo.subject} />}
                                {seo.aeo.topic && <meta name="topic" content={seo.aeo.topic} />}
                                {seo.aeo.summary && <meta name="summary" content={seo.aeo.summary} />}
                                {seo.aeo.classification && <meta name="classification" content={seo.aeo.classification} />}
                                {seo.aeo['revisit-after'] && <meta name="revisit-after" content={seo.aeo['revisit-after']} />}
                                {seo.aeo.distribution && <meta name="distribution" content={seo.aeo.distribution} />}
                                {seo.aeo.rating && <meta name="rating" content={seo.aeo.rating} />}
                                {seo.aeo.coverage && <meta name="coverage" content={seo.aeo.coverage} />}
                                {seo.aeo.target && <meta name="target" content={seo.aeo.target} />}
                                {seo.aeo.audience && <meta name="audience" content={seo.aeo.audience} />}
                                {seo.aeo['theme-color'] && <meta name="theme-color" content={seo.aeo['theme-color']} />}
                                {seo.aeo.HandheldFriendly && <meta name="HandheldFriendly" content={seo.aeo.HandheldFriendly} />}
                                {seo.aeo.MobileOptimized && <meta name="MobileOptimized" content={seo.aeo.MobileOptimized} />}
                                {seo.aeo.publisher && <meta property="article:publisher" content={seo.aeo.publisher} />}
                            </>
                        )}

                        {/* ✅ JSON-LD SCHEMA */}
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(schema),
                            }}
                        />
                    </>
                ) : (
                    <>
                        <title>Category Products | Brilliant Memory Computers</title>
                        <meta
                            name="description"
                            content="Browse products by category at Brilliant Memory Computers."
                        />
                    </>
                )}
            </Head>

            <CategoriesBasedProduct />

        </>
    );
}