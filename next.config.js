/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.licdn.com', 'encrypted-tbn0.gstatic.com', 'cdn-icons-png.flaticon.com', 'images.tcdn.com.br'],
  },
  transpilePackages: ['framer-motion'],
}

module.exports = nextConfig 