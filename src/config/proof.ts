export type ProofStat = {
  value: string;
  label: string;
};

export type ProofSectionContent = {
  id: string;
  titleId: string;
  eyebrow: string;
  title: string;
  description: string;
  statsLabel: string;
  stats: ProofStat[];
  note: string;
};

export const proofSectionHome: ProofSectionContent = {
  id: "proof",
  titleId: "h132ProofTitle",
  eyebrow: "Trusted at fleet scale",
  title: "One platform for the fleet decisions that matter.",
  description:
    "Use InCentral to choose the right plan. After installation, use InRoute to manage your fleet day to day.",
  statsLabel: "Intangles platform scale",
  stats: [
    { value: "41,000+", label: "Fleet operators" },
    { value: "500,000+", label: "Vehicles on the platform" },
    { value: "96%*", label: "Predictive AI accuracy" },
    { value: "18", label: "Countries" },
  ],
  note: "* Predictive platform results. Outcomes vary by fleet and operating conditions.",
};
