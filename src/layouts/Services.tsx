'use client';

import { SERVICES, SKILLS } from '@/core/constants/services';
import SVG from 'react-inlinesvg';

function Services() {
  return (
    <section id='services' className='space-y-12 py-12'>
      <div className='mb-6 space-y-3'>
        <h2 className='text-2xl font-semibold md:text-4xl'>Services I offer.</h2>
        <p className='text-xl md:text-2xl'>
          I usually work with the following technologies, though I&apos;m framework agnostic and always open to learning new things.
        </p>
        <ul className='flex flex-wrap gap-2'>
          {SKILLS.map((x, i) => (
            <li className='border-4 border-black px-3 py-2   dark:border-white' key={i}>
              {x}
            </li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-1 gap-12 lg:grid-cols-3'>
        {SERVICES.map((x, i) => (
          <div className='space-y-6 border-4 border-black p-6 dark:border-white' key={i}>
            <SVG width='52' height='52' src={x.icon} title={x.name}></SVG>
            <div>
              <span className='text-lg opacity-70'>{x.fixedPricing ? 'Fixed Cost' : 'Monthly Retainer'}</span>
              <h3 className='text-2xl '>{x.name}</h3>
            </div>
            <p>{x.description}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <a
          href='https://www.linkedin.com/in/rairulyle'
          target='_blank'
          rel='noopener noreferrer'
          className='border-4 border-black px-6 py-4  transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Services;
