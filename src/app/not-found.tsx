import NavBar from '@/layouts/Navbar';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className='mx-auto flex min-h-[60vh] max-w-8xl flex-col items-start justify-center gap-y-6 px-6'>
        <h1 className='font-mono text-7xl font-semibold md:text-9xl'>404</h1>
        <p className='text-xl'>This page doesn&apos;t exist — or it didn&apos;t survive the rebuild.</p>
        <Link
          href='/'
          className='border-4 border-soil px-6 py-3 font-mono text-sm tracking-widest uppercase transition-colors hover:bg-soil hover:text-nougat dark:border-nougat dark:hover:bg-nougat dark:hover:text-soil'
        >
          Back home
        </Link>
      </main>
    </>
  );
}
