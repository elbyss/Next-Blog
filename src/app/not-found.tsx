import OpacityMotionWrapper from '@/shared/OpacityMotionWrapper';

export default function NotFound() {
  return (
    <OpacityMotionWrapper>
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-2xl'>
        <h1 className='mb-8 text-8xl'>404</h1>
        <p>페이지를 찾을 수 없어요!</p>
      </div>
    </OpacityMotionWrapper>
  );
}
