/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [],
        unoptimized: process.env.NODE_ENV === 'development',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domains: ['localhost'],
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
        optimizePackageImports: ['@heroicons/react', 'react-icons'],
    }
};

module.exports = nextConfig; 