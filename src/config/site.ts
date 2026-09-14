export const siteConfig = {
  name: "Incentral",
  description:
    "Modern digital solutions built for performance, accessibility, and growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://incentral.com",
  ogImage: "/og.jpg",
  links: {
    twitter: "https://twitter.com/incentral",
    github: "https://github.com/incentral",
    linkedin: "https://linkedin.com/company/incentral",
  },
  contact: {
    email: "hello@incentral.com",
  },
} as const;

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
] as const;
