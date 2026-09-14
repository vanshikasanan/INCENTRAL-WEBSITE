import { Container } from "@/components/layout/container";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Services",
  description: "Explore the services offered by Incentral.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Container as="main" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl space-y-4">
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Services
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Add your service offerings here — web development, design systems,
          consulting, or whatever your team delivers.
        </p>
      </div>
    </Container>
  );
}
