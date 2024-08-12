import localFont from 'next/font/local';
import './globals.css';
import CategoryLayout from '@/shared/CategoryLayout';
import { Metadata } from 'next';
import { meta } from '@/utils/meta';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import ThemeWrapper from '@/components/ThemeWrapper';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL('https://elbyss.vercel.app'),
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: '엘비스의 기술 블로그',
    siteName: '엘비스의 기술 블로그',
    description: '엘비스의 기술 블로그입니다.',
    url: 'https://elbyss.vercel.app',
    type: 'website',
    images: '/profile-simple-transparent.png',
  },
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_ID}`,
    other: {
      'naver-site-verification': `${process.env.NEXT_PUBLIC_NAVER_ID}`,
    },
  },
  icons: {
    icon: '/favicon.ico',
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
      <body className={`${pretendard.className} `}>
        <ThemeWrapper>
          <CategoryLayout>{children}</CategoryLayout>
        </ThemeWrapper>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </html>
  );
}
