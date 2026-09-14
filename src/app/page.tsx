import Link from "next/link";
import { ArrowRightIcon, GlobeIcon, LayersIcon, ZapIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const features = [
  {
    title: "Performance first",
    description:
      "Built on Next.js with server components, optimized assets, and fast page loads out of the box.",
    icon: ZapIcon,
  },
  {
    title: "Mobile ready",
    description:
      "Responsive layouts, touch-friendly navigation, and accessible patterns across every screen size.",
    icon: GlobeIcon,
  },
  {
    title: "SEO optimized",
    description:
      "Structured metadata, sitemap, robots.txt, and Open Graph tags configured from day one.",
    icon: LayersIcon,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="border-b bg-muted/20">
        <Container className="flex flex-col items-center gap-8 py-16 text-center sm:py-24 md:py-28">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Next.js · shadcn/ui · Tailwind CSS
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Build modern web experiences with {siteConfig.name}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              {siteConfig.description} This starter gives you a clean,
              production-ready foundation to ship faster.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" render={<Link href="/contact" />}>
              Start a project
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/services" />}
            >
              View services
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Everything you need to launch
            </h2>
            <p className="mt-3 text-muted-foreground">
              A focused setup with the essentials teams expect in a professional
              web project.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <Card key={title} className="h-full">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
