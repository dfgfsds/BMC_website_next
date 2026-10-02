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

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
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
      {
        source: "/aboutUs",
        destination: "/about-us",
        permanent: true,
      },

      // WooCommerce old product-category redirects
      {
        source: "/product-category/computers-accessories/gamepads/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product-category/epson-664-yellow-original/:path*",
        destination: "/categories/printer",
        permanent: true,
      },
      {
        source: "/product-category/computers-accessories/mice-computers-accessories/:path*",
        destination: "/categories/mouse",
        permanent: true,
      },
      {
        source: "/product-category/ptinter/:path*",
        destination: "/categories/printer",
        permanent: true,
      },
      {
        source: "/product-category/kaspersky-plus/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product-category/computer-office/input-devices/keyboard/:path*",
        destination: "/categories/keyboard",
        permanent: true,
      },
      {
        source: "/product-category/computers-accessories/keyboard-computers-accessories/:path*",
        destination: "/categories/keyboard",
        permanent: true,
      },
      {
        source: "/product-category/keyboard/:path*",
        destination: "/categories/keyboard",
        permanent: true,
      },
      {
        source: "/product-category/computers-accessories/usb/usb-sound-card/:path*",
        destination: "/shop",
        permanent: true,
      },
      {
        source: "/product-category/hp-laptop-bag/:path*",
        destination: "/categories/laptops",
        permanent: true,
      },
      {
        source: "/product-category/hp-laptop-ryzen-5/:path*",
        destination: "/categories/laptops",
        permanent: true,
      },
      {
        source: "/product-category/computers-accessories/laptop/hard-drive/:path*",
        destination: "/categories/hdd",
        permanent: true,
      },
      {
        source: "/product-category/computers-accessories/component/monitor/:path*",
        destination: "/categories/monitor",
        permanent: true,
      },
      {
        source: "/product-category/extension-boards/lapcare-extension-boards/:path*",
        destination: "/shop",
        permanent: true,
      },
      // Catch-all for any remaining old product-category URLs
      {
        source: "/product-category/:path*",
        destination: "/shop",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
