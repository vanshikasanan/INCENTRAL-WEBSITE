export const ais140GuidePage = {
  metadata: {
    title: "AIS-140 Guide for Fleets",
    description:
      "Understand AIS-140 requirements in India, certified hardware, VAHAN activation, fitment and how to check compatible InCentral plans for your fleet.",
  },
  hero: {
    eyebrow: "AIS-140 Guide",
    title: "AIS-140 requirements for your fleet.",
    lead: "AIS-140 is the Indian automotive standard used for certified vehicle location tracking under government transport requirements. Choose AIS-140 Certified if you still need certified hardware. Choose Standard if AIS-140 compliance is already covered.",
    actions: {
      primary: { label: "Find the right plan", href: "/#check-compatibility" },
      secondary: { label: "Call us", href: "tel:18002689111" },
    },
  },
  routeSection: {
    eyebrow: "Choose the right option",
    title: "AIS-140 Certified or Standard?",
    description: "Choose the option that matches the current AIS-140 status of the vehicles.",
    routes: [
      {
        id: "certified",
        label: "AIS-140 Certified",
        title: "Choose this if the vehicles still need AIS-140 certified hardware.",
        points: [
          "Certified VLTD hardware is included.",
          "Fitment is completed through an RTO-empanelled installer.",
          "The device is activated and linked to the vehicle through the VAHAN certification process.",
        ],
      },
      {
        id: "standard",
        label: "Standard",
        title: "Choose this if AIS-140 compliance is already covered for these vehicles.",
        points: [
          "No new AIS-140 certification is required through InCentral.",
          "Intangles features work alongside the existing AIS-140 device.",
          "Different vehicles in the same fleet can use AIS-140 Certified or Standard as needed.",
        ],
      },
    ],
  },
  faqSection: {
    eyebrow: "AIS-140 questions",
    title: "Common AIS-140 questions.",
    callLabel: "Call us →",
    callHref: "tel:18002689111",
    faqs: [
      {
        id: "existing-hardware",
        question: "What if my fleet already has AIS-140 hardware?",
        answer:
          "Use the Standard line for those vehicles. The existing certified device continues to cover the AIS-140 requirement.",
        defaultOpen: true,
      },
      {
        id: "state-availability",
        question: "Is AIS-140 Certified available in every state?",
        answer:
          "AIS-140 installation availability varies by state. The plan finder shows whether installation is currently available for the state you select.",
      },
      {
        id: "plan-compatibility",
        question: "Does AIS-140 decide which plan I can use?",
        answer:
          "No. AIS-140 only determines whether you need the Certified or Standard option. Plan compatibility depends on vehicle type, manufacturer and emission standard or powertrain.",
      },
    ],
  },
  nextSection: {
    eyebrow: "Next step",
    title: "Find the right plan for each vehicle type in your fleet.",
    actions: {
      primary: { label: "Find the right plan", href: "/#check-compatibility" },
      secondary: { label: "Call us", href: "tel:18002689111" },
    },
  },
} as const;
