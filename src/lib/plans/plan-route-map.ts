import type { PlanRouteId } from "@/config/plans";
import type { PlanFamily } from "@/lib/plan-finder/types";

export function planRouteToFamily(id: PlanRouteId): PlanFamily {
  if (id === "invision-plus") return "invisionplus";
  return id;
}

export function planFamilyToRoute(family: PlanFamily): PlanRouteId {
  if (family === "invisionplus") return "invision-plus";
  return family;
}
