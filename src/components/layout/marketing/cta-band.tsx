import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  children?: ReactNode;
  theme?: "light" | "dark";
  className?: string;
};

export function CtaBand({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
  theme = "light",
  className,
}: CtaBandProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={cn(
        "border-t py-14 max-[760px]:py-11",
        isDark
          ? "border-[#1a3340] bg-[#102f40] text-white"
          : "border-[#e3e1dc] bg-[#f6f8fa] text-[#14232b]",
        className
      )}
    >
      <Container className="grid items-end gap-8 max-[900px]:grid-cols-1 min-[901px]:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          {eyebrow ? (
            <p
              className={cn(
                "mb-2 text-[12px] font-semibold tracking-[0.085em] uppercase",
                isDark ? "text-[#9fd8ff]" : "text-[#1767ad]"
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              "m-0 max-w-[640px] text-[clamp(28px,3vw,38px)] leading-[1.06] font-normal tracking-[-0.03em]",
              isDark ? "text-white" : "text-[#15242d]"
            )}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={cn(
                "mt-3 mb-0 max-w-[620px] text-[15px] leading-[1.6]",
                isDark ? "text-[#9eb7c4]" : "text-[#596a72]"
              )}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2.5 max-[760px]:w-full max-[760px]:grid max-[760px]:grid-cols-1">
          {children}
          {primaryAction ? (
            <Link
              href={primaryAction.href}
              className={cn(
                "inline-flex min-h-12 items-center justify-center rounded-[999px] px-[22px] text-[15px] font-semibold no-underline transition-colors",
                isDark
                  ? "border border-white bg-white text-[#0e2b3d] hover:bg-[#f4f8fb]"
                  : "border border-inc-blue bg-inc-blue text-white hover:border-inc-blue-dark hover:bg-inc-blue-dark"
              )}
            >
              {primaryAction.label}
            </Link>
          ) : null}
          {secondaryAction ? (
            <Link
              href={secondaryAction.href}
              className={cn(
                "inline-flex min-h-12 items-center justify-center rounded-[999px] px-[22px] text-[15px] font-semibold no-underline transition-colors",
                isDark
                  ? "border border-[#416273] bg-transparent text-white hover:bg-[#183b4d]"
                  : "border border-[#2a3338] bg-white text-inc-ink hover:bg-[#f6f7f7]"
              )}
            >
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
