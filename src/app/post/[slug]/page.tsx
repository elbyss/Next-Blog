import { use } from 'react';
import Giscus from '@/components/Giscus';
// import ProgressbarWrapper from '@/shared/ProgressbarWrapper';
import { formatDate } from '@/utils/date';
import sortPostsByDate from '@/utils/sortPostsByDate';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
      url: `https://elbyss.xyz/post/${params.slug}`,
      type: 'article',
      images: post.thumbnail,
    },
  };
}

const PostDetailPage = (props: { params: Promise<{ slug: string }> }) => {
  const params = use(props.params);
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) notFound();
  const posts = sortPostsByDate();
  const MDXContent = useMDXComponent(post.body.code || '');
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));
  const tagStyle = `bg-gray-200 text-violet-800 px-3 py-1 rounded-full text-sm cursor-pointer bg-violet-200 hover:bg-violet-300 transition`;

  return (
    <>
      {/* <ProgressbarWrapper /> */}
      <article className='mx-auto max-w-4xl py-4 prose prose-slate dark:text-gray-300 dark:prose-headings:text-gray-300  prose-a:text-gray-300'>
        <div className='flex flex-col gap-4'>
          <div className='sm:text-xs'>{formatDate(post.date)}</div>
          <div className='text-5xl font-bold sm:text-xl'>{post.title}</div>
          <div className='sm:text-sm'>{post.content}</div>
          <div className='flex gap-2'>
            {post.tags.map((tag) => (
              <span key={tag} className={`${tagStyle} sm:text-xs`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <MDXContent />
        <Giscus />
      </article>
    </>
  );
};

export default PostDetailPage;
