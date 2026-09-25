"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { Container } from "@/components/common/container";
import type { PlanProduct } from "@/config/plans";
import { cn } from "@/lib/utils";

type PlanLineToggleProps = {
  product: PlanProduct;
};

export function PlanLineToggle({ product }: PlanLineToggleProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defaultLine =
    product.variants.find((v) => v.href.includes("line=ais"))?.href.includes("line=ais")
      ? "ais"
      : "standard";
  const activeLine = searchParams.get("line") || defaultLine;

  if (product.variants.length <= 1) return null;

  return (
    <section aria-label="Choose product version" className="border-b border-[#e3e9ec] bg-white">
      <Container className="py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-[13px] font-semibold text-[#687680]">Plan version</span>
          <div
            role="tablist"
            aria-label={`${product.name} version`}
            className="inline-flex flex-wrap gap-1 rounded-[999px] border border-[#d3dfe5] bg-[#fbfcfd] p-1"
          >
            {product.variants.map((variant) => {
              const line = variant.href.includes("line=ais") ? "ais" : "standard";
              const isActive = activeLine === line;
              const href = `${pathname}?line=${line}`;

              return (
                <Link
                  key={variant.href}
                  href={href}
                  role="tab"
                  aria-selected={isActive}
                  className={cn(
                    "inline-flex min-h-10 items-center rounded-[999px] px-4 text-[13px] font-semibold no-underline transition-colors",
                    isActive
                      ? "bg-[#102f40] text-white"
                      : "text-[#31596f] hover:bg-white hover:text-[#15242d]"
                  )}
                >
                  {variant.label}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
