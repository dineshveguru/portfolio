/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [],
    remotePatterns: [
      // Add any remote image domains you might use here
      // For example, if you're loading images from a CDN:
      // {
      //   protocol: 'https',
      //   hostname: 'your-cdn.com',
      //   pathname: '/**',
      // },
    ],
  },
  // Enable experimental features for improved performance
  experimental: {
    optimizeCss: true, // CSS optimization
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  // Improve page load performance with script optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
};

export default nextConfig;
