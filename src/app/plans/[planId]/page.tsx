import { notFound } from "next/navigation";

import {
  getPlanProductById,
  isPlanRouteId,
  planRouteIds,
  plansPage,
  type PlanRouteId,
} from "@/config/plans";
import { PlanPdpPage } from "@/components/plan-pdp";
import { createPlanRouteMetadata } from "@/lib/plans/create-plan-route";
import { constructMetadata } from "@/lib/metadata";

type PlanDetailRouteProps = {
  params: Promise<{ planId: string }>;
  searchParams: Promise<{ line?: string }>;
};

export function generateStaticParams() {
  return planRouteIds.map((planId) => ({ planId }));
}

export async function generateMetadata({ params }: PlanDetailRouteProps) {
  const { planId } = await params;

  if (!isPlanRouteId(planId) || !getPlanProductById(planId)) {
    return constructMetadata({
      title: plansPage.metadata.title,
      description: plansPage.metadata.description,
      path: "/plans",
    });
  }

  return createPlanRouteMetadata(planId);
}

export default async function PlanDetailRoute({
  params,
  searchParams,
}: PlanDetailRouteProps) {
  const { planId } = await params;

  if (!isPlanRouteId(planId) || !getPlanProductById(planId)) {
    notFound();
  }

  const query = await searchParams;
  const line = query.line === "ais" ? "ais" : "standard";

  return <PlanPdpPage planId={planId as PlanRouteId} line={line} />;
}
