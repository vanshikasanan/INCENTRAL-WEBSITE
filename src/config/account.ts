export type AccountWidget = {
  id: string;
  title: string;
  description: string;
  emptyState: string;
};

export const accountPage = {
  metadata: {
    title: "My InCentral",
    description:
      "Access your InCentral account for orders, invoices, installation, certification, InRoute access and support.",
  },
  hero: {
    eyebrow: "Your account",
    title: "My InCentral",
    lead: "View orders, invoices, installation progress, InRoute access and support in one place.",
  },
  overviewEyebrow: "Account overview",
  widgets: [
    {
      id: "orders",
      title: "Orders",
      description:
        "See your order dates, products, totals and current status.",
      emptyState: "Your information will appear here when it is available.",
    },
    {
      id: "invoices",
      title: "Invoices & Payments",
      description: "See invoices and payment records for your orders.",
      emptyState: "Your information will appear here when it is available.",
    },
    {
      id: "installation",
      title: "Installation & AIS-140",
      description:
        "Track installation and AIS-140 certification progress where needed.",
      emptyState: "Your information will appear here when it is available.",
    },
    {
      id: "inroute",
      title: "InRoute",
      description:
        "Check whether InRoute access is ready and open the platform.",
      emptyState: "Your information will appear here when it is available.",
    },
    {
      id: "support",
      title: "Support",
      description:
        "View support activity and contact the team when you need help.",
      emptyState: "Your information will appear here when it is available.",
    },
    {
      id: "account-company",
      title: "Account / Company",
      description: "Update your account and company details.",
      emptyState: "Your information will appear here when it is available.",
    },
  ] satisfies AccountWidget[],
} as const;
