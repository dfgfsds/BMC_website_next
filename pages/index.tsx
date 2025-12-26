import axios from "axios";
import { MetadataRoute } from "next";

const SITE_URL = "https://www.ftds.in";
export const baseUrl = 'https://ecomapi.ftdigitalsolutions.org'; 

function slugConvert(text: string) {
  return text
    ?.toString()
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogs: any[] = [];
  try {
    const vendorId = 65;
    const res = await axios.get(`${baseUrl}/blog/?vendor_id=${vendorId}`);
    blogs = res.data?.blogs || [];
  } catch (e: unknown) {
    if (e instanceof Error) console.log("❌ Blog Fetch Failed", e.message);
    else console.log("❌ Blog Fetch Failed", e);
  }

  const blogUrls = blogs.map((b) => ({
    url: `${SITE_URL}/blog/${slugConvert(b.title)}`,
    lastModified: new Date(b.created_at || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  let categories: any[] = [];
  try {
    const res = await axios.get(`${baseUrl}/api/categories/`);
    categories = res.data?.data || res.data || [];
  } catch (e: unknown) {
    if (e instanceof Error) console.log("❌ Category Fetch Failed", e.message);
    else console.log("❌ Category Fetch Failed", e);
  }

  const categoryUrls = categories.map((c) => ({
    url: `${SITE_URL}/categories/${slugConvert(c.name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/shop",
    "/blog",
    "/categories",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refurbished-laptop-in-chenna",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1.0,
  }));

  return [...staticUrls, ...blogUrls, ...categoryUrls];
}
