import PostListShape from '@/components/PostListShape';
import sortPostsByDate from '@/utils/sortPostsByDate';
import { Post } from 'contentlayer/generated';

export default function blogPage() {
  const posts = sortPostsByDate();
  return (
    <div className={`mt-10 flex flex-col`}>
      {posts.map((post: Post) => (
        <PostListShape
          date={post.date}
          title={post.title}
          content={post.content}
          slug={post._raw.flattenedPath}
          tags={post.tags}
          thumbnail={post.thumbnail}
          key={post._id}
          shape='list'
        />
      ))}
    </div>
  );
}
