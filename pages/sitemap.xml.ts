import { GetServerSideProps } from 'next'

const baseUrl = 'https://www.brilliantmemorycomputers.in'   // Change your domain

function generateSiteMap() {
  const pages = [
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

  const lastMod = new Date().toISOString()

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

    ${pages
      .map(
        (url, index) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>${url === '/' ? '1.00' : index < 12 ? '0.80' : '0.64'}</priority>
      </url>`
      )
      .join('')}
  </urlset>`
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
