export const supportPage = {
  metadata: {
    title: "InCentral Support",
    description:
      "Contact Intangles Support for help with orders, installation, devices, AIS-140 certification, billing, account access and InRoute.",
  },
  hero: {
    eyebrow: "Customer support",
    title: "Fleet support for orders, installations and devices.",
    lead: "Get help with an order, installation, device, AIS-140 certification, billing, account access or InRoute.",
    cta: { label: "Submit support request", href: "#support-request" },
    contactCard: {
      liveLabel: "24×7 customer support",
      title: "Talk directly to the support team.",
      phone: { label: "Phone", value: "1800-268-9111", href: "tel:18002689111" },
      email: {
        label: "Email",
        value: "commandcenter@intangles.com",
        href: "mailto:commandcenter@intangles.com",
      },
    },
  },
  requestSection: {
    id: "support-request",
    eyebrow: "Help with a specific issue",
    title: "Submit the details of your issue.",
    description:
      "Add your order reference if you have it. Attach a file only if it helps explain the issue.",
    steps: [
      {
        number: "1",
        title: "Choose the issue type.",
        description: "This helps send the request to the right team.",
      },
      {
        number: "2",
        title: "Add the order reference if available.",
        description: "It is optional, but useful for an existing order or device.",
      },
      {
        number: "3",
        title: "Add the issue details.",
        description: "Include what you expected and what you see now.",
      },
    ],
    urgent: {
      label: "Need help right away?",
      phone: "1800-268-9111",
      href: "tel:18002689111",
    },
  },
  form: {
    title: "Support request",
    description: "Describe the issue and add your contact details.",
    categories: [
      "Product / hardware",
      "Installation",
      "Certification / VAHAN",
      "Order / delivery",
      "Invoice / payment",
      "InCentral account",
      "InRoute access",
      "Other",
    ],
    fields: {
      category: { label: "Issue category", placeholder: "Select category", required: true },
      orderReference: { label: "Order reference, if available" },
      email: { label: "Contact email", required: true },
      phone: { label: "Mobile number", required: true },
      description: {
        label: "Issue details",
        placeholder: "Describe the issue, what you expected and what you see now",
        required: true,
      },
      attachments: {
        label: "Attachments, optional",
        hint: "Add photos or a PDF if they help show the issue.",
      },
    },
    requiredNote: "Fields marked with an asterisk are mandatory.",
    helpLink: { label: "Open Help", href: "/help" },
    submitLabel: "Submit support request",
    submittingLabel: "Submitting…",
    errorMessage: "We could not submit the support request. Please try again.",
  },
  success: {
    eyebrow: "Request received",
    title: "Support request received.",
    lead: "We received the details you submitted. If the issue is urgent, call us using the number below.",
    summaryLabels: {
      category: "Issue category",
      email: "Contact email",
      order: "Order reference",
      direct: "Direct support",
    },
    directSupport: "24×7 phone support",
    nextTitle: "What happens next",
    nextDescription:
      "Our support team will review your request. For urgent issues, call 1800-268-9111 and share the same order or device details.",
    myInCentral: { label: "Open My InCentral", href: "/account" },
    againLabel: "Submit another request",
  },
} as const;
