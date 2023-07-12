/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'freepngimg.com',
      },
    ],
  },
}

module.exports = nextConfig
