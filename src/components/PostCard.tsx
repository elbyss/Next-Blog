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
  shape = 'list',
}: Pick<ExtendPostProps, 'date' | 'title' | 'content' | 'tags' | 'thumbnail'> & {
  slug: ExtendPostProps['_raw']['flattenedPath'];
  shape: PostShapeProps;
}) {
  const postShapeStyles = {
    card: 'rounded-xl w-full shadow-lg hover:scale-105 transition-all hover:text-[#a580ff]',
    list: 'rounded-xl w-full shadow-lg hover:scale-105 transition-all flex',
    simple: 'bg-blue-300',
  };

  return (
    <>
      <Link
        href={`/post/${slug}`}
        className='no-underline flex py-4 hover:text-[#a580ff] transition duration-75 group sm:p-6 gap-12'
      >
        <div className='w-[80%] flex flex-col gap-2'>
          <div className={`font-extrabold text-xl mt-2 ml-2`}>{title}</div>
          <div className={`text-slate-500 mt-2 ml-2 sm:text-sm`}>{content}</div>
          <div className='gap-2 flex mb-2 ml-2 items-center'>
            <div className='font-medium text-sm text-gray-500 sm:text-xs'>{formatDate(date)}</div>
            {tags?.map((tag, idx) => (
              <span key={idx} className='bg-violet-200 rounded-lg text-sm py-1 px-1.5 group-hover:text-slate-600'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <picture className='relative flex items-center overflow-hidden w-[130px] h-[90px] rounded-xl border'>
          <Image
            src={thumbnail || ''}
            alt='thumbnail'
            width={130}
            height={90}
            className='rounded-xl object-cover group-hover:scale-125 bg-gray-100 group-hover:transition group-hover:duration-300'
          />
        </picture>
      </Link>
    </>
  );
}
