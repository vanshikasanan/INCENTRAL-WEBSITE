import type { NextConfig } from "next";

import { policySlugs } from "./src/config/policies";
import { planRouteIds } from "./src/config/plans";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      ...planRouteIds.map((planId) => ({
        source: `/${planId}`,
        destination: `/plans/${planId}`,
        permanent: true,
      })),
      ...policySlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/policies/${slug}`,
        permanent: true,
      })),
      {
        source: "/my-incentral",
        destination: "/account",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
