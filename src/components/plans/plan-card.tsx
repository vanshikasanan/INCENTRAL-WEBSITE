import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { planAccentTokens, type PlanShowcaseCard } from "@/config/plans";
import { cn } from "@/lib/utils";

import { PlanFeatureIcon } from "./plan-feature-icon";

type PlanCardProps = {
  card: PlanShowcaseCard;
  className?: string;
};

export function PlanCard({ card, className }: PlanCardProps) {
  const tokens = planAccentTokens[card.accent];

  const article = (
    <article
      data-plan={card.id}
      style={
        {
          "--accent": tokens.accent,
          "--soft": tokens.tint,
        } as CSSProperties
      }
      className={cn(
        "group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-[#d7e1e7] bg-white shadow-[0_12px_32px_rgba(24,49,64,0.055)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_32%,#d7e1e7)] hover:shadow-[0_22px_46px_rgba(25,51,66,0.105)]",
        card.href && "cursor-pointer",
        className
      )}
    >
      <div className="relative h-36 overflow-hidden border-b border-[#e2e8eb] bg-[var(--soft)] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_40%,rgba(255,255,255,0.24)_100%)] max-[1120px]:h-[162px] max-[780px]:h-[146px]">
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(max-width: 780px) 82vw, (max-width: 1120px) 50vw, 25vw"
          className="object-cover object-center saturate-[0.91] contrast-[0.99] transition-[transform,filter] duration-[350ms] group-hover:scale-[1.055] group-hover:saturate-100 group-hover:contrast-100"
        />
        <span className="absolute top-[13px] left-3.5 z-[2] inline-flex max-w-[calc(100%-62px)] min-h-[29px] items-center rounded-[999px] border border-[color-mix(in_srgb,var(--accent)_25%,#dbe5eb)] bg-[rgba(255,255,255,0.91)] px-2.5 py-[5px] text-[11.5px] leading-[1.25] font-semibold text-[var(--accent)] shadow-[0_5px_16px_rgba(30,52,64,0.07)] backdrop-blur-[8px] before:mr-1.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_10%,transparent)] before:content-['']">
          {card.value}
        </span>
        <span
          aria-hidden="true"
          className="absolute top-[13px] right-3.5 z-[2] grid size-[31px] place-items-center rounded-[11px] border border-[rgba(255,255,255,0.7)] bg-[rgba(20,42,53,0.73)] text-[11px] leading-none font-semibold tracking-[0.04em] text-white backdrop-blur-[8px]"
        >
          {card.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[18px] pt-[18px] pb-[19px] max-[520px]:px-4 max-[520px]:pt-[17px] max-[520px]:pb-4">
        <div className="border-b border-[#e5eaed] pb-3.5">
          <h3 className="m-0 text-[27px] leading-[1.05] font-medium tracking-[-0.035em] text-[#162c37] max-[520px]:text-[23px]">
            {card.name}
          </h3>
          <p className="mt-[7px] min-h-[34px] text-[13.5px] leading-[1.5] font-normal text-[#687a83] max-[680px]:text-[13px]">
            {card.tagline}
          </p>
        </div>

        <ul className="m-0 mt-3.5 mb-0.5 grid list-none gap-[9px] p-0">
          {card.features.map((feature) => (
            <li
              key={feature.label}
              className="flex min-h-[27px] items-center gap-[9px] text-[13.5px] leading-[1.35] font-medium text-[#344d59] max-[680px]:text-[13px]"
            >
              <PlanFeatureIcon icon={feature.icon} />
              {feature.label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  if (card.href) {
    return (
      <Link
        href={card.href}
        aria-label={`View ${card.name} plan details`}
        className="block text-inherit no-underline"
      >
        {article}
      </Link>
    );
  }

  return article;
}
