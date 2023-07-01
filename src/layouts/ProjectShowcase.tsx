import { PROJECTS } from '@/core/constants/projects';
import Image from 'next/image';

function ProjectShowcase() {
  return (
    <section id='showcase'>
      <span className='text-2xl'>
        Currently, I work for <span className='highlight'>theQuestHub.io</span> as a{' '}
        <span className='highlight'>Sr. Web3 Front-End & UI/UX Engineer (Tech Lead).</span>
      </span>
      <h2 className='my-12 text-4xl'>Project showcase.</h2>
      <div className='flex gap-x-12  overflow-visible'>
        {PROJECTS.map((x, i) => (
          <a
            className='flex flex-col gap-y-6 grayscale transition-all hover:grayscale-0'
            key={i}
            href={x.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image className='min-w-[582px] ' src={x.image} width='582' height='645' alt={x.name}></Image>
            <span className='text-xl font-semibold'>{x.name}</span>
            <p className='w-[80%]'>{x.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectShowcase;
