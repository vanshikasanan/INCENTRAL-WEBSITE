import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { notFoundPage } from "@/config/not-found";
import { cn } from "@/lib/utils";

function PageButton({
  href,
  label,
  variant = "primary",
  className,
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-[999px] px-[22px] text-[15px] font-semibold no-underline transition-colors",
        variant === "primary" &&
          "border border-inc-blue bg-inc-blue text-white hover:border-inc-blue-dark hover:bg-inc-blue-dark",
        variant === "secondary" &&
          "border border-[#2a3338] bg-white text-inc-ink hover:bg-[#f6f7f7]",
        className
      )}
    >
      {label}
    </Link>
  );
}

export function NotFoundPage() {
  const copy = notFoundPage;

  return (
    <main id="main" className="relative overflow-hidden bg-inc-warm text-inc-ink">
      <section
        aria-labelledby="notFoundTitle"
        className="relative border-b border-[#e3e1dc] py-[68px] pb-[76px] max-[1000px]:py-12 max-[1000px]:pb-[60px] max-[760px]:py-[34px] max-[760px]:pb-[42px]"
      >
        <Container className="relative grid items-center gap-[58px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[34px] min-[1001px]:grid-cols-[minmax(0,0.86fr)_minmax(480px,1.14fr)]">
          <div className="relative z-[2] max-w-[700px]">
            <p className="mb-[18px] inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.12em] text-[#0565cf] uppercase">
              <span className="h-0.5 w-[26px] rounded-full bg-[#0565cf]" aria-hidden="true" />
              {copy.code}
            </p>

            <h1
              id="notFoundTitle"
              className="m-0 max-w-[610px] text-[clamp(44px,5vw,70px)] leading-[0.98] font-normal tracking-[-0.052em] text-[#172126] max-[760px]:text-[clamp(39px,12vw,54px)]"
            >
              {copy.title}
            </h1>

            <div className="mt-6 max-w-[560px] rounded-[16px] border border-[#d9e3e8] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(24,40,51,0.04)]">
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-2 shrink-0 rounded-full bg-[#0565cf] shadow-[0_0_0_4px_rgba(5,101,207,0.12)]"
                />
                <div>
                  <p className="m-0 text-sm font-semibold text-[#1a3340]">
                    {copy.devStatus.label}
                  </p>
                  <p className="mt-1 mb-0 text-[13px] leading-[1.5] text-[#667780]">
                    {copy.devStatus.hint}
                  </p>
                </div>
              </div>
              <div className="mt-3.5 h-1.5 overflow-hidden rounded-full bg-[#e6eef3]">
                <span className="inc-not-found-progress block h-full w-2/5 rounded-full bg-[linear-gradient(90deg,#0565cf,#58b5dd,#0565cf)] bg-[length:200%_100%]" />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-[11px] max-[760px]:grid max-[760px]:w-full max-[760px]:grid-cols-1">
              <PageButton href={copy.actions.primary.href} label={copy.actions.primary.label} />
              <PageButton
                href={copy.actions.secondary.href}
                label={copy.actions.secondary.label}
                variant="secondary"
              />
            </div>

            <div
              aria-label="Other useful routes"
              className="mt-6 flex flex-wrap items-center gap-x-[18px] gap-y-2.5 border-t border-[#d9ddd9] pt-5 max-[760px]:mt-5 max-[760px]:pt-[17px]"
            >
              <span className="w-full text-xs font-semibold tracking-[0.08em] text-[#7b898f] uppercase min-[420px]:w-auto">
                {copy.shortcuts.label}
              </span>
              {copy.shortcuts.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13.5px] font-semibold text-[#31596f] no-underline hover:underline hover:underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative min-h-[455px] overflow-hidden rounded-[28px] bg-[#dfeaf1] shadow-[0_22px_48px_rgba(25,44,56,0.13),0_5px_16px_rgba(25,44,56,0.07)] max-[1000px]:min-h-[380px] max-[760px]:min-h-[300px] max-[760px]:rounded-[20px] max-[430px]:min-h-[255px]"
          >
            <Image
              src={copy.visual.image}
              alt=""
              fill
              sizes="(max-width: 1000px) 100vw, 54vw"
              className="object-cover object-[center_62%] saturate-[0.86] contrast-[0.98]"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,55,0.04)_28%,rgba(8,34,55,0.42)_100%)]" />

            <div className="absolute inset-6 z-[2] max-[760px]:inset-[18px]">
              <p className="absolute top-0 right-0 m-0 text-[clamp(62px,7vw,108px)] leading-[0.9] font-semibold tracking-[-0.07em] text-white/92 drop-shadow-[0_4px_20px_rgba(11,42,62,0.17)] max-[430px]:text-[68px]">
                404
              </p>

              <div className="absolute right-[7%] bottom-[12%] left-[7%] h-[142px] max-[430px]:bottom-[13%] max-[430px]:h-[110px]">
                <svg
                  viewBox="0 0 620 150"
                  className="size-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M18 116 C106 60, 171 142, 256 92 S393 25, 486 69 S551 105, 604 43"
                    fill="none"
                    stroke="#77b9f4"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="opacity-92"
                  />
                  <path
                    d="M18 116 C106 60, 171 142, 256 92 S393 25, 486 69 S551 105, 604 43"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="9 12"
                    className="drop-shadow-[0_3px_5px_rgba(8,37,56,0.2)]"
                  />
                </svg>
              </div>

              <span className="inc-not-found-pin absolute right-[4%] bottom-[20%] block size-12 rotate-[-45deg] rounded-[50%_50%_50%_0] border-[6px] border-white/95 bg-[#0565cf] shadow-[0_8px_22px_rgba(8,37,56,0.22)] max-[760px]:size-10 max-[760px]:border-[5px]">
                <span className="absolute inset-2.5 rounded-full bg-white max-[760px]:inset-2" />
              </span>

              <p className="absolute bottom-[17px] left-[18px] m-0 inline-flex items-center gap-2.5 rounded-full border border-white/55 bg-[rgba(247,250,252,0.9)] px-[13px] py-2.5 text-[12.5px] font-semibold text-[#294556] shadow-[0_8px_22px_rgba(17,44,60,0.12)] backdrop-blur-sm max-[430px]:px-[11px] max-[430px]:py-[9px] max-[430px]:text-[11.5px]">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#0565cf] shadow-[0_0_0_5px_rgba(5,101,207,0.12)]"
                />
                {copy.visual.note}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
