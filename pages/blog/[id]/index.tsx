import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import { formatDate, slugConvert } from "../../../lib/utils";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import localBlogs from "../../../data/blogs.json";

export interface Blog {
    id?: number | string;
    title: string;
    subtitle?: string;
    content: string;
    banner_url: string;
    image?: string;
    created_at: string;
    updated_at?: string;
    author: string;
    description: string;
    likes?: number;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string[] | string;
    meta_tags?: any[];
    canonical_tag?: string;
    robots_tag?: string;
    url_description?: string;
    og_tags?: any;
    twitter_tags?: any;
    image_src_tags?: string;
    schema?: any;
    url_slug?: string;
    vendor?: number;
    user?: number;
}

interface BlogDetailProps {
    blog: Blog | null;
}

// Helper to remove HTML tags for meta descriptions
function stripHtml(html?: string): string {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim();
}

// Helper to clean schema script tags or objects
function cleanSchema(rawSchema: any): string | null {
    if (!rawSchema) return null;
    if (typeof rawSchema === "object") {
        return JSON.stringify(rawSchema);
    }
    if (typeof rawSchema === "string") {
        const trimmed = rawSchema.trim();
        if (!trimmed) return null;
        // Strip out <script ...> and </script> if already provided in the string
        return trimmed
            .replace(/<script\b[^>]*>/gi, "")
            .replace(/<\/script>/gi, "")
            .trim();
    }
    return null;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    if (!blog) {
        return (
            <div className="max-w-4xl mx-auto py-20 px-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Blog Not Found</h1>
                <p className="text-gray-500">The blog article you are looking for does not exist.</p>
            </div>
        );
    }

    const currentSlug = blog.url_slug || slugConvert(blog.title);
    const canonicalUrl =
        blog.canonical_tag?.trim() ||
        `https://www.brilliantmemorycomputers.in/blog/${currentSlug}`;

    const seoTitle =
        blog.meta_title?.trim() || `${blog.title} | Brilliant Memory Computers`;

    const plainDescription = stripHtml(blog.description || blog.content);
    const seoDescription =
        blog.meta_description?.trim() || plainDescription.slice(0, 160);

    const keywords = Array.isArray(blog.meta_keywords)
        ? blog.meta_keywords.join(", ")
        : typeof blog.meta_keywords === "string"
            ? blog.meta_keywords
            : "";

    const bannerImage =
        blog.banner_url || blog.image || blog.image_src_tags || "/default-blog.jpg";

    const ogTitle =
        (typeof blog.og_tags === "object" && blog.og_tags?.title) ||
        (typeof blog.og_tags === "string" && blog.og_tags.trim()) ||
        seoTitle;

    const ogDescription =
        (typeof blog.og_tags === "object" && blog.og_tags?.description) ||
        seoDescription;

    const ogImage =
        (typeof blog.og_tags === "object" && blog.og_tags?.image) ||
        bannerImage;

    const ogType =
        (typeof blog.og_tags === "object" && blog.og_tags?.type) || "article";

    const twitterTitle =
        (typeof blog.twitter_tags === "object" && blog.twitter_tags?.title) ||
        (typeof blog.twitter_tags === "string" && blog.twitter_tags.trim()) ||
        ogTitle;

    const twitterDescription =
        (typeof blog.twitter_tags === "object" && blog.twitter_tags?.description) ||
        ogDescription;

    const twitterImage =
        (typeof blog.twitter_tags === "object" && blog.twitter_tags?.image) ||
        ogImage;

    const twitterCard =
        (typeof blog.twitter_tags === "object" && blog.twitter_tags?.card) ||
        "summary_large_image";

    const robotsContent = blog.robots_tag?.trim() || "index, follow";

    // Clean schema string from API/JSON
    const formattedSchema = cleanSchema(blog.schema);

    return (
        <div className="max-w-4xl mx-auto py-16 px-6">
            <Head>
                {/* Meta Title & Description */}
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                {keywords && <meta name="keywords" content={keywords} />}
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content={robotsContent} />

                {/* Open Graph */}
                <meta property="og:type" content={ogType} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="Brilliant Memory Computers" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter */}
                <meta name="twitter:card" content={twitterCard} />
                <meta name="twitter:title" content={twitterTitle} />
                <meta name="twitter:description" content={twitterDescription} />
                <meta name="twitter:image" content={twitterImage} />

                {/* Schema / Structured Data */}
                {formattedSchema ? (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: formattedSchema }}
                    />
                ) : (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "BlogPosting",
                                "headline": blog.title,
                                "description": seoDescription,
                                "image": bannerImage,
                                "datePublished": blog.created_at,
                                "dateModified": blog.updated_at || blog.created_at,
                                "author": {
                                    "@type": "Organization",
                                    "name": blog.author || "Brilliant Memory Computers",
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Brilliant Memory Computers",
                                    "url": "https://www.brilliantmemorycomputers.in",
                                },
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": canonicalUrl,
                                },
                            }),
                        }}
                    />
                )}
            </Head>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
            {blog.subtitle && (
                <h2 className="text-xl text-gray-600 font-medium mb-4">{blog.subtitle}</h2>
            )}
            <div className="text-sm text-gray-400 mb-6">
                {blog.created_at && formatDate(blog.created_at)} · by {blog.author || "Brilliant Memory Computers"}
            </div>

            {bannerImage && (
                <div className="relative w-full h-96 mb-8">
                    <Image
                        src={bannerImage}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-lg"
                        priority
                    />
                </div>
            )}

            <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="quill-content prose max-w-none text-gray-800 leading-relaxed"
            />
        </div>
    );
}

// ✅ SSR fetching with API first & Local JSON fallback
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as { id: string };
    const vendorId = 65;

    // 1. Find blog from Local JSON
    const localList = (localBlogs || []) as Blog[];
    const localFound = localList.find(
        (b) =>
            (b.url_slug && slugConvert(b.url_slug) === id) ||
            slugConvert(b.title) === id ||
            String(b.id) === id
    );

    let apiFound: Blog | null = null;

    // 2. Fetch from API
    try {
        const apiEndpoint = `${baseUrl}/blog/?vendor_id=${vendorId}`;
        const response = await axios.get(apiEndpoint, { timeout: 5000 }).catch(() => null);

        // Fallback test api url if baseUrl didn't return
        let blogs: Blog[] = response?.data?.blogs || [];
        if (blogs.length === 0) {
            const fallbackRes = await axios
                .get(`https://test-ecomapi.justvy.in/blog/?vendor_id=${vendorId}`, { timeout: 5000 })
                .catch(() => null);
            blogs = fallbackRes?.data?.blogs || [];
        }

        apiFound =
            blogs.find(
                (b) =>
                    (b.url_slug && slugConvert(b.url_slug) === id) ||
                    slugConvert(b.title) === id ||
                    String(b.id) === id
            ) || null;
    } catch (error) {
        console.error("Error fetching blog from API:", error);
    }

    // 3. Merge API data with Local JSON fallback
    let mergedBlog: Blog | null = null;

    if (apiFound && localFound) {
        // Prioritize API response, fallback to local JSON for missing/empty fields
        mergedBlog = {
            ...localFound,
            ...apiFound,
            title: apiFound.title?.trim() || localFound.title,
            subtitle: apiFound.subtitle?.trim() || localFound.subtitle,
            content: apiFound.content?.trim() || localFound.content,
            description: apiFound.description?.trim() || localFound.description,
            banner_url: apiFound.banner_url || localFound.banner_url,
            author: apiFound.author?.trim() || localFound.author,
            created_at: apiFound.created_at || localFound.created_at,
            meta_title: apiFound.meta_title?.trim() || localFound.meta_title,
            meta_description: apiFound.meta_description?.trim() || localFound.meta_description,
            meta_keywords:
                (Array.isArray(apiFound.meta_keywords) && apiFound.meta_keywords.length > 0) ||
                    (typeof apiFound.meta_keywords === "string" && apiFound.meta_keywords.trim() !== "")
                    ? apiFound.meta_keywords
                    : localFound.meta_keywords,
            canonical_tag: apiFound.canonical_tag?.trim() || localFound.canonical_tag,
            robots_tag: apiFound.robots_tag?.trim() || localFound.robots_tag,
            url_description: apiFound.url_description?.trim() || localFound.url_description,
            og_tags: apiFound.og_tags || localFound.og_tags,
            twitter_tags: apiFound.twitter_tags || localFound.twitter_tags,
            image_src_tags: apiFound.image_src_tags || localFound.image_src_tags,
            schema: apiFound.schema || localFound.schema,
            url_slug: apiFound.url_slug || localFound.url_slug,
        };
    } else if (apiFound) {
        mergedBlog = apiFound;
    } else if (localFound) {
        mergedBlog = localFound;
    }

    return {
        props: {
            blog: mergedBlog || null,
        },
    };
};
