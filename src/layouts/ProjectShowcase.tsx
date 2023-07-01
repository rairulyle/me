'use client';

import { PROJECTS } from '@/core/constants/projects';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { scrollTo } from 'seamless-scroll-polyfill';

function ProjectShowcase() {
  const cardSize = 582;
  const containerElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerElementRef.current = document.getElementById('swipe-container');
  }, []);

  function swipeLeft() {
    scrollTo(containerElementRef.current!, {
      left: containerElementRef.current?.scrollLeft! - cardSize,
      behavior: 'smooth',
    });
  }

  function swipeRight() {
    scrollTo(containerElementRef.current!, {
      left: containerElementRef.current?.scrollLeft! + cardSize,
      behavior: 'smooth',
    });
  }

  return (
    <section id='showcase'>
      <span className='text-2xl'>
        Currently, I work for <span className='highlight'>theQuestHub.io</span> as a{' '}
        <span className='highlight'>Sr. Web3 Front-End & UI/UX Engineer (Tech Lead).</span>
      </span>
      <div className='flex items-center justify-between'>
        <h2 className='my-12 text-4xl'>Project showcase.</h2>
        <div className='hidden gap-x-2 lg:flex'>
          <button
            aria-label='Swipe Left'
            className='border-4 border-black px-3 py-2  transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
            onClick={swipeLeft}
          >
            <Icon size='24px' path={mdiChevronLeft}></Icon>
          </button>
          <button
            aria-label='Swipe Right'
            className='border-4 border-black px-3 py-2  transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
            onClick={swipeRight}
          >
            <Icon size='24px' path={mdiChevronRight}></Icon>
          </button>
        </div>
      </div>
      <div>
        <div id='swipe-container' className='no-scrollbar -mx-6 flex gap-x-12 overflow-x-auto transition-transform lg:-mx-24'>
          {PROJECTS.map((x, i) => (
            <a
              className='flex snap-center flex-col gap-y-6 first:pl-6 last:pr-6 lg:first:pl-24 lg:last:pr-24'
              key={i}
              href={x.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image className='min-w-[326px] md:min-w-[582px]' src={x.image} width='582' height='645' alt={x.name}></Image>
              <span className='text-xl font-semibold'>{x.name}</span>
              <p className='w-[80%]'>{x.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
