/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  images: {
    domains: ['example.com'], // Substitua 'example.com' pelo domínio de onde suas imagens são servidas
  },
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
};

module.exports = nextConfig;
