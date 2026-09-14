import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type ConstructMetadataProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.brandName} | Fleet Tracking & Intelligence`;
  const url = new URL(path, siteConfig.url).toString();
  const imageUrl = image.startsWith("http")
    ? image
    : new URL(image, siteConfig.url).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale.replace("_", "-"),
      url,
      title: pageTitle,
      description,
      siteName: siteConfig.brandName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
