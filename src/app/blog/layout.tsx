import Footer from '@/layouts/Footer';
import NavBar from '@/layouts/Navbar';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className='mx-auto min-h-[60vh] max-w-8xl px-6 pb-24'>{children}</main>
      <Footer />
    </>
  );
}
