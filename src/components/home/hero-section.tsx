import Link from "next/link";

import { Container } from "@/components/common/container";
import { heroContent } from "@/config/hero";

import { IntelligencePanel } from "./intelligence-panel";

export function HeroSection() {
  const { eyebrow, title, lead, actions } = heroContent;

  return (
    <section
      aria-labelledby="h132HeroTitle"
      className="border-b border-[#e2e2dc] bg-[#f7f6f1] py-[42px] pb-11 max-[760px]:py-[42px] max-[760px]:pb-11 min-[761px]:py-[52px] min-[761px]:pb-[50px]"
    >
      <Container className="grid items-center gap-7 max-[1120px]:grid-cols-1 max-[1120px]:gap-7 min-[1121px]:grid-cols-[minmax(0,1.08fr)_minmax(430px,0.92fr)] min-[1121px]:gap-[54px]">
        <div>
          <p className="mb-2.5 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-[#1767ad] uppercase">
            {eyebrow}
          </p>
          <h1
            id="h132HeroTitle"
            className="m-0 max-w-[720px] text-[38px] leading-[1.04] font-normal tracking-[-0.045em] text-[#15242d] min-[761px]:text-[clamp(38px,3.9vw,56px)] min-[761px]:leading-[1.01]"
          >
            {title}
          </h1>
          <p className="mt-[18px] max-w-[720px] text-base leading-[1.62] text-[#596a72]">
            {lead}
          </p>
          <div className="mt-[26px] flex flex-wrap items-center gap-[18px]">
            <Link
              href={actions.primary.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[999px] border border-inc-blue bg-inc-blue px-[22px] text-[15px] font-semibold text-white no-underline transition-colors hover:border-inc-blue-dark hover:bg-inc-blue-dark"
            >
              {actions.primary.label}
            </Link>
            <Link
              href={actions.secondary.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[999px] border border-[#2a3338] bg-white px-[22px] text-[15px] font-semibold text-inc-ink no-underline transition-colors hover:bg-[#f6f7f7]"
            >
              {actions.secondary.label}
            </Link>
          </div>
        </div>

        <IntelligencePanel />
      </Container>
    </section>
  );
}
