import type { PolicyDocument } from "./types";
import { grievanceContact } from "./shared";

export const returnsRefundsCancellationPolicy: PolicyDocument = {
  path: "/policies/returns-refunds-cancellation",
  metadata: {
    title: "Returns, Refunds & Cancellation",
    description:
      "InCentral cancellation, hardware return and refund rules, including the 15-day first-purchase window, defective orders and refund timing.",
  },
  eyebrow: "Returns & refunds",
  title: "Returns, Refunds & Cancellation",
  lead: "Clear rules for cancelling an InCentral order, returning eligible hardware and receiving an approved refund.",
  meta: {
    kicker: "Document details",
    ariaLabel: "Returns, Refunds & Cancellation overview",
    rows: [
      { label: "First-purchase window", value: "15 days" },
      { label: "Approved refund timing", value: "7-10 working days" },
      { label: "Refund contact", value: "refunds@intangles.com" },
    ],
  },
  tocAriaLabel: "Returns, Refunds & Cancellation table of contents",
  introNote:
    "The policy distinguishes convenience cancellation from problems with defective, incorrect, misdescribed or delayed goods and services, because those situations should not be treated the same way.",
  sections: [
    {
      id: "scope",
      number: "01",
      title: "What this policy covers",
      blocks: [
        {
          type: "paragraph",
          content:
            "This policy applies to hardware, plan charges and related fulfilment purchased through InCentral. It explains how to request an order cancellation, hardware return or refund and how we handle defective, incorrect or delayed orders.",
        },
        {
          type: "callout",
          title: "Your statutory rights remain available",
          content:
            "Nothing in this policy limits a remedy that must be provided under applicable law, including where goods or services are defective, deficient, not as described or delivered later than the stated schedule, subject to applicable exceptions.",
        },
      ],
    },
    {
      id: "before-fulfilment",
      number: "02",
      title: "Cancellation before dispatch, installation or activation",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you want to cancel an order before hardware has been dispatched, installation has been carried out or service has been activated, contact us as soon as possible. If fulfilment has not begun and no non-recoverable order-specific cost has been incurred, we will cancel the affected order and refund the amount paid.",
        },
        {
          type: "paragraph",
          content:
            "InCentral does not charge a cancellation fee merely because you cancel after confirming a purchase. If a separately requested service has already been completed, or a disclosed retrieval or restoration cost is reasonably required, that cost may affect the refundable amount only where permitted by law and confirmed as part of the cancellation assessment.",
        },
      ],
    },
    {
      id: "first-purchase",
      number: "03",
      title: "15-day first-purchase cancellation window",
      blocks: [
        {
          type: "paragraph",
          content:
            "For a first InCentral purchase that includes hardware and a service plan, you may request cancellation within 15 days after the device installation or new-account activation, whichever is later for the affected order.",
        },
        {
          type: "paragraph",
          content:
            "If the cancellation is accepted during this period, the eligible amount is refunded after any required hardware has been returned and inspected. Reasonable installation or device-retrieval costs may be deducted where applicable. Damage, missing hardware or unauthorised modification may also reduce the refundable amount based on the condition assessment.",
        },
        {
          type: "paragraph",
          content:
            "This first-purchase cancellation window does not apply in the same way to an existing customer adding devices to an active service unless the order or quote expressly says otherwise.",
        },
      ],
    },
    {
      id: "problems",
      number: "04",
      title: "Defective, incorrect, not-as-described or late fulfilment",
      blocks: [
        {
          type: "paragraph",
          content:
            "If hardware or services are defective, deficient, incorrect, not of the characteristics or features confirmed in the order, or are delivered later than the stated schedule, contact us promptly. Depending on the issue and applicable law, the remedy may include correction, repair, replacement, re-performance, return, cancellation or refund.",
        },
        {
          type: "paragraph",
          content:
            "Normal convenience-return restrictions do not remove remedies that apply to a defective, deficient, incorrect or materially misdescribed order. For a late delivery caused by circumstances outside reasonable control, the available remedy may depend on the circumstances and applicable law.",
        },
        {
          type: "paragraph",
          content:
            "If we sent the wrong product or confirm an inherent defect, Intangles will arrange or reimburse reasonable return or retrieval costs for the affected hardware.",
        },
      ],
    },
    {
      id: "active-term",
      number: "05",
      title: "Cancellation after the first-purchase window",
      blocks: [
        {
          type: "paragraph",
          content:
            "InCentral plans are sold for the service term stated on the product page, quote or order. After the first-purchase cancellation window has ended, stopping use of the service does not automatically create a pro-rated refund for the unused part of the committed term.",
        },
        {
          type: "paragraph",
          content:
            "A refund may still apply where required by law, where Intangles agrees to it in writing, where the order-specific terms provide for it, or where Intangles cannot provide the confirmed goods or services.",
        },
        {
          type: "paragraph",
          content:
            "If a recurring renewal applies to your order, cancelling it stops future renewal in accordance with the disclosed renewal terms. It does not by itself reverse charges for a service term that has already started.",
        },
      ],
    },
    {
      id: "returns",
      number: "06",
      title: "Return condition and return costs",
      blocks: [
        {
          type: "paragraph",
          content:
            "Where a hardware return is required, we will provide return or retrieval instructions. Unless the issue is caused by Intangles or the hardware is confirmed defective, you may be responsible for disclosed return or retrieval costs.",
        },
        {
          type: "paragraph",
          content:
            "Please return hardware with the device, supplied accessories and identifying labels intact where reasonably possible. We may inspect the device for damage, tampering or missing components before confirming the final refund. Normal inspection or installation-related handling will not be treated as damage by itself.",
        },
        {
          type: "paragraph",
          content:
            "Do not send hardware back without return instructions, because the return may need to be linked to the correct order, device serial number and installation record.",
        },
      ],
    },
    {
      id: "amount",
      number: "07",
      title: "How we calculate an eligible refund",
      blocks: [
        {
          type: "paragraph",
          content:
            "The eligible refund depends on the reason for cancellation, fulfilment already completed, hardware condition and the terms of the confirmed order. Where applicable, the refund may include the affected hardware and service amount and may deduct only properly disclosed and legally permitted amounts such as completed installation, retrieval or assessed damage.",
        },
        {
          type: "paragraph",
          content:
            "If Intangles cancels an accepted order because we cannot supply the confirmed product or service, we will refund the amount collected for the undelivered or unprovided portion.",
        },
        {
          type: "paragraph",
          content:
            "For a multi-device order, we may process a partial refund for only the affected devices or service lines if the rest of the order remains active.",
        },
      ],
    },
    {
      id: "timing",
      number: "08",
      title: "Refund method and timing",
      blocks: [
        {
          type: "paragraph",
          content:
            "Once refund eligibility and the amount are confirmed, we will initiate the refund to the original payment method where reasonably possible. If the original method cannot receive the refund, we may ask for verified bank details for an alternate transfer.",
        },
        {
          type: "paragraph",
          content:
            "Eligible refunds are normally initiated within 7 to 10 working days after approval and, where applicable, receipt or retrieval of the returned hardware. Banks and payment providers may take additional time to credit the amount after we initiate it.",
        },
      ],
    },
    {
      id: "request",
      number: "09",
      title: "How to request a cancellation, return or refund",
      blocks: [
        {
          type: "paragraph",
          content: [
            { type: "text", value: "Email " },
            { type: "email", address: "refunds@intangles.com" },
            {
              type: "text",
              value: " with the information needed to locate and assess the order.",
            },
          ],
        },
        {
          type: "list",
          items: [
            "InCentral order or invoice number;",
            "company and contact name;",
            "plan and number of affected devices;",
            "reason for cancellation, return or refund;",
            "device serial number where relevant; and",
            "photos or other supporting information if the hardware is damaged, incorrect or defective.",
          ],
        },
        {
          type: "paragraph",
          content: [
            {
              type: "text",
              value:
                "We will confirm the next step, including any return or retrieval instructions. For urgent support while an order is active, call 1800-268-9111 or email ",
            },
            { type: "email", address: "commandcenter@intangles.com" },
            { type: "text", value: "." },
          ],
        },
      ],
    },
    {
      id: "grievance",
      number: "10",
      title: "Escalation and grievance redressal",
      blocks: [
        {
          type: "paragraph",
          content:
            "If you are not satisfied with the outcome of a cancellation or refund request, you may escalate the matter to the Grievance Officer. Consumer grievances will be acknowledged within 48 hours and handled within one month, subject to receiving the information needed to investigate the issue.",
        },
        {
          type: "contact",
          groups: [
            {
              title: "Refund requests",
              content: [{ type: "email", address: "refunds@intangles.com" }],
            },
            {
              title: "Grievance Officer",
              content: grievanceContact,
            },
          ],
        },
      ],
    },
  ],
};
