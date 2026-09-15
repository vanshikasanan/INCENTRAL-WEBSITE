import Link from "next/link";

import { Container } from "@/components/common/container";
import { notFoundPage } from "@/config/not-found";
import { cn } from "@/lib/utils";

import { AnimatedBrandMark } from "./animated-brand-mark";

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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(5,101,207,0.07),transparent_34%),radial-gradient(circle_at_88%_0%,rgba(88,181,221,0.08),transparent_28%)]"
        />

        <Container className="relative grid items-center gap-[58px] max-[1000px]:grid-cols-1 max-[1000px]:gap-[34px] min-[1001px]:grid-cols-[minmax(0,0.86fr)_minmax(480px,1.14fr)]">
          <div className="relative z-[2] max-w-[700px]">
            <p className="mb-[18px] inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.12em] text-inc-blue uppercase">
              <span className="h-0.5 w-[26px] rounded-full bg-inc-blue" />
              {copy.code}
            </p>

            <h1
              id="notFoundTitle"
              className="m-0 max-w-[610px] text-[clamp(44px,5vw,70px)] leading-[0.98] font-normal tracking-[-0.052em] text-[#172126] max-[760px]:text-[clamp(39px,12vw,54px)]"
            >
              {copy.title}
            </h1>

            <p className="mt-[22px] max-w-[560px] text-base leading-[1.6] text-[#5c6a71] max-[760px]:mt-4 max-[760px]:text-[15px] max-[760px]:leading-normal">
              {copy.lead}
            </p>

            <div className="mt-7 max-w-[480px] rounded-2xl border border-[#d4dee6] bg-white/80 p-4 shadow-[0_10px_28px_rgba(24,44,58,0.05)] backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="m-0 text-sm font-semibold text-[#1a3340]">
                  {copy.devStatus.label}
                </p>
                <span className="inc-not-found-status inline-flex items-center gap-1.5 rounded-full border border-[#c8dff4] bg-[#edf5ff] px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-[#0565cf] uppercase">
                  <span className="size-1.5 rounded-full bg-[#0565cf]" />
                  Active
                </span>
              </div>
              <p className="mt-2 mb-0 text-[13px] leading-[1.5] text-[#667780]">
                {copy.devStatus.hint}
              </p>
              <div className="mt-3.5 h-1 overflow-hidden rounded-full bg-[#e6eef3]">
                <span className="inc-not-found-progress block h-full w-2/5 rounded-full bg-[linear-gradient(90deg,#0565cf,#58b5dd,#0565cf)] bg-[length:200%_100%]" />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-[11px] max-[760px]:mt-[22px] max-[760px]:grid max-[760px]:w-full max-[760px]:grid-cols-1">
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
              <span className="w-full text-[13px] font-medium text-[#687680] min-[420px]:w-auto">
                {copy.shortcuts.label}
              </span>
              {copy.shortcuts.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#0565cf] no-underline hover:text-inc-blue-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="relative min-h-[455px] overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#dfeaf1_0%,#c8dcea_48%,#b8d0e2_100%)] shadow-[0_22px_48px_rgba(25,44,56,0.13),0_5px_16px_rgba(25,44,56,0.07)] max-[1000px]:min-h-[380px] max-[760px]:min-h-[300px] max-[760px]:rounded-[20px] max-[430px]:min-h-[255px]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,34,55,0.04)_28%,rgba(8,34,55,0.42)_100%)]" />

            <div className="absolute inset-6 max-[760px]:inset-[18px]">
              <p className="absolute top-0 right-0 m-0 text-[clamp(62px,7vw,108px)] leading-[0.9] font-semibold tracking-[-0.07em] text-white/90 drop-shadow-[0_4px_20px_rgba(11,42,62,0.17)] max-[430px]:text-[68px]">
                404
              </p>

              <svg
                viewBox="0 0 420 120"
                className="absolute right-[7%] bottom-[12%] left-[7%] h-[142px] w-[86%] overflow-visible max-[430px]:h-[110px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M12 88 C 90 18, 150 102, 228 42 S 360 18, 408 72"
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="9 12"
                  className="inc-not-found-route opacity-90"
                />
              </svg>

              <div className="absolute top-1/2 left-1/2 w-[min(100%,320px)] -translate-x-1/2 -translate-y-[42%]">
                <AnimatedBrandMark />
              </div>

              <p className="absolute right-[18px] bottom-[17px] left-[18px] m-0 rounded-xl border border-white/25 bg-white/10 px-3.5 py-2.5 text-[12px] leading-[1.45] text-white/90 backdrop-blur-sm max-[430px]:text-[11.5px] max-[430px]:px-[11px] max-[430px]:py-[9px]">
                Building the next InCentral experience — routes appear here as they ship.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
