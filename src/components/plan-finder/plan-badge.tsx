import { cn } from "@/lib/utils";

type PlanBadgeProps = {
  label: string;
  variant: "value" | "match" | "partial";
  className?: string;
};

export function PlanBadge({ label, variant, className }: PlanBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center gap-2 rounded-full border px-[11px] text-[11px] leading-none font-semibold whitespace-nowrap",
        "before:size-2 before:shrink-0 before:rounded-full before:bg-current before:content-['']",
        variant === "value" &&
          "border-[#d2eadf] bg-[#eef8f4] text-[#24745c]",
        variant === "match" &&
          "border-[#d2e2f6] bg-[#eef5ff] text-[#1767ad]",
        variant === "partial" &&
          "border-[#d2e2f6] bg-[#eef5ff] text-[#1767ad] uppercase tracking-[0.035em]",
        className
      )}
    >
      {label}
    </span>
  );
}
