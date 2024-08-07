import { navLinks } from '@/shared/navLinks';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex gap-4'>
      {navLinks.map(({ link, title }) => (
        <Link href={link} key={title} className=''>
          {title}
        </Link>
      ))}
    </nav>
  );
}
