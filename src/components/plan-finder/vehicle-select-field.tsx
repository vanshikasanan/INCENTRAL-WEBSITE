"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type VehicleSelectFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  disabled?: boolean;
  options: { value: string; label: string }[];
  onValueChange: (value: string) => void;
  className?: string;
  connected?: boolean;
};

export function VehicleSelectField({
  id,
  label,
  placeholder,
  value,
  disabled = false,
  options,
  onValueChange,
  className,
  connected = false,
}: VehicleSelectFieldProps) {
  return (
    <div
      className={cn(
        connected
          ? [
              "relative min-w-0 px-[18px] pt-[15px] pb-[13px] transition-[background,box-shadow] duration-150",
              "max-[900px]:px-4 max-[900px]:py-3.5",
              "max-[900px]:not-last:after:absolute max-[900px]:not-last:after:right-4 max-[900px]:not-last:after:bottom-0 max-[900px]:not-last:after:left-4 max-[900px]:not-last:after:h-px max-[900px]:not-last:after:bg-[#dbe5ea] max-[900px]:not-last:after:content-['']",
              "min-[901px]:not-last:after:absolute min-[901px]:not-last:after:top-3.5 min-[901px]:not-last:after:right-0 min-[901px]:not-last:after:bottom-3.5 min-[901px]:not-last:after:w-px min-[901px]:not-last:after:bg-[#dbe5ea] min-[901px]:not-last:after:content-['']",
              "has-[[data-slot=select-trigger][data-popup-open]]:bg-[#f7fbfe] has-[[data-slot=select-trigger][data-popup-open]]:shadow-[inset_0_0_0_2px_rgba(23,103,173,0.16)]",
              "has-[[data-slot=select-trigger]:focus-visible]:bg-[#f7fbfe] has-[[data-slot=select-trigger]:focus-visible]:shadow-[inset_0_0_0_2px_rgba(23,103,173,0.16)]",
            ]
          : [
              "block rounded-2xl border border-[#d3dfe5] bg-[#fbfcfd] px-4 py-[13px] transition-[border-color,background,box-shadow] duration-200",
              "has-[[data-slot=select-trigger][data-popup-open]]:border-[#4a94c5] has-[[data-slot=select-trigger][data-popup-open]]:bg-white has-[[data-slot=select-trigger][data-popup-open]]:shadow-[0_0_0_4px_rgba(69,145,196,0.09)]",
              "has-[[data-slot=select-trigger]:focus-visible]:border-[#4a94c5] has-[[data-slot=select-trigger]:focus-visible]:bg-white has-[[data-slot=select-trigger]:focus-visible]:shadow-[0_0_0_4px_rgba(69,145,196,0.09)]",
            ],
        className
      )}
    >
      <label
        htmlFor={id}
        className={cn(
          "block text-[#71838c]",
          connected
            ? "mb-2 text-[12.5px] leading-[1.25] font-medium"
            : "mb-1.5 text-xs font-medium text-[#687d87]"
        )}
      >
        {label}
      </label>

      <Select
        value={value || null}
        onValueChange={(next) => onValueChange(next ?? "")}
        disabled={disabled}
        items={options}
      >
        <SelectTrigger
          id={id}
          className={cn(
            "w-full min-w-0 border-0 bg-transparent px-0 shadow-none",
            "text-[15px] font-medium text-[#173844]",
            "data-placeholder:text-[#a5b0b6]",
            "disabled:bg-transparent disabled:text-[#9aa8ae]",
            "focus-visible:border-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-[#0876ed] focus-visible:outline-offset-1",
            connected ? "h-[34px] [&_svg]:size-5 [&_svg]:text-[#1767ad]" : "h-[42px] [&_svg]:size-7 [&_svg]:text-[#1767ad]"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          sideOffset={8}
          align="start"
          alignItemWithTrigger={false}
          className="rounded-xl border border-[#d3dfe5] bg-white p-1.5 text-[#1d3945] shadow-[0_12px_32px_rgba(24,49,64,0.12)] ring-0"
        >
          <div
            role="presentation"
            className="pointer-events-none mb-1 rounded-lg bg-[#f3f8fd] px-3 py-2 text-[13px] font-medium text-[#5d7783]"
          >
            {placeholder}
          </div>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              label={option.label}
              className="rounded-lg py-2.5 pr-9 pl-3 text-[15px] font-medium text-[#1d3945] focus:bg-[#f3f8fd] focus:text-[#1767ad] data-highlighted:bg-[#f3f8fd] data-highlighted:text-[#1767ad] [&_svg]:text-[#1767ad]"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
