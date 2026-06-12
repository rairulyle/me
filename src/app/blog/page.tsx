import { formatDate } from '@/lib/post-meta';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Lyle Vince Dela Cuesta',
  description: 'Notes on architecture, AI, homelabs, and building software that lasts.',
};

export default async function BlogIndex() {
  const posts = await getAllPosts();
  return (
    <div className='mx-auto max-w-3xl space-y-12 py-8 md:py-12'>
      <header className='space-y-4 border-b-4 border-cacao pb-8'>
        <h1 className='text-5xl font-semibold tracking-tight uppercase md:text-7xl'>Writing</h1>
        <p className='text-xl opacity-80'>Notes on architecture, AI, homelabs, and building software that lasts.</p>
      </header>
      {posts.length === 0 ? (
        <p className='font-mono text-sm tracking-widest uppercase opacity-70'>No posts yet — check back soon.</p>
      ) : (
        <ul className='divide-y-2 divide-cacao/40'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className='group block space-y-2 py-8'>
                <p className='font-mono text-sm tracking-widest uppercase opacity-70'>
                  {formatDate(post.date)} · {post.readingTime} min read
                </p>
                <h2 className='text-2xl font-medium group-hover:underline md:text-3xl'>{post.title}</h2>
                <p className='opacity-80'>{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
