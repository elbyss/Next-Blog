import PostList from '@/components/PostList';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import { notFound } from 'next/navigation';

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const PostDetailPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  const MDXContent = useMDXComponent(post?.body.code || '');
  if (!post) {
    notFound();
  }

  return (
    <article className='mx-auto max-w-4xl py-4 prose prose-slate'>
      <PostList
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
