import Link from 'next/link';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className='mx-auto max-w-3xl py-8 md:py-12'>
      <Link href='/blog' className='font-mono text-sm tracking-widest uppercase underline underline-offset-4'>
        ← All posts
      </Link>
      <div className='mt-8'>{children}</div>
    </article>
  );
}
