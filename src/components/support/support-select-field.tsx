"use client";

import type { ReactNode } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

import {
  supportFieldClassName,
  supportSelectTriggerClassName,
} from "./support-field-styles";

type SupportSelectFieldProps = {
  id: string;
  name: string;
  label: ReactNode;
  placeholder: string;
  value: string;
  options: readonly string[];
  required?: boolean;
  onValueChange: (value: string) => void;
};

export function SupportSelectField({
  id,
  name,
  label,
  placeholder,
  value,
  options,
  required = false,
  onValueChange,
}: SupportSelectFieldProps) {
  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-[#17242b]">
        {label}
      </label>

      <input type="hidden" name={name} value={value} />

      <Select
        value={value || null}
        onValueChange={(next) => onValueChange(next ?? "")}
        items={selectOptions}
      >
        <SelectTrigger
          id={id}
          aria-required={required}
          className={cn(supportFieldClassName, supportSelectTriggerClassName)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          sideOffset={6}
          align="start"
          alignItemWithTrigger={false}
          className="rounded-[14px] border border-[#c9d5dc] bg-white p-1.5 text-[#17242b] shadow-[0_12px_32px_rgba(24,49,64,0.12)] ring-0"
        >
          {selectOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              label={option.label}
              className="rounded-[10px] py-2.5 pr-9 pl-3 text-[15px] font-medium text-[#17242b] focus:bg-[#f3f8fd] focus:text-[#1767ad] data-highlighted:bg-[#f3f8fd] data-highlighted:text-[#1767ad] [&_svg]:text-[#1767ad]"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
