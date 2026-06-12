import nextConfig from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';

const config = [{ ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] }, ...nextConfig, prettierConfig];

export default config;
