import {
  AIS_COVERAGE_CONFIRMED,
  AIS_COVERAGE_REQUIRES_CONFIRMATION,
  resolveOem,
  vehicleData,
} from "./compatibility-data";
import type { NeedKey, PlanFamily } from "./types";

const FAMILIES: PlanFamily[] = ["incert", "insight", "ingenious", "invisionplus"];
const FAMILY_RANK: Record<PlanFamily, number> = {
  incert: 0,
  insight: 1,
  ingenious: 2,
  invisionplus: 3,
  invision: 4,
};

const CAPABILITIES = {
  incert: [
    "real_time_location_tracking",
    "hub_activity_reports",
    "driver_behaviour_alerts",
    "trip_management_geofencing",
  ],
  insight: [
    "driver_behaviour_reports",
    "fuel_consumption_insights",
    "dtc_fault_code_visibility",
    "guided_repair_strategy",
  ],
  ingenious: [
    "predictive_vehicle_health",
    "comprehensive_fuel_management",
    "operations_automation",
    "quantification_engine",
    "advanced_driver_behaviour_monitoring",
  ],
  invisionplus: [
    "ai_driven_video_telematics",
    "video_on_demand",
    "passive_adas",
    "driver_attendance_logging",
    "in_cabin_voice_alerts",
  ],
  invision: [
    "ai_driven_video_telematics",
    "video_on_demand",
    "passive_adas",
    "driver_attendance_logging",
    "in_cabin_voice_alerts",
  ],
} as const;

export const NEEDS = {
  tracking: {
    label: "Live vehicle tracking and trip management",
    minimumFamily: "incert" as PlanFamily,
    requires: ["real_time_location_tracking", "trip_management_geofencing"],
  },
  fuel_def: {
    label: "Fuel consumption insights",
    minimumFamily: "insight" as PlanFamily,
    requires: ["fuel_consumption_insights"],
  },
  diagnostics: {
    label: "Vehicle fault codes and repair guidance",
    minimumFamily: "insight" as PlanFamily,
    requires: ["dtc_fault_code_visibility", "guided_repair_strategy"],
  },
  predictive_health: {
    label: "Predictive vehicle health",
    minimumFamily: "ingenious" as PlanFamily,
    requires: ["predictive_vehicle_health"],
  },
  driver_behaviour: {
    label: "Driver behaviour monitoring",
    minimumFamily: "incert" as PlanFamily,
    requires: ["driver_behaviour_alerts"],
  },
  ai_video_telematics: {
    label: "AI-Driven Video Telematics",
    minimumFamily: "invisionplus" as PlanFamily,
    requires: ["ai_driven_video_telematics"],
  },
} as const;

export const PRODUCTS = {
  "incert-ais-140": {
    sku: "incert-ais-140",
    family: "incert" as PlanFamily,
    name: "InCert",
    line: "ais",
    purchase: "buy" as const,
    price: 8425.2,
  },
  "insight-ais-140": {
    sku: "insight-ais-140",
    family: "insight" as PlanFamily,
    name: "InSight",
    line: "ais",
    purchase: "buy" as const,
    price: 13310.4,
  },
  "ingenious-ais-140": {
    sku: "ingenious-ais-140",
    family: "ingenious" as PlanFamily,
    name: "InGenious",
    line: "ais",
    purchase: "quote" as const,
    price: 25700.4,
  },
  "invision-plus-ais-140": {
    sku: "invision-plus-ais-140",
    family: "invisionplus" as PlanFamily,
    name: "InVision+",
    line: "ais",
    purchase: "quote" as const,
    price: 67708.4,
  },
  "incert-standard": {
    sku: "incert-standard",
    family: "incert" as PlanFamily,
    name: "InCert",
    line: "standard",
    purchase: "buy" as const,
    price: 7858.8,
  },
  "insight-standard": {
    sku: "insight-standard",
    family: "insight" as PlanFamily,
    name: "InSight",
    line: "standard",
    purchase: "buy" as const,
    price: 12460.8,
  },
  "ingenious-standard": {
    sku: "ingenious-standard",
    family: "ingenious" as PlanFamily,
    name: "InGenious",
    line: "standard",
    purchase: "quote" as const,
    price: 23128,
  },
  "invision-plus-standard": {
    sku: "invision-plus-standard",
    family: "invisionplus" as PlanFamily,
    name: "InVision+",
    line: "standard",
    purchase: "quote" as const,
    price: 60416,
  },
  "invision-standard": {
    sku: "invision-standard",
    family: "invision" as PlanFamily,
    name: "InVision",
    line: "standard",
    purchase: "quote" as const,
    price: 55224,
  },
} as const;

export type Product = (typeof PRODUCTS)[keyof typeof PRODUCTS];

export function cumulativeCapabilities(family: PlanFamily): string[] {
  if (family === "invision") return [...CAPABILITIES.invision];
  const rank = FAMILY_RANK[family];
  if (rank === undefined) return [];
  const out: string[] = [];
  for (let i = 0; i <= rank && i < FAMILIES.length; i++) {
    out.push(...CAPABILITIES[FAMILIES[i]]);
  }
  return out;
}

export function productFor(
  family: PlanFamily,
  aisRequired: boolean
): Product | null {
  if (family === "invision") return aisRequired ? null : PRODUCTS["invision-standard"];
  const suffix = aisRequired ? "ais-140" : "standard";
  const prefix = family === "invisionplus" ? "invision-plus" : family;
  return PRODUCTS[`${prefix}-${suffix}` as keyof typeof PRODUCTS] ?? null;
}

export function normalizeNeeds(needs: string[]): NeedKey[] {
  const seen = new Set<NeedKey>();
  return (Array.isArray(needs) ? needs : []).filter((key): key is NeedKey => {
    if (!(key in NEEDS) || seen.has(key as NeedKey)) return false;
    seen.add(key as NeedKey);
    return true;
  });
}

export function aisCoverageStatus(stateId: string) {
  if (!stateId) return "not_checked" as const;
  if (AIS_COVERAGE_CONFIRMED.has(stateId)) return "supported" as const;
  if (AIS_COVERAGE_REQUIRES_CONFIRMATION.has(stateId)) return "confirm" as const;
  return "unavailable" as const;
}

function normalizeGroup(input: Record<string, unknown>) {
  const quantity = Number(input.quantity);
  return {
    groupId: String(input.groupId || ""),
    segment: String(input.segment || ""),
    make: String(input.make || ""),
    emission: String(input.emission || ""),
    aisRequired: input.aisRequired === true,
    stateId: String(input.stateId || ""),
    quantity: Number.isInteger(quantity) && quantity > 0 ? quantity : null,
    needs: normalizeNeeds((input.needs as string[]) || []),
  };
}

function validateGroup(input: Record<string, unknown>) {
  const group = normalizeGroup(input);
  const errors: string[] = [];
  if (!group.segment || group.segment === "other") errors.push("segment");
  if (!group.make) errors.push("make");
  if (!group.emission) errors.push("emission");
  if (group.quantity === null) errors.push("quantity");
  if (typeof input.aisRequired !== "boolean") errors.push("aisRequired");
  return { valid: errors.length === 0, errors, group };
}

function vehicleEligibility({
  segment,
  make,
  emission,
}: {
  segment?: string;
  make?: string;
  emission?: string;
}) {
  if (!segment || segment === "other" || !make || !emission) {
    return { status: "VEHICLE_DETAILS_REQUIRED" as const, eligibleFamilies: [] as PlanFamily[] };
  }
  const manufacturer = resolveOem(segment, make);
  if (!manufacturer) {
    return { status: "VEHICLE_NOT_MAPPED" as const, eligibleFamilies: [] as PlanFamily[] };
  }
  const mapped = manufacturer.emissions?.[emission];
  if (!Array.isArray(mapped) || !mapped.length) {
    return { status: "EMISSION_NOT_MAPPED" as const, eligibleFamilies: [] as PlanFamily[] };
  }
  const eligibleFamilies = mapped.filter(
    (family, index) =>
      FAMILY_RANK[family as PlanFamily] !== undefined &&
      mapped.indexOf(family) === index
  ) as PlanFamily[];
  return {
    status: (eligibleFamilies.length ? "VERIFIED" : "NO_RECOMMENDABLE_PLAN") as
      | "VERIFIED"
      | "NO_RECOMMENDABLE_PLAN",
    eligibleFamilies,
    source: "CURRENT_VEHICLE_MANUFACTURER_EMISSION_MAPPING",
  };
}

function evaluateFamily(family: PlanFamily, needs: NeedKey[] = []) {
  const normalized = normalizeNeeds(needs);
  const rank = FAMILY_RANK[family] ?? null;
  const capabilities = cumulativeCapabilities(family);
  const capabilitySet = new Set(capabilities);
  const matchedNeeds = normalized.filter((key) =>
    (NEEDS[key].requires as readonly string[]).every((capability) =>
      capabilitySet.has(capability)
    )
  );
  const unmetNeeds = normalized.filter((key) => !matchedNeeds.includes(key));
  return {
    family,
    rank,
    capabilityCount: capabilities.length,
    capabilities,
    matchedNeeds,
    unmetNeeds,
    completeMatch: normalized.length > 0 && unmetNeeds.length === 0,
  };
}

function rankEligibleFamilies(eligibleFamilies: PlanFamily[], needs: NeedKey[]) {
  const normalized = normalizeNeeds(needs);
  const valid = [...new Set(eligibleFamilies)].filter((f) => FAMILY_RANK[f] !== undefined);
  const evaluations = valid.map((f) => evaluateFamily(f, normalized));

  if (!evaluations.length) {
    return {
      recommendations: [],
      recommendationFamily: null as PlanFamily | null,
      mostCompatibleFamily: null as PlanFamily | null,
      bestValueFamily: null as PlanFamily | null,
      broadestCompatibleFamily: null as PlanFamily | null,
      needsFullyMet: normalized.length === 0,
      supportedNeeds: [] as NeedKey[],
      unsupportedNeeds: normalized,
    };
  }

  const broadest = [...evaluations].sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0))[0];
  const completeMatches = normalized.length
    ? evaluations.filter((ev) => ev.completeMatch).sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0))
    : [];
  const recommendation = normalized.length ? completeMatches[0] || null : broadest;

  const supportedNeeds = normalized.filter((key) =>
    evaluations.some((ev) => ev.matchedNeeds.includes(key))
  );
  const unsupportedNeeds = normalized.filter((key) => !supportedNeeds.includes(key));

  const recommendations = evaluations
    .sort((a, b) => (a.rank ?? 0) - (b.rank ?? 0))
    .map((ev) => {
      const isRecommendation = Boolean(recommendation && ev.family === recommendation.family);
      return {
        ...ev,
        mostCompatible: isRecommendation,
        bestValue: isRecommendation,
        compatible: true,
        badges: isRecommendation ? (["BEST_VALUE"] as const) : (["COMPATIBLE"] as const),
      };
    });

  return {
    recommendations,
    recommendationFamily: recommendation?.family ?? null,
    mostCompatibleFamily: recommendation?.family ?? null,
    bestValueFamily: recommendation?.family ?? null,
    broadestCompatibleFamily: broadest?.family ?? null,
    needsFullyMet: normalized.length === 0 || Boolean(recommendation),
    supportedNeeds,
    unsupportedNeeds,
  };
}

export type RecommendationResult = ReturnType<typeof recommendGroup>;

export function recommendGroup(input: Record<string, unknown>) {
  const validation = validateGroup(input);
  const group = validation.group;
  if (!validation.valid) {
    return {
      status: "INPUT_REQUIRED" as const,
      errors: validation.errors,
      group,
      recommendations: [],
    };
  }

  const eligibility = vehicleEligibility(group);
  if (eligibility.status !== "VERIFIED") {
    return {
      status: eligibility.status,
      group,
      eligibility,
      recommendations: [],
    };
  }

  const ranked = rankEligibleFamilies(eligibility.eligibleFamilies, group.needs);
  let recommendationFamily = ranked.recommendationFamily;
  let needsFullyMet = ranked.needsFullyMet;
  let supportedNeeds = [...ranked.supportedNeeds];
  let unsupportedNeeds = [...ranked.unsupportedNeeds];
  let recommendations = ranked.recommendations.map((rec) => {
    const product = productFor(rec.family, group.aisRequired);
    return {
      ...rec,
      product,
      sku: product?.sku ?? null,
      purchase: product?.purchase ?? null,
      action: product?.purchase === "buy" ? ("ADD_TO_CART" as const) : ("GET_A_QUOTE" as const),
    };
  });

  if (!group.aisRequired && group.needs.includes("ai_video_telematics")) {
    const evaluation = evaluateFamily("invision", group.needs);
    const product = PRODUCTS["invision-standard"];
    const cameraOnly = {
      ...evaluation,
      mostCompatible: false,
      bestValue: false,
      compatible: true,
      standalone: true,
      badges: ["COMPATIBLE"] as const,
      product,
      sku: product.sku,
      purchase: product.purchase,
      action: "GET_A_QUOTE" as const,
    };
    recommendations.push(cameraOnly);
    if (!supportedNeeds.includes("ai_video_telematics")) {
      supportedNeeds.push("ai_video_telematics");
    }
    unsupportedNeeds = group.needs.filter((key) => !supportedNeeds.includes(key as NeedKey));

    if (group.needs.length === 1) {
      recommendations = recommendations.map((rec) => ({
        ...rec,
        mostCompatible: rec.family === "invision",
        bestValue: rec.family === "invision",
        badges: rec.family === "invision" ? (["BEST_VALUE"] as const) : (["COMPATIBLE"] as const),
      }));
      recommendationFamily = "invision";
      needsFullyMet = true;
    }
  }

  const manufacturer = resolveOem(group.segment, group.make);
  const segmentLabel = vehicleData[group.segment]?.label || group.segment;
  const manufacturerLabel = manufacturer?.label || group.make;
  const coverage = group.aisRequired ? aisCoverageStatus(group.stateId) : ("not_applicable" as const);

  return {
    status: "VERIFIED" as const,
    group,
    summary: {
      groupId: group.groupId,
      segment: group.segment,
      segmentLabel,
      make: group.make,
      manufacturerLabel,
      emission: group.emission,
      aisRequired: group.aisRequired,
      stateId: group.stateId,
      quantity: group.quantity,
      needs: group.needs.map((key) => ({ key, label: NEEDS[key].label })),
    },
    eligibility,
    aisCoverageStatus: coverage,
    transactionStatus:
      group.aisRequired && coverage === "unavailable"
        ? ("AIS_ROUTE_UNAVAILABLE" as const)
        : group.aisRequired && coverage === "confirm"
          ? ("AIS_ROUTE_CONFIRMATION_REQUIRED" as const)
          : group.aisRequired && coverage === "not_checked"
            ? ("AIS_LOCATION_NOT_CHECKED" as const)
            : ("READY" as const),
    recommendationFamily,
    mostCompatibleFamily: recommendationFamily,
    bestValueFamily: recommendationFamily,
    broadestCompatibleFamily: ranked.broadestCompatibleFamily,
    needsFullyMet,
    supportedNeeds,
    unsupportedNeeds,
    recommendations,
  };
}
