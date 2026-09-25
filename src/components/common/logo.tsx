import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="InCentral home, powered by Intangles"
      className={cn(
        "group inline-flex min-w-max flex-col items-start justify-center gap-0.5 py-1 text-inc-header-ink no-underline max-[760px]:gap-px max-[760px]:py-[3px]",
        className
      )}
    >
      <span className="block whitespace-nowrap text-[21px] leading-none font-medium tracking-[-0.043em] text-[#182329] transition-colors group-hover:text-[#0f1b21] max-[760px]:text-lg">
        <span className="font-semibold text-inc-blue">In</span>Central
      </span>
      <span className="ml-px block whitespace-nowrap text-[9.5px] leading-[1.15] font-medium tracking-[0.005em] text-[#75848c] transition-colors group-hover:text-[#5f7078] max-[760px]:text-[8.5px] max-[760px]:tracking-normal">
        Powered by{" "}
        <span className="font-semibold text-[#56666e]">Intangles</span>
      </span>
    </Link>
  );
}
