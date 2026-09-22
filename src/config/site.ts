import { env } from "@/config/env";

export const siteConfig = {
  name: "InCentral",
  brandName: "InCentral by Intangles",
  parentCompany: "Intangles Lab Pvt. Ltd.",
  description:
    "Track commercial fleets, monitor fuel consumption and vehicle health, improve driver safety and add AI-Driven Video Telematics with InCentral.",
  url: env.siteUrl,
  ogImage: "/images/hero/hero-incert-concept.webp",
  locale: "en_IN",
  phone: {
    raw: "18002689111",
    display: "1800-268-9111",
  },
  email: "commandcenter@intangles.com",
  company: {
    name: "Intangles Lab Pvt. Ltd.",
    address: [
      "Unit No. 601 & 604, 6th Floor, Poloroche Business Avenue",
      "Survey No. 227/A/222/1 to 17, Village Lohegaon, Taluka Haveli",
      "Pune, Maharashtra 411032",
    ],
    gstin: "27AADCI7688G1Z3",
  },
  assets: {
    favicon: "/images/brand/favicon.png",
    logo: "/images/brand/intangles-logo-grey-horizontal.png",
  },
} as const;
