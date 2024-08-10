'use client';
import sortPostsByDate from '@/utils/sortPostsByDate';
import { useState } from 'react';

export default function PostTags() {
  const [selectedTag, setSelectedTag] = useState('전체');
  const posts = sortPostsByDate();
  const filteredPosts = selectedTag === '전체' ? posts : posts.filter((post) => post.tags.includes(selectedTag));

  const tagStyle = `bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition`;
  return (
    <aside className='flex-[0.4]'>
      <div className='flex gap-2 p-4 border'>
        <span className={tagStyle}>전체</span>
        <span className={tagStyle}>개발</span>
        <span className={tagStyle}>디자인</span>
      </div>
    </aside>
  );
}
