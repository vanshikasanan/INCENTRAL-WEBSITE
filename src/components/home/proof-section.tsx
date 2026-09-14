import type { ProofSectionContent } from "@/config/proof";
import { cn } from "@/lib/utils";

import { Container } from "@/components/common/container";

export type ProofSectionProps = ProofSectionContent & {
  className?: string;
};

export function ProofSection({
  id,
  titleId,
  eyebrow,
  title,
  description,
  statsLabel,
  stats,
  note,
  className,
}: ProofSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "bg-white py-[54px] pb-[58px] max-[680px]:py-[42px] max-[680px]:pb-[46px]",
        className
      )}
    >
      <Container>
        <div
          className={cn(
            "relative grid items-center gap-[50px] overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#0d2634_0%,#113748_58%,#0e3040_100%)] px-10 py-[38px] text-white shadow-[0_20px_48px_rgba(16,48,64,0.12)]",
            "before:pointer-events-none before:absolute before:top-[-160px] before:right-[-110px] before:h-[410px] before:w-[410px] before:rounded-full before:border before:border-[rgba(126,193,232,0.13)] before:shadow-[0_0_0_54px_rgba(83,165,215,0.035),0_0_0_108px_rgba(83,165,215,0.022)] before:content-['']",
            "max-[980px]:grid-cols-1 max-[980px]:gap-7 max-[980px]:p-8",
            "min-[981px]:grid-cols-[minmax(0,0.88fr)_minmax(500px,1.12fr)]",
            "max-[680px]:rounded-[22px] max-[680px]:px-[22px] max-[680px]:py-[26px]"
          )}
        >
          <div className="relative z-[1]">
            <p className="mb-3 text-[11.5px] leading-[1.2] font-semibold tracking-[0.09em] text-[#85c7f0] uppercase">
              {eyebrow}
            </p>
            <h2
              id={titleId}
              className="m-0 max-w-[560px] text-[32px] leading-[1.04] font-normal tracking-[-0.038em] text-white min-[681px]:text-[clamp(32px,3.2vw,44px)] max-[680px]:text-[31px]"
            >
              {title}
            </h2>
            <p className="mt-4 mb-0 max-w-[570px] text-[15px] leading-[1.62] text-[#b9c9d2]">
              {description}
            </p>
          </div>

          <div
            aria-label={statsLabel}
            className={cn(
              "relative z-[1] grid grid-cols-2 border-t border-l border-[rgba(209,230,241,0.16)]",
              "max-[980px]:border-l-0"
            )}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[116px] border-r border-b border-[rgba(209,230,241,0.16)] bg-[rgba(255,255,255,0.025)] px-[22px] py-5 max-[680px]:min-h-[100px] max-[680px]:p-[17px]"
              >
                <strong className="block text-[30px] leading-none font-medium tracking-[-0.035em] text-white min-[681px]:text-[clamp(30px,2.8vw,40px)] max-[680px]:text-[29px]">
                  {stat.value}
                </strong>
                <span className="mt-[9px] block text-[14px] leading-[1.35] text-[#b4c7d1] max-[680px]:text-[12.5px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 mb-0 ml-0.5 text-[12px] leading-[1.45] text-[#7a888f]">
          {note}
        </p>
      </Container>
    </section>
  );
}
