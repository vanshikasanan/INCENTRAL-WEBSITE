import type { CartLine } from "./types";

export const CONFIGURATOR_STORAGE_KEY = "incentralConfiguratorV231";
export const MODAL_CONFIGURATOR_STORAGE_KEY = "incentralModalConfiguratorV231";
export const CART_STORAGE_KEY = "incentralConfiguredCartV141";
export const QUOTE_STORAGE_KEY = "incentralQuoteContextV141";

export function getConfiguredCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(sessionStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function setConfiguredCart(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
    document.dispatchEvent(new CustomEvent("incentral:configured-cart-changed"));
  } catch {
    /* ignore quota errors */
  }
}

export function addToConfiguredCart(line: CartLine) {
  const lines = getConfiguredCart();
  lines.push(line);
  setConfiguredCart(lines);
}

export function saveQuoteContext(line: CartLine & { configurationVersion?: number }) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(
      QUOTE_STORAGE_KEY,
      JSON.stringify({ ...line, purchase: "quote", configurationVersion: 173 })
    );
  } catch {
    /* ignore */
  }
}
