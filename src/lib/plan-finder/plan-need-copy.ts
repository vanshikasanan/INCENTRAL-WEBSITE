import { CAP_LABELS, NEED_SHORT_LABELS } from "./plan-meta";
import { NEEDS, type RecommendationResult } from "./recommendation-engine";
import type { NeedKey, PlanFamily } from "./types";

const FAMILY_VALUE_GROUPS: Record<
  PlanFamily,
  { caps: string[]; label?: string; labelFor?: (extra: string[]) => string }[]
> = {
  incert: [
    {
      caps: ["real_time_location_tracking", "trip_management_geofencing"],
      label: "live tracking and trip management",
    },
    { caps: ["hub_activity_reports"], label: "hub activity reporting" },
    { caps: ["driver_behaviour_alerts"], label: "driver behaviour alerts" },
  ],
  insight: [
    { caps: ["driver_behaviour_reports"], label: "driver behaviour reporting" },
    { caps: ["fuel_consumption_insights"], label: "fuel consumption insights" },
    {
      caps: ["dtc_fault_code_visibility", "guided_repair_strategy"],
      labelFor: (extra) =>
        extra.length > 1
          ? "vehicle fault codes and repair guidance"
          : extra[0] === "guided_repair_strategy"
            ? "repair guidance"
            : "vehicle fault codes",
    },
  ],
  ingenious: [
    { caps: ["predictive_vehicle_health"], label: "predictive vehicle health" },
    { caps: ["comprehensive_fuel_management"], label: "comprehensive fuel management" },
    { caps: ["operations_automation"], label: "automated fleet tasks" },
    { caps: ["quantification_engine"], label: "cost and fuel impact quantification" },
    {
      caps: ["advanced_driver_behaviour_monitoring"],
      label: "advanced driver behaviour monitoring",
    },
  ],
  invisionplus: [
    { caps: ["ai_driven_video_telematics"], label: "AI-Driven Video Telematics" },
    {
      caps: ["video_on_demand", "passive_adas"],
      labelFor: (extra) =>
        extra.length > 1
          ? "video-on-demand and Passive ADAS"
          : extra[0] === "passive_adas"
            ? "Passive ADAS"
            : "video-on-demand",
    },
    {
      caps: ["driver_attendance_logging", "in_cabin_voice_alerts"],
      labelFor: (extra) =>
        extra.length > 1
          ? "driver attendance logging and in-cabin voice alerts"
          : extra[0] === "driver_attendance_logging"
            ? "driver attendance logging"
            : "in-cabin voice alerts",
    },
  ],
};

const FAMILY_VALUE_ORDER: Record<PlanFamily, PlanFamily[]> = {
  incert: ["incert"],
  insight: ["insight", "incert"],
  ingenious: ["ingenious", "insight", "incert"],
  invisionplus: ["invisionplus", "ingenious", "insight", "incert"],
};

function titleCaseChip(label: string) {
  const keep = new Set(["AI", "ADAS", "AIS-140", "GST", "PDF", "VAHAN", "OBD", "OEM"]);
  const small = new Set(["and", "or", "of", "for", "on", "in", "to", "with"]);
  return String(label || "")
    .split(/(\s+)/)
    .map((part, i) => {
      if (/^\s+$/.test(part)) return part;
      return part
        .split("-")
        .map((piece, j) => {
          if (!piece) return piece;
          const upper = piece.toUpperCase();
          if (keep.has(upper)) return upper;
          const lower = piece.toLowerCase();
          const firstWord = i === 0 && j === 0;
          if (!firstWord && small.has(lower)) return lower;
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join("-");
    })
    .join("");
}

function needLabel(key: string) {
  return NEED_SHORT_LABELS[key] || NEEDS[key as NeedKey]?.label || key;
}

function needLabelsForKeys(keys: string[]) {
  const pending = new Set(keys);
  const labels: string[] = [];
  if (pending.has("fuel_def") && pending.has("repair_help")) {
    labels.push("Reduce Fuel Waste");
    pending.delete("fuel_def");
    pending.delete("repair_help");
  }
  pending.forEach((key) => labels.push(titleCaseChip(needLabel(key))));
  return labels;
}

function selectedRequirementLabels(expandedNeeds: string[]) {
  const pending = new Set(expandedNeeds);
  const labels: string[] = [];
  if (pending.has("fuel_def") && pending.has("repair_help")) {
    labels.push("fuel waste and repair needs");
    pending.delete("fuel_def");
    pending.delete("repair_help");
  }
  const uiLabels: Record<string, string> = {
    tracking: "vehicle tracking and trips",
    predictive_health: "breakdown prevention",
    ai_video_telematics: "driver and road safety",
    driver_behaviour: "driver behaviour",
    fleet_automation: "fleet operations",
    fuel_def: "fuel waste",
    repair_help: "repair needs",
  };
  for (const key of [
    "tracking",
    "fuel_def",
    "repair_help",
    "predictive_health",
    "driver_behaviour",
    "fleet_automation",
    "ai_video_telematics",
  ] as const) {
    if (pending.has(key)) {
      labels.push(uiLabels[key] || needLabel(key));
      pending.delete(key);
    }
  }
  pending.forEach((key) => labels.push(needLabel(key)));
  return labels;
}

function selectedCapabilitySet(expandedNeeds: string[]) {
  const out = new Set<string>();
  expandedNeeds.forEach((key) => {
    (NEEDS[key as NeedKey]?.requires || []).forEach((cap) => out.add(cap));
  });
  return out;
}

function labelsFromGroups(
  groups: typeof FAMILY_VALUE_GROUPS.incert,
  available: Set<string>,
  selected: Set<string>
) {
  return (groups || [])
    .map((group) => {
      const extra = (group.caps || []).filter((cap) => available.has(cap) && !selected.has(cap));
      if (!extra.length) return "";
      return group.labelFor ? group.labelFor(extra) : group.label || "";
    })
    .filter(Boolean);
}

export function extraValueLabels(
  rec: RecommendationResult["recommendations"][number] | null | undefined,
  expandedNeeds: string[] = []
) {
  if (!rec) return [];
  const available = new Set(rec.capabilities || []);
  const selected = selectedCapabilitySet(expandedNeeds);
  const order = FAMILY_VALUE_ORDER[rec.family as PlanFamily] || [rec.family as PlanFamily];
  const seen = new Set<string>();
  const labels: string[] = [];
  order.forEach((family) => {
    labelsFromGroups(FAMILY_VALUE_GROUPS[family], available, selected).forEach((label) => {
      if (label && !seen.has(label)) {
        seen.add(label);
        labels.push(label);
      }
    });
  });
  return labels;
}

function selectedCoverageHeadline(count: number, hasExtras: boolean) {
  let base =
    count === 1
      ? "Covers your selected priority"
      : count === 2
        ? "Covers both selected priorities"
        : `Covers all ${count} selected priorities`;
  return hasExtras ? `${base}, plus more` : base;
}

export type PlanNeedCopy = {
  fit: string;
  headline: string;
  selectedLabels: string[];
  extras: string[];
  missingLabels: string[];
  tone: "positive" | "warning" | "neutral";
};

export function buildPlanNeedCopy(
  rec: RecommendationResult["recommendations"][number],
  result: RecommendationResult,
  expandedNeeds: string[]
): PlanNeedCopy {
  const selectedLabels = selectedRequirementLabels(expandedNeeds);
  if (!expandedNeeds.length) {
    return {
      fit: "",
      headline: "",
      selectedLabels: [],
      extras: [],
      missingLabels: [],
      tone: "neutral",
    };
  }

  const extras = extraValueLabels(rec, expandedNeeds);
  const hasExtras = extras.length > 0;

  if (rec.completeMatch) {
    return {
      fit: hasExtras
        ? "✓ Covers your priorities and more"
        : selectedLabels.length === 1
          ? "✓ Covers your selected priority"
          : "✓ Covers your selected priorities",
      headline: selectedCoverageHeadline(selectedLabels.length, hasExtras),
      selectedLabels,
      extras,
      missingLabels: [],
      tone: "positive",
    };
  }

  const missingKeys = rec.unmetNeeds || [];
  const missingLabels = needLabelsForKeys(missingKeys);
  const covered = Math.max(0, selectedLabels.length - missingLabels.length);

  return {
    fit: "✓ Compatible with your vehicle",
    headline: selectedLabels.length
      ? `Covers ${covered} of ${selectedLabels.length} selected priorities`
      : "Compatible with your vehicle",
    selectedLabels,
    extras: [],
    missingLabels,
    tone: "warning",
  };
}

export function formatChipLabel(label: string) {
  return titleCaseChip(label);
}

export function capLabel(cap: string) {
  return CAP_LABELS[cap] || cap;
}
