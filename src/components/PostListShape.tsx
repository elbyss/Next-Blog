import { ExtendPostProps } from '@/types/post';
import { formatDate } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

type PostShapeProps = 'simple' | 'list' | 'card';

export default function PostListShape({
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
    card: 'rounded-xl w-full shadow-lg hover:scale-105 transition-all',
    list: 'rounded-xl w-full shadow-lg hover:scale-105 transition-all',
    simple: 'bg-blue-300',
  };

  return (
    <div className={postShapeStyles[shape]}>
      <Link href={`/blog/${slug}`} className='no-underline'>
        <div className='font-medium text-sm text-gray-400 ml-2'>{formatDate(date)}</div>
        <div className={`font-extrabold text-xl mt-2 ml-2`}>{title}</div>
        <div className={`font-medium text-slate-500 mt-1 mb-2 ml-2`}>{content}</div>
        <div className='gap-2 flex mb-2 ml-2'>
          {tags?.map((tag, idx) => (
            <span key={idx} className='bg-pink-200 rounded-lg py-1 px-1.5'>
              {tag}
            </span>
          ))}
        </div>
        <Image
          src={thumbnail || ''}
          alt='thumbnail'
          width={250}
          height={250}
          className='rounded-t-xl object-cover h-32 w-full'
        />
      </Link>
    </div>
  );
}
