import Footer from '@/layouts/Footer';
import Hero from '@/layouts/Hero';
import NavBar from '@/layouts/Navbar';
import FeaturedWork from '@/layouts/ProjectShowcase';
import Services from '@/layouts/Services';
import Stats from '@/layouts/Stats';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='mx-auto max-w-8xl px-6'>
        <Hero />
        <Stats />
        <FeaturedWork />
        <Services />
      </main>
      <Footer />
    </>
  );
}
