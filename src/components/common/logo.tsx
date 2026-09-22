import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Intangles InCentral home"
      className={cn(
        "group inline-flex min-w-max items-center gap-[13px] overflow-hidden text-inc-header-ink no-underline max-[1099px]:gap-2.5 max-[620px]:gap-2 max-[390px]:gap-1.5",
        className
      )}
    >
      <Image
        src={siteConfig.assets.logo}
        alt="Intangles"
        width={160}
        height={38}
        className="block h-[38px] w-auto object-contain max-[1099px]:h-8 max-[620px]:h-[29px] max-[390px]:h-[25px]"
        priority
      />
      <span
        aria-hidden="true"
        className="h-[31px] w-px shrink-0 bg-[linear-gradient(180deg,transparent_0%,#cfd7db_18%,#cfd7db_82%,transparent_100%)] transition-[background] duration-[220ms] group-hover:bg-[linear-gradient(180deg,transparent_0%,#69a9eb_18%,#0565cf_82%,transparent_100%)] max-[1099px]:h-[27px] max-[620px]:h-6 max-[390px]:h-[21px]"
      />
      <span className="whitespace-nowrap text-xl font-medium tracking-[-0.042em] text-[#182329] max-[1099px]:text-lg max-[620px]:text-[17px] max-[390px]:text-[15px] max-[390px]:tracking-[-0.035em]">
        <span className="font-semibold text-inc-blue">In</span>Central
      </span>
    </Link>
  );
}
