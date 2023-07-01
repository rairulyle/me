import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className='mx-auto mt-12 max-w-screen-8xl space-y-24 px-6 lg:px-24'>
        <section>
          <h3 className='text-2xl'>
            Currently, I work for <span className='highlight'>theQuestHub.io</span> as a{' '}
            <span className='highlight'>Sr. Web3 Front-End & UI/UX Engineer (Tech Lead).</span>
          </h3>
        </section>
      </div>
    </>
  );
}
