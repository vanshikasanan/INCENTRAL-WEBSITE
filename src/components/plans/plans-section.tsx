import type { PlanShowcaseCard } from "@/config/plans";
import { cn } from "@/lib/utils";

import { Container } from "@/components/common/container";

import { PlansGrid } from "./plans-grid";

export type PlansSectionProps = {
  id?: string;
  titleId?: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: PlanShowcaseCard[];
  className?: string;
  gridClassName?: string;
  gridLabel?: string;
};

export function PlansSection({
  id,
  titleId,
  eyebrow,
  title,
  description,
  cards,
  className,
  gridClassName,
  gridLabel,
}: PlansSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "scroll-mt-[90px] border-b border-[#e3e9ec] bg-[linear-gradient(180deg,#fff_0%,#f8fafc_100%)] py-12 pb-[52px] max-[520px]:py-10 max-[520px]:pb-11",
        className
      )}
    >
      <Container>
        <div className="mb-[22px] flex items-end justify-between gap-[38px] max-[780px]:flex-col max-[780px]:items-start max-[780px]:gap-2">
          <div>
            <p className="mb-2 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-inc-blue uppercase">
              {eyebrow}
            </p>
            <h2
              id={titleId}
              className="m-0 max-w-[760px] text-[32px] leading-[1.04] font-normal tracking-[-0.038em] text-[#182b35] min-[761px]:text-[clamp(32px,3.1vw,42px)] max-[520px]:text-[31px]"
            >
              {title}
            </h2>
          </div>
          <p className="m-0 mb-[3px] max-w-[430px] text-left text-[14.5px] leading-[1.55] text-[#6a7c85] min-[781px]:text-right max-[680px]:text-sm">
            {description}
          </p>
        </div>

        <PlansGrid
          cards={cards}
          className={gridClassName}
          gridLabel={gridLabel}
        />
      </Container>
    </section>
  );
}
