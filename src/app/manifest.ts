import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brandName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0565cf",
    icons: [
      {
        src: siteConfig.assets.favicon,
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
