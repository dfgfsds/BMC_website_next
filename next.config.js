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
      {
        source: "/categories/276",
        destination: "/categories/power-supply",
        permanent: true,
      },
      {
        source: "/products/19451",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/products/19780",
        destination: "/shop",
        permanent: true,
      },



    ];
  },
};

module.exports = nextConfig;
