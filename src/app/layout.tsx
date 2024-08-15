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
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL('https://elbyss.vercel.app'),
  applicationName: '엘비스의 기술 블로그',
  authors: [{ name: 'elbyss' }, { name: 'elbyss', url: 'https://elbyss.vercel.app' }],
  keywords: ['next.js', 'react', 'javaScript', 'supabase', 'nest.js', 'blog', 'react-query', 'tailwind'],
  creator: 'elbyss',
  publisher: 'elbyss',
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: '엘비스의 기술 블로그',
    siteName: '엘비스의 기술 블로그',
    description: '엘비스의 기술 블로그입니다.',
    url: 'https://elbyss.vercel.app',
    type: 'website',
    locale: 'ko_KR',
    images: '/profile-simple-transparent.png',
  },
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`,
    other: {
      'naver-site-verification': `${process.env.NEXT_PUBLIC_NAVER_ID}`,
    },
  },
  icons: {
    icon: '/icon.ico',
    apple: '/icon.ico',
    shortcut: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GTM_ID}`} />
      <Analytics />
      <SpeedInsights />
      <body className={`${pretendard.className} `}>
        <ThemeWrapper>
          <CategoryLayout>{children}</CategoryLayout>
        </ThemeWrapper>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </html>
  );
}
