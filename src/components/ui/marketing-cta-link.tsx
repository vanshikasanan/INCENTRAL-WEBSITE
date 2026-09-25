import type { ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const marketingCtaLinkVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-[22px] text-[15px] font-semibold no-underline transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "border-inc-blue bg-inc-blue text-white hover:border-inc-blue-dark hover:bg-inc-blue-dark",
        secondary:
          "border-[#2a3338] bg-white text-inc-ink hover:bg-[#f6f7f7]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type MarketingCtaLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof marketingCtaLinkVariants>;

export function MarketingCtaLink({
  className,
  variant,
  ...props
}: MarketingCtaLinkProps) {
  return (
    <Link
      className={cn(marketingCtaLinkVariants({ variant }), className)}
      {...props}
    />
  );
}

export { marketingCtaLinkVariants };
