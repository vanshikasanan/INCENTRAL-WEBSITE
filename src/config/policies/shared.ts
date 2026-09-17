import type { PolicyInline } from "./types";

export const companyAddress = [
  "Unit No. 601 & 604, 6th Floor, Poloroche Business Avenue",
  "Survey No. 227/A/222/1 to 17, Village Lohegaon, Taluka Haveli",
  "Pune, Maharashtra 411032, India",
] as const;

export const supportContact: PolicyInline[] = [
  { type: "text", value: "1800-268-9111" },
  { type: "break" },
  { type: "email", address: "commandcenter@intangles.com" },
];

export const grievanceContact: PolicyInline[] = [
  { type: "text", value: "Neil Unadkat" },
  { type: "break" },
  { type: "email", address: "dpo@intangles.com" },
];
