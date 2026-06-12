import Beyond from '@/layouts/Beyond';
import Experience from '@/layouts/Experience';
import Footer from '@/layouts/Footer';
import Hero from '@/layouts/Hero';
import NavBar from '@/layouts/Navbar';
import ProjectShowcase from '@/layouts/ProjectShowcase';
import Services from '@/layouts/Services';
import Stats from '@/layouts/Stats';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className='mx-auto max-w-8xl px-6'>
        <Hero />
        <Stats />
        <Services />
        <ProjectShowcase />
        <Experience />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}
