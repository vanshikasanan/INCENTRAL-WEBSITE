import Link from "next/link";

import { mainNav, siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-muted/30">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="font-heading text-base font-semibold">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Navigation</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Contact</p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground sm:text-left">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
