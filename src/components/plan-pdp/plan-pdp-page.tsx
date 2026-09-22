import { notFound } from "next/navigation";

import { CtaBand } from "@/components/layout/marketing";
import {
  getPlanProductById,
  getPlanShowcaseCardById,
  plansMega,
  type PlanRouteId,
} from "@/config/plans";
import { planMeta, variantLabel } from "@/lib/plan-finder/plan-meta";
import { planRouteToFamily } from "@/lib/plans/plan-route-map";

import { PlanHighlightsSection } from "./plan-highlights-section";
import { PlanPdpHero } from "./plan-pdp-hero";
import { PlanPdpLayout } from "./plan-pdp-layout";

type PlanPdpPageProps = {
  planId: PlanRouteId;
  line?: "ais" | "standard";
};

const planBestFor: Record<PlanRouteId, string> = {
  incert: "Fleet operators that need a clear day-to-day view of vehicles, trips and driver events.",
  insight:
    "Teams that want fuel and repair visibility on top of core tracking and compliance.",
  ingenious:
    "Operators ready for predictive vehicle health, fuel management and fleet automation.",
  "invision-plus":
    "Fleets that need video safety alongside tracking, fuel and predictive health capabilities.",
  invision:
    "Operators that need camera-only AI-Driven Video Telematics without OBD-dependent layers.",
};

export function PlanPdpPage({ planId, line = "standard" }: PlanPdpPageProps) {
  const product = getPlanProductById(planId);
  const showcase = getPlanShowcaseCardById(planId);
  const family = planRouteToFamily(planId);
  const meta = planMeta[family];

  if (!product || !showcase) notFound();

  const hasAisVariant = product.variants.some((variant) => variant.href.includes("line=ais"));
  const resolvedLine = line === "ais" && hasAisVariant ? "ais" : "standard";
  const lineLabel = variantLabel(resolvedLine === "ais");
  const finderHref = `/?interest=${family}&line=${resolvedLine}#check-compatibility`;

  return (
    <PlanPdpLayout product={product} lineLabel={lineLabel}>
      <PlanPdpHero
        accent={product.accent}
        lineLabel={lineLabel}
        valueLabel={meta.value}
        name={meta.name}
        tagline={showcase.tagline}
        summary={meta.desc}
        image={meta.art}
        finderHref={finderHref}
      />

      <PlanHighlightsSection
        planName={meta.name}
        features={meta.key}
        bestFor={planBestFor[planId]}
      />

      <CtaBand
        eyebrow="Compare plans"
        title="Review the full plan range or confirm fit for your fleet."
        description="Use the plan finder to match vehicles, needs and AIS-140 route before you choose."
        primaryAction={plansMega.cta}
        secondaryAction={{ label: "See all plans", href: "/plans" }}
      />
    </PlanPdpLayout>
  );
}
