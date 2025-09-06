/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <-- ignore ESLint errors/warnings during production build
  },
};

export default nextConfig;
