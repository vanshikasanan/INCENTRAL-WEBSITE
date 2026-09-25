"use client";

import { planAccentTokens } from "@/config/plans";
import { getCartProduct } from "@/lib/commerce/catalog";
import { installationPolicy } from "@/lib/commerce/installation";
import { aisLineNeedsQuote, lineGrossExGst } from "@/lib/commerce/totals";
import { formatMoney } from "@/lib/plan-finder/format";
import type { CartLine } from "@/lib/plan-finder/types";
import type { PlanFamily } from "@/lib/plan-finder/types";
import { cn } from "@/lib/utils";

type CartLineItemProps = {
  line: CartLine;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
  onInstallMethod: (method: "self" | "intangles") => void;
};

export function CartLineItem({
  line,
  onIncrease,
  onDecrease,
  onRemove,
  onInstallMethod,
}: CartLineItemProps) {
  const product = getCartProduct(line.sku);
  if (!product) return null;

  const family = (line.family || "incert") as PlanFamily;
  const tokens = planAccentTokens[family === "invisionplus" ? "invisionplus" : family];
  const compliance = line.aisRequired ? "AIS-140 Certified" : "Standard";
  const policy = installationPolicy(line.sku, line);
  const qty = Number(line.quantity);
  const needsQuoteNote = line.aisRequired && line.stateLabel && aisLineNeedsQuote(line);

  return (
    <article
      className={cn(
        "grid gap-5 rounded-[16px] border border-[#d8e4e9] bg-white p-5 shadow-[0_6px_20px_rgba(20,48,64,0.04)] max-[900px]:grid-cols-1 min-[901px]:grid-cols-[minmax(0,1fr)_auto_auto]"
      )}
      style={{ borderLeftWidth: 4, borderLeftColor: tokens.accent }}
    >
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-lg font-semibold tracking-[-0.02em] text-[#173844]">
            {product.name}
          </span>
          <span className="rounded-full border border-[#d0dde3] bg-[#f6f9fb] px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] text-[#627680] uppercase">
            {compliance}
          </span>
        </div>

        <div className="mt-3 grid gap-2 min-[520px]:grid-cols-3">
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.05em] text-[#829199] uppercase">
              Vehicle type
            </span>
            <strong className="mt-0.5 block text-[13px] font-medium text-[#29444f]">
              {line.segmentLabel}
            </strong>
          </div>
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.05em] text-[#829199] uppercase">
              Manufacturer
            </span>
            <strong className="mt-0.5 block text-[13px] font-medium text-[#29444f]">
              {line.manufacturerLabel}
            </strong>
          </div>
          <div>
            <span className="block text-[10px] font-semibold tracking-[0.05em] text-[#829199] uppercase">
              Emission standard
            </span>
            <strong className="mt-0.5 block text-[13px] font-medium text-[#29444f]">
              {line.emission}
            </strong>
          </div>
        </div>

        {line.aisRequired && line.stateLabel && !needsQuoteNote ? (
          <p className="mt-2 mb-0 text-[12px] text-[#617781]">
            AIS-140 state: {line.stateLabel}
          </p>
        ) : null}

        {needsQuoteNote ? (
          <p className="mt-2 mb-0 rounded-[10px] border border-[#f0dfc4] bg-[#fffaf0] px-3 py-2 text-[12px] text-[#77551d]">
            <strong className="font-semibold">{line.stateLabel}</strong>
            <span className="ml-1.5">AIS-140 availability pending</span>
          </p>
        ) : null}

        <div className="mt-4">
          {policy.optional ? (
            <div>
              <span className="mb-2 block text-[11px] font-semibold text-[#627680]">
                Installation
              </span>
              <div
                role="group"
                aria-label={`Installation for ${product.name}`}
                className="inline-flex flex-wrap gap-2 rounded-[12px] border border-[#d0dde3] bg-[#f8fafb] p-1"
              >
                <button
                  type="button"
                  className={cn(
                    "min-w-[140px] rounded-[10px] px-3 py-2 text-left transition-colors",
                    policy.method === "self"
                      ? "bg-white shadow-[0_0_0_2px_rgba(23,111,192,0.12)]"
                      : "hover:bg-white/70"
                  )}
                  onClick={() => onInstallMethod("self")}
                >
                  <span className="block text-[12px] font-medium text-[#173844]">Self-install</span>
                  <small className="text-[11px] text-[#6b7d86]">₹0</small>
                </button>
                <button
                  type="button"
                  className={cn(
                    "min-w-[180px] rounded-[10px] px-3 py-2 text-left transition-colors",
                    policy.method === "intangles"
                      ? "bg-white shadow-[0_0_0_2px_rgba(23,111,192,0.12)]"
                      : "hover:bg-white/70"
                  )}
                  onClick={() => onInstallMethod("intangles")}
                >
                  <span className="block text-[12px] font-medium text-[#173844]">
                    Installed by Intangles
                  </span>
                  <small className="text-[11px] text-[#6b7d86]">₹500 / device</small>
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-[11px] border border-[#dbe5eb] bg-[#f8fafb] px-3 py-2.5">
              <span className="block text-[10px] font-semibold text-[#829199] uppercase">
                Installation
              </span>
              <strong className="mt-0.5 block text-[13px] text-[#173844]">{policy.label}</strong>
              <small className="text-[11px] text-[#6b7d86]">₹500 per device</small>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 min-[901px]:items-end">
        <div>
          <span className="block text-[10px] font-semibold tracking-[0.05em] text-[#829199] uppercase">
            Devices
          </span>
          <div className="mt-1.5 flex items-center gap-2">
            <div className="grid h-10 grid-cols-[32px_1fr_32px] overflow-hidden rounded-[10px] border border-[#c7d8df] bg-white">
              <button
                type="button"
                aria-label={`Decrease ${product.name} quantity`}
                className="cursor-pointer border-0 bg-transparent text-base text-[#45606b]"
                onClick={onDecrease}
              >
                −
              </button>
              <strong className="grid place-items-center text-[14px] font-semibold text-[#173844]">
                {qty}
              </strong>
              <button
                type="button"
                aria-label={`Increase ${product.name} quantity`}
                className="cursor-pointer border-0 bg-transparent text-base text-[#45606b]"
                onClick={onIncrease}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="cursor-pointer border-0 bg-transparent text-[12px] font-semibold text-[#1767ad] underline-offset-2 hover:underline"
              onClick={onRemove}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="min-w-[120px] text-right min-[901px]:pt-1">
        <span className="block text-[10px] font-semibold tracking-[0.05em] text-[#829199] uppercase">
          Line total
        </span>
        <strong className="mt-1 block text-[20px] font-semibold tracking-[-0.02em] text-[#123f70]">
          {formatMoney(lineGrossExGst(line))}
        </strong>
        <small className="mt-1 block text-[10.5px] leading-snug text-[#70808a]">
          Product price: {formatMoney(product.price)} / vehicle · 2 years
          {line.installationFeeExGst
            ? ` · Installation ${formatMoney(line.installationFeeExGst)} / device`
            : ""}
        </small>
      </div>
    </article>
  );
}
