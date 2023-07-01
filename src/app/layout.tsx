import '@fontsource-variable/outfit';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/800.css';
import { Metadata } from 'next';

import './globals.css';

const title = 'Lyle Vince Dela Cuesta | Web Developer';
const description =
  'Konnichiwassup! I am Lyle, a Web Developer experienced in designing and building highly scalable web applications. With my attention to detail, especially for user experience, minimalism, reusability, and clean codes, I am highly capable of delivering projects efficiently and satisfying customers with attractive and user-friendly applications. I also contribute to a number of open-source projects.';
const url = 'https://rairulyle.me';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Lyle Vince Dela Cuesta', 'Lyle', 'rairulyle', 'skullpluggery', 'rairu', 'Web Developer'],
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg' },
    shortcut: { url: '/favicon.svg', type: 'image/svg' },
  },
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: `${url}/meta/og.png`,
      },
    ],
  },
  twitter: { card: 'summary_large_image', site: '@rairulyle', creator: '@rairulyle', images: `${url}/meta/og.png` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-white text-black dark:bg-black dark:text-white'>{children}</body>
    </html>
  );
}
