/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  // Pour Tailwind CSS v4
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig