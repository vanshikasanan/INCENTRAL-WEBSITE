import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { ais140GuidePage } from "@/config/ais-140-guide";
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-[#1767ad] uppercase">
      {children}
    </p>
  );
}

export function Ais140GuidePage() {
  const { hero, routeSection, faqSection, nextSection } = ais140GuidePage;

  return (
    <main id="main" className="bg-white text-[#14232b]">
      <section className="border-t border-[#ece9e1] border-b border-[#e3e1da] bg-[#f6f5ef] py-12 pb-[52px] max-[620px]:py-[34px] max-[620px]:pb-[38px]">
        <Container className="grid items-end gap-14 max-[900px]:grid-cols-1 max-[900px]:gap-7 min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:gap-14">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="m-0 max-w-[760px] text-[clamp(43px,4.8vw,62px)] leading-[0.98] font-normal tracking-[-0.047em] text-[#14232b] max-[620px]:text-[41px]">
              {hero.title}
            </h1>
            <p className="mt-[18px] max-w-[800px] text-base leading-[1.62] text-[#53666f] max-[620px]:text-[15px]">
              {hero.lead}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 max-[620px]:grid max-[620px]:w-full max-[620px]:grid-cols-1">
            <PageButton href={hero.actions.primary.href} label={hero.actions.primary.label} />
            <PageButton
              href={hero.actions.secondary.href}
              label={hero.actions.secondary.label}
              variant="secondary"
            />
          </div>
        </Container>
      </section>

      <section aria-labelledby="aisRouteTitle" className="py-[58px] max-[620px]:py-11">
        <Container>
          <div className="max-w-[780px]">
            <Eyebrow>{routeSection.eyebrow}</Eyebrow>
            <h2
              id="aisRouteTitle"
              className="m-0 text-[clamp(31px,3.5vw,46px)] leading-[1.06] font-normal tracking-[-0.04em] text-[#14232b]"
            >
              {routeSection.title}
            </h2>
            <p className="mt-[13px] max-w-[700px] text-[14.5px] leading-[1.58] text-[#61747d]">
              {routeSection.description}
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
            {routeSection.routes.map((route) => {
              const isCertified = route.id === "certified";

              return (
                <article
                  key={route.id}
                  className={cn(
                    "rounded-[20px] border border-[#d8e2e6] bg-white px-7 py-[26px] max-[620px]:px-[22px] max-[620px]:py-[22px]",
                    isCertified && "border-[#a9cee6] bg-[#f5faff]"
                  )}
                >
                  <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.055em] text-[#17669e] uppercase">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-[9px] rounded-full bg-[#72a8c8]",
                        isCertified && "bg-[#176fc0]"
                      )}
                    />
                    <span>{route.label}</span>
                  </div>
                  <h3 className="mt-3.5 max-w-[590px] text-[22px] leading-[1.22] font-medium tracking-[-0.025em] text-[#14232b]">
                    {route.title}
                  </h3>
                  <ul className="mt-[18px] grid gap-2.5 border-t border-[#dfe7ea] pt-4 pl-5 text-[13.5px] leading-normal text-[#5d7079]">
                    {route.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section aria-labelledby="aisFaqTitle" className="bg-[#f7f9fa] py-[58px] max-[620px]:py-11">
        <Container className="grid items-start gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-7 min-[901px]:grid-cols-[minmax(250px,0.7fr)_minmax(0,1.3fr)]">
          <div className="max-w-[780px]">
            <Eyebrow>{faqSection.eyebrow}</Eyebrow>
            <h2
              id="aisFaqTitle"
              className="m-0 text-[clamp(31px,3.5vw,46px)] leading-[1.06] font-normal tracking-[-0.04em] text-[#14232b]"
            >
              {faqSection.title}
            </h2>
            <Link
              href={faqSection.callHref}
              className="mt-[18px] inline-block text-sm font-bold text-[#17669e] no-underline"
            >
              {faqSection.callLabel}
            </Link>
          </div>

          <div className="border-t border-[#d5dfe4]">
            {faqSection.faqs.map((faq) => (
              <details
                key={faq.id}
                open={"defaultOpen" in faq && faq.defaultOpen}
                className="group border-b border-[#d5dfe4]"
              >
                <summary className="relative cursor-pointer list-none py-[19px] pr-10 text-[15px] leading-[1.4] font-semibold text-[#14232b] [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="absolute top-3.5 right-2 text-2xl font-light text-[#2476ad] group-open:hidden"
                  >
                    +
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-3.5 right-2 hidden text-2xl font-light text-[#2476ad] group-open:inline"
                  >
                    −
                  </span>
                </summary>
                <p className="-mt-0.5 mb-5 mr-12 text-[13.5px] leading-[1.58] text-[#60747d]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#dcecf6] py-11 max-[620px]:py-[38px]">
        <Container className="grid items-center gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-7 min-[901px]:grid-cols-[minmax(0,1fr)_auto] min-[901px]:gap-[42px]">
          <div>
            <Eyebrow>{nextSection.eyebrow}</Eyebrow>
            <h2 className="m-0 max-w-[790px] text-[clamp(31px,3.5vw,46px)] leading-[1.06] font-normal tracking-[-0.04em] text-[#14232b]">
              {nextSection.title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 max-[620px]:grid max-[620px]:w-full max-[620px]:grid-cols-1">
            <PageButton
              href={nextSection.actions.primary.href}
              label={nextSection.actions.primary.label}
            />
            <PageButton
              href={nextSection.actions.secondary.href}
              label={nextSection.actions.secondary.label}
              variant="secondary"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
