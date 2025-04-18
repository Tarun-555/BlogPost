import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    domains: [
      "media.gettyimages.com",
      "avatars.githubusercontent.com",
      "https://vocal-tarsier-7f6e8b.netlify.app",
    ],
  },
};

export default nextConfig;
