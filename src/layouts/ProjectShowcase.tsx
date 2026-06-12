import { PROJECTS } from '@/core/constants/projects';
import MoreProjects from '@/components/MoreProjects';
import Parallax from '@/components/Parallax';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import Image from 'next/image';

const FEATURED_COUNT = 4;

const ProjectShowcase = () => {
  const featured = PROJECTS.slice(0, FEATURED_COUNT);
  const more = PROJECTS.slice(FEATURED_COUNT);

  return (
    <Section id='work' numeral='02' lead='Selected' accent='work'>
      <div className='space-y-2 text-xl md:text-2xl'>
        <p>
          Currently, I work at{' '}
          <a href='https://sesimi.com/' target='_blank' rel='noopener noreferrer' className='highlight px-1'>
            Sesimi
          </a>{' '}
          as a <span className='highlight px-1'>Lead Platform Engineer.</span>
        </p>
        <p>
          I also contribute to open-source and freelance on{' '}
          <a
            href='https://www.upwork.com/freelancers/lylevincedelacuesta'
            target='_blank'
            rel='noopener noreferrer'
            className='highlight px-1'
          >
            Upwork
          </a>
          .
        </p>
      </div>

      <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2'>
        {featured.map((project) => (
          <Reveal key={project.name}>
            <a href={project.link} target='_blank' rel='noopener noreferrer' className='group block space-y-4'>
              <div className='overflow-hidden border-4 border-cacao'>
                <Parallax speed={-0.05}>
                  <Image
                    className='w-full scale-[1.12] transition-transform duration-500 group-hover:scale-[1.16]'
                    src={project.image}
                    width={1164}
                    height={1290}
                    alt={project.name}
                  />
                </Parallax>
              </div>
              <div className='flex items-baseline justify-between gap-x-4'>
                <h3 className='text-2xl font-medium group-hover:underline'>{project.name}</h3>
                {project.tech && <span className='font-mono text-xs tracking-widest uppercase opacity-70'>{project.tech.join(' · ')}</span>}
              </div>
              <p className='max-w-xl opacity-80'>{project.description}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <div>
        <h3 className='mb-4 font-mono text-sm tracking-widest uppercase opacity-70'>More projects</h3>
        <MoreProjects projects={more} />
      </div>
    </Section>
  );
};

export default ProjectShowcase;
