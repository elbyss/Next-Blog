import { ExtendPostProps } from '@/types/post';
import { formatDate } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

type PostShapeProps = 'simple' | 'list' | 'card';

export default function PostCard({
  date,
  title,
  content,
  slug,
  tags,
  thumbnail,
}: Pick<ExtendPostProps, 'date' | 'title' | 'content' | 'tags' | 'thumbnail'> & {
  slug: ExtendPostProps['_raw']['flattenedPath'];
  shape: PostShapeProps;
}) {
  return (
    <>
      <Link
        href={`/post/${slug}`}
        aria-label={`${title}`}
        className='no-underline flex py-4 hover:text-[#a580ff] transition duration-75 group gap-12 lg:px-4 dark:text-gray-200 dark:hover:text-[#a580ff]'
      >
        <div className='w-[80%] flex flex-col gap-2'>
          <div className='font-extrabold text-xl mt-2 ml-2 sm:text-sm'>{title}</div>
          <div className='text-slate-500 mt-2 ml-2 sm:text-xs dark:text-gray-300'>{content}</div>
          <div className='flex gap-2 mb-2 ml-2 items-center'>
            <time className='font-medium text-sm text-gray-500 sm:text-xs'>{formatDate(date)}</time>
            <div className='flex gap-2 sm:hidden dark:text-black'>
              {tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className='bg-violet-200 rounded-lg text-sm py-1 px-1.5 group-hover:text-slate-600 sm:text-xs'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <picture className='relative flex items-center overflow-hidden w-[130px] h-[90px] rounded-xl border sm:border-none'>
          <Image
            src={thumbnail || ''}
            alt={`${title}`}
            width={130}
            height={90}
            className='rounded-xl group-hover:scale-125 bg-white group-hover:transition group-hover:duration-300'
            priority
          />
        </picture>
      </Link>
    </>
  );
}
