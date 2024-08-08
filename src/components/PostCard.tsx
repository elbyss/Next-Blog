import { Post } from 'contentlayer/generated';
import Link from 'next/link';

export default function PostCard({
  date,
  title,
  content,
  slug,
}: Pick<Post, 'date' | 'title' | 'content'> & { slug: Post['_raw']['flattenedPath'] }) {
  return (
    <div className='w-full my-8 border-b-4 border-b-indigo-300'>
      <Link href={`/blog/${slug}`} className='no-underline'>
        <div className='font-medium text-sm text-gray-400'>{date}</div>
        <div className={`font-extrabold text-3xl mt-2`}>{title}</div>
        <div className={`font-medium text-slate-500 text-xl mt-1 mb-2`}>{content}</div>
      </Link>
    </div>
  );
}
