'use client';
import Navbar from '@/components/Navbar';
import { meta } from '../utils/meta';
import Image from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`w-full flex flex-col items-center p-3 min-h-dvh h-full dark:bg-[#212529]`}>
        <header className='w-full max-w-5xl flex justify-between items-center my-4 sticky top-0 h-24 border-b bg-white z-50 dark:bg-[#212529] dark:border-b-gray-700 sm:h-20 sm:my-0 sm:text-xs'>
          <Link href='/'>
            <div className='flex flex-row items-center gap-4'>
              <Image
                src='/logo.svg'
                alt='logo'
                width={100}
                height={48}
                className='rounded-3xl h-[48px] w-[100px] sm:h-8 sm:w-16'
              />
              <span className='font-bold text-2xl sm:text-sm'>{meta.title}</span>
            </div>
          </Link>
          <Navbar />
        </header>
        <main className='w-full max-w-5xl'>{children}</main>
      </div>
    </>
  );
}
