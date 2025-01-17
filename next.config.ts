import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        hostname : "perfect-mink-967.convex.cloud",
        protocol : "https"
      },
    ],
  }
};

export default nextConfig;
