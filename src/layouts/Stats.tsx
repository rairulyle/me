import { STATS } from '@/core/constants/stats';

const Stats = () => (
  <section
    aria-label='Stats'
    className='grid grid-cols-1 divide-y-4 divide-cacao border-y-4 border-cacao md:grid-cols-3 md:divide-x-4 md:divide-y-0'
  >
    {STATS.map((stat) => (
      <div key={stat.label} className='space-y-2 py-10 md:px-10 md:first:pl-0'>
        <span className='block font-mono text-6xl font-semibold md:text-7xl'>{stat.value}</span>
        <span className='font-mono text-sm tracking-widest uppercase opacity-70'>{stat.label}</span>
      </div>
    ))}
  </section>
);

export default Stats;
