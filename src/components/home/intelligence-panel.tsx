import type { CSSProperties } from "react";

import { heroContent } from "@/config/hero";
import { cn } from "@/lib/utils";

type CapabilityIconId =
  (typeof heroContent.intelligencePanel.capabilities)[number]["id"];

const iconClassName =
  "block size-[27px] overflow-visible fill-none stroke-current stroke-[1.65] [stroke-linecap:round] [stroke-linejoin:round] [vector-effect:non-scaling-stroke] max-[680px]:size-6";

function CapabilityIcon({
  id,
  transform,
}: {
  id: CapabilityIconId;
  transform?: string;
}) {
  const svgProps = {
    viewBox: "0 0 32 32",
    "aria-hidden": true as const,
    className: iconClassName,
    style: transform ? ({ transform } as CSSProperties) : undefined,
  };

  switch (id) {
    case "health":
      return (
        <svg {...svgProps}>
          <path d="M4.5 20h4l3.3-6.2 4.2 11.4 3.8-8.4 2.4 3.2h5.3" />
          <circle cx="24.7" cy="10" r="2.6" />
        </svg>
      );
    case "automation":
      return (
        <svg {...svgProps}>
          <rect height="15" rx="2.2" width="10.5" x="6" y="5.5" />
          <path d="M9 10h4.5M9 14h4.5" />
          <path d="M20.5 10.5h5.8M23.4 7.6v5.8" />
          <path d="M20 21.5h6" />
          <path d="M18.5 18.5l8 8" />
          <circle cx="17.5" cy="17.5" r="2.2" />
        </svg>
      );
    case "fuel":
      return (
        <svg {...svgProps}>
          <path d="M6 21.5a10 10 0 0 1 20 0" />
          <path d="M16 21.5l4.8-7.8" />
          <circle cx="16" cy="21.5" r="2.1" />
          <path d="M23.8 8.3c0 3.1-2.1 5.1-4.4 5.1 0-3 1.7-5.1 4.4-5.1Z" />
        </svg>
      );
    case "dtc":
      return (
        <svg {...svgProps}>
          <path d="M5 18h5l2.1-4.7 4 8.8 2.9-6 2.1 1.9H27" />
          <circle cx="25" cy="9.2" r="3" />
          <path d="M25 7.7v2.3" />
          <path d="M25 12.2v.1" />
        </svg>
      );
    case "driver":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="9.8" />
          <circle cx="16" cy="16" r="3" />
          <path d="M9.3 22.1c2.2-3.3 4.4-4.9 6.7-4.9s4.5 1.6 6.7 4.9" />
          <path d="M10.6 10.8l2.2 2.2M21.4 10.8 19.2 13" />
        </svg>
      );
    case "video":
      return (
        <svg {...svgProps}>
          <rect height="14" rx="3" width="14" x="6" y="9" />
          <path d="M20 13.5l5-3v11l-5-3" />
          <circle cx="13" cy="16" r="3" />
          <path d="M10 6V4h4" />
          <path d="M22 6h4v4" />
          <path d="M10 26H6v-4" />
          <path d="M22 26h4v-4" />
        </svg>
      );
  }
}

export function IntelligencePanel() {
  const { intelligencePanel } = heroContent;

  return (
    <aside
      aria-label="What Intangles brings to your fleet"
      className="relative max-w-none overflow-hidden rounded-[26px] border border-[rgba(126,177,210,0.26)] bg-[linear-gradient(150deg,#0b2230_0%,#102d3b_62%,#123442_100%)] pt-[22px] pr-[22px] pb-[19px] pl-[22px] text-white shadow-[0_24px_54px_rgba(13,34,47,0.18)] max-[1120px]:max-w-[760px] max-[680px]:rounded-[22px] max-[680px]:p-[18px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,255,255,0.027)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.027)_1px,transparent_1px)] before:[background-size:28px_28px] before:[mask-image:linear-gradient(to_bottom_right,rgba(0,0,0,0.9),transparent_72%)] after:pointer-events-none after:absolute after:-top-[120px] after:-right-[110px] after:size-[260px] after:rounded-full after:bg-[radial-gradient(circle,rgba(73,164,224,0.22)_0%,rgba(73,164,224,0.06)_38%,transparent_70%)]"
    >
      <div className="relative z-[2] flex items-start justify-between gap-[18px] border-b border-[rgba(213,233,244,0.14)] px-px pt-px pb-[18px] max-[680px]:pb-[14px]">
        <div>
          <span className="mb-[6px] block text-[11.5px] leading-[1.22] font-semibold tracking-[0.09em] text-[#9fd8ff] uppercase">
            {intelligencePanel.kicker}
          </span>
          <h2 className="m-0 max-w-[350px] text-[21px] leading-[1.15] font-medium tracking-[-0.025em] text-[#f8fbfd] max-[680px]:text-[19px]">
            {intelligencePanel.title}
          </h2>
        </div>
        <span className="inline-flex min-h-[27px] items-center rounded-[999px] border border-[rgba(151,203,235,0.2)] bg-[rgba(255,255,255,0.055)] px-2.5 text-[12px] leading-none font-medium whitespace-nowrap text-[#b9d7e8] backdrop-blur-[5px] max-[680px]:hidden">
          {intelligencePanel.chip}
        </span>
      </div>

      <div className="relative z-[2] mt-0.5 grid grid-cols-2 max-[460px]:grid-cols-1">
        {intelligencePanel.capabilities.map((capability, index) => {
          const total = intelligencePanel.capabilities.length;
          const isLeftColumn = index % 2 === 0;
          const isBottomRow = index >= total - 2;

          return (
            <article
              key={capability.id}
              style={
                { "--accent": capability.accentColor } as CSSProperties
              }
              className={cn(
                "group relative grid min-h-[82px] grid-cols-[52px_minmax(0,1fr)] items-center gap-[14px] pt-3.5 pr-3.5 pb-3.5 pl-[13px] max-[680px]:min-h-[74px] max-[680px]:grid-cols-[46px_minmax(0,1fr)] max-[680px]:gap-3 max-[680px]:px-2.5 max-[680px]:py-3",
                isLeftColumn &&
                  "border-r border-[rgba(218,235,244,0.11)] max-[460px]:border-r-0",
                !isBottomRow && "border-b border-[rgba(218,235,244,0.11)]",
                isBottomRow && "max-[460px]:border-b max-[460px]:border-[rgba(218,235,244,0.11)]",
                index === total - 1 && "max-[460px]:border-b-0",
                "after:absolute after:top-3.5 after:bottom-3.5 after:left-0 after:w-0.5 after:scale-y-[0.35] after:rounded-[2px] after:bg-[var(--accent)] after:opacity-0 after:transition-[opacity,transform] after:duration-[180ms] hover:after:scale-y-100 hover:after:opacity-90"
              )}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-[15px] border border-[rgba(158,203,255,0.24)] bg-[rgba(255,255,255,0.035)] text-[#9ecbff] max-[680px]:size-[42px] max-[680px]:rounded-[13px]">
                <CapabilityIcon
                  id={capability.id}
                  transform={
                    "iconTransform" in capability
                      ? capability.iconTransform
                      : undefined
                  }
                />
              </span>
              <h3 className="m-0 text-[13.5px] leading-[1.32] font-medium tracking-[-0.007em] text-[#dfeaf0] max-[680px]:text-[13px]">
                {capability.title}
              </h3>
            </article>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className="absolute right-[18px] bottom-[14px] z-[1] flex items-end gap-[3px] opacity-[0.18]"
      >
        <i className="block h-[5px] w-[3px] rounded-[3px] bg-[#8ed4ff]" />
        <i className="block h-2.5 w-[3px] rounded-[3px] bg-[#8ed4ff]" />
        <i className="block h-4 w-[3px] rounded-[3px] bg-[#8ed4ff]" />
        <i className="block h-[9px] w-[3px] rounded-[3px] bg-[#8ed4ff]" />
        <i className="block h-[13px] w-[3px] rounded-[3px] bg-[#8ed4ff]" />
      </div>
    </aside>
  );
}
