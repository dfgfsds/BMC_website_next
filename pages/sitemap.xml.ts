import { GetServerSideProps } from "next";
import axios from "axios";
import localBlogs from "../data/blogs.json";

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.brilliantmemorycomputers.in";
  const lastMod = new Date().toISOString();

  const staticPages = [
    "",
    "/login",
    "/signup",
    "/cart",
    "/shop",
    "/categories",
    "/about-us",
    "/contact-us",
    "/custom-pc-build",
    "/profile",
    "/refund-policy",
    "/terms-conditions",
    "/privacy-policy",
    "/cancellation-policy",
    "/shipping-policy",
    "/delivery-policy",
    "/blog",
    "/aadi-sale-2026"
  ];

  const categoryPages = [
    "laptops",
    "hdd",
    "graphics-card",
    "motherboard",
    "processor",
    "ram",
    "keyboard",
    "ssd",
    "cooling-fan",
    "power-supply",
    "cabinet",
    "mouse",
    "monitor",
    "desktops",
    "soundbar",
    "web-camera",
    "speaker",
    "keyboard-combo",
    "projector",
    "wireless-headphone",
    "printer",
  ];

  let blogUrls: string[] = [];

  try {
    const vendorId = 65;

    let apiBlogs: any[] = [];
    try {
      const response = await axios.get(
        `https://test-ecomapi.justvy.in/blog/?vendor_id=${vendorId}`,
        { timeout: 5000 }
      );
      apiBlogs = response.data?.blogs || [];
    } catch (e) {
      console.error("API blog fetch error in sitemap:", e);
    }

    // Merge API blogs with local blogs, avoiding duplicate slugs
    const allBlogsMap = new Map<string, any>();

    // First add local blogs
    ((localBlogs as any[]) || []).forEach((b) => {
      const slug = slugConvert(b.url_slug || b.title);
      if (slug) allBlogsMap.set(slug, b);
    });

    // Then overwrite/add with API blogs
    apiBlogs.forEach((b) => {
      const slug = slugConvert(b.url_slug || b.title);
      if (slug) allBlogsMap.set(slug, b);
    });

    blogUrls = Array.from(allBlogsMap.values()).map(
      (blog: any) => `
      <url>
        <loc>${baseUrl}/blog/${slugConvert(blog.url_slug || blog.title)}</loc>
        <lastmod>${blog.created_at ? new Date(blog.created_at).toISOString() : lastMod}</lastmod>
        <priority>0.7</priority>
      </url>`
    );
  } catch (error) {
    console.error("Blog fetch error in sitemap:", error);
  }

  const urls = [
    ...staticPages.map(
      (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${path === "" ? "1.0" : "0.8"}</priority>
      </url>`
    ),

    ...categoryPages.map(
      (slug) => `
      <url>
        <loc>${baseUrl}/categories/${slug}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>0.85</priority>
      </url>`
    ),

    ...blogUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;


// slug converter
function slugConvert(title: string) {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}