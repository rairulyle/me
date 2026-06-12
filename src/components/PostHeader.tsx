import { formatDate, type Post } from '@/lib/post-meta';
import { SITE_URL } from '@/lib/site';

const postJsonLd = (post: Post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  keywords: post.tags?.join(', '),
  author: { '@type': 'Person', name: 'Lyle Vince Dela Cuesta', url: SITE_URL },
});

const PostHeader = ({ post }: { post: Post }) => (
  <header className='mb-10 space-y-4 border-b-4 border-cacao pb-8'>
    <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd(post)) }} />
    <p className='font-mono text-sm tracking-widest uppercase opacity-70'>
      {formatDate(post.date)}
      {post.tags?.length ? ` · ${post.tags.join(' · ')}` : ''}
    </p>
    <h1 className='text-4xl font-semibold tracking-tight md:text-6xl'>{post.title}</h1>
    <p className='text-xl opacity-80'>{post.description}</p>
  </header>
);

export default PostHeader;
