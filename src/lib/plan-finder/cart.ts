import { CART_COUPON_KEY, SUPPORTED_POWERTRAINS } from "@/lib/commerce/constants";
import { getCartProduct } from "@/lib/commerce/catalog";
import { normalizeConfiguredLine } from "@/lib/commerce/installation";
import type { CartCoupon } from "@/lib/commerce/totals";

import type { CartLine } from "./types";

export const CONFIGURATOR_STORAGE_KEY = "incentralConfiguratorV338";
export const MODAL_CONFIGURATOR_STORAGE_KEY = "incentralModalConfiguratorV338";
export const MAX_DIRECT_QTY = 25;
export const CART_STORAGE_KEY = "incentralConfiguredCartV141";
export const QUOTE_STORAGE_KEY = "incentralQuoteContextV141";

function isValidLine(line: unknown): line is CartLine {
  if (!line || typeof line !== "object") return false;
  const l = line as CartLine;
  if (!l.sku || !l.family || !l.planName) return false;
  if (!Number.isFinite(Number(l.quantity)) || Number(l.quantity) < 1) return false;
  if (!l.segment || !l.segmentLabel || !l.make || !l.manufacturerLabel || !l.emission) {
    return false;
  }
  if (!SUPPORTED_POWERTRAINS.has(String(l.emission))) return false;
  if (Boolean(l.aisRequired) && (!l.stateId || !l.stateLabel)) return false;
  if (!getCartProduct(l.sku)) return false;
  return true;
}

export function cleanCartLines(lines: CartLine[]) {
  return (Array.isArray(lines) ? lines : [])
    .filter(isValidLine)
    .map((line) => normalizeConfiguredLine(line));
}

export function getConfiguredCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(sessionStorage.getItem(CART_STORAGE_KEY) || "[]");
    return cleanCartLines(Array.isArray(parsed) ? parsed : []);
  } catch {
    return [];
  }
}

function dispatchCartChanged() {
  if (typeof window === "undefined") return;
  document.dispatchEvent(new CustomEvent("incentral:configured-cart-changed"));
}

export function setConfiguredCart(lines: CartLine[], options?: { keepCoupon?: boolean }) {
  if (typeof window === "undefined") return;
  const cleaned = cleanCartLines(lines);
  try {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cleaned));
    if (!options?.keepCoupon) {
      sessionStorage.removeItem(CART_COUPON_KEY);
    }
    dispatchCartChanged();
  } catch {
    /* ignore quota errors */
  }
}

export function addToConfiguredCart(line: CartLine) {
  const lines = getConfiguredCart();
  lines.push(normalizeConfiguredLine(line));
  setConfiguredCart(lines);
}

export function clearConfiguredCart() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.removeItem(CART_STORAGE_KEY);
    sessionStorage.removeItem(CART_COUPON_KEY);
    dispatchCartChanged();
  } catch {
    /* ignore */
  }
}

export function getCartCoupon(): CartCoupon {
  if (typeof window === "undefined") return { code: "", discount: 0 };
  try {
    const parsed = JSON.parse(sessionStorage.getItem(CART_COUPON_KEY) || "null");
    if (parsed && typeof parsed === "object") {
      return {
        code: String(parsed.code || ""),
        discount: Number(parsed.discount || 0),
        message: parsed.message ? String(parsed.message) : undefined,
      };
    }
  } catch {
    /* ignore */
  }
  return { code: "", discount: 0 };
}

export function setCartCoupon(value: CartCoupon | null) {
  if (typeof window === "undefined") return;
  try {
    if (value?.code) {
      sessionStorage.setItem(CART_COUPON_KEY, JSON.stringify(value));
    } else {
      sessionStorage.removeItem(CART_COUPON_KEY);
    }
    dispatchCartChanged();
  } catch {
    /* ignore */
  }
}

export function countCartItems(lines = getConfiguredCart()) {
  return lines.reduce((sum, line) => sum + Number(line.quantity || 0), 0);
}

export function saveQuoteContext(line: CartLine & { configurationVersion?: number }) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(
      QUOTE_STORAGE_KEY,
      JSON.stringify({ ...normalizeConfiguredLine(line), purchase: "quote", configurationVersion: 354 })
    );
  } catch {
    /* ignore */
  }
}
