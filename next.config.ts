import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      // Adicione domínios conforme necessário
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities:[100]
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    SITE_NAME: 'Bem Me Quer Feliz',
    SITE_DESCRIPTION:
      'Organização sem fins lucrativos. Há 14 anos atuando na cultura e assistência social.',
  },
};

export default nextConfig;
