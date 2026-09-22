export type PlanFamily =
  | "incert"
  | "insight"
  | "ingenious"
  | "invisionplus"
  | "invision";

export type NeedKey =
  | "tracking"
  | "fuel_def"
  | "diagnostics"
  | "predictive_health"
  | "driver_behaviour"
  | "ai_video_telematics";

export type ConfiguratorState = {
  step: 1 | 2;
  segment: string;
  make: string;
  emission: string;
  aisRequired: boolean;
  stateId: string;
  selectedFamily: PlanFamily | "";
  quantity: number;
  /** Raw checkbox values before alias expansion (tracking, fuel_package, etc.) */
  selectedNeeds: string[];
};

export type CartLine = {
  id: string;
  sku: string;
  family: PlanFamily;
  planName: string;
  line: string;
  quantity: number;
  unitPrice: number;
  segment: string;
  segmentLabel: string;
  make: string;
  manufacturerLabel: string;
  emission: string;
  aisRequired: boolean;
  stateId: string;
  stateLabel: string;
  hardware: string;
  source: string;
  createdAt: number;
  purchase?: "buy" | "quote";
  configurationVersion?: number;
};
