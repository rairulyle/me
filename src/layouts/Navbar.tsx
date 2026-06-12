import { mdiSkullOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const LINKS = [
  { name: 'Work', href: '/#work', desktopOnly: true },
  { name: 'Services', href: '/#services', desktopOnly: true },
  { name: 'Experience', href: '/#experience', desktopOnly: true },
  { name: 'Blog', href: '/blog', desktopOnly: false },
];

const NavBar = () => (
  <nav className='fixed inset-x-0 top-4 z-50 flex justify-center px-4'>
    <div className='flex items-center gap-x-1 border-2 border-cacao bg-nougat/90 px-2 py-1.5 backdrop-blur-sm md:gap-x-2 dark:bg-soil/90'>
      <Link className='flex items-center px-2' href='/' title='Home'>
        <Icon path={mdiSkullOutline} size='28px' />
      </Link>
      <ul className='flex items-center gap-x-1 md:gap-x-2'>
        {LINKS.map((link) => (
          <li key={link.name} className={link.desktopOnly ? 'hidden md:block' : ''}>
            <Link className='px-3 py-2 font-mono text-xs tracking-widest uppercase transition-colors hover:bg-cacao/20' href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <ThemeSwitcher />
        </li>
        <li className='hidden md:block'>
          <a
            href='https://www.upwork.com/freelancers/lylevincedelacuesta'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-1 inline-block border-2 border-soil px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-colors hover:bg-soil hover:text-nougat dark:border-nougat dark:hover:bg-nougat dark:hover:text-soil'
          >
            Hire Me
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
