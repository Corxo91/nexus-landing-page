/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',              // genera /out para GitHub Pages
  images: { unoptimized: true }, // sin Image Optimizer (no hay server)
  trailingSlash: true,  
};

module.exports = nextConfig;
