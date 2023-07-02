import { mdiSkullOutline } from '@mdi/js';
import Icon from '@mdi/react';
import ThemeSwitcher from '../components/ThemeSwitcher';

function NavBar() {
  return (
    <nav className='py-6 md:py-12'>
      <div className='flex items-center justify-between'>
        <a className='inline-flex items-center gap-x-2' href='/'>
          <Icon path={mdiSkullOutline} size='48px'></Icon>
          <span className='font-noto text-2xl font-bold'>ライル</span>
        </a>
        <ul className='flex gap-x-8 text-lg font-medium lg:text-2xl xl:gap-x-16'>
          <li className='hidden md:block'>
            <a className='px-6 py-4' href='/#showcase'>
              Showcase
            </a>
          </li>
          <li className='hidden md:block'>
            <a className='px-6 py-4' href='/#services'>
              Services
            </a>
          </li>
          <li>
            <ThemeSwitcher></ThemeSwitcher>
          </li>
          <li className='hidden md:block'>
            <a
              href='https://www.linkedin.com/in/rairulyle'
              target='_blank'
              rel='noopener noreferrer'
              className='border-4 border-black px-6 py-4 dark:border-white'
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
