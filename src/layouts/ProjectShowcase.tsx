'use client';

import { PROJECTS } from '@/core/constants/projects';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import Icon from '@mdi/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
      <div className='space-y-2 text-xl md:text-2xl'>
        <p>
          Currently, I work for{' '}
          <a href='https://sesimi.com/' target='_blank' className='highlight px-1'>
            Sesimi
          </a>{' '}
          as a <span className='highlight px-1'>Sr. Full-Stack Developer.</span>
        </p>
        <p>
          I also contribute to a few open-source projects and do freelance work at{' '}
          <a href='https://www.upwork.com/freelancers/lylevincedelacuesta' target='_blank' className='highlight px-1'>
            Upwork
          </a>
          .
        </p>
      </div>

      <div className='flex items-center justify-between'>
        <h2 className='mb-6 mt-12 text-2xl font-semibold md:text-4xl'>Project showcase.</h2>
        <div className='hidden gap-x-2 md:flex'>
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
      <div className='space-y-3'>
        <span className='flex items-center gap-x-2 md:hidden'>
          <Icon className='animate-bounce-left' path={mdiChevronLeft} size='24px'></Icon> Swipe left for more.
        </span>
        <div id='swipe-container' className='no-scrollbar flex gap-x-12 overflow-x-auto transition-transform '>
          {PROJECTS.map((x, i) => (
            <a
              className='flex snap-center flex-col gap-y-6 transition-transform hover:-translate-y-2'
              key={i}
              href={x.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image className='min-w-[326px] md:min-w-[582px]' src={x.image} width='1164' height='1290' alt={x.name}></Image>
              <div className='space-y-2'>
                <span className='text-xl font-semibold'>{x.name}</span>
                <ul className='flex gap-x-2'>
                  {x.tech?.map((x, i) => (
                    <li key={i}>
                      <Image title={x} alt={x} width='24' height='24' src={`/tech/${x}.webp`} className='grayscale'></Image>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='w-full md:w-[80%]'>{x.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
