'use client';

import type { Project } from '@/core/constants/projects';
import { mdiArrowTopRight, mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { useState } from 'react';

const MoreProjects = ({ projects }: { projects: Project[] }) => {
  const [openName, setOpenName] = useState<string | null>(null);

  return (
    <ul className='divide-y-2 divide-cacao/40 border-y-2 border-cacao/40'>
      {projects.map((project) => {
        const open = openName === project.name;
        return (
          <li key={project.name}>
            <button
              type='button'
              onClick={() => setOpenName(open ? null : project.name)}
              aria-expanded={open}
              className='flex w-full cursor-pointer items-center justify-between gap-x-6 py-4 text-left transition-colors hover:bg-cacao/10'
            >
              <span className='text-lg font-medium md:text-xl'>{project.name}</span>
              <span className='flex shrink-0 items-center gap-x-4'>
                {project.tech && (
                  <span className='hidden font-mono text-xs tracking-widest uppercase opacity-70 md:block'>{project.tech.join(' · ')}</span>
                )}
                <Icon className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} path={mdiChevronDown} size='20px' />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className='overflow-hidden'>
                <div className='flex flex-col gap-6 px-1 pt-2 pb-8 md:flex-row'>
                  <Image
                    className='w-full max-w-xs self-start border-4 border-cacao'
                    src={project.image}
                    width={1164}
                    height={1290}
                    alt={project.name}
                  />
                  <div className='space-y-4'>
                    <p className='leading-relaxed opacity-80'>{project.description}</p>
                    {project.link && (
                      <a
                        className='inline-flex items-center gap-x-2 font-mono text-sm tracking-widest uppercase underline underline-offset-4 transition-colors hover:bg-cacao/20'
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Visit site <Icon path={mdiArrowTopRight} size='16px' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MoreProjects;
