import Navbar from '@/components/Navbar';
import { meta } from '../utils/meta';
import Image from 'next/image';
import { ReactNode } from 'react';
import Link from 'next/link';

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <header className='w-full max-w-3xl flex justify-between items-center my-4'>
        <Link href='/'>
          <div className='flex flex-row items-center gap-4'>
            <Image src='/logo.svg' alt='logo' width={100} height={48} className='object-cover rounded-3xl h-12'></Image>
            <span className='font-bold text-2xl'>{meta.title}</span>
          </div>
        </Link>
        <Navbar />
      </header>
      <main className='w-full max-w-3xl'>{children}</main>
    </div>
  );
}
