/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === 'production' ? true : false,
  swcMinify: true,
  basePath: '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
}

module.exports = nextConfig
