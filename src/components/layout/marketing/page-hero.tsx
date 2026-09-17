import type { ReactNode } from "react";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  titleId?: string;
  lead?: ReactNode;
  actions?: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleId,
  lead,
  actions,
  className,
  containerClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-[#e2e2dc] bg-inc-warm py-[54px] pb-14 max-[760px]:py-[38px] max-[760px]:pb-[34px]",
        className
      )}
    >
      <Container
        className={cn(
          "grid items-end gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-7 min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:gap-14",
          containerClassName
        )}
      >
        <div>
          <p className="mb-2.5 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-[#1767ad] uppercase">
            {eyebrow}
          </p>
          <h1
            id={titleId}
            className="m-0 max-w-[760px] text-[clamp(38px,3.9vw,56px)] leading-[1.01] font-normal tracking-[-0.045em] text-[#15242d] max-[760px]:text-[42px]"
          >
            {title}
          </h1>
          {lead ? (
            <p className="mt-[18px] max-w-[720px] text-base leading-[1.62] text-[#596a72]">
              {lead}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex flex-wrap gap-2.5 max-[760px]:grid max-[760px]:w-full max-[760px]:grid-cols-1">
            {actions}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
