import { withContentlayer } from 'next-contentlayer';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [130, 640, 750, 828, 1080, 1200],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1년 캐싱
  },
};

export default withContentlayer(nextConfig);
