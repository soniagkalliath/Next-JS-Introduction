import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {hostname:"codewithmosh.com"},
      {hostname:"pngkey.com"}
    ]
  }
};

export default nextConfig;
