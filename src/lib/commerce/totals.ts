import { AIS_COVERAGE_CONFIRMED } from "@/lib/plan-finder/compatibility-data";
import type { CartLine } from "@/lib/plan-finder/types";

import { getCartProduct } from "./catalog";
import {
  GST_RATE,
  MAX_DIRECT_CART_QTY,
  SHIPPING_PER_DEVICE,
} from "./constants";
import { normalizeConfiguredLine } from "./installation";

export type CartCoupon = {
  code: string;
  discount: number;
  message?: string;
};

export type CartQuoteReason = {
  required: boolean;
  overLimit: boolean;
  issues: { stateId: string; stateLabel: string }[];
  labels: string[];
  label: string;
};

export function aisLineNeedsQuote(line: CartLine) {
  return Boolean(
    line &&
      (line.aisRequired || String(line.line || "").includes("AIS-140")) &&
      (!line.stateId || !AIS_COVERAGE_CONFIRMED.has(String(line.stateId)))
  );
}

function aisQuoteIssues(configured: CartLine[]) {
  const seen = new Set<string>();
  return configured
    .filter(aisLineNeedsQuote)
    .map((line) => {
      const stateId = String(line.stateId || "");
      const stateLabel = String(line.stateLabel || "Selected state");
      const key = stateId || stateLabel;
      if (seen.has(key)) return null;
      seen.add(key);
      return { stateId, stateLabel };
    })
    .filter(Boolean) as { stateId: string; stateLabel: string }[];
}

export function quoteReasonForCart(quantity: number, configured: CartLine[]): CartQuoteReason {
  const issues = aisQuoteIssues(configured);
  const overLimit = Number(quantity) > MAX_DIRECT_CART_QTY;
  const labels = issues.map((x) => x.stateLabel);
  let label = "";
  if (overLimit && labels.length) {
    label = `${quantity} devices and AIS-140 availability in ${labels.join(", ")} require a quote.`;
  } else if (overLimit) {
    label = `${quantity} devices. Orders above 25 continue as a quote.`;
  } else if (labels.length) {
    label = `AIS-140 is not currently available in ${labels.join(", ")}.`;
  }
  return { required: overLimit || issues.length > 0, overLimit, issues, labels, label };
}

export type CartTotals = {
  productBase: number;
  installationBase: number;
  shippingBase: number;
  gst: number;
  discount: number;
  total: number;
  totalCount: number;
  coupon: CartCoupon;
  quoteRequired: boolean;
  overLimit: boolean;
  quoteReasonLabel: string;
};

export function calculateCartTotals(
  rawLines: CartLine[],
  coupon: CartCoupon
): CartTotals {
  const configured = rawLines
    .map(normalizeConfiguredLine)
    .filter((line) => getCartProduct(line.sku) && Number(line.quantity) > 0);

  let productBase = 0;
  let installationBase = 0;
  let totalCount = 0;

  configured.forEach((line) => {
    const product = getCartProduct(line.sku)!;
    const qty = Number(line.quantity);
    totalCount += qty;
    productBase += product.price * qty;
    installationBase += Number(line.installationFeeExGst || 0) * qty;
  });

  const quote = quoteReasonForCart(totalCount, configured);
  const shippingBase = totalCount * SHIPPING_PER_DEVICE;
  const taxableSubtotal = productBase + installationBase + shippingBase;
  const gst = taxableSubtotal * GST_RATE;
  const activeCoupon = quote.required ? { code: "", discount: 0 } : coupon;
  const discount = Math.min(
    Math.max(0, Number(activeCoupon.discount || 0)),
    taxableSubtotal + gst
  );
  const total = taxableSubtotal + gst - discount;

  return {
    productBase,
    installationBase,
    shippingBase,
    gst,
    discount,
    total,
    totalCount,
    coupon: activeCoupon,
    quoteRequired: quote.required,
    overLimit: quote.overLimit,
    quoteReasonLabel: quote.label,
  };
}

export function lineGrossExGst(line: CartLine) {
  const normalized = normalizeConfiguredLine(line);
  const product = getCartProduct(normalized.sku);
  if (!product) return 0;
  const qty = Number(normalized.quantity);
  return product.price * qty + Number(normalized.installationFeeExGst || 0) * qty;
}
