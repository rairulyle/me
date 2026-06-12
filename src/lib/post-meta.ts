import type { Metadata } from 'next';

export type Post = {
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export const postMeta = (post: Post): Metadata => ({
  title: `${post.title} | Lyle Vince Dela Cuesta`,
  description: post.description,
  openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date },
});

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
