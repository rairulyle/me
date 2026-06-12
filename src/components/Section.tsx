import type { ReactNode } from 'react';

type SectionProps = { id: string; numeral: string; lead: string; accent: string; children: ReactNode };

const Section = ({ id, numeral, lead, accent, children }: SectionProps) => (
  <section id={id} className='scroll-mt-28 space-y-10 border-t-4 border-cacao py-16 md:py-24'>
    <div className='flex items-baseline gap-x-4'>
      <span className='font-mono text-sm opacity-60'>{numeral}</span>
      <h2 className='text-4xl leading-[0.95] font-semibold tracking-tight uppercase md:text-6xl'>
        {lead}
        <br />
        <span className='opacity-30'>{accent}</span>
      </h2>
    </div>
    {children}
  </section>
);

export default Section;
