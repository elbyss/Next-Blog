import PostCard from '@/components/PostCard';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.content,
    date: post.date,
  };
}

const PostDetailPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code || '');

  return (
    <article className='mx-auto max-w-4xl py-4 prose prose-slate'>
      <PostCard
        date={post.date}
        title={post.title}
        content={post.content}
        key={post._id}
        slug={post._raw.flattenedPath}
      />
      <div className=''>
        <MDXContent />
      </div>
    </article>
  );
};

export default PostDetailPage;
