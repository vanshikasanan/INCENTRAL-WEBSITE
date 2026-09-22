import type { PolicyDocument } from "./types";
import {
  companyAddress,
  grievanceContact,
  supportContact,
} from "./shared";

export const privacyNoticePolicy: PolicyDocument = {
  path: "/policies/privacy-notice",
  metadata: {
    title: "InCentral Privacy Notice",
    description:
      "How InCentral handles personal information during plan selection, account access, quotes, orders, checkout, payment status and support.",
  },
  eyebrow: "Privacy",
  title: "Privacy Notice",
  lead: "This notice explains what personal information InCentral uses during plan selection, account access, quotes, orders, checkout and support, and what sits outside this portal.",
  meta: {
    kicker: "Document details",
    ariaLabel: "InCentral Privacy Notice overview",
    rows: [
      { label: "Last updated", value: "2 September 2026" },
      { label: "Scope", value: "InCentral only" },
      { label: "Privacy contact", value: "dpo@intangles.com" },
    ],
  },
  tocAriaLabel: "InCentral Privacy Notice table of contents",
  introNote:
    "This is an InCentral-specific notice. It intentionally does not repeat the broader Intangles privacy notice for InRoute, the InRoute app or telematics data generated after service activation.",
  sections: [
    {
      id: "scope",
      number: "01",
      title: "Scope of this notice",
      blocks: [
        {
          type: "paragraph",
          content:
            "This Privacy Notice applies only to InCentral, the Intangles portal used to compare plans, check vehicle compatibility, create or access an InCentral account, build a cart, request a quote, review an order, continue to payment and contact support.",
        },
        {
          type: "callout",
          title: "What this notice does not cover",
          content:
            "This notice does not govern operational telematics, driver, vehicle-location, vehicle fault-code or video data generated after an Intangles service is activated in InRoute or another Intangles service. Those activities are covered by the applicable InRoute, telematics or customer-service privacy documentation.",
        },
        {
          type: "paragraph",
          content:
            "Intangles Lab Private Limited is responsible for personal information collected directly through InCentral. Where you provide information on behalf of your employer or another organisation, you confirm that you are authorised to provide it.",
        },
      ],
    },
    {
      id: "collection",
      number: "02",
      title: "Personal information we collect",
      blocks: [
        {
          type: "paragraph",
          content:
            "The information we collect depends on what you do in the portal.",
        },
        {
          type: "definitions",
          items: [
            {
              term: "Contact and account information",
              description:
                "Name, work email, phone number, organisation information, sign-in details and account identifiers.",
            },
            {
              term: "Order and billing information",
              description:
                "Selected plan and hardware, quantities, order or quote references, billing and delivery details, GST information, invoice status and refund status.",
            },
            {
              term: "Fleet setup information",
              description:
                "Vehicle type, manufacturer, emission standard or powertrain, selected AIS-140 route, quantities and other answers used to find plans that fit.",
            },
            {
              term: "Support and quote information",
              description:
                "Messages, issue details, installation preferences and information you send when asking for help or a quote.",
            },
            {
              term: "Payment information",
              description:
                "Payment status, transaction reference and limited payment metadata received from the payment provider. Full card, UPI or bank credentials are handled by the payment provider where payment is processed externally.",
            },
            {
              term: "Technical information",
              description:
                "Browser, device, IP or security information, session data and technical logs that may be needed to operate, protect and troubleshoot the portal.",
            },
          ],
        },
      ],
    },
    {
      id: "uses",
      number: "03",
      title: "How we use personal information",
      blocks: [
        {
          type: "paragraph",
          content:
            "We use personal information only for InCentral-related purposes, including to:",
        },
        {
          type: "list",
          items: [
            "show plans based on the fleet information you enter;",
            "save and display cart, order and account information;",
            "prepare quotes, validate orders and calculate final pricing, GST and fulfilment requirements;",
            "process payment status, invoicing, shipping, installation and activation;",
            "support AIS-140 registration or certification steps where relevant to an order;",
            "respond to support, cancellation, refund and grievance requests;",
            "prevent fraud, protect accounts and secure the portal;",
            "maintain records required for tax, accounting, legal and regulatory purposes;",
            "send transactional messages about quotes, orders, delivery, installation, activation and support; and",
            "send marketing messages only where permitted and provide a way to opt out.",
          ],
        },
      ],
    },
    {
      id: "storage",
      number: "04",
      title: "Browser storage, cookies and session data",
      blocks: [
        {
          type: "paragraph",
          content:
            "InCentral may use first-party cookies, session storage or similar browser storage to support functions such as the cart, account state, plan finder, checkout flow and security. Some of this information can remain in your browser for the session or for the period needed to provide the feature.",
        },
        {
          type: "paragraph",
          content:
            "If we introduce non-essential analytics, advertising or marketing technologies, we will update this notice and provide any consent or preference controls required by applicable law. Blocking essential browser storage may prevent parts of the portal from working correctly.",
        },
      ],
    },
    {
      id: "payments",
      number: "05",
      title: "Payments and checkout",
      blocks: [
        {
          type: "paragraph",
          content:
            "Payment may be completed through a third-party payment service. When you enter payment credentials into that provider's interface, the provider handles those credentials under its own privacy and security terms. Intangles may receive transaction status, payment reference, amount, method category and information needed for reconciliation or refunds, but does not need full payment credentials to operate InCentral.",
        },
        {
          type: "paragraph",
          content:
            "We may also share the minimum order and contact information needed with payment, invoicing or accounting providers to complete the transaction and issue records.",
        },
      ],
    },
    {
      id: "sharing",
      number: "06",
      title: "Who we share information with",
      blocks: [
        {
          type: "paragraph",
          content:
            "We do not sell personal information. We may share information only where reasonably needed for the purposes described in this notice, including with:",
        },
        {
          type: "list",
          items: [
            "payment processors and banking partners;",
            "CRM, order-management, invoicing, email and customer-support providers;",
            "hosting, security, infrastructure and software service providers;",
            "logistics, delivery and installation partners handling your order;",
            "professional advisers, auditors and insurers where necessary;",
            "government, tax, regulatory, law-enforcement or judicial authorities where disclosure is required or permitted by law; and",
            "a successor organisation in a merger, restructuring or transfer of the relevant business, subject to applicable law.",
          ],
        },
        {
          type: "paragraph",
          content:
            "Service providers are expected to use the information only for the service they provide to Intangles and to protect it appropriately.",
        },
      ],
    },
    {
      id: "retention",
      number: "07",
      title: "How long we keep information",
      blocks: [
        {
          type: "paragraph",
          content:
            "We keep personal information for as long as it is reasonably needed for the purpose for which it was collected, the duration of the relevant customer relationship, and any tax, accounting, warranty, fraud-prevention, dispute or legal-retention requirement.",
        },
        {
          type: "paragraph",
          content:
            "Cart and session information is generally shorter-lived than order, invoice, refund and tax records. If you ask us to delete information, we will assess the request and delete or de-identify information that is no longer required, subject to legal and contractual retention obligations.",
        },
      ],
    },
    {
      id: "security",
      number: "08",
      title: "Security",
      blocks: [
        {
          type: "paragraph",
          content:
            "We use administrative, technical and organisational safeguards designed to protect personal information against unauthorised access, loss, misuse, alteration or disclosure. Access is limited to people and service providers who need the information for an authorised purpose.",
        },
        {
          type: "paragraph",
          content:
            "No online system can be guaranteed to be completely secure. You should protect your account credentials, use trusted devices and tell us promptly if you suspect unauthorised access to your InCentral account.",
        },
      ],
    },
    {
      id: "rights",
      number: "09",
      title: "Your choices and privacy requests",
      blocks: [
        {
          type: "paragraph",
          content:
            "Depending on applicable law and the nature of the information, you may ask us to access, correct, update or delete personal information, withdraw a consent you previously gave, or raise a grievance about how your information is handled. We may need to verify your identity or authority before acting on a request.",
        },
        {
          type: "paragraph",
          content:
            "Withdrawing consent does not affect processing that already took place and may prevent us from providing a feature that requires the information. We may retain information where required for an order, invoice, tax record, legal claim, security investigation or another lawful requirement.",
        },
        {
          type: "paragraph",
          content:
            "As India's data-protection framework continues its phased commencement, we will update our processes and this notice when additional statutory rights or procedures become applicable.",
        },
      ],
    },
    {
      id: "marketing",
      number: "10",
      title: "Marketing communications",
      blocks: [
        {
          type: "paragraph",
          content:
            "Order confirmations, payment messages, installation updates, support replies and other service communications are not marketing messages and may be necessary to complete your transaction.",
        },
        {
          type: "paragraph",
          content:
            "Where we send promotional email or other marketing, you can use the unsubscribe option in the message or contact us to opt out. Opting out of marketing does not stop necessary order or service communications.",
        },
      ],
    },
    {
      id: "children",
      number: "11",
      title: "Age limits and third-party links",
      blocks: [
        {
          type: "paragraph",
          content:
            "InCentral is a business purchasing portal and is not intended for individuals under 18 years of age. We do not knowingly invite children to create InCentral accounts or place orders.",
        },
        {
          type: "paragraph",
          content:
            "The portal may link to third-party websites or services. Their privacy practices are governed by their own notices. We recommend reviewing those notices before providing information directly to a third party.",
        },
      ],
    },
    {
      id: "changes",
      number: "12",
      title: "Changes to this notice",
      blocks: [
        {
          type: "paragraph",
          content:
            "We may update this notice when InCentral features, service providers or legal requirements change. The latest version will show the updated date at the top of this page. If a change materially affects how we use information already collected, we will provide additional notice where required.",
        },
      ],
    },
    {
      id: "contact",
      number: "13",
      title: "Privacy contact and grievance redressal",
      blocks: [
        {
          type: "paragraph",
          content:
            "For privacy questions, requests or grievances relating to InCentral, contact the privacy and grievance contact below. For order or installation support, use the InCentral support contact.",
        },
        {
          type: "contact",
          groups: [
            {
              title: "Privacy / Grievance contact",
              content: grievanceContact,
            },
            {
              title: "InCentral support",
              content: supportContact,
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
