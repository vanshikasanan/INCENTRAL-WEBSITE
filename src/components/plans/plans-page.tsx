import Link from "next/link";

import { Container } from "@/components/common/container";
import { CtaBand, PageHero, SectionHead } from "@/components/layout/marketing";
import { plansPage } from "@/config/plans";
import { cn } from "@/lib/utils";

import { PlansGrid } from "./plans-grid";

function PageButton({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-[999px] px-[22px] text-[15px] font-semibold no-underline transition-colors max-[760px]:w-full",
        variant === "primary" &&
          "border border-inc-blue bg-inc-blue text-white hover:border-inc-blue-dark hover:bg-inc-blue-dark",
        variant === "secondary" &&
          "border border-[#2a3338] bg-white text-inc-ink hover:bg-[#f6f7f7]"
      )}
    >
      {label}
    </Link>
  );
}

export function PlansPage() {
  const { hero, showcase, closeSection } = plansPage;

  return (
    <main id="main" className="bg-white text-[#14232b]">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleId={hero.titleId}
        lead={hero.lead}
        actions={
          <>
            <PageButton href={hero.primaryAction.href} label={hero.primaryAction.label} />
            <PageButton
              href={hero.secondaryAction.href}
              label={hero.secondaryAction.label}
              variant="secondary"
            />
          </>
        }
      />

      <section
        aria-labelledby={showcase.titleId}
        className="h139-plans border-b border-[#e3e9ec] bg-[linear-gradient(180deg,#fff_0%,#f8fafc_100%)]"
      >
        <Container>
          <SectionHead
            variant="h139"
            eyebrow={showcase.eyebrow}
            title={showcase.title}
            titleId={showcase.titleId}
            description={showcase.description}
          />
          <PlansGrid cards={showcase.cards} gridLabel={showcase.gridLabel} />
        </Container>
      </section>

      <CtaBand
        eyebrow={closeSection.eyebrow}
        title={closeSection.title}
        description={closeSection.description}
        primaryAction={closeSection.primaryAction}
        secondaryAction={closeSection.secondaryAction}
      />
    </main>
  );
}
