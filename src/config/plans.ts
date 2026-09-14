export type PlanVariant = {
  label: string;
  href: string;
};

export type PlanAccent =
  | "incert"
  | "insight"
  | "ingenious"
  | "invisionplus"
  | "invision";

export type PlanAccentToken = {
  accent: string;
  tint: string;
  markShadow: string;
};

/** Pass 180 plan palette — shared by showcase cards, mega menu, finder, cart. */
export const planAccentTokens: Record<PlanAccent, PlanAccentToken> = {
  incert: {
    accent: "#00a6d6",
    tint: "#ecfafd",
    markShadow: "0 0 0 4px color-mix(in srgb, #00a6d6 10%, transparent)",
  },
  insight: {
    accent: "#0b8b86",
    tint: "#edf9f7",
    markShadow: "0 0 0 4px color-mix(in srgb, #0b8b86 10%, transparent)",
  },
  ingenious: {
    accent: "#2764d8",
    tint: "#eef3fd",
    markShadow: "0 0 0 4px color-mix(in srgb, #2764d8 10%, transparent)",
  },
  invisionplus: {
    accent: "#4a3fa5",
    tint: "#f1f0fa",
    markShadow: "0 0 0 4px color-mix(in srgb, #4a3fa5 10%, transparent)",
  },
  invision: {
    accent: "#58728f",
    tint: "#f0f4f7",
    markShadow: "0 0 0 4px color-mix(in srgb, #58728f 10%, transparent)",
  },
};

export type PlanProduct = {
  id: string;
  name: string;
  category: string;
  description: string;
  href: string;
  accent: PlanAccent;
  variants: PlanVariant[];
};

export const plansMega = {
  kicker: "Plans",
  title: "Explore the plan range",
  description:
    "Review product details or find the right plan for your fleet.",
  cta: {
    label: "Find the right plan",
    href: "/#check-compatibility",
  },
} as const;

export type PlanFeatureIconId =
  | "route"
  | "alert"
  | "report"
  | "fuel"
  | "fault"
  | "repair"
  | "health"
  | "automation"
  | "analytics"
  | "camera"
  | "dual"
  | "cabin";

export type PlanShowcaseFeature = {
  icon: PlanFeatureIconId;
  label: string;
};

export type PlanShowcaseCard = {
  id: string;
  accent: PlanAccent;
  value: string;
  number: string;
  image: string;
  name: string;
  tagline: string;
  href?: string;
  features: PlanShowcaseFeature[];
};

/** Homepage plan ladder — four core plans (informational cards). */
export const planShowcaseCards: PlanShowcaseCard[] = [
  {
    id: "incert",
    accent: "incert",
    value: "Compliance",
    number: "01",
    image: "/images/hero/hero-incert-concept.webp",
    name: "InCert",
    tagline: "Stay compliant. Stay in control.",
    features: [
      { icon: "route", label: "Location, Trips & Geofencing" },
      { icon: "alert", label: "Driver Alerts" },
      { icon: "report", label: "Fleet Reports" },
    ],
  },
  {
    id: "insight",
    accent: "insight",
    value: "Compliance + Cost",
    number: "02",
    image: "/images/hero/hero-insight-concept.webp",
    name: "InSight",
    tagline: "See where fuel and vehicle costs are going.",
    features: [
      { icon: "fuel", label: "Fuel Consumption Insights" },
      { icon: "fault", label: "Fault-Code Visibility" },
      { icon: "repair", label: "Guided Repair" },
    ],
  },
  {
    id: "ingenious",
    accent: "ingenious",
    value: "Compliance + Cost + Productivity",
    number: "03",
    image: "/images/hero/hero-ingenious-concept.webp",
    name: "InGenious",
    tagline: "Predict vehicle issues, manage fuel and automate fleet work.",
    features: [
      { icon: "health", label: "Predictive Vehicle Health" },
      { icon: "automation", label: "Operations Automation" },
      { icon: "analytics", label: "Full Fuel Management" },
    ],
  },
  {
    id: "invision-plus",
    accent: "invisionplus",
    value: "Compliance + Cost + Productivity + Safety",
    number: "04",
    image: "/images/hero/hero-invisionplus-concept.webp",
    name: "InVision+",
    tagline:
      "Add AI-Driven Video Telematics to tracking, fuel and predictive vehicle health.",
    features: [
      { icon: "camera", label: "AI-Driven Video Telematics" },
      { icon: "dual", label: "Dual-Camera Visibility" },
      { icon: "cabin", label: "In-Cabin Alerts" },
    ],
  },
];

/** Camera-only plan card — use when a five-plan grid is needed. */
export const planShowcaseInVisionCard: PlanShowcaseCard = {
  id: "invision",
  accent: "invision",
  value: "Video telematics",
  number: "05",
  image: "/images/hero/hero-invision-concept.webp",
  name: "InVision",
  tagline:
    "AI-Driven Video Telematics without OBD-dependent tracking, fuel and predictive health layers.",
  href: "/invision",
  features: [
    { icon: "camera", label: "AI-Driven Video Telematics" },
    { icon: "dual", label: "Dual-Camera Visibility" },
    { icon: "cabin", label: "In-Cabin Alerts" },
  ],
};

export const plansSectionHome = {
  id: "plans",
  titleId: "h139PlansTitle",
  eyebrow: "Plans",
  title: "Four plans. See which ones fit your fleet.",
  description:
    "Start with tracking, then add fuel visibility, predictive vehicle health and AI-Driven Video Telematics as you move up the range.",
  cards: planShowcaseCards,
} as const;

export const planProducts: PlanProduct[] = [
  {
    id: "incert",
    name: "InCert",
    category: "Tracking",
    description: "Tracking, trips, geofencing and driver alerts.",
    href: "/incert",
    accent: "incert",
    variants: [
      { label: "AIS-140 Certified", href: "/incert?line=ais" },
      { label: "Standard", href: "/incert?line=standard" },
    ],
  },
  {
    id: "insight",
    name: "InSight",
    category: "Fuel & repair",
    description:
      "Fuel consumption insights, fault codes and repair guidance.",
    href: "/insight",
    accent: "insight",
    variants: [
      { label: "AIS-140 Certified", href: "/insight?line=ais" },
      { label: "Standard", href: "/insight?line=standard" },
    ],
  },
  {
    id: "ingenious",
    name: "InGenious",
    category: "Predictive health",
    description:
      "Predictive vehicle health, full fuel management and fleet automation.",
    href: "/ingenious",
    accent: "ingenious",
    variants: [
      { label: "AIS-140 Certified", href: "/ingenious?line=ais" },
      { label: "Standard", href: "/ingenious?line=standard" },
    ],
  },
  {
    id: "invision-plus",
    name: "InVision+",
    category: "Predictive + video",
    description:
      "Predictive vehicle health with AI-Driven Video Telematics.",
    href: "/invision-plus",
    accent: "invisionplus",
    variants: [
      { label: "AIS-140 Certified", href: "/invision-plus?line=ais" },
      { label: "Standard", href: "/invision-plus?line=standard" },
    ],
  },
  {
    id: "invision",
    name: "InVision",
    category: "Camera-only",
    description:
      "AI-Driven Video Telematics without the OBD-dependent tracking, fuel and predictive vehicle health layers.",
    href: "/invision",
    accent: "invision",
    variants: [{ label: "Standard", href: "/invision" }],
  },
];
