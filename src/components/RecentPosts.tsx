'use client';
import { ExtendPostProps } from '@/types/post';
import PostCard from './PostCard';
import sortPostsByDate from '@/utils/sortPostsByDate';
import { useState } from 'react';

export default function RecentPosts() {
  const [selectedTag, setSelectedTag] = useState('전체');
  const posts = sortPostsByDate();
  const filteredPosts = selectedTag === '전체' ? posts : posts.filter((post) => post.tags.includes(selectedTag));
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));
  const tagStyle = `bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition`;

  return (
    <>
      <h2 className='my-8 text-3xl font-bold'>최근 포스트</h2>
      {/* 최근 게시물 및 태그 */}
      <div className='flex gap-4'>
        <div className='flex-1'>
          {filteredPosts.map((post: ExtendPostProps) => (
            <PostCard
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
        <aside className='flex-[0.4]'>
          <span>태그</span>
          <div className='flex gap-2 p-4 border'>
            <span
              className={`${tagStyle} ${
                selectedTag === '전체' ? 'bg-violet-200 text-violet-900 hover:bg-violet-300' : ''
              }`}
              onClick={() => setSelectedTag('전체')}
            >
              전체
            </span>
            {allTags.map((tag) => (
              <span
                key={tag}
                className={`${tagStyle} ${
                  selectedTag === tag ? 'bg-violet-200 text-violet-800 hover:bg-violet-300' : ''
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}
