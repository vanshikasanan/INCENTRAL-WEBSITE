import { Container } from "@/components/layout/container";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About",
  description: "Learn more about Incentral and our mission.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container as="main" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl space-y-4">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          About us
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          This page is ready for your company story, team, and values. Replace
          this placeholder content with your brand narrative.
        </p>
      </div>
    </Container>
  );
}
