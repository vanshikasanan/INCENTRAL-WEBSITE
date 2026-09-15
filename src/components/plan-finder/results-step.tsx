"use client";

import type { CSSProperties } from "react";

import { planFinderSection } from "@/config/plan-finder";
import { planAccentTokens } from "@/config/plans";
import { planMeta, productFor } from "@/lib/plan-finder";
import type { PlanFamily } from "@/lib/plan-finder";
import { cn } from "@/lib/utils";

import { PlanBadge } from "./plan-badge";
import { PlanDetailPanel } from "./plan-detail-panel";
import type { PlanFinderController } from "./use-plan-finder";

type ResultsStepProps = {
  finder: PlanFinderController;
  resultsTitleId: string;
};

export function ResultsStep({ finder, resultsTitleId }: ResultsStepProps) {
  const { result, state, summaryText, resultsTitle, resultsCopy, availabilityNotices } =
    finder;
  const copy = planFinderSection.resultsStep;

  if (!result || result.status !== "VERIFIED") {
    return (
      <section
        aria-labelledby={resultsTitleId}
        className="px-[30px] py-7 max-[760px]:px-[17px]"
      >
        <div className="mt-3 rounded-[11px] bg-[#fff5e3] px-[13px] py-[11px] text-xs text-[#77551d]">
          {copy.unverifiedMessage}
        </div>
      </section>
    );
  }

  const highlighted = finder.highlightedFamily(result);

  return (
    <section
      aria-labelledby={resultsTitleId}
      className="px-[30px] pt-7 pb-[30px] max-[760px]:px-[17px] max-[760px]:py-[23px]"
    >
      <div className="flex items-center justify-between gap-[18px] rounded-[14px] border border-[#dbe5e9] bg-[#f6f9fa] px-[15px] py-[13px] max-[760px]:items-start">
        <div>
          <span className="block text-[10px] font-semibold tracking-[0.08em] text-[#829199] uppercase">
            {copy.summaryLabel}
          </span>
          <strong className="mt-[3px] block text-[13px] font-medium text-[#29444f] max-[760px]:max-w-[245px]">
            {summaryText}
          </strong>
        </div>
        <button
          type="button"
          className="min-h-[34px] cursor-pointer rounded-full border border-[#bed1da] bg-white px-[13px] text-[11px] font-semibold text-[#1767ad]"
          onClick={() => finder.goToStep(1)}
        >
          {copy.editLabel}
        </button>
      </div>

      <div className="mt-6 flex items-end justify-between gap-7 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-1.5">
        <div>
          <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.1em] text-[#1767ad] uppercase">
            {copy.plansKicker}
          </span>
          <h3
            id={resultsTitleId}
            className="m-0 text-[32px] leading-[1.05] font-normal tracking-[-0.04em] text-[#163541] min-[761px]:text-[clamp(29px,2.5vw,38px)]"
          >
            {resultsTitle}
          </h3>
        </div>
        <p className="m-0 max-w-[410px] text-left text-[12.5px] leading-[1.45] text-[#6b7d86] min-[761px]:text-right">
          {resultsCopy}
        </p>
      </div>

      {availabilityNotices.length > 0 ? (
        <div className="mt-3 rounded-[11px] bg-[#fff5e3] px-[13px] py-[11px] text-xs text-[#77551d]">
          {availabilityNotices.join(" ")}
        </div>
      ) : null}

      <div className="mt-4 grid items-stretch gap-4 max-[1050px]:grid-cols-1 min-[1051px]:grid-cols-[250px_minmax(0,1fr)] max-[760px]:grid-cols-1">
        <aside
          aria-label={copy.planRailLabel}
          className="flex min-w-0 flex-col rounded-[18px] border border-[#d5e1e6] bg-[#f8fafb] p-3.5 max-[760px]:p-2.5"
        >
          <div className="px-1 pb-2.5">
            <span className="block text-[13px] font-semibold text-[#173844]">
              {copy.planRailLabel}
            </span>
            <small className="mt-[3px] block text-[11px] leading-[1.35] text-[#7b8b93]">
              {copy.planRailHint}
            </small>
          </div>
          <div className="grid grid-cols-1 gap-[7px] max-[760px]:flex max-[760px]:snap-x max-[760px]:snap-mandatory max-[760px]:gap-[7px] max-[760px]:overflow-x-auto max-[760px]:pb-[3px] max-[760px]:[-ms-overflow-style:none] max-[760px]:[scrollbar-width:none] max-[760px]:[&::-webkit-scrollbar]:hidden">
            {result.recommendations.map((rec) => {
              const family = rec.family as PlanFamily;
              const meta = planMeta[family];
              const tokens = planAccentTokens[family];
              const product = productFor(family, state.aisRequired);
              const badge = finder.getBadge(rec, result.recommendations.length, result);
              const selected = state.selectedFamily
                ? state.selectedFamily === family
                : highlighted === family ||
                  (!highlighted && result.recommendations[0]?.family === family);

              return (
                <button
                  key={family}
                  type="button"
                  style={{ "--accent": tokens.accent } as CSSProperties}
                  className={cn(
                    "relative block min-h-[76px] min-w-0 cursor-pointer overflow-hidden rounded-[13px] border border-[#d7e2e7] bg-white px-3 py-[11px] text-left transition-[border-color,box-shadow] duration-150",
                    "before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-[var(--accent)] before:opacity-35 before:content-['']",
                    "hover:border-[#a9c0cc]",
                    selected &&
                      "border-[var(--accent)] bg-[linear-gradient(135deg,#fff,#f2f8fc)] shadow-[0_0_0_2px_color-mix(in_srgb,var(--accent)_10%,transparent)] before:w-1 before:opacity-100",
                    "max-[760px]:w-[185px] max-[760px]:shrink-0 max-[760px]:snap-start"
                  )}
                  onClick={() => finder.selectFamily(family)}
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="text-[8.5px] leading-[1.3] font-semibold tracking-[0.05em] text-[#74858e] uppercase">
                      {meta.value}
                    </span>
                    {badge ? (
                      <PlanBadge
                        label={badge.label}
                        variant={badge.variant}
                        className="min-h-5 px-[7px] text-[8.5px]"
                      />
                    ) : null}
                  </span>
                  <h4 className="mt-[5px] mb-0 text-lg font-medium tracking-[-0.025em] text-[#173844]">
                    {meta.name}
                  </h4>
                  <span className="mt-[3px] flex items-baseline gap-1.5 text-[#72838c]">
                    <strong className="text-[12.5px] font-semibold text-[#24434f]">
                      {finder.formatMoney(product?.price || 0)}
                    </strong>
                    <span className="text-[11px] leading-[1.35]">
                      2-year price · incl. GST
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <div aria-live="polite" className="min-w-0">
          <PlanDetailPanel finder={finder} />
        </div>
      </div>
    </section>
  );
}
