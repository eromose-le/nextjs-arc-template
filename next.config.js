/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

module.exports = nextConfig;
