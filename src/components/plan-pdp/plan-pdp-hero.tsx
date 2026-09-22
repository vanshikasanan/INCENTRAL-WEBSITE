import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { planAccentTokens, type PlanAccent } from "@/config/plans";
import { cn } from "@/lib/utils";

type PlanPdpHeroProps = {
  accent: PlanAccent;
  lineLabel: string;
  valueLabel: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  finderHref: string;
};

export function PlanPdpHero({
  accent,
  lineLabel,
  valueLabel,
  name,
  tagline,
  summary,
  image,
  finderHref,
}: PlanPdpHeroProps) {
  const tokens = planAccentTokens[accent];

  return (
    <section className="border-b border-[#e3e9ec] bg-white py-12 pb-14 max-[760px]:py-10">
      <Container className="grid items-center gap-10 max-[900px]:grid-cols-1 min-[901px]:grid-cols-[minmax(0,1fr)_minmax(320px,0.88fr)] min-[901px]:gap-14">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <span
              className="inline-flex min-h-7 items-center rounded-full border px-3 text-[11px] font-bold tracking-[0.05em] uppercase"
              style={{
                borderColor: `color-mix(in srgb, ${tokens.accent} 25%, #dbe5eb)`,
                backgroundColor: tokens.tint,
                color: tokens.accent,
              }}
            >
              {lineLabel}
            </span>
            <span className="inline-flex min-h-7 items-center rounded-full border border-[#d3dfe5] bg-[#fbfcfd] px-3 text-[11px] font-bold tracking-[0.05em] text-[#31596f] uppercase">
              {valueLabel}
            </span>
          </div>

          <h1 className="m-0 text-[clamp(40px,4.5vw,58px)] leading-[0.98] font-normal tracking-[-0.045em] text-[#15242d]">
            {name}
          </h1>
          <p className="mt-3 mb-0 text-[18px] leading-[1.35] font-medium text-[#31596f]">
            {tagline}
          </p>
          <p className="mt-4 mb-0 max-w-[620px] text-[15px] leading-[1.62] text-[#596a72]">
            {summary}
          </p>

          <div className="mt-7 flex flex-wrap items-end gap-4 rounded-[18px] border border-[#d8e2e6] bg-[#f8fafb] p-4 max-[640px]:flex-col max-[640px]:items-stretch">
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-semibold tracking-[0.06em] text-[#687680] uppercase">
                Next step
              </span>
              <strong className="mt-1 block text-[15px] text-[#15242d]">
                Confirm fit for your fleet before you buy
              </strong>
            </div>
            <Link
              href={finderHref}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-[999px] border border-inc-blue bg-inc-blue px-[22px] text-[15px] font-semibold text-white no-underline transition-colors hover:border-inc-blue-dark hover:bg-inc-blue-dark max-[640px]:w-full"
            >
              Find the right plan
            </Link>
          </div>
        </div>

        <figure
          className={cn(
            "relative m-0 min-h-[280px] overflow-hidden rounded-[24px] border border-[#d7e1e7] shadow-[0_18px_44px_rgba(24,49,64,0.08)] max-[900px]:min-h-[240px]"
          )}
          style={{ backgroundColor: tokens.tint } as CSSProperties}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
            className="object-cover object-center saturate-[0.91] contrast-[0.99]"
            priority
          />
        </figure>
      </Container>
    </section>
  );
}
