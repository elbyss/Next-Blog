import { allPosts } from 'contentlayer/generated';

export default function sortPostsByDate() {
  return allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}
