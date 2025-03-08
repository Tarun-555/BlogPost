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
    domains: ["media.gettyimages.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
