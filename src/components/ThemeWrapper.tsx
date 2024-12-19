'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode, Suspense } from 'react';

export default function ThemeWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
      <Suspense fallback={<div className='flex items-center justify-center h-screen'>Loading...</div>}>
        {children}
      </Suspense>
    </ThemeProvider>
  );
}
