import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact",
  description: "Get in touch with the Incentral team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container as="main" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl space-y-4">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Reach us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {siteConfig.contact.email}
          </a>
          . Wire up a contact form component when you are ready.
        </p>
      </div>
    </Container>
  );
}
