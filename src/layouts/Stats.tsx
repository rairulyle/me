import { FALLBACK_STATS, YEARS } from '@/core/constants/stats';
import { SOCIALS } from '@/core/constants/socials';
import { getGithubStats, timeAgo } from '@/lib/github';
import { getAllPosts } from '@/lib/posts';

const urlOf = (name: string) => SOCIALS.find((social) => social.name === name)?.url ?? '/';

const Stats = async () => {
  const [{ contributions, lastCommitAt }, posts] = await Promise.all([getGithubStats(), getAllPosts()]);
  const github = urlOf('GitHub');

  const stats = [
    { value: `${YEARS}+`, label: 'Years of experience', href: urlOf('LinkedIn') },
    contributions === null
      ? { ...FALLBACK_STATS[0], href: '/#work' }
      : { value: contributions.toLocaleString('en-US'), label: 'Contributions since last year', href: github },
    lastCommitAt === null
      ? { value: String(posts.length), label: 'Blog posts', href: '/blog' }
      : { value: timeAgo(lastCommitAt), label: 'Since last commit', href: github },
  ];

  return (
    <section
      aria-label='Stats'
      className='grid grid-cols-1 divide-y-4 divide-cacao border-y-4 border-cacao md:grid-cols-3 md:divide-x-4 md:divide-y-0'
    >
      {stats.map((stat) => {
        const external = stat.href.startsWith('http');
        return (
          <a
            key={stat.label}
            href={stat.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className='group space-y-2 py-10 transition-colors hover:bg-cacao/10 md:px-10 md:first:pl-0'
          >
            <span className='block font-mono text-6xl font-semibold md:text-7xl'>{stat.value}</span>
            <span className='font-mono text-sm tracking-widest uppercase opacity-70 group-hover:underline'>{stat.label}</span>
          </a>
        );
      })}
    </section>
  );
};

export default Stats;
