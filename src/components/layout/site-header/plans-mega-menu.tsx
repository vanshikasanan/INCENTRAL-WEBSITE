import Link from "next/link";
import type { CSSProperties } from "react";

import { planMegaMenuAccentTokens, planProducts, plansMega } from "@/config/plans";
import { cn } from "@/lib/utils";

type PlansMegaMenuProps = {
  open: boolean;
  menuId: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const shellClassName = cn(
  "mx-auto py-4 pb-5",
  "w-[min(calc(100%-96px),1480px)] max-[1260px]:w-[min(calc(100%-48px),1480px)]",
  "min-[1101px]:w-[min(calc(100%-144px),1260px)]",
  "min-[1041px]:max-[1100px]:w-[min(calc(100%-80px),1260px)]"
);

const variantButtonClass =
  "flex h-9 max-h-9 w-full min-w-0 shrink-0 items-center justify-center rounded-lg border border-[#d7e2e7] bg-[rgba(255,255,255,0.88)] px-3.5 py-0 text-center text-[11px] leading-[1.15] font-[650] whitespace-nowrap text-(--mega-accent) no-underline max-[1260px]:h-[34px] max-[1260px]:max-h-[34px] max-[1260px]:px-2.5 max-[1260px]:text-[10.5px] min-[1041px]:max-[1180px]:px-2 min-[1041px]:max-[1180px]:text-[10px]";

export function PlansMegaMenu({
  open,
  menuId,
  onMouseEnter,
  onMouseLeave,
}: PlansMegaMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      id={menuId}
      data-inc-plans-menu
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "absolute top-full right-0 left-0 z-[1010] w-screen overflow-hidden bg-white",
        "rounded-b-[18px] border-0 border-t border-b border-[#e2e8eb] border-b-[#dce4e8]",
        "shadow-[0_22px_46px_rgba(18,37,48,0.13)]",
        "max-[1040px]:hidden",
        "[&_a]:no-underline [&_a]:after:hidden [&_a]:after:content-none"
      )}
    >
      <div className={shellClassName}>
        <div className="flex items-start justify-between gap-6 border-b border-[#e7ecef] px-0.5 pb-3.5">
          <div className="flex min-w-0 max-w-[760px] flex-col items-start gap-1.5">
            <p className="m-0 text-xs leading-none font-[750] tracking-[0.12em] text-[#6a7880] uppercase">
              {plansMega.kicker}
            </p>
            <h2 className="m-0 text-[22px] leading-[1.08] font-[650] tracking-[-0.03em] whitespace-normal text-[#172126]">
              {plansMega.title}
            </h2>
            <p className="m-0 max-w-[760px] text-[13px] leading-normal whitespace-normal text-[#6d7c84] max-[1180px]:max-w-[620px] max-[1180px]:text-[12.5px]">
              {plansMega.description}
            </p>
          </div>
          <Link
            href={plansMega.cta.href}
            className={cn(
              "inline-flex h-10 min-h-10 shrink-0 items-center justify-center gap-2.5 rounded-xl",
              "border border-inc-blue bg-inc-blue px-[15px] pr-2 text-[12.5px] leading-none font-semibold whitespace-nowrap text-white",
              "shadow-[0_5px_14px_rgba(5,101,207,0.14)] no-underline",
              "hover:border-inc-blue-hover hover:bg-inc-blue-hover hover:text-white",
              "motion-safe:hover:-translate-y-px hover:shadow-[0_7px_18px_rgba(5,101,207,0.18)]"
            )}
          >
            {plansMega.cta.label}
            <span
              aria-hidden="true"
              className="grid size-[25px] shrink-0 place-items-center rounded-lg bg-white/[0.14] text-[15px] leading-none font-medium text-white"
            >
              →
            </span>
          </Link>
        </div>

        <div
          aria-label="Intangles plans"
          className="grid w-full grid-cols-4 items-stretch gap-3 pt-2.5 max-[1260px]:gap-2 min-[1041px]:max-[1180px]:gap-2"
        >
          {planProducts.map((plan) => {
            const tokens = planMegaMenuAccentTokens[plan.accent];

            return (
              <article
                key={plan.id}
                style={
                  {
                    "--mega-accent": tokens.accent,
                    "--mega-tint": tokens.tint,
                  } as CSSProperties
                }
                className={cn(
                  "relative flex min-w-0 flex-col justify-start overflow-visible",
                  "rounded-[13px] border border-[#dde5e9] px-3 pt-[11px] pb-2.5",
                  "bg-[linear-gradient(180deg,var(--mega-tint),#fff_78%)]",
                  "transition-[border-color,transform,box-shadow] duration-200 ease-out",
                  "hover:-translate-y-px hover:shadow-[0_8px_18px_rgba(20,48,64,0.06)]",
                  "hover:[border-color:color-mix(in_srgb,var(--mega-accent)_38%,#dce5e9)]",
                  "max-[1260px]:px-2.5"
                )}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-[13px]"
                  style={{ background: tokens.accent }}
                />

                <Link
                  href={plan.href}
                  aria-label={`View ${plan.name} plan details`}
                  className={cn(
                    "mb-2 flex min-w-0 flex-1 flex-col text-left text-inherit no-underline",
                    "-mx-3 -mt-[11px] rounded-t-xl rounded-b-md px-3 pt-3.5 pb-1.5",
                    "max-[1260px]:-mx-2.5 max-[1260px]:px-2.5"
                  )}
                >
                  <div className="flex min-h-[18px] w-full items-center gap-[7px]">
                    <span
                      aria-hidden="true"
                      className="size-2 shrink-0 rounded-full"
                      style={{
                        background: tokens.accent,
                        boxShadow: `0 0 0 4px color-mix(in srgb, ${tokens.accent} 10%, transparent)`,
                      }}
                    />
                    <span className="min-w-0 text-[9.5px] font-bold tracking-[0.055em] whitespace-nowrap text-[#657780] uppercase">
                      {plan.category}
                    </span>
                  </div>
                  <h3 className="mt-2 mb-0 w-full p-0 text-left text-[20px] leading-[1.05] font-semibold tracking-[-0.025em] text-[#172126]">
                    {plan.name}
                  </h3>
                  <p className="mt-1.5 mb-0 block min-h-[58px] w-full max-w-full p-0 text-left text-[11.5px] leading-[1.45] font-normal wrap-break-word whitespace-normal text-[#687980] max-[1260px]:min-h-[62px] max-[1260px]:text-[10.5px] max-[1260px]:leading-[1.42]">
                    {plan.description}
                  </p>
                </Link>

                <div className="relative z-[2] mt-auto grid w-full min-w-0 shrink-0 grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] gap-[6px]">
                  {plan.variants.map((variant) => (
                    <Link key={variant.href} href={variant.href} className={variantButtonClass}>
                      {variant.label}
                    </Link>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
