import { Post } from 'contentlayer/generated';

export interface ExtendPostProps extends Post {
  thumbnail?: string;
}
