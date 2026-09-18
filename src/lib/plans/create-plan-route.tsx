import type { PlanRouteId } from "@/config/plans";
import { getPlanProductById, planHref } from "@/config/plans";
import { constructMetadata } from "@/lib/metadata";

export function createPlanRouteMetadata(planId: PlanRouteId) {
  const product = getPlanProductById(planId);
  if (!product) {
    return constructMetadata({
      title: "Plan | InCentral",
      description: "Explore InCentral fleet plans.",
      path: planHref(planId),
    });
  }

  return constructMetadata({
    title: `${product.name} | InCentral`,
    description: product.description,
    path: product.href,
  });
}
