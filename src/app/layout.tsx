import localFont from 'next/font/local';
import './globals.css';
import CategoryLayout from '@/shared/CategoryLayout';
import { Metadata } from 'next';
import { meta } from '@/utils/meta';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.className}`}>
        <CategoryLayout>{children}</CategoryLayout>
      </body>
    </html>
  );
}
