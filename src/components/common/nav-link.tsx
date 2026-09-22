import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  active?: boolean;
};

export function NavLink({ active, className, children, ...props }: NavLinkProps) {
  return (
    <Link
      data-active={active ? "true" : "false"}
      className={cn(
        "inc-nav-underline relative flex min-h-12 items-center px-0.5 text-[15px] font-medium whitespace-nowrap text-inc-nav no-underline transition-colors duration-200",
        "hover:text-inc-nav-hover focus-visible:text-inc-nav-hover",
        active && "text-inc-nav-active",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
