import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadProps = {
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  description?: ReactNode;
  align?: "split" | "stack";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHead({
  eyebrow,
  title,
  titleId,
  description,
  align = "split",
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeadProps) {
  const titleNode =
    typeof title === "string" ? (
      <h2
        id={titleId}
        className={cn(
          "m-0 max-w-[760px] text-[32px] leading-[1.04] font-normal tracking-[-0.038em] text-[#182b35] min-[761px]:text-[clamp(32px,3.1vw,42px)] max-[520px]:text-[31px]",
          titleClassName
        )}
      >
        {title}
      </h2>
    ) : (
      title
    );

  if (align === "stack") {
    return (
      <div className={cn("max-w-[780px]", className)}>
        {eyebrow ? (
          <p className="mb-2 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-[#1767ad] uppercase">
            {eyebrow}
          </p>
        ) : null}
        {titleNode}
        {description ? (
          <p
            className={cn(
              "mt-[13px] max-w-[700px] text-[14.5px] leading-[1.58] text-[#61747d]",
              descriptionClassName
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mb-[22px] flex items-end justify-between gap-[38px] max-[780px]:flex-col max-[780px]:items-start max-[780px]:gap-2",
        className
      )}
    >
      <div>
        {eyebrow ? (
          <p className="mb-2 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-[#1767ad] uppercase">
            {eyebrow}
          </p>
        ) : null}
        {titleNode}
      </div>
      {description ? (
        <p
          className={cn(
            "m-0 mb-[3px] max-w-[430px] text-left text-[14.5px] leading-[1.55] text-[#6a7c85] min-[781px]:text-right max-[680px]:text-sm",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
