import Footer from '@/layouts/Footer';
import Hero from '@/layouts/Hero';
import FeaturedWork from '@/layouts/ProjectShowcase';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className='mx-auto mt-12 max-w-screen-8xl space-y-24 divide-y-4 divide-black px-6 dark:divide-white lg:px-24'>
        <FeaturedWork></FeaturedWork>
      </div>
      <Footer></Footer>
    </>
  );
}
