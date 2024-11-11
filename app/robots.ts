import { MetadataRoute } from 'next';

// Julian Goldie's Robot Optimization
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://absstudios.com/sitemap.xml',
  };
}