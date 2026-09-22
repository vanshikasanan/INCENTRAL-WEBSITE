import type { PlanShowcaseCard } from "@/config/plans";
import { cn } from "@/lib/utils";

import { Container } from "@/components/common/container";
import { SectionHead } from "@/components/layout/marketing";

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
        <SectionHead
          eyebrow={eyebrow}
          title={title}
          titleId={titleId}
          description={description}
        />
        <PlansGrid
          cards={cards}
          className={gridClassName}
          gridLabel={gridLabel}
        />
      </Container>
    </section>
  );
}
