export const notFoundPage = {
  code: "404 · Page not found",
  title: "This page isn't available yet.",
  lead: "The route you requested doesn't exist, or this part of InCentral is still being built. We're rolling out pages in stages — check back soon.",
  devStatus: {
    label: "Development in progress",
    hint: "New routes and features are being added to InCentral.",
  },
  actions: {
    primary: { label: "Back to InCentral", href: "/" },
    secondary: { label: "Find the right plan", href: "/#check-compatibility" },
  },
  shortcuts: {
    label: "Continue to",
    links: [
      { label: "Plans", href: "/#plans" },
      { label: "Help", href: "/help" },
      { label: "AIS-140 Guide", href: "/ais-140-guide" },
    ],
  },
} as const;
