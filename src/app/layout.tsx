import localFont from 'next/font/local';
import './globals.css';
import CategoryLayout from '@/shared/CategoryLayout';
import { Metadata } from 'next';
import { meta } from '@/utils/meta';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import ThemeWrapper from '@/components/ThemeWrapper';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL('https://elbyss.xyz'),
  applicationName: '엘비스의 기술 블로그',
  authors: [{ name: 'elbyss' }, { name: 'elbyss', url: 'https://elbyss.xyz' }],
  keywords: [
    'next.js',
    'react',
    'javaScript',
    'supabase',
    'nest.js',
    'blog',
    'react-query',
    'tailwind',
    'three.js',
    'r3f',
  ],
  creator: 'elbyss',
  publisher: 'elbyss',
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '엘비스의 기술 블로그',
    siteName: '엘비스의 기술 블로그',
    description: '엘비스의 기술 블로그입니다.',
    url: 'https://elbyss.xyz',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/favicon_black_square.png',
      },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_ID,
    other: {
      'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_ID || '',
    },
  },
  icons: {
    icon: '/favicon_black_square.png',
    apple: '/favicon_black_square.png',
    shortcut: '/favicon_black_square.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={pretendard.variable}>
      <body className={pretendard.className}>
        <ThemeWrapper>
          <CategoryLayout>{children}</CategoryLayout>
        </ThemeWrapper>
        <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
