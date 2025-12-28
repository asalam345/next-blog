import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async rewrites() {
    return [
    { source: '/about-us', destination: '/about' },
    { source: '/contact-me', destination: '/contact' },
    { source: '/blog/:slug*', destination: '/posts/:slug*' }, // dynamic too!
  ];
  },
};

export default nextConfig;
