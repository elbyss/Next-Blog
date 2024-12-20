import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://elbyss.xyz/sitemap.xml/',
    host: 'https://elbyss.xyz',
  };
}
