import { SOCIALS } from '@/core/constants/socials';
import { mdiSkullOutline } from '@mdi/js';
import Icon from '@mdi/react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='mx-auto flex max-w-screen-8xl flex-col items-center justify-between gap-y-6 px-6 pb-12 pt-48 md:flex-row '>
      <a className='inline-flex items-center gap-x-2' href='/'>
        <Icon path={mdiSkullOutline} size='48px'></Icon>
        <span className='font-noto text-2xl font-bold'>ライル</span>
      </a>
      <span>© {currentYear} Lyle Vince Dela Cuesta | rairulyle</span>
      <ul className='flex gap-x-2'>
        {SOCIALS.map((x, i) => (
          <li key={i}>
            <a href={x.url} title={x.name} target='_blank' rel='noopener noreferrer'>
              <Icon path={x.icon} size='32px'></Icon>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
