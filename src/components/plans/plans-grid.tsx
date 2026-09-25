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
    <div aria-label={gridLabel} className={cn("h139-grid", className)}>
      {cards.map((card) => (
        <PlanCard key={card.id} card={card} />
      ))}
    </div>
  );
}
