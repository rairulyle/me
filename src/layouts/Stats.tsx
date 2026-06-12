import { FALLBACK_STATS, YEARS } from '@/core/constants/stats';
import { getGithubStats, timeAgo } from '@/lib/github';
import { getAllPosts } from '@/lib/posts';

const Stats = async () => {
  const [{ contributions, lastCommitAt }, posts] = await Promise.all([getGithubStats(), getAllPosts()]);

  const stats = [
    { value: `${YEARS}+`, label: 'Years of experience' },
    contributions === null ? FALLBACK_STATS[0] : { value: contributions.toLocaleString('en-US'), label: 'Contributions since last year' },
    lastCommitAt === null
      ? { value: String(posts.length), label: 'Blog posts' }
      : { value: timeAgo(lastCommitAt), label: 'Since last commit' },
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
