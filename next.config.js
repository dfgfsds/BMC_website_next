/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // domains: [
    //   'theme905-computer-shop.myshopify.com',
    //   'example.com',
    //   'ecomapi.ftdigitalsolutions.org',
    //   'www.primeabgb.com',
    // ],
  },

  async redirects() {
    return [
      {
        source: "/products/c",
        destination: "/shop",
        permanent: true, // 301 redirect
      },
      {
        source: "/products",
        destination: "/shop",
        permanent: true, // 301 redirect
      },
      {
        source: "/categories/550",
        destination: "/categories/laptops",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
