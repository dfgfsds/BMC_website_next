import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date()

  const baseUrl = 'https://www.brilliantmemorycomputers.in'

  const staticPages = [
   '/',
    '/login',
    '/signup',
    '/cart',
    '/shop',
    '/categories',
    '/about-us',
    '/contact-us',
    '/profile',
    '/refund-policy',
    '/terms-conditions',
    '/privacy-policy',
    '/cancellation-policy',
    '/shipping-policy',
    '/blog'
  ]

  const categoryPages = [
    'laptops',
    'hdd',
    'graphics-card',
    'motherboard',
    'processor',
    'ram',
    'keyboard',
    'ssd',
    'cooling-fan',
    'power-supply',
    'cabinet',
    'mouse',
    'monitor',
    'desktops',
    'soundbar',
    'web-camera',
    'speaker',
    'keyboard-combo',
    'projector',
    'wireless-headphone',
    'printer',
  ]

  return [
    // Static pages
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: lastMod,
      priority: path === '' ? 1.0 : 0.8,
    })),

    // Category pages
    ...categoryPages.map((slug) => ({
      url: `${baseUrl}/categories/${slug}`,
      lastModified: lastMod,
      priority: 0.85,
    })),
  ]
}
