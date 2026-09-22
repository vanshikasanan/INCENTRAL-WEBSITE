import type { CSSProperties } from "react";
import Link from "next/link";

import { planAccentTokens, planProducts, plansMega } from "@/config/plans";
import { cn } from "@/lib/utils";

type PlansMegaMenuProps = {
  open: boolean;
  menuId: string;
};

export function PlansMegaMenu({ open, menuId }: PlansMegaMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      id={menuId}
      data-inc-plans-menu
      className="absolute inset-x-0 top-full z-[1010] hidden w-screen overflow-hidden rounded-b-[18px] border-0 border-t border-[#e2e8eb] border-b border-[#dce4e8] bg-white shadow-[0_22px_46px_rgba(18,37,48,0.13)] min-[1041px]:block"
    >
      <div className="inc-mega-shell">
        <div className="flex items-start justify-between gap-6 border-b border-[#e7ecef] px-0.5 pb-3.5">
          <div className="min-w-0 max-w-[760px]">
            <p className="m-0 text-[12px] leading-none font-[750] tracking-[0.12em] text-[#6a7880] uppercase">
              {plansMega.kicker}
            </p>
            <h2 className="m-0 mt-1.5 text-[22px] leading-[1.08] font-[650] tracking-[-0.03em] whitespace-normal text-inc-ink">
              {plansMega.title}
            </h2>
            <p className="m-0 mt-1.5 max-w-[760px] text-[13px] leading-normal whitespace-normal text-[#6d7c84]">
              {plansMega.description}
            </p>
          </div>
          <Link
            href={plansMega.cta.href}
            className="inline-flex h-10 min-h-10 shrink-0 items-center justify-center gap-2.5 rounded-xl border border-inc-blue bg-inc-blue py-0 pr-2 pl-[15px] text-[12.5px] leading-none font-[650] whitespace-nowrap text-white no-underline shadow-[0_5px_14px_rgba(5,101,207,0.14)] transition-[background,border-color,box-shadow,transform] duration-[180ms] hover:border-[#075bb8] hover:bg-[#075bb8] hover:shadow-[0_7px_18px_rgba(5,101,207,0.18)] motion-safe:hover:-translate-y-px"
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
          className="grid grid-cols-5 items-stretch gap-3 pt-2.5 max-[1260px]:gap-2"
        >
          {planProducts.map((plan) => {
            const tokens = planAccentTokens[plan.accent];
            const isSingleVariant = plan.variants.length === 1;

            return (
              <article
                key={plan.id}
                style={
                  {
                    "--mega-accent": tokens.accent,
                    "--mega-tint": tokens.tint,
                  } as CSSProperties
                }
                className="relative flex min-w-0 flex-col justify-start overflow-visible rounded-[13px] border border-[#dde5e9] bg-gradient-to-b from-[var(--mega-tint)] from-0% to-white to-[78%] px-3 pb-2.5 pt-[11px] transition-[border-color,transform,box-shadow] duration-[180ms] hover:-translate-y-px hover:border-[color-mix(in_srgb,var(--mega-accent)_38%,#dce5e9)] hover:shadow-[0_8px_18px_rgba(20,48,64,0.06)] max-[1260px]:px-2.5 max-[1260px]:pb-[9px] max-[1260px]:pt-2.5 before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-[var(--mega-accent)]"
              >
                <Link
                  href={plan.href}
                  aria-label={`View ${plan.name} plan details`}
                  className="-mx-3 -mt-[11px] mb-2 flex min-w-0 flex-1 flex-col items-start justify-start px-3 pt-3.5 pb-1.5 text-left text-inherit no-underline max-[1260px]:-mx-2.5 max-[1260px]:px-2.5"
                >
                  <div className="flex w-full min-w-0 items-center justify-start gap-[7px] whitespace-normal">
                    <span
                      aria-hidden="true"
                      className="size-2 shrink-0 rounded-full bg-[var(--mega-accent)]"
                      style={{ boxShadow: tokens.markShadow }}
                    />
                    <span className="max-w-none overflow-visible text-[9.5px] leading-none font-bold tracking-[0.055em] whitespace-nowrap text-[#657780] uppercase">
                      {plan.category}
                    </span>
                  </div>
                  <h3 className="m-0 mt-2 w-full p-0 text-left text-xl leading-[1.05] font-semibold tracking-[-0.025em] whitespace-normal text-inc-ink">
                    {plan.name}
                  </h3>
                  <p className="m-0 mt-1.5 block min-h-[58px] w-full max-w-full overflow-visible p-0 text-left text-[11.5px] leading-[1.45] font-normal wrap-break-word whitespace-normal text-[#687980] max-[1260px]:min-h-[62px] max-[1260px]:text-[10.5px] max-[1260px]:leading-[1.42]">
                    {plan.description}
                  </p>
                </Link>

                <div
                  className={cn(
                    "relative z-[2] grid w-full min-w-0 gap-[7px]",
                    isSingleVariant
                      ? "grid-cols-1"
                      : "grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]"
                  )}
                >
                  {plan.variants.map((variant) => (
                    <Link
                      key={variant.href}
                      href={variant.href}
                      className="flex min-h-9 w-full min-w-0 items-center justify-center rounded-lg border border-[#d7e2e7] bg-white/[0.88] px-3.5 text-center text-[10px] leading-[1.2] font-[650] whitespace-nowrap text-[#225c90] no-underline transition-colors hover:border-[color-mix(in_srgb,var(--mega-accent)_40%,#d7e2e7)] hover:bg-white max-[1260px]:min-h-9 max-[1260px]:gap-1 max-[1260px]:px-2 max-[1260px]:text-[9.25px]"
                    >
                      <span className="block w-full text-center leading-[1.2]">
                        {variant.label}
                      </span>
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
