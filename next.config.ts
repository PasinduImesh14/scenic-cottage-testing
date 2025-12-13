import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // This enables the "Next.js Magic" to auto-convert your JPGs
    formats: ["image/avif", "image/webp"], 
    
    // Your existing quality setting
    qualities: [90], 
  },
};

export default nextConfig;