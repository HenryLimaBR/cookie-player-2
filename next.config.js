/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    domains: [
      'i.ytimg.com',
    ]
  }
}

module.exports = nextConfig
