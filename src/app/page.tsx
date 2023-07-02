import Footer from '@/layouts/Footer';
import Hero from '@/layouts/Hero';
import FeaturedWork from '@/layouts/ProjectShowcase';
import Services from '@/layouts/Services';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <div className='mx-auto mt-12 max-w-screen-8xl space-y-24 divide-y-4 divide-black px-6 dark:divide-white'>
        <FeaturedWork></FeaturedWork>
        <Services></Services>
      </div>
      <Footer></Footer>
    </>
  );
}
