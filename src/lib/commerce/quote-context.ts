import type { CartLine } from "@/lib/plan-finder/types";
import { QUOTE_STORAGE_KEY } from "@/lib/plan-finder/cart";

import { normalizeConfiguredLine } from "./installation";
import { quoteReasonForCart } from "./totals";

export function buildCartQuoteContext(lines: CartLine[], source = "cart") {
  const configuredItems = lines.map(normalizeConfiguredLine);
  const quantity = configuredItems.reduce((a, x) => a + Number(x.quantity || 0), 0);
  const reason = quoteReasonForCart(quantity, configuredItems);

  return {
    source,
    purchase: "quote" as const,
    quantity,
    totalCartQuantity: quantity,
    quoteReason:
      reason.overLimit && reason.issues.length
        ? "cart_limit_and_ais_empanelment"
        : reason.overLimit
          ? "quantity_over_25_total_cart"
          : "ais_state_not_empanelled",
    quoteReasonLabel: reason.label,
    unsupportedStateLabels: reason.labels,
    stateLabel: reason.labels.length === 1 ? reason.labels[0] : "",
    aisRequired: reason.issues.length > 0,
    cartItems: configuredItems,
    configurationVersion: 354,
  };
}

export function saveCartQuoteContext(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(
      QUOTE_STORAGE_KEY,
      JSON.stringify(buildCartQuoteContext(lines, "cart"))
    );
  } catch {
    /* ignore */
  }
}
