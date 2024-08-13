import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const postSitemaps: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `https://elbyss.vercel.app/post/${post._raw.flattenedPath}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily',
  }));

  return [
    {
      url: 'https://elbyss.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://elbyss.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...postSitemaps,
  ];
}
