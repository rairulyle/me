import Section from '@/components/Section';
import { formatDate } from '@/lib/post-meta';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

const BlogPreview = async () => {
  const posts = (await getAllPosts()).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id='blog' numeral='05' lead='Notes &' accent='thoughts'>
      <ul className='divide-y-2 divide-cacao/40 border-y-2 border-cacao/40'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className='group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between'>
              <span className='text-xl font-medium group-hover:underline md:text-2xl'>{post.title}</span>
              <span className='font-mono text-sm tracking-widest uppercase opacity-70'>
                {formatDate(post.date)} · {post.readingTime} min read
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/blog' className='inline-block font-mono text-sm tracking-widest uppercase underline underline-offset-4'>
        All posts →
      </Link>
    </Section>
  );
};

export default BlogPreview;
