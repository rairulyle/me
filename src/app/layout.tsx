import '@fontsource-variable/outfit';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/800.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

const title = 'Lyle Vince Dela Cuesta | Software Engineer';
const description =
  "Konnichiwassup! I'm Lyle, a Software Engineer focused on architecture, best practices, and the hard-won experience that makes products last. I design and ship systems that scale, partner with teams on the parts that matter, and contribute to open-source along the way.";
const url = 'https://rairulyle.me';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Lyle Vince Dela Cuesta',
    'Lyle',
    'rairulyle',
    'skullpluggery',
    'rairu',
    'Software Engineer',
    'Platform Engineer',
    'Software Architect',
    'System Design',
    'AI Architecture',
  ],
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
    images: `${url}/meta/og.png`,
  },
  twitter: { card: 'summary_large_image', site: '@rairulyle', creator: '@rairulyle', images: `${url}/meta/og.png` },
};

const themeInit = `(()=>{try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
