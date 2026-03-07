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

    const schema = seo && {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Brilliant Memory Computers",
                "url": "https://www.brilliantmemorycomputers.in",
                "logo": "https://www.brilliantmemorycomputers.in/images/logo.png"
            },
            {
                "@type": "WebSite",
                "name": "Brilliant Memory Computers",
                "url": "https://www.brilliantmemorycomputers.in"
            },
            {
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
                        "name": slug.charAt(0).toUpperCase() + slug.slice(1),
                        "item": seo.meta.canonical
                    }
                ]
            },
            {
                "@type": "CollectionPage",
                "name": seo.meta.title,
                "description": seo.meta.description,
                "url": seo.meta.canonical,
                "image": seo.openGraph.image
            }
        ]
    };

    return (
        <>
            <Head>
                {seo ? (
                    <>
                        <title>{seo.meta.title}</title>
                        <meta name="description" content={seo.meta.description} />
                        <meta name="keywords" content={seo.meta.keywords} />
                        <link rel="canonical" href={seo.meta.canonical} />

                        {/* Open Graph */}
                        <meta property="og:type" content={seo.openGraph.type} />
                        <meta property="og:title" content={seo.openGraph.title} />
                        <meta property="og:description" content={seo.openGraph.description} />
                        <meta property="og:url" content={seo.openGraph.url} />
                        <meta property="og:site_name" content={seo.openGraph.site_name} />
                        <meta property="og:image" content={seo.openGraph.image} />
                        <meta property="og:locale" content={seo.openGraph.locale} />

                        {/* Twitter */}
                        <meta name="twitter:card" content={seo.twitter.card} />
                        <meta name="twitter:title" content={seo.twitter.title} />
                        <meta name="twitter:description" content={seo.twitter.description} />
                        <meta name="twitter:image" content={seo.twitter.image} />

                        {/* ✅ JSON-LD SCHEMA (CORRECT WAY) */}
                        <script
                            type="application/ld+json"
                            strategy="beforeInteractive"
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