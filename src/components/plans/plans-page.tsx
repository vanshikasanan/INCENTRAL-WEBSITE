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
  const { hero, showcase, inVisionPromo, closeSection } = plansPage;

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
        className="border-b border-[#e3e9ec] bg-[linear-gradient(180deg,#fff_0%,#f8fafc_100%)] py-12 pb-[52px] max-[520px]:py-10 max-[520px]:pb-11"
      >
        <Container>
          <SectionHead
            eyebrow={showcase.eyebrow}
            title={showcase.title}
            titleId={showcase.titleId}
            description={showcase.description}
          />
          <PlansGrid cards={showcase.cards} gridLabel={showcase.gridLabel} />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-[18px] border border-[#d8e2e6] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(24,40,51,0.04)] max-[640px]:flex-col max-[640px]:items-start">
            <div className="min-w-0">
              <span className="mb-2 inline-flex rounded-full border border-[#c9d5dc] bg-[#f5f8fa] px-2.5 py-1 text-[11px] font-bold tracking-[0.06em] text-[#31596f] uppercase">
                {inVisionPromo.badge}
              </span>
              <p className="m-0 text-[15px] font-semibold text-[#15242d]">
                {inVisionPromo.title}
              </p>
              <p className="mt-1 mb-0 max-w-[640px] text-[13.5px] leading-[1.5] text-[#61747d]">
                {inVisionPromo.description}
              </p>
            </div>
            <Link
              href={inVisionPromo.cta.href}
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-[999px] border border-[#2a3338] bg-white px-5 text-[14px] font-semibold text-[#15242d] no-underline transition-colors hover:bg-[#f6f7f7] max-[640px]:w-full"
            >
              {inVisionPromo.cta.label} →
            </Link>
          </div>
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
