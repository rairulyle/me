import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/Navbar';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className='mx-auto min-h-[60vh] max-w-8xl px-6 pt-24 pb-24 md:pt-28'>{children}</main>
      <Footer />
    </>
  );
}
