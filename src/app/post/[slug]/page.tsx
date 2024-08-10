import ProgressbarWrapper from '@/shared/ProgressbarWrapper';
import { formatDate } from '@/utils/date';
import sortPostsByDate from '@/utils/sortPostsByDate';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.content,
  };
}

const PostDetailPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) notFound();
  const posts = sortPostsByDate();
  const MDXContent = useMDXComponent(post.body.code || '');
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));
  const tagStyle = `bg-gray-200 text-violet-800 px-3 py-1 rounded-full text-sm cursor-pointer bg-violet-200 hover:bg-violet-300 transition`;

  return (
    <>
      <ProgressbarWrapper />
      <article className='mx-auto max-w-4xl py-4 prose prose-slate'>
        <div className='flex flex-col gap-4'>
          <div>{formatDate(post.date)}</div>
          <div className='text-5xl font-bold'>{post.title}</div>
          <div>{post.content}</div>
          <div className='flex gap-2'>
            {allTags.map((tag) => (
              <span key={tag} className={`${tagStyle}  `}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <MDXContent />
      </article>
    </>
  );
};

export default PostDetailPage;
