import { SOCIALS } from '@/core/constants/socials';
import Icon from '@mdi/react';
import Image from 'next/image';

const PROFILE_SRC = '/profile-placeholder.svg';

const Hero = () => (
  <header className='flex min-h-[80vh] flex-col justify-center gap-y-10 py-12 md:py-16'>
    <p className='font-mono text-sm tracking-widest uppercase'>
      Konnichiwassup — I&apos;m Lyle <span className='font-noto normal-case'>(ライル)</span>, from the Philippines
    </p>
    <h1 className='text-[clamp(3.5rem,13vw,12rem)] leading-[0.9] font-semibold tracking-tight uppercase'>
      Software
      <br />
      <span className='opacity-40'>Engineer</span>
    </h1>
    <div className='flex flex-col gap-10 md:flex-row md:items-end md:justify-between'>
      <div className='space-y-8'>
        <p className='max-w-xl text-xl md:text-2xl'>
          <span className='highlight px-1'>Anyone can ship code now.</span> I build what&apos;s still standing in three years.
        </p>
        <p className='font-mono text-sm tracking-widest uppercase'>
          Proudly working at{' '}
          <a
            href='https://sesimi.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 transition-colors hover:bg-cacao/20'
          >
            Sesimi
          </a>
        </p>
        <ul className='flex gap-x-3'>
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                title={social.name}
                target='_blank'
                rel='noopener noreferrer'
                className='block p-1 transition-transform hover:-translate-y-1'
              >
                <Icon path={social.icon} size='28px' />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={PROFILE_SRC}
        alt='Lyle Vince Dela Cuesta'
        width={176}
        height={176}
        priority
        className='hidden border-4 border-cacao md:block'
      />
    </div>
  </header>
);

export default Hero;
