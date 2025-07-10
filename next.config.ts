import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname:"codewithmosh.com"}
    ]
  }
};

export default nextConfig;
