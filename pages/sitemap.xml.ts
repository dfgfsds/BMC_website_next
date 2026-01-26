import { GetServerSideProps } from 'next'

const Sitemap = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://www.brilliantmemorycomputers.in'
  const lastMod = new Date().toISOString()

  const staticPages = [
    '',
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
    '/blog',
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

  const urls = [
    ...staticPages.map(
      (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${path === '' ? '1.0' : '0.8'}</priority>
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
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default Sitemap
