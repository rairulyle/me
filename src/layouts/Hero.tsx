import Parallax from '@/components/Parallax';

const Hero = () => (
  <header className='flex flex-col justify-center gap-y-10 py-12 md:py-16 lg:min-h-[70vh]'>
    <p className='font-mono text-sm tracking-widest uppercase'>
      Konnichiwassup — I&apos;m Lyle <span className='font-noto normal-case'>(ライル)</span>, from the Philippines
    </p>
    <Parallax speed={0.06}>
      <h1 className='text-[clamp(3.5rem,9vw,9rem)] leading-[0.9] font-semibold tracking-tight uppercase'>
        Software
        <br />
        <span className='opacity-40'>Engineer</span>
      </h1>
    </Parallax>
    <p className='max-w-xl text-xl md:text-2xl'>
      <span className='highlight px-1'>Anyone can ship code now</span>. I build what&apos;s still standing in three years!
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
  </header>
);

export default Hero;
