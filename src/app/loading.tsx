'use client';
import { TailSpin } from 'react-loader-spinner';

export default function Loading() {
  return (
    <TailSpin
      wrapperClass='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-2xl'
      visible={true}
      height='40'
      width='40'
      ariaLabel='color-ring-loading'
      color='#a580ff'
    />
  );
}
