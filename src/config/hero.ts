import { siteConfig } from "@/config/site";

export const heroContent = {
  eyebrow: "InCentral by Intangles",
  title: "Fleet Tracking and Intelligence, Built to Grow With Your Fleet.",
  lead:
    "Track your fleet, monitor fuel and vehicle health, improve driver safety, and add video telematics in one place. Answer a few questions to see which plans fit your fleet.",
  actions: {
    primary: {
      label: "Find the right plan",
      href: "#check-compatibility",
    },
    secondary: {
      label: "Call us",
      href: `tel:${siteConfig.phone.raw}`,
    },
  },
  intelligencePanel: {
    kicker: "Intangles fleet intelligence",
    title: "What Intangles brings to your fleet",
    chip: "Across the plan range",
    capabilities: [
      {
        id: "health",
        title: "Predictive Vehicle Health Monitoring",
        accentColor: "#8ea8ff",
      },
      {
        id: "automation",
        title: "Operations Automation & Fleet Reports",
        accentColor: "#73bbf3",
        iconTransform: "translate(0.4px, -0.2px)",
      },
      {
        id: "fuel",
        title: "Fuel Consumption & Management",
        accentColor: "#67c7e7",
      },
      {
        id: "dtc",
        title: "DTC Codes and Guided Repair Strategies",
        accentColor: "#97b8ff",
        iconTransform: "translate(0.3px, -0.1px)",
      },
      {
        id: "driver",
        title: "Driver Behaviour Monitoring",
        accentColor: "#78aee8",
      },
      {
        id: "video",
        title: "AI-Driven Video Telematics",
        accentColor: "#5fa0ea",
        iconTransform: "translate(0.2px, -0.1px)",
      },
    ],
  },
} as const;
