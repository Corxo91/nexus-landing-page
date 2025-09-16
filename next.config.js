const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nexuscorpglobal.com',
      }
    ]
  },
  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV || 'development',
  }  
};

module.exports = nextConfig;
