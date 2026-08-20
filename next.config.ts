import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses with Gzip / Brotli for high-traffic bandwidth efficiency
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Image optimization with AVIF and WebP for minimal payload
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85, 90],
    minimumCacheTTL: 31536000, // 1 year cache for static legal assets
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Tree-shake large icon libraries to minimize client JavaScript bundle size
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "react-icons/gi",
      "react-icons/hi",
      "react-icons/fa",
      "react-icons/md",
    ],
  },

  // Production Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
