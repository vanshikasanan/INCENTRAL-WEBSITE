import type { PlanFamily } from "./types";

export const CAP_LABELS: Record<string, string> = {
  real_time_location_tracking: "Real-time location tracking",
  hub_activity_reports: "Hub activity reports",
  driver_behaviour_alerts: "Driver behaviour alerts",
  trip_management_geofencing: "Trip management and geofencing",
  driver_behaviour_reports: "Driver behaviour reports",
  fuel_consumption_insights: "Fuel consumption insights",
  dtc_fault_code_visibility: "Vehicle fault codes",
  guided_repair_strategy: "Repair guidance",
  predictive_vehicle_health: "Predictive vehicle health",
  comprehensive_fuel_management: "Full fuel management",
  operations_automation: "Automated fleet tasks",
  quantification_engine: "Cost and fuel impact",
  advanced_driver_behaviour_monitoring: "Advanced driver monitoring",
  ai_driven_video_telematics: "AI-Driven Video Telematics",
  video_on_demand: "Video-on-demand",
  passive_adas: "Road-risk alerts (Passive ADAS)",
  driver_attendance_logging: "Driver attendance logging",
  in_cabin_voice_alerts: "In-cabin voice alerts",
};

export const NEED_ALIASES: Record<string, string[]> = {
  fuel_package: ["fuel_def", "diagnostics"],
};

export const NEED_SHORT_LABELS: Record<string, string> = {
  tracking: "location tracking",
  fuel_def: "fuel consumption insights",
  diagnostics: "repair help",
  predictive_health: "vehicle health alerts",
  ai_video_telematics: "video safety",
};

export type PlanMeta = {
  name: string;
  value: string;
  desc: string;
  art: string;
  key: string[];
  hardware: { standard: string; ais?: string };
  install: { standard: string; ais?: string };
};

export const planMeta: Record<PlanFamily, PlanMeta> = {
  incert: {
    name: "InCert",
    value: "Compliance",
    desc: "Track vehicles, trips and key driver activity.",
    art: "/images/hero/hero-incert-concept.webp",
    key: ["Location, Trips & Geofencing", "Driver Alerts", "Fleet Reports"],
    hardware: { standard: "EdgeEco", ais: "EdgeEco" },
    install: {
      standard: "Self-install or Intangles installation",
      ais: "RTO-empanelled installation required",
    },
  },
  insight: {
    name: "InSight",
    value: "Compliance + Cost",
    desc: "Add fuel consumption insights, vehicle fault codes and repair guidance.",
    art: "/images/hero/hero-insight-concept.webp",
    key: ["Fuel Consumption Insights", "Fault-Code Visibility", "Guided Repair"],
    hardware: { standard: "EdgeEco", ais: "EdgeEco" },
    install: {
      standard: "Self-install or Intangles installation",
      ais: "RTO-empanelled installation required",
    },
  },
  ingenious: {
    name: "InGenious",
    value: "Compliance + Cost + Productivity",
    desc: "Add predictive vehicle health, full fuel management and fleet automation.",
    art: "/images/hero/hero-ingenious-concept.webp",
    key: ["Predictive Vehicle Health", "Full Fuel Management", "Operations Automation"],
    hardware: { standard: "EdgePrime", ais: "EdgeEco" },
    install: {
      standard: "Self-install or Intangles installation",
      ais: "RTO-empanelled installation required",
    },
  },
  invisionplus: {
    name: "InVision+",
    value: "Compliance + Cost + Productivity + Safety",
    desc: "Add AI-Driven Video Telematics to tracking, full fuel management and predictive vehicle health.",
    art: "/images/hero/hero-invisionplus-concept.webp",
    key: ["AI-Driven Video Telematics", "Dual-Camera Visibility", "In-Cabin Alerts"],
    hardware: { standard: "DriveAI", ais: "DriveAI + EdgeEco" },
    install: {
      standard: "DriveAI installed by Intangles",
      ais: "DriveAI installed by Intangles; EdgeEco included with AIS-140 Certified",
    },
  },
  invision: {
    name: "InVision",
    value: "Camera-only",
    desc: "AI-Driven Video Telematics without the tracking, fuel or predictive vehicle health layers.",
    art: "/images/hero/hero-invision-concept.webp",
    key: ["AI-Driven Video Telematics", "Dual-Camera Visibility", "In-Cabin Alerts"],
    hardware: { standard: "DriveAI" },
    install: { standard: "DriveAI installed by Intangles" },
  },
};

export function expandNeeds(rawNeeds: string[]): string[] {
  const expanded: string[] = [];
  rawNeeds.forEach((key) => {
    (NEED_ALIASES[key] || [key]).forEach((item) => expanded.push(item));
  });
  return expanded;
}

export function variantLabel(aisRequired: boolean) {
  return aisRequired ? "AIS-140 Certified" : "Standard";
}
