import { siteConfig } from "@/config/site";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone.display,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address[0],
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411032",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
