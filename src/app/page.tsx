import RecentPosts from '@/components/RecentPosts';
import { meta } from '@/utils/meta';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={`my-5 w-full`}>
      <div className={`relative`}>
        <Image
          src={`/profile-simple.svg`}
          alt='대표 이미지'
          width={150}
          height={150}
          className={`rounded-3xl object-cover w-full h-[350px]`}
        />
        <span
          className={`absolute top-8 font-extrabold italic text-white text-5xl md:text-6xl text flex justify-center w-full drop-shadow-lg`}
        >
          {meta.title}
        </span>
      </div>
      <RecentPosts />
    </div>
  );
}
