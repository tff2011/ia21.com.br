import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/', '/admin/'],
    },
    sitemap: 'https://ia21.com.br/sitemap.xml',
  }
}
