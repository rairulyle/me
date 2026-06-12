import type { ReactNode } from 'react';

type SectionProps = { id: string; numeral: string; title: string; children: ReactNode };

const Section = ({ id, numeral, title, children }: SectionProps) => (
  <section id={id} className='scroll-mt-12 space-y-10 border-t-4 border-cacao py-16 md:py-24'>
    <div className='flex items-baseline gap-x-4'>
      <span className='font-mono text-sm opacity-60'>{numeral}</span>
      <h2 className='text-3xl font-semibold tracking-tight uppercase md:text-5xl'>{title}</h2>
    </div>
    {children}
  </section>
);

export default Section;
