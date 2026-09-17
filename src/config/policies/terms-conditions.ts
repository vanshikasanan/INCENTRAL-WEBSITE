import type { PolicyDocument } from "./types";
import {
  companyAddress,
  grievanceContact,
  supportContact,
} from "./shared";

export const termsConditionsPolicy: PolicyDocument = {
  path: "/policies/terms-conditions",
  metadata: {
    title: "InCentral Terms & Conditions",
    description:
      "Terms for using InCentral and buying Intangles fleet plans and hardware, including orders, pricing, payment, installation, activation, refunds and account use.",
  },
  eyebrow: "Legal",
  title: "Terms & Conditions",
  lead: "These terms cover how you use InCentral to find a plan, request a quote, buy hardware and services, manage an order and continue to payment.",
  meta: {
    kicker: "Document details",
    ariaLabel: "InCentral Terms & Conditions overview",
    rows: [
      { label: "Last updated", value: "2 September 2026" },
      { label: "Applies to", value: "InCentral purchases" },
      { label: "Company", value: "Intangles Lab Pvt. Ltd." },
    ],
  },
  tocAriaLabel: "InCentral Terms & Conditions table of contents",
  introNote:
    "InCentral is a purchasing portal for Intangles fleet plans and hardware. These terms are written for that buying journey and are separate from the terms that govern InRoute or activated telematics services.",
  sections: [
    {
      id: "scope",
      number: "01",
      title: "About these terms",
      blocks: [
        {
          type: "paragraph",
          content:
            "These Terms & Conditions govern your use of InCentral and purchases or quote requests made through InCentral. InCentral is the Intangles portal used to compare eligible fleet plans, select hardware and service options, create an account, request a quote, place an order, review pricing and continue to payment.",
        },
        {
          type: "paragraph",
          content:
            "If you use InCentral for a company, fleet operator or other organisation, you confirm that you are authorised to act for that organisation. Any accepted quote, order form or separately signed agreement may contain additional commercial terms. If there is a conflict, the signed or accepted order-specific document applies to that order.",
        },
        {
          type: "callout",
          title: "What these terms cover",
          content:
            "These terms cover the InCentral buying journey. They do not replace the separate terms that govern use of InRoute, telematics services or other Intangles software after activation.",
        },
      ],
    },
    {
      id: "eligibility",
      number: "02",
      title: "Who can use the portal",
      blocks: [
        {
          type: "paragraph",
          content:
            "InCentral is intended for business and fleet users in India. You must be at least 18 years old and legally capable of entering into a contract. You must provide accurate information and must not place an order or request a quote using another person or organisation's details without authority.",
        },
        {
          type: "paragraph",
          content:
            "You are responsible for checking the order details entered on behalf of your organisation, including contact information, GST information, delivery details, vehicle details and quantities.",
        },
      ],
    },
    {
      id: "plans",
      number: "03",
      title: "Plans, product information and compatibility",
      blocks: [
        {
          type: "paragraph",
          content:
            "InCentral shows Intangles plans, features, hardware, prices and availability based on information available at the time you use the portal. Some plans can be purchased online and others require a quote or additional validation.",
        },
        {
          type: "paragraph",
          content:
            "The plan finder uses the vehicle information you provide to identify plans that fit the stated vehicle type, manufacturer and emission standard or powertrain. It is a buying aid, not a guarantee that every vehicle in your fleet can be installed without further checks. Intangles may verify vehicle details, hardware fitment, installation requirements and service availability before accepting an order.",
        },
        {
          type: "list",
          items: [
            "Standard and AIS-140 Certified are different compliance routes. Hardware varies by SKU and configuration.",
            "Where AIS-140 Certified is selected, certification depends on the relevant certified device, correct installation and the applicable registration or VAHAN process.",
            "InVision is the camera-only option and is not part of the progressive Compliance, Cost, Productivity and Safety hierarchy.",
            "Product images and diagrams are illustrative. The supplied hardware must match the confirmed order or quote.",
          ],
        },
      ],
    },
    {
      id: "orders",
      number: "04",
      title: "Quotes, orders and acceptance",
      blocks: [
        {
          type: "paragraph",
          content:
            "Adding a plan to the cart or submitting checkout details does not by itself mean that Intangles has accepted the order. Your order is an offer to purchase the selected products and services. We may validate compatibility, quantities, delivery details, taxes, installation requirements and availability before acceptance.",
        },
        {
          type: "paragraph",
          content:
            "An order is accepted when Intangles issues an order confirmation, accepted invoice or other written confirmation, or begins fulfilment after confirming the order. If we cannot accept an order after payment has been received, we will cancel the affected part and refund the amount collected for it.",
        },
        {
          type: "paragraph",
          content:
            "For quote-required plans, the quote and any accepted order form set the final scope, price and commercial terms. A quote request is not an order and does not reserve hardware or installation capacity unless we confirm otherwise in writing.",
        },
      ],
    },
    {
      id: "pricing",
      number: "05",
      title: "Pricing, GST and payment",
      blocks: [
        {
          type: "paragraph",
          content:
            "Prices displayed on InCentral are in Indian Rupees. Where the portal states that a price includes GST, the displayed plan price includes GST. Shipping, installation or other compulsory charges, if applicable, will be shown or confirmed before payment so that you can review the final payable amount.",
        },
        {
          type: "paragraph",
          content:
            "If a pricing, tax or product-description error is identified before order acceptance, we may correct it and ask you to confirm the corrected order. We will not charge a higher amount without your affirmative confirmation.",
        },
        {
          type: "paragraph",
          content:
            "Payments may be processed by an authorised payment service provider. Payment availability, security checks, refunds and settlement timing may also be subject to that provider's terms and banking networks. InCentral does not require you to provide payment-card credentials directly to Intangles unless the checkout clearly states otherwise.",
        },
      ],
    },
    {
      id: "fulfilment",
      number: "06",
      title: "Shipping, installation and activation",
      blocks: [
        {
          type: "paragraph",
          content:
            "Hardware delivery and installation depend on product availability, delivery location, vehicle access and the installation method selected for the confirmed order. Any delivery or installation date is an estimate unless Intangles expressly confirms a fixed date in writing.",
        },
        {
          type: "paragraph",
          content:
            "For self-install products, you are responsible for following the supplied instructions and safety requirements. For Intangles installation, you must provide reasonable vehicle access, a safe installation location and an authorised contact at the agreed time. Missed appointments or site-access issues may require rescheduling.",
        },
        {
          type: "paragraph",
          content:
            "Service access is normally activated after the required order checks and installation steps are complete. AIS-140 Certified orders may also require registration or certification steps after fitment. Government, VAHAN, network, vehicle-OEM or other third-party processes can affect completion time.",
        },
      ],
    },
    {
      id: "term",
      number: "07",
      title: "Service term, renewals and plan changes",
      blocks: [
        {
          type: "paragraph",
          content:
            "Where a product page shows a 2-year price, that price relates to the stated 2-year plan for the selected device and service configuration. The service start date and term will be confirmed in the order or activation record.",
        },
        {
          type: "paragraph",
          content:
            "InCentral will not treat a recurring renewal as agreed merely because you previously bought a plan. If an order is set to renew automatically, the renewal frequency, amount or pricing basis and cancellation method must be disclosed before you agree to that recurring arrangement. Otherwise, renewal requires a new order, quote or other affirmative confirmation.",
        },
        {
          type: "paragraph",
          content:
            "Plan upgrades, downgrades, hardware changes and quantity changes may affect compatibility, price, installation and service terms and may require a revised order.",
        },
      ],
    },
    {
      id: "account",
      number: "08",
      title: "Accounts and acceptable use",
      blocks: [
        {
          type: "paragraph",
          content:
            "You are responsible for keeping your InCentral account credentials secure and for activity performed through your account. Tell us promptly if you believe your account has been accessed without permission.",
        },
        {
          type: "paragraph",
          content:
            "You must not misuse InCentral, interfere with its security, attempt unauthorised access, scrape or copy substantial parts of the portal, introduce malicious code, submit fraudulent orders, manipulate prices or use the portal in violation of law or the rights of another person.",
        },
        {
          type: "paragraph",
          content:
            "We may restrict or suspend access where reasonably necessary to protect InCentral, investigate fraud, comply with law or prevent misuse. Where practical, we will provide notice and an opportunity to resolve the issue.",
        },
      ],
    },
    {
      id: "returns",
      number: "09",
      title: "Cancellations, returns, refunds and warranty",
      blocks: [
        {
          type: "paragraph",
          content: [
            { type: "text", value: "Our " },
            {
              type: "link",
              label: "Returns, Refunds & Cancellation Policy",
              href: "/policies/returns-refunds-cancellation",
            },
            {
              type: "text",
              value:
                " explains the process for cancelling an order, returning eligible hardware and receiving an approved refund. It also preserves remedies available where goods or services are defective, deficient, not as described or delivered late, subject to applicable law.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Hardware warranty coverage, where provided, applies on the terms supplied with the product or order. Warranty remedies may include diagnosis, repair or replacement depending on the issue and the applicable warranty terms. Damage caused by misuse, unauthorised modification, incorrect installation or external causes may fall outside warranty coverage.",
        },
        {
          type: "paragraph",
          content:
            "Nothing in these terms removes rights that cannot lawfully be excluded or limited.",
        },
      ],
    },
    {
      id: "ip",
      number: "10",
      title: "Intellectual property and third-party services",
      blocks: [
        {
          type: "paragraph",
          content:
            "InCentral, its design, software, text, graphics, product names, logos and other portal content are owned by or licensed to Intangles and are protected by applicable intellectual-property laws. You may use the portal only for evaluating, purchasing and managing Intangles products and services for your organisation.",
        },
        {
          type: "paragraph",
          content:
            "InCentral may rely on third-party services for payments, communications, hosting, maps, logistics, installation, invoicing or other fulfilment functions. Those providers may have their own terms for the service they directly provide. Intangles remains responsible for its obligations under the confirmed order and applicable law.",
        },
      ],
    },
    {
      id: "availability",
      number: "11",
      title: "Portal availability and liability",
      blocks: [
        {
          type: "paragraph",
          content:
            "We aim to keep InCentral accurate and available, but temporary interruptions, maintenance, network issues or third-party failures can occur. We do not promise uninterrupted portal access.",
        },
        {
          type: "paragraph",
          content:
            "To the extent permitted by law, Intangles is not liable for indirect, incidental or consequential losses arising solely from use of the InCentral portal. For a claim directly arising from an accepted InCentral order, Intangles' aggregate liability will not exceed the amount paid for the affected order, except where a different limit applies under an accepted written agreement or where liability cannot legally be limited.",
        },
        {
          type: "paragraph",
          content:
            "This limitation does not apply to fraud, wilful misconduct, or any statutory right or liability that cannot be excluded or restricted.",
        },
      ],
    },
    {
      id: "privacy",
      number: "12",
      title: "Privacy",
      blocks: [
        {
          type: "paragraph",
          content: [
            { type: "text", value: "Our " },
            {
              type: "link",
              label: "InCentral Privacy Notice",
              href: "/policies/privacy-notice",
            },
            {
              type: "text",
              value:
                " explains how personal information is handled when you browse InCentral, use the plan finder, create an account, request a quote, place an order, contact support or use checkout.",
            },
          ],
        },
        {
          type: "paragraph",
          content:
            "Operational telematics, driver, location, video and vehicle data generated after an Intangles service is activated are outside the scope of the InCentral Privacy Notice and are governed by the applicable InRoute or service documentation.",
        },
      ],
    },
    {
      id: "law",
      number: "13",
      title: "Governing law and disputes",
      blocks: [
        {
          type: "paragraph",
          content:
            "These terms are governed by the laws of India. Courts and statutory consumer forums will have jurisdiction as provided by applicable law. For business-to-business disputes, an accepted quote or order form may specify a separate dispute-resolution process or jurisdiction.",
        },
        {
          type: "paragraph",
          content:
            "Before starting formal proceedings, we encourage you to contact us so we can try to resolve the issue through support or grievance redressal.",
        },
      ],
    },
    {
      id: "contact",
      number: "14",
      title: "Customer care and grievance redressal",
      blocks: [
        {
          type: "paragraph",
          content:
            "For order, installation, billing or account support, contact our customer support team. For a formal consumer grievance, you may contact the Grievance Officer using the details below. Consumer grievances will be acknowledged within 48 hours and handled within one month, subject to the information required to investigate the complaint.",
        },
        {
          type: "contact",
          groups: [
            {
              title: "Customer support",
              content: supportContact,
            },
            {
              title: "Grievance Officer",
              content: grievanceContact,
            },
          ],
        },
        {
          type: "contact",
          groups: [
            {
              title: "Company",
              content: [
                { type: "text", value: "Intangles Lab Private Limited" },
                { type: "break" },
                { type: "text", value: "GSTIN 27AADCI7688G1Z3" },
              ],
            },
            {
              title: "Contact address",
              address: [...companyAddress],
            },
          ],
        },
      ],
    },
  ],
};
