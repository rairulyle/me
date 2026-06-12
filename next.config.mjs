import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [['@shikijs/rehype', { themes: { light: 'vitesse-light', dark: 'vitesse-dark' }, defaultColor: false }]],
  },
});

export default withMDX(nextConfig);
