import { PURSUITS } from '@/core/constants/pursuits';
import Reveal from '@/components/Reveal';
import Section from '@/components/Section';
import { mdiArrowTopRight } from '@mdi/js';
import Icon from '@mdi/react';

const Beyond = () => (
  <Section id='beyond' numeral='04' lead='Beyond' accent='the code'>
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
      {PURSUITS.map((pursuit) => (
        <Reveal key={pursuit.name} className='flex'>
          <a
            href={pursuit.link}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-1 flex-col justify-between gap-y-6 border-4 border-cacao p-6 transition-colors hover:bg-cacao/10'
          >
            <div className='space-y-3'>
              <h3 className='text-2xl font-medium'>{pursuit.name}</h3>
              <p className='leading-relaxed opacity-80'>{pursuit.description}</p>
            </div>
            <span className='flex items-center gap-x-2 font-mono text-sm tracking-widest uppercase group-hover:underline'>
              {pursuit.cta}
              <Icon
                className='transition-transform group-hover:translate-x-1 group-hover:-translate-y-1'
                path={mdiArrowTopRight}
                size='16px'
              />
            </span>
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Beyond;
