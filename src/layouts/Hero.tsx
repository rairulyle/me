import { SOCIALS } from '@/core/constants/socials';
import Icon from '@mdi/react';
import NavBar from './Navbar';
import Image from 'next/image';

function Hero() {
  return (
    <main className='mx-auto flex min-h-[85vh] max-w-screen-8xl flex-col justify-between px-6'>
      <NavBar></NavBar>
      <div className='space-y-12'>
        <h1 className='text-3xl font-medium !leading-snug md:text-4xl lg:text-7xl'>
          Konnichiwassup, <br className='block md:hidden lg:block xl:hidden' />
          <span>
            I&apos;m{' '}
            <span className='highlight px-4'>
              Lyle <span className='font-noto'>(ライル)!</span>
            </span>
          </span>
          <br />A passionate <br className='block md:hidden lg:block xl:hidden' />
          <span className='highlight px-4'>Web Developer</span> from the <span className='highlight px-4'>Philippines!</span>
        </h1>
        <p className='text-xl lg:text-2xl'>
          Unlock Your Potential: I&apos;ll solve your website woes, <br className='hidden md:block' />
          while you stay focused on your goals.
        </p>
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
      <div>
        <div className='flex items-center gap-x-2'>
          <span className='text-sm'>This portfolio was built with</span>
          <ul className='flex gap-x-2'>
            <li>
              <Image title='Next.js' alt='Next.js' width='18' height='18' src={`/tech/Next.js.webp`} className='grayscale'></Image>
            </li>
            <li>
              <Image title='React' alt='React' width='18' height='18' src={`/tech/React.webp`} className='grayscale'></Image>
            </li>

            <li>
              <Image
                title='Tailwind CSS'
                alt='Tailwind CSS'
                width='18'
                height='18'
                src={`/tech/Tailwind CSS.webp`}
                className='grayscale'
              ></Image>
            </li>
          </ul>
        </div>

        <div className='my-4 border-t-4 border-black px-6 dark:border-white'></div>
      </div>
    </main>
  );
}

export default Hero;
