"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/common/container";
import { QUOTE_STORAGE_KEY } from "@/lib/plan-finder/cart";
type QuoteContext = {
  quoteReasonLabel?: string;
  totalCartQuantity?: number;
  cartItems?: { planName?: string; quantity?: number; line?: string }[];
};

export default function GetAQuotePage() {
  const [context, setContext] = useState<QuoteContext | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(QUOTE_STORAGE_KEY);
      setContext(raw ? JSON.parse(raw) : null);
    } catch {
      setContext(null);
    }
  }, []);

  return (
    <main id="main" className="py-14">
      <Container className="max-w-2xl">
        <p className="m-0 text-[11px] font-bold tracking-[0.12em] text-[#1767ad] uppercase">
          Fleet quote
        </p>
        <h1 className="mt-2 text-[32px] font-normal tracking-[-0.03em] text-[#163541]">
          Request a quote for this cart
        </h1>
        <p className="mt-2 text-[15px] text-[#61747d]">
          {context?.quoteReasonLabel ||
            "Your cart requires a quote before we can proceed. Our team will follow up with pricing and next steps."}
        </p>

        {context?.cartItems?.length ? (
          <ul className="mt-6 space-y-2 rounded-[14px] border border-[#dbe5eb] bg-[#f8fafb] p-4 text-[13px]">
            {context.cartItems.map((item, index) => (
              <li key={index} className="flex justify-between gap-3">
                <span>
                  {item.quantity} × {item.planName} · {item.line}
                </span>
              </li>
            ))}
            <li className="border-t border-[#dbe5eb] pt-2 font-semibold text-[#173844]">
              {context.totalCartQuantity} devices total
            </li>
          </ul>
        ) : null}

        <p className="mt-6 text-[14px] text-[#61747d]">
          Full quote submission (contact form + Turnstile) will connect to the support API next.
          For now, contact{" "}
          <a href="mailto:commandcenter@intangles.com" className="font-semibold text-[#1767ad]">
            commandcenter@intangles.com
          </a>{" "}
          or call 1800-268-9111 with your cart details.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/cart"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#c9d5dc] bg-white px-5 text-[14px] font-semibold text-[#15242d] no-underline"
          >
            Back to cart
          </Link>
          <Link
            href="/support"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-inc-blue bg-inc-blue px-5 text-[14px] font-semibold text-white no-underline"
          >
            Contact support
          </Link>
        </div>
      </Container>
    </main>
  );
}
