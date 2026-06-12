import { mdiSkullOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const LINKS = [
  { name: 'Work', href: '/#work' },
  { name: 'Services', href: '/#services' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Blog', href: '/blog' },
];

const NavBar = () => (
  <nav className='mx-auto flex max-w-8xl items-center justify-between px-6 py-6 md:py-10'>
    <Link className='inline-flex items-center gap-x-2' href='/'>
      <Icon path={mdiSkullOutline} size='40px' />
      <span className='font-noto text-xl font-bold'>ライル</span>
    </Link>
    <ul className='flex items-center gap-x-1 md:gap-x-4'>
      {LINKS.map((link) => (
        <li key={link.name} className='hidden md:block'>
          <Link className='px-3 py-2 font-mono text-sm tracking-widest uppercase transition-colors hover:bg-cacao/20' href={link.href}>
            {link.name}
          </Link>
        </li>
      ))}
      <li className='md:hidden'>
        <Link className='px-3 py-2 font-mono text-sm tracking-widest uppercase' href='/blog'>
          Blog
        </Link>
      </li>
      <li>
        <ThemeSwitcher />
      </li>
      <li className='hidden md:block'>
        <a
          href='https://www.upwork.com/freelancers/lylevincedelacuesta'
          target='_blank'
          rel='noopener noreferrer'
          className='border-4 border-soil px-4 py-2 font-mono text-sm tracking-widest uppercase transition-colors hover:bg-soil hover:text-nougat dark:border-nougat dark:hover:bg-nougat dark:hover:text-soil'
        >
          Hire Me
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
