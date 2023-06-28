/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "dist",
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
