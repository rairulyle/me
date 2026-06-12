import { SOCIALS } from '@/core/constants/socials';
import { mdiSkullOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t-4 border-cacao'>
      <div className='mx-auto max-w-8xl space-y-12 px-6 py-20 md:py-28'>
        <h2 className='max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight uppercase md:text-7xl'>
          Let&apos;s build something <span className='highlight px-2'>that lasts.</span>
        </h2>
        <div className='flex flex-wrap gap-4'>
          <a
            href='https://www.upwork.com/freelancers/lylevincedelacuesta'
            target='_blank'
            rel='noopener noreferrer'
            className='border-4 border-soil px-6 py-3 font-mono text-sm tracking-widest uppercase transition-colors hover:bg-soil hover:text-nougat dark:border-nougat dark:hover:bg-nougat dark:hover:text-soil'
          >
            Hire me on Upwork
          </a>
          <a
            href='mailto:hello@rairulyle.me'
            className='border-4 border-soil px-6 py-3 font-mono text-sm tracking-widest uppercase transition-colors hover:bg-soil hover:text-nougat dark:border-nougat dark:hover:bg-nougat dark:hover:text-soil'
          >
            Email me
          </a>
        </div>
        <div className='flex flex-col items-center justify-between gap-y-6 border-t-2 border-cacao/40 pt-8 md:flex-row'>
          <Link className='inline-flex items-center gap-x-2' href='/'>
            <Icon path={mdiSkullOutline} size='32px' />
            <span className='font-noto text-lg font-bold'>ライル</span>
          </Link>
          <span className='font-mono text-xs tracking-widest uppercase opacity-70'>© {currentYear} Lyle Vince Dela Cuesta · rairulyle</span>
          <ul className='flex gap-x-2'>
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
      </div>
    </footer>
  );
};

export default Footer;
