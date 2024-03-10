/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    // domains: ["assets.coingecko.com","images.unsplash.com"],
    domains: ['192.168.29.46',"assets.coingecko.com","images.unsplash.com",'localhost'],
  }
  // images: {
  //   domains: ['images.unsplash.com'],
  // },
};

module.exports = nextConfig;
