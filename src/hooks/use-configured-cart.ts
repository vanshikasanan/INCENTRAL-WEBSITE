"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

import {
  addToConfiguredCart,
  clearConfiguredCart,
  countCartItems,
  getCartCoupon,
  getConfiguredCart,
  setCartCoupon,
  setConfiguredCart,
} from "@/lib/plan-finder/cart";
import type { CartLine } from "@/lib/plan-finder/types";

const EMPTY_CART: CartLine[] = [];

let cachedSnapshot: CartLine[] = EMPTY_CART;
let cachedSnapshotKey = "[]";

function cartSnapshotKey(lines: CartLine[]) {
  if (lines.length === 0) return "[]";
  return JSON.stringify(lines);
}

function readCartSnapshot(): CartLine[] {
  const lines = getConfiguredCart();
  const key = cartSnapshotKey(lines);
  if (key === cachedSnapshotKey) {
    return cachedSnapshot;
  }
  cachedSnapshotKey = key;
  cachedSnapshot = lines.length === 0 ? EMPTY_CART : lines;
  return cachedSnapshot;
}

function subscribe(onStoreChange: () => void) {
  const handler = () => onStoreChange();
  document.addEventListener("incentral:configured-cart-changed", handler);
  window.addEventListener("storage", handler);
  return () => {
    document.removeEventListener("incentral:configured-cart-changed", handler);
    window.removeEventListener("storage", handler);
  };
}

function getSnapshot() {
  return readCartSnapshot();
}

function getServerSnapshot() {
  return EMPTY_CART;
}

export function useConfiguredCart() {
  const lines = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [coupon, setCouponState] = useState({ code: "", discount: 0 });

  useEffect(() => {
    setCouponState(getCartCoupon());
  }, [lines]);

  const refreshCoupon = useCallback(() => {
    setCouponState(getCartCoupon());
  }, []);

  const updateLines = useCallback((next: CartLine[], keepCoupon = false) => {
    setConfiguredCart(next, { keepCoupon });
  }, []);

  const updateCoupon = useCallback(
    (value: { code: string; discount: number; message?: string } | null) => {
      setCartCoupon(value);
      refreshCoupon();
    },
    [refreshCoupon]
  );

  return {
    lines,
    coupon,
    deviceCount: countCartItems(lines),
    lineCount: lines.length,
    updateLines,
    addLine: addToConfiguredCart,
    clearCart: clearConfiguredCart,
    updateCoupon,
    refreshCoupon,
  };
}
