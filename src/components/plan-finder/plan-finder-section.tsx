import Link from "next/link";

import { Container } from "@/components/common/container";
import { planFinderSection } from "@/config/plan-finder";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PlanFinder } from "./plan-finder";

export type PlanFinderSectionProps = {
  className?: string;
  showPhone?: boolean;
};

export function PlanFinderSection({
  className,
  showPhone = true,
}: PlanFinderSectionProps) {
  const copy = planFinderSection;

  return (
    <section
      aria-labelledby={copy.titleId}
      className={cn(
        "h144-checker relative overflow-hidden border-t border-[#e0e8ec] border-b border-[#dce5e9] bg-[linear-gradient(180deg,#f7fafc_0%,#eef4f7_100%)] py-16 pb-[76px]",
        "before:pointer-events-none before:absolute before:top-[30px] before:right-[-170px] before:h-[520px] before:w-[520px] before:rounded-full before:bg-[radial-gradient(circle,rgba(55,146,206,0.14),rgba(55,146,206,0)_68%)] before:content-['']",
        "max-[760px]:py-[46px] max-[760px]:pb-[54px]",
        className
      )}
    >
      <Container>
        <div
          id={copy.id}
          className="h144-intro scroll-mt-[90px]"
        >
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2 id={copy.titleId}>{copy.title}</h2>
            <p>{copy.description}</p>
          </div>
          {showPhone ? (
            <Link
              href={`tel:${siteConfig.phone.raw}`}
              className="h144-phone"
            >
              <span>{copy.phoneLabel}</span>
              <strong>{copy.phoneCta}</strong>
            </Link>
          ) : null}
        </div>

        <PlanFinder resultsTitleId="planFinderResultsTitle" />
      </Container>
    </section>
  );
}
