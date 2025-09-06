/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <- ignore all ESLint errors/warnings
  },
};

module.exports = nextConfig;