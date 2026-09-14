import type { PlanShowcaseCard } from "@/config/plans";
import { cn } from "@/lib/utils";

import { PlanCard } from "./plan-card";

type PlansGridProps = {
  cards: PlanShowcaseCard[];
  className?: string;
  gridLabel?: string;
};

export function PlansGrid({
  cards,
  className,
  gridLabel = "Intangles plans",
}: PlansGridProps) {
  return (
    <div
      aria-label={gridLabel}
      className={cn(
        "grid grid-cols-4 gap-3.5 max-[1120px]:grid-cols-2 max-[780px]:-mr-10 max-[780px]:flex max-[780px]:snap-x max-[780px]:snap-mandatory max-[780px]:gap-3 max-[780px]:overflow-x-auto max-[780px]:pr-10 max-[780px]:[-ms-overflow-style:none] max-[780px]:[scrollbar-width:none] max-[780px]:[&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {cards.map((card) => (
        <PlanCard
          key={card.id}
          card={card}
          className="max-[780px]:w-[min(82vw,330px)] max-[780px]:shrink-0 max-[780px]:snap-start"
        />
      ))}
    </div>
  );
}
