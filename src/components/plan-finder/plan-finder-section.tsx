import Link from "next/link";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/layout/marketing/eyebrow";
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
          className="relative mb-6 grid scroll-mt-[90px] grid-cols-1 items-end gap-2.5 min-[761px]:grid-cols-[minmax(0,1fr)_auto] min-[761px]:gap-8"
        >
          <div>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h2
              id={copy.titleId}
              className="m-0 max-w-[780px] text-balance text-[30px] leading-[1.06] font-normal tracking-[-0.038em] text-[#132d39] min-[421px]:text-[32px] min-[761px]:text-[clamp(30px,2.8vw,42px)]"
            >
              {copy.title}
            </h2>
            <p className="mt-3 mb-0 max-w-[680px] text-sm leading-[1.55] text-[#627680]">
              {copy.description}
            </p>
          </div>
          {showPhone ? (
            <Link
              href={`tel:${siteConfig.phone.raw}`}
              className="flex flex-col items-start py-[11px] text-[#1767ad] no-underline min-[761px]:items-end"
            >
              <span className="text-xs text-[#7b8b93]">{copy.phoneLabel}</span>
              <strong className="mt-1 text-[15px] font-semibold">
                {copy.phoneCta}
              </strong>
            </Link>
          ) : null}
        </div>

        <PlanFinder resultsTitleId="planFinderResultsTitle" />
      </Container>
    </section>
  );
}
