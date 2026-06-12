import { EXPERIENCE } from '@/core/constants/experience';
import { STATS } from '@/core/constants/stats';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';

const Experience = () => (
  <Section id='experience' numeral='03' lead={`${STATS[0].value} years of`} accent='experience'>
    <ol className='divide-y-2 divide-cacao/40 border-y-2 border-cacao/40'>
      {EXPERIENCE.map((job) => (
        <li key={job.company}>
          <Reveal className='grid gap-x-8 gap-y-3 py-8 md:grid-cols-[minmax(14rem,1fr)_2fr]'>
            <div className='space-y-1'>
              <h3 className='text-2xl font-medium'>
                {job.url ? (
                  <a href={job.url} target='_blank' rel='noopener noreferrer' className='hover:underline'>
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className='font-mono text-xs tracking-widest uppercase opacity-70'>
                {job.type} · {job.location}
              </p>
            </div>
            <div className='space-y-3'>
              <ul className='space-y-1'>
                {job.roles.map((role) => (
                  <li key={role.title} className='flex flex-col justify-between gap-x-4 md:flex-row'>
                    <span className='font-medium'>{role.title}</span>
                    <span className='font-mono text-sm tracking-widest uppercase opacity-70'>{role.period}</span>
                  </li>
                ))}
              </ul>
              <p className='leading-relaxed opacity-80'>{job.blurb}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
