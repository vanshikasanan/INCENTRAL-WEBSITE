export type NeedOptionConfig = {
  id: string;
  value: string;
  kind: "tracking" | "fuel" | "health" | "video";
  title: string;
  description: string;
};

export const planFinderSection = {
  id: "check-compatibility",
  titleId: "planFinderTitle",
  eyebrow: "Find the right plan",
  title: "Find the right plan for your fleet.",
  description: "Tell us about your vehicles. We will show the plans that fit.",
  phoneLabel: "Prefer to talk?",
  phoneCta: "Call us",
  vehicleStep: {
    kicker: "Start here",
    title: "Tell us about your vehicle.",
    segmentLabel: "Vehicle type",
    segmentPlaceholder: "Choose vehicle type",
    makeLabel: "Manufacturer",
    makePlaceholder: "Choose manufacturer",
    emissionLabel: "Emission standard / powertrain",
    emissionPlaceholder: "Choose emission / powertrain",
    needsEyebrow: "Tailored for your fleet",
    needsTitle: "What would you like for your vehicles?",
    needsDescription:
      "Choose what matters most. We will highlight the best value plan for those needs.",
    needsGroupLabel: "What would you like for your vehicles?",
    submitLabel: "See plans that fit",
    validationError:
      "Choose the vehicle type, manufacturer and emission / powertrain.",
  },
  resultsStep: {
    summaryLabel: "Vehicle details",
    editLabel: "Edit",
    plansKicker: "Plans that fit",
    planRailLabel: "Plans that fit",
    planRailHint: "Select a plan to compare features and pricing.",
    unverifiedMessage:
      "We could not find a plan for these vehicle details. Check the details or contact us.",
  },
  commerce: {
    aisHeadline: "Choose AIS-140 Certified or Standard",
    priceNote: "Per device · 2-year price · incl. GST",
    devicesLabel: "Devices",
    totalNote: "2-year total, incl. GST",
    stateLabel: "State for AIS-140 installation",
    statePlaceholder: "Select state / union territory",
    featuresSummary: "See all included features",
    cartSuccessKicker: "Added to your cart",
    cartAnotherLabel: "Check another vehicle type",
    cartViewLabel: "View cart",
    invisionRouteHead: "Standard",
    invisionMessage:
      "Standard only. Our team will confirm DriveAI installation for the selected vehicles.",
  },
} as const;

export const needOptions: NeedOptionConfig[] = [
  {
    id: "tracking",
    value: "tracking",
    kind: "tracking",
    title: "Location tracking",
    description: "Track vehicles, trips and stops.",
  },
  {
    id: "fuel",
    value: "fuel_package",
    kind: "fuel",
    title: "Fuel use and repair help",
    description: "See fuel use, fault codes and repair guidance.",
  },
  {
    id: "health",
    value: "predictive_health",
    kind: "health",
    title: "Vehicle health alerts",
    description: "Spot issues early and plan maintenance.",
  },
  {
    id: "video",
    value: "ai_video_telematics",
    kind: "video",
    title: "Video safety",
    description: "Add AI video, road alerts and driver coverage.",
  },
];
