/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['load-qv4lgu7kga-uc.a.run.app'],
  },
  reactStrictMode: true,

  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
