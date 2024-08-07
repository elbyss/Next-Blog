import { Post } from 'contentlayer/generated';
import Link from 'next/link';

export default function PostList({
  date,
  title,
  content,
  slug,
}: Pick<Post, 'date' | 'title' | 'content'> & { slug: Post['_raw']['flattenedPath'] }) {
  return (
    <div className='bg-sky-100 w-full my-7'>
      <Link href={`/blog/${slug}`}>
        <div className='font-medium text-xs text-gray-400'>{date}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{content}</div>
      </Link>
    </div>
  );
}
