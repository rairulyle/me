import { FALLBACK_STATS, YEARS } from '@/core/constants/stats';
import { getGithubStats, timeAgo } from '@/lib/github';

const Stats = async () => {
  const { contributions, lastCommitAt } = await getGithubStats();

  const stats = [
    { value: `${YEARS}+`, label: 'Years of experience' },
    contributions === null ? FALLBACK_STATS[0] : { value: contributions.toLocaleString('en-US'), label: 'GitHub contributions, last year' },
    lastCommitAt === null ? FALLBACK_STATS[1] : { value: timeAgo(lastCommitAt), label: 'Since last commit' },
  ];

  return (
    <section
      aria-label='Stats'
      className='grid grid-cols-1 divide-y-4 divide-cacao border-y-4 border-cacao md:grid-cols-3 md:divide-x-4 md:divide-y-0'
    >
      {stats.map((stat) => (
        <div key={stat.label} className='space-y-2 py-10 md:px-10 md:first:pl-0'>
          <span className='block font-mono text-6xl font-semibold md:text-7xl'>{stat.value}</span>
          <span className='font-mono text-sm tracking-widest uppercase opacity-70'>{stat.label}</span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
