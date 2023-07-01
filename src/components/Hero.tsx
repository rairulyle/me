import { SOCIALS } from '@/core/constants/socials';
import Icon from '@mdi/react';
import NavBar from './Navbar';

function Hero() {
  return (
    <main className='mx-auto flex min-h-[80vh] max-w-screen-8xl flex-col justify-between px-24'>
      <NavBar></NavBar>
      <div className='space-y-12'>
        <h1 className='text-7xl font-medium leading-snug'>
          Konnichiwassup,{' '}
          <span>
            I&apos;am{' '}
            <span className='highlight'>
              Lyle <span className='font-noto'>(ライル)!</span>
            </span>
          </span>
          <br />A passionate <span className='highlight'>Web Developer</span> from the <span className='highlight'>Philippines!</span>
        </h1>
        <h2 className='text-2xl'>Unlock Your Potential: I&apos;ll solve your website woes, while you stay focused on your goals.</h2>
        <ul className='flex gap-x-2'>
          {SOCIALS.map((x, i) => (
            <li key={i}>
              <a href={x.url} title={x.name} target='_blank' rel='noopener noreferrer'>
                <Icon path={x.icon} size='32px'></Icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='border-t-4'></div>
    </main>
  );
}

export default Hero;
