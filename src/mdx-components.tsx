import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

const linkClass = 'underline decoration-2 underline-offset-4 transition-colors hover:bg-cacao/20';

const components: MDXComponents = {
  h2: (props) => <h2 className='mt-12 mb-4 text-2xl font-semibold tracking-tight uppercase md:text-3xl' {...props} />,
  h3: (props) => <h3 className='mt-8 mb-3 text-xl font-semibold md:text-2xl' {...props} />,
  p: (props) => <p className='my-5 text-lg leading-relaxed' {...props} />,
  a: ({ href = '', ...props }) =>
    href.startsWith('/') || href.startsWith('#') ? (
      <Link href={href} className={linkClass} {...props} />
    ) : (
      <a href={href} target='_blank' rel='noopener noreferrer' className={linkClass} {...props} />
    ),
  ul: (props) => <ul className='my-5 list-disc space-y-2 pl-6 text-lg' {...props} />,
  ol: (props) => <ol className='my-5 list-decimal space-y-2 pl-6 text-lg' {...props} />,
  blockquote: (props) => <blockquote className='my-6 border-l-4 border-cacao pl-4 italic opacity-80' {...props} />,
  hr: () => <hr className='my-10 border-t-4 border-cacao' />,
  table: (props) => <table className='my-6 w-full border-collapse border-2 border-cacao text-left' {...props} />,
  th: (props) => <th className='border-2 border-cacao bg-cacao/15 px-3 py-2 font-mono text-sm tracking-widest uppercase' {...props} />,
  td: (props) => <td className='border-2 border-cacao px-3 py-2' {...props} />,
};

export function useMDXComponents(defaults: MDXComponents): MDXComponents {
  return { ...defaults, ...components };
}
