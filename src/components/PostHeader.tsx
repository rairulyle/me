import { formatDate, type Post } from '@/lib/post-meta';

const PostHeader = ({ post }: { post: Post }) => (
  <header className='mb-10 space-y-4 border-b-4 border-cacao pb-8'>
    <p className='font-mono text-sm tracking-widest uppercase opacity-70'>
      {formatDate(post.date)}
      {post.tags?.length ? ` · ${post.tags.join(' · ')}` : ''}
    </p>
    <h1 className='text-4xl font-semibold tracking-tight md:text-6xl'>{post.title}</h1>
    <p className='text-xl opacity-80'>{post.description}</p>
  </header>
);

export default PostHeader;
