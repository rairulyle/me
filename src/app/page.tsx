import ProfileCard from '@/components/ProfileCard';
import Beyond from '@/layouts/Beyond';
import BlogPreview from '@/layouts/BlogPreview';
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
      <main className='mx-auto max-w-8xl px-6 pt-24 md:pt-28'>
        <div className='gap-x-12 lg:grid lg:grid-cols-[22rem_1fr] xl:gap-x-16'>
          <aside className='pt-6 lg:pt-12'>
            <div className='mx-auto max-w-sm lg:sticky lg:top-28'>
              <ProfileCard />
            </div>
          </aside>
          <div className='min-w-0'>
            <Hero />
            <Stats />
            <Services />
            <ProjectShowcase />
            <Experience />
            <Beyond />
            <BlogPreview />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
