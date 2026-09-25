import type { CartLine } from "@/lib/plan-finder/types";

import { calculateCartTotals, type CartCoupon } from "./totals";
import { normalizeConfiguredLine } from "./installation";

export async function applyCouponCode(
  code: string,
  lines: CartLine[],
  currentCoupon: CartCoupon
): Promise<{ valid: boolean; discount: number; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 220));
  const normalized = String(code || "").trim().toUpperCase();
  if (!normalized) {
    return { valid: false, discount: 0, message: "Enter a coupon code first." };
  }

  const configured = lines.map(normalizeConfiguredLine);
  const totals = calculateCartTotals(configured, currentCoupon);

  if (normalized === "FLEET10") {
    const productSubtotal = Math.max(0, totals.productBase);
    const discount = Math.round(productSubtotal * 0.1);
    return { valid: true, discount, message: "Coupon applied." };
  }

  return { valid: false, discount: 0, message: "This coupon code is not valid." };
}
