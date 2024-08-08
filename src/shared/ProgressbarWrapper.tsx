'use client';
import ProgressBar from 'react-scroll-progress-bar';
export default function ProgressbarWrapper() {
  return (
    <div className='absolute left-0'>
      <ProgressBar bgcolor='#a580ff' height='4' duration='0' />
    </div>
  );
}
