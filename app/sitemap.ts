import { MetadataRoute } from 'next';

// Julian Goldie's Dynamic Sitemap Strategy
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://absstudios.com';
  
  const routes = [
    '',
    '/services',
    '/case-studies',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}