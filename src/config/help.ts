export type HelpTopicIcon =
  | "plan"
  | "ais"
  | "installation"
  | "orders"
  | "account"
  | "warranty";

export type HelpTopic = {
  id: string;
  icon: HelpTopicIcon;
  title: string;
  description: string;
  href: string;
  searchText: string;
};

export type HelpFaq = {
  id: string;
  question: string;
  answer: string;
  searchText: string;
  link?: { label: string; href: string };
};

export const helpPage = {
  metadata: {
    title: "InCentral Help Centre",
    description:
      "Find answers about InCentral plans, AIS-140, compatibility, installation, orders, warranties, accounts, InRoute and support.",
  },
  hero: {
    eyebrow: "Help centre",
    title: "Help",
    question: "What can we help you with?",
    lead: "Search for an answer or choose what you need help with.",
    searchPlaceholder:
      "Search plans, AIS-140, installation, orders, warranty…",
    quickSearches: [
      "AIS-140",
      "installation",
      "compatibility",
      "orders",
      "warranty",
    ],
  },
  supportCard: {
    kicker: "Customer support",
    title: "Need help with an order, installation or device?",
    description: "Contact Support for help with your specific issue.",
    cta: { label: "Contact Support", href: "/support" },
    meta: { label: "24×7 support", phone: "1800-268-9111", phoneHref: "tel:18002689111" },
  },
  topicsSection: {
    id: "help-topics",
    eyebrow: "Help topics",
    title: "Browse help topics.",
    description: "Choose a topic to find the right answer.",
    topics: [
      {
        id: "choose-plan",
        icon: "plan",
        title: "Choose a plan",
        description: "See which plans fit your vehicles.",
        href: "/#check-compatibility",
        searchText:
          "plan plans choose choosing recommendation finder compatibility vehicle compare",
      },
      {
        id: "ais-140",
        icon: "ais",
        title: "AIS-140",
        description: "Understand when AIS-140 is needed and how certification works.",
        href: "/ais-140-guide",
        searchText:
          "ais-140 ais certified standard compliance vltd state certification",
      },
      {
        id: "installation",
        icon: "installation",
        title: "Installation",
        description: "See how your device can be installed.",
        href: "/help#installation-help",
        searchText:
          "install installation fitment self install Intangles camera DriveAI certification",
      },
      {
        id: "orders",
        icon: "orders",
        title: "Orders & payment",
        description: "Understand cart, checkout and order status.",
        href: "/help#orders-help",
        searchText:
          "order orders pricing payment gst shipping cart checkout quote buy purchase invoice",
      },
      {
        id: "account",
        icon: "account",
        title: "Account & InRoute",
        description: "Sign in, create an account or check InRoute access.",
        href: "/help#account-help",
        searchText:
          "account sign in login create account my incentral inroute access provisioning",
      },
      {
        id: "warranty",
        icon: "warranty",
        title: "Warranty & support",
        description: "Check warranty basics or contact Support.",
        href: "/help#warranty-support",
        searchText:
          "warranty support replacement hardware issue device help case service 3 year",
      },
    ] satisfies HelpTopic[],
  },
  faqSection: {
    id: "common-questions",
    eyebrow: "FAQs",
    title: "Answers to common questions.",
    faqs: [
      {
        id: "ais-line",
        question: "Do I need AIS-140 Certified or Standard?",
        answer:
          "Use AIS-140 Certified for vehicles that require certified VLTD fitment. Use Standard where AIS-140 compliance is already covered. A mixed fleet can use both product lines.",
        searchText:
          "ais-140 certified standard compliant device compliance which line route",
        link: { label: "Open AIS-140 Guide →", href: "/ais-140-guide" },
      },
      {
        id: "compatibility",
        question: "How do I find the right plan for my vehicle?",
        answer:
          "Use the plan finder for each vehicle type before you buy or request a quote. Mixed fleets can include multiple configurations with different plans and quantities.",
        searchText: "compatibility vehicle oem emission segment check supported plan",
        link: { label: "Find the right plan →", href: "/#check-compatibility" },
      },
      {
        id: "buy-online",
        question: "Which plans can I buy online?",
        answer:
          "After compatibility is checked, InCert and InSight can be added to cart. InGenious, InVision and InVision+ continue to a quote request with the selected vehicle details already carried over.",
        searchText:
          "buy online direct buy incert insight quote ingenious invision invision+ purchase",
      },
      {
        id: "installation-help",
        question: "Can I install the device myself?",
        answer:
          "Standard InCert, InSight and InGenious can be self-installed or installed by Intangles. AIS-140 fitment must be completed by an RTO-empanelled installer. Products using DriveAI, including InVision and InVision+, are installed by Intangles and are not offered as self-install.",
        searchText:
          "installation self install ais camera DriveAI Intangles obd fitment",
      },
      {
        id: "orders-help",
        question: "Do product prices include GST?",
        answer:
          "Yes. All plan prices shown across InCentral include 18% GST. Shipping is shown separately in the purchase flow.",
        searchText:
          "orders cart checkout gst tax shipping payment price direct buy account",
      },
      {
        id: "account-help",
        question: "Do I need an account before I choose a plan?",
        answer:
          "No. You can browse, find the right plan and add items to your cart before signing in. Sign In or Create Account is required when you continue to checkout or need account access.",
        searchText:
          "account sign in create account inroute access checkout cart my incentral provisioning",
        link: { label: "Sign In →", href: "/sign-in?mode=login" },
      },
      {
        id: "inroute-access",
        question: "When do I get InRoute access?",
        answer:
          "InRoute access is set up after the required order and installation steps. AIS-140 orders also complete certification first.",
        searchText: "inroute access provisioning account install certification ready",
      },
      {
        id: "warranty-support",
        question: "What is the hardware warranty?",
        answer:
          "Intangles hardware carries a 3-year warranty. If you have a device issue, contact Support with your order details.",
        searchText: "warranty support hardware 3 year replacement device issue case",
        link: { label: "Contact Support →", href: "/support" },
      },
    ] satisfies HelpFaq[],
  },
  closeSection: {
    eyebrow: "Customer support",
    title: "Contact Support.",
    description:
      "Use Support for help with an order, installation, certification, billing, account or device.",
    cta: { label: "Contact Support", href: "/support" },
  },
} as const;
