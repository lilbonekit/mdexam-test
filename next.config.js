/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'static.legitscript.com',
    //     port: '80',
    //     pathname: '/seals/**',
    //   },
    // ],
    domains: ['static.legitscript.com'],
  },
}

module.exports = nextConfig
