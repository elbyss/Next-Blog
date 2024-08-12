'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className='p-1  text-gray-800 dark:text-gray-200 rounded-md text-xl hover:bg-gray-100 transition dark:hover:bg-[#343a40]'
    >
      {theme === 'light' ? '🌙' : '🔆'}
    </button>
  );
}
