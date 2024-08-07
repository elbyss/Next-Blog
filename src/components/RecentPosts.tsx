import PostList from './PostList';
import { allPosts, Post } from 'contentlayer/generated';

export default function RecentPosts() {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
  return (
    <div className={`mt-10 flex flex-col`}>
      최근 포스트
      {posts.map((post: Post) => (
        <PostList
          date={post.date}
          title={post.title}
          content={post.content}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
}
