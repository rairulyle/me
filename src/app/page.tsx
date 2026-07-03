import ProfileCard from '@/components/ProfileCard';
import { SOCIALS } from '@/core/constants/socials';
import Beyond from '@/layouts/Beyond';
import BlogPreview from '@/layouts/BlogPreview';
import Experience from '@/layouts/Experience';
import Footer from '@/layouts/Footer';
import Hero from '@/layouts/Hero';
import NavBar from '@/layouts/Navbar';
import ProjectShowcase from '@/layouts/ProjectShowcase';
import Services from '@/layouts/Services';
import Stats from '@/layouts/Stats';
import { SITE_URL } from '@/lib/site';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lyle Vince Dela Cuesta',
  alternateName: 'rairulyle',
  url: SITE_URL,
  image: `${SITE_URL}/profile-picture.webp`,
  jobTitle: 'Lead Platform Engineer',
  worksFor: { '@type': 'Organization', name: 'Sesimi' },
  nationality: 'Philippines',
  sameAs: SOCIALS.map((social) => social.url),
};

export default function Home() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <NavBar />
      <main className='mx-auto max-w-8xl px-6 pt-24 md:pt-28'>
        <div className='gap-x-12 lg:grid lg:grid-cols-[22rem_1fr] xl:gap-x-16'>
          <aside className='lg:pt-12'>
            <div className='mx-auto max-w-sm lg:sticky lg:top-40'>
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
