import { privacyNoticePolicy } from "./privacy-notice";
import { returnsRefundsCancellationPolicy } from "./returns-refunds-cancellation";
import { termsConditionsPolicy } from "./terms-conditions";

export const policyDocuments = {
  "privacy-notice": privacyNoticePolicy,
  "returns-refunds-cancellation": returnsRefundsCancellationPolicy,
  "terms-conditions": termsConditionsPolicy,
} as const;

export type PolicySlug = keyof typeof policyDocuments;

export const policySlugs = Object.keys(policyDocuments) as PolicySlug[];

export function isPolicySlug(slug: string): slug is PolicySlug {
  return slug in policyDocuments;
}

export function getPolicyBySlug(slug: string) {
  if (!isPolicySlug(slug)) return undefined;
  return policyDocuments[slug];
}

export function policyHref(slug: PolicySlug) {
  return `/policies/${slug}`;
}

export { privacyNoticePolicy } from "./privacy-notice";
export { returnsRefundsCancellationPolicy } from "./returns-refunds-cancellation";
export { termsConditionsPolicy } from "./terms-conditions";
export type {
  PolicyBlock,
  PolicyDocument,
  PolicyInline,
  PolicyMetaRow,
  PolicySection,
} from "./types";
