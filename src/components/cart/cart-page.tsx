"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/common/container";
import { applyCouponCode } from "@/lib/commerce/coupon";
import { normalizeConfiguredLine } from "@/lib/commerce/installation";
import { saveCartQuoteContext } from "@/lib/commerce/quote-context";
import { calculateCartTotals } from "@/lib/commerce/totals";
import { formatMoney } from "@/lib/plan-finder/format";
import { useAuth } from "@/hooks/use-auth";
import { useConfiguredCart } from "@/hooks/use-configured-cart";
import { cn } from "@/lib/utils";

import { CartEmptyState } from "./cart-empty-state";
import { CartLineItem } from "./cart-line-item";

export function CartPageContent() {
  const { isAuthenticated } = useAuth();
  const { lines, coupon, deviceCount, lineCount, updateLines, clearCart, updateCoupon } =
    useConfiguredCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponStatus, setCouponStatus] = useState<{
    text: string;
    tone: "neutral" | "good" | "error";
  }>({ text: "", tone: "neutral" });
  const [applyingCoupon, setApplyingCoupon] = useState(false);

  const totals = useMemo(() => calculateCartTotals(lines, coupon), [lines, coupon]);
  const hasItems = lines.length > 0;
  const hasCouponApplied = !totals.quoteRequired && Boolean(totals.coupon.code) && totals.discount > 0;

  const mutateLine = (id: string, updater: (line: (typeof lines)[number]) => (typeof lines)[number] | null) => {
    const next = lines
      .map((line) => (line.id === id ? updater(line) : line))
      .filter((line): line is (typeof lines)[number] => line !== null);
    updateLines(next, hasCouponApplied);
  };

  const handleApplyCoupon = async () => {
    if (totals.quoteRequired) return;
    const code = couponInput.trim();
    if (!code) {
      setCouponStatus({ text: "Enter a coupon code first.", tone: "error" });
      return;
    }
    setApplyingCoupon(true);
    try {
      const result = await applyCouponCode(code, lines, coupon);
      if (result.valid) {
        updateCoupon({ code: code.toUpperCase(), discount: result.discount, message: result.message });
        setCouponStatus({ text: result.message || "Coupon applied.", tone: "good" });
      } else {
        updateCoupon(null);
        setCouponStatus({ text: result.message, tone: "error" });
      }
    } catch (err) {
      updateCoupon(null);
      setCouponStatus({
        text: err instanceof Error ? err.message : "Coupon could not be applied.",
        tone: "error",
      });
    } finally {
      setApplyingCoupon(false);
    }
  };

  const checkoutHref = useMemo(() => {
    if (totals.quoteRequired) return "/get-a-quote?source=cart";
    if (isAuthenticated) return "/checkout";
    return `/sign-in?mode=login&checkout=1&next=${encodeURIComponent("/checkout")}`;
  }, [isAuthenticated, totals.quoteRequired]);

  const handleContinue = () => {
    if (totals.quoteRequired) {
      saveCartQuoteContext(lines);
    }
  };

  return (
    <main id="main" className="bg-[linear-gradient(180deg,#f8fafb_0%,#fff_32%)] py-10 pb-14 text-[#14232b]">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#e3e9ec] pb-6">
          <div>
            <p className="m-0 text-[11px] font-bold tracking-[0.12em] text-[#1767ad] uppercase">Cart</p>
            <h1 className="mt-2 mb-0 text-[clamp(30px,3.5vw,40px)] font-normal tracking-[-0.04em] text-[#163541]">
              Review your cart.
            </h1>
            <p className="mt-2 mb-0 text-[15px] text-[#61747d]">
              Review your devices and quantities before checkout.
            </p>
          </div>
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-medium",
              isAuthenticated
                ? "border-[#c6e7d8] bg-[#eef8f4] text-[#24745c]"
                : "border-[#e8dcc8] bg-[#fffaf0] text-[#77551d]"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "size-2 rounded-full",
                isAuthenticated ? "bg-[#24745c]" : "bg-[#c9a227]"
              )}
            />
            {isAuthenticated
              ? "Signed in to InCentral"
              : "Sign in required before adding to cart"}
          </div>
        </header>

        {!hasItems ? (
          <CartEmptyState />
        ) : (
          <div className="grid gap-8 min-[1040px]:grid-cols-[minmax(0,1fr)_340px]">
            <section aria-labelledby="cart-list-title">
              <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <span className="block text-[11px] font-semibold text-[#829199] uppercase">
                    Order items
                  </span>
                  <h2 id="cart-list-title" className="m-0 text-[22px] font-semibold text-[#173844]">
                    Your cart
                  </h2>
                </div>
                <Link
                  href="/#check-compatibility"
                  className="text-[13px] font-semibold text-[#1767ad] no-underline hover:underline"
                >
                  Check another vehicle type
                </Link>
              </header>

              <div className="grid gap-4">
                {lines.map((line) => (
                  <CartLineItem
                    key={line.id}
                    line={line}
                    onIncrease={() =>
                      mutateLine(line.id, (current) =>
                        normalizeConfiguredLine({
                          ...current,
                          quantity: Number(current.quantity) + 1,
                        })
                      )
                    }
                    onDecrease={() =>
                      mutateLine(line.id, (current) => {
                        const nextQty = Number(current.quantity) - 1;
                        if (nextQty < 1) return null;
                        return normalizeConfiguredLine({ ...current, quantity: nextQty });
                      })
                    }
                    onRemove={() => mutateLine(line.id, () => null)}
                    onInstallMethod={(method) =>
                      mutateLine(line.id, (current) =>
                        normalizeConfiguredLine({ ...current, installationMethod: method })
                      )
                    }
                  />
                ))}
              </div>

              <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#e3e9ec] pt-4 text-[13px] text-[#617781]">
                <p className="m-0">
                  {deviceCount} device{deviceCount === 1 ? "" : "s"} · {lineCount} item
                  {lineCount === 1 ? "" : "s"}
                </p>
                <button
                  type="button"
                  className="cursor-pointer border-0 bg-transparent text-[13px] font-semibold text-[#1767ad] underline-offset-2 hover:underline"
                  onClick={() => {
                    clearCart();
                    setCouponStatus({ text: "", tone: "neutral" });
                    setCouponInput("");
                  }}
                >
                  Clear cart
                </button>
              </footer>
            </section>

            <aside className="h-fit rounded-[18px] border border-[#d8e4e9] bg-white p-5 shadow-[0_10px_28px_rgba(20,48,64,0.06)]">
              <h2 className="m-0 text-[18px] font-semibold text-[#173844]">Order summary</h2>
              <div className="mt-4 space-y-2.5 text-[13px]">
                <SummaryRow label="Items" value={String(lineCount)} />
                <SummaryRow label="Devices" value={String(deviceCount)} />
                <SummaryRow label="Product subtotal" value={formatMoney(totals.productBase)} muted />
                <SummaryRow
                  label="Installation"
                  hint="₹500 per device where selected / required"
                  value={formatMoney(totals.installationBase)}
                  muted
                />
                <SummaryRow
                  label="Shipping"
                  hint="₹50 per device"
                  value={formatMoney(totals.shippingBase)}
                  muted
                />
                <SummaryRow
                  label="GST (18%)"
                  hint="products + installation + shipping"
                  value={formatMoney(totals.gst)}
                  muted
                />
                {hasCouponApplied ? (
                  <SummaryRow
                    label={`Coupon (${totals.coupon.code})`}
                    value={`−${formatMoney(totals.discount)}`}
                    accent
                  />
                ) : null}
                <div className="flex items-center justify-between border-t border-[#e3e9ec] pt-3">
                  <span className="text-[14px] font-semibold text-[#173844]">Total</span>
                  <strong className="text-[22px] font-semibold tracking-[-0.02em] text-[#123f70]">
                    {formatMoney(totals.total)}
                  </strong>
                </div>
              </div>

              {totals.quoteRequired ? (
                <p className="mt-3 mb-0 rounded-[10px] bg-[#fff5e3] px-3 py-2 text-[12px] text-[#77551d]">
                  {totals.quoteReasonLabel}
                </p>
              ) : (
                <p className="mt-3 mb-0 text-[11.5px] text-[#70808a]">
                  GST, installation and shipping are itemised separately.
                </p>
              )}

              {!totals.quoteRequired ? (
                <div className="mt-4 rounded-[12px] border border-[#dbe5eb] bg-[#f8fafb] p-3">
                  <strong className="block text-[13px] text-[#173844]">Have a coupon code?</strong>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Enter coupon code"
                      autoComplete="off"
                      aria-label="Coupon code"
                      className="min-w-0 flex-1 rounded-[9px] border border-[#c8d8df] px-2.5 py-2 text-[13px]"
                    />
                    <button
                      type="button"
                      disabled={applyingCoupon}
                      className="shrink-0 cursor-pointer rounded-[9px] border border-[#176fc0] bg-[#176fc0] px-3 py-2 text-[12px] font-semibold text-white disabled:opacity-60"
                      onClick={handleApplyCoupon}
                    >
                      {applyingCoupon ? "Applying…" : "Apply"}
                    </button>
                  </div>
                  {couponStatus.text ? (
                    <p
                      aria-live="polite"
                      className={cn(
                        "mt-2 mb-0 text-[11.5px]",
                        couponStatus.tone === "good" && "text-[#24745c]",
                        couponStatus.tone === "error" && "text-[#9a3d32]",
                        couponStatus.tone === "neutral" && "text-[#70808a]"
                      )}
                    >
                      {couponStatus.text}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <Link
                href={checkoutHref}
                onClick={handleContinue}
                className="mt-4 flex min-h-11 w-full items-center justify-center rounded-xl border border-inc-blue bg-inc-blue text-[14px] font-semibold text-white no-underline hover:bg-inc-blue-dark"
              >
                {totals.quoteRequired ? "Get a Quote" : "Continue to checkout"}
              </Link>

              <p className="mt-3 mb-0 text-center text-[11.5px] text-[#70808a]">
                Need help before you continue?{" "}
                <a href="tel:18002689111" className="font-semibold text-[#1767ad]">
                  Contact our team.
                </a>
              </p>
            </aside>
          </div>
        )}
      </Container>
    </main>
  );
}

function SummaryRow({
  label,
  value,
  hint,
  muted,
  accent,
}: {
  label: string;
  value: string;
  hint?: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <div className={cn("flex items-start justify-between gap-3", muted && "text-[#617781]")}>
      <span>
        {label}
        {hint ? <small className="mt-0.5 block text-[10.5px] text-[#829199]">{hint}</small> : null}
      </span>
      <strong className={cn("shrink-0 font-semibold", accent && "text-[#24745c]")}>{value}</strong>
    </div>
  );
}
