import { GetServerSideProps } from "next";
import axios from "axios";

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

  let categoryUrls: string[] = [];
  let blogUrls: string[] = [];
  let productUrls: string[] = [];

  try {
    const vendorId = 65;

    const response = await axios.get(
      `https://test-ecomapi.justvy.in/blog/?vendor_id=${vendorId}`
    );

    const blogs = response.data?.blogs || [];

    blogUrls = blogs.map(
      (blog: any) => `
      <url>
        <loc>${baseUrl}/blog/${slugConvert(blog.title)}</loc>
        <lastmod>${new Date(blog.created_at).toISOString()}</lastmod>
        <priority>0.7</priority>
      </url>`
    );
  } catch (error) {
    console.error("Blog fetch error:", error);
  }

  try {
    const vendorId = 65;
    const response = await axios.get(
      `https://ecomapi.ftdigitalsolutions.org/api/products/?vendor_id=${vendorId}`,
      { headers: { Origin: baseUrl } }
    );

    const products = Array.isArray(response.data) 
      ? response.data.filter((product: any) => product.status === true) 
      : [];

    productUrls = products.map(
      (product: any) => `
      <url>
        <loc>${baseUrl}/shop/${slugConvert(product.name)}</loc>
        <lastmod>${new Date(product.created_at || lastMod).toISOString()}</lastmod>
        <priority>0.9</priority>
      </url>`
    );
  } catch (error) {
    console.error("Product fetch error:", error);
  }

  try {
    const vendorId = 65;
    const response = await axios.get(
      `https://ecomapi.ftdigitalsolutions.org/api/categories/?vendor_id=${vendorId}`,
      { headers: { Origin: baseUrl } }
    );

    const categories = Array.isArray(response.data) ? response.data : [];

    categoryUrls = categories.map(
      (category: any) => `
      <url>
        <loc>${baseUrl}/categories/${slugConvert(category.name)}</loc>
        <lastmod>${new Date(category.created_at || lastMod).toISOString()}</lastmod>
        <priority>0.85</priority>
      </url>`
    );
  } catch (error) {
    console.error("Category fetch error:", error);
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

    ...categoryUrls,

    ...blogUrls,
    ...productUrls,
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
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}