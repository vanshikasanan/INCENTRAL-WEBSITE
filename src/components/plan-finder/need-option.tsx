"use client";

import type { NeedOptionConfig } from "@/config/plan-finder";
import { cn } from "@/lib/utils";

function NeedIcon({ kind }: { kind: NeedOptionConfig["kind"] }) {
  switch (kind) {
    case "tracking":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <path
            d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "fuel":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <path d="M5 20V5.8A1.8 1.8 0 0 1 6.8 4h6.4A1.8 1.8 0 0 1 15 5.8V20" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 20h12M7.5 7.5h5v4h-5zM15 8h2l2 2v5.7a1.7 1.7 0 0 0 3.4 0V9.5l-2.1-2.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m7 17 3-3m0 0 2 2m-2-2 2-2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "health":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <path d="M3 12h4l2-6 4 12 2.5-7H21" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "video":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <rect x="3" y="6" width="13" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9.5" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m16 10 5-2.5v9L16 14" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "driver":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6 12h12M12 6v6" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 15.5 12 12l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "operations":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
          <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="9" cy="7" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="15" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="11" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

type NeedOptionProps = {
  option: NeedOptionConfig;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function NeedOption({ option, checked, onChange }: NeedOptionProps) {
  return (
    <label
      data-need-kind={option.kind}
      className={cn(
        "relative flex min-h-[164px] min-w-0 cursor-pointer flex-col rounded-[17px] border border-[#dbe5eb] bg-[rgba(255,255,255,0.94)] px-[18px] pt-[18px] pb-[17px] shadow-[0_8px_24px_rgba(31,61,81,0.035)] transition-[border-color,box-shadow,transform,background] duration-200",
        "hover:border-[#bfd2df] hover:bg-white hover:shadow-[0_16px_34px_rgba(24,56,78,0.08)] hover:-translate-y-0.5",
        "has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-[rgba(9,104,216,0.16)] has-[:focus-visible]:outline-offset-[3px]",
        checked &&
          "border-[#74a9ee] bg-[linear-gradient(150deg,#ffffff_0%,#f2f7ff_100%)] shadow-[0_0_0_3px_rgba(9,104,216,0.065),0_18px_38px_rgba(20,77,143,0.10)]",
        option.kind === "fuel" && "[--need-accent:#09979c] [--need-icon-bg:#eaf8f7]",
        option.kind === "health" && "[--need-accent:#6843bd] [--need-icon-bg:#f3eefc]",
        option.kind === "video" && "[--need-accent:#dc8103] [--need-icon-bg:#fff5e7]",
        option.kind === "tracking" && "[--need-accent:#1268cd] [--need-icon-bg:#edf4ff]",
        option.kind === "driver" && "[--need-accent:#6843bd] [--need-icon-bg:#f3eefc]",
        option.kind === "operations" && "[--need-accent:#2764d8] [--need-icon-bg:#eef3fd]"
      )}
    >
      <input
        type="checkbox"
        value={option.value}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
      />

      <div className="flex items-start justify-between gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-[var(--need-icon-bg)] text-[var(--need-accent)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]">
          <NeedIcon kind={option.kind} />
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-[7px] border-[1.5px] border-[#c9d5dc] bg-white text-[15px] leading-none font-bold text-white shadow-[0_1px_2px_rgba(16,43,58,0.03)] transition-all duration-200",
            checked && "border-[#0968d8] bg-[#0968d8] shadow-[0_6px_14px_rgba(9,104,216,0.23)]"
          )}
        >
          {checked ? "✓" : null}
        </span>
      </div>

      <span className="mt-[13px] block min-w-0">
        <strong className="block text-base leading-[1.28] font-semibold tracking-[-0.01em] text-[#102b3a]">
          {option.title}
        </strong>
        <small className="mt-[5px] block text-[13.5px] leading-[1.48] text-[#71838f]">
          {option.description}
        </small>
      </span>
    </label>
  );
}
