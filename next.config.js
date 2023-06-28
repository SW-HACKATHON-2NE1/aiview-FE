/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
