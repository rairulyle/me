import { mdiSkullOutline } from '@mdi/js';
import Icon from '@mdi/react';
import ThemeSwitcher from './ThemeSwitcher';

function NavBar() {
  return (
    <nav className='py-12'>
      <div className='flex items-center justify-between'>
        <a className='inline-flex items-center gap-x-2' href='/'>
          <Icon path={mdiSkullOutline} size='48px'></Icon>
          <span className='font-noto text-2xl font-bold'>ライル</span>
        </a>
        <ul className='flex gap-x-16 text-2xl font-medium'>
          <li>
            <a className='px-6 py-4' href='/#showcase'>
              Showcase
            </a>
          </li>
          <li>
            <a className='px-6 py-4' href='/#showcase'>
              Services
            </a>
          </li>
          <li>
            <ThemeSwitcher></ThemeSwitcher>
          </li>
          <li>
            <a href='mailto:lylevincedelacuesta@gmail.com' className='border-4 border-black px-6 py-4 dark:border-white'>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
