import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/common/container";
import { supportPage } from "@/config/support";

import { SupportRequestForm } from "./support-request-form";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2.5 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] text-[#1767ad] uppercase">
      {children}
    </p>
  );
}

export function SupportPage() {
  const { hero, requestSection } = supportPage;

  return (
    <main id="main" className="bg-white text-[#14232b]">
      <section className="border-b border-[#e2e2dc] bg-inc-warm py-[54px] pb-14 max-[760px]:py-[38px] max-[760px]:pb-[34px]">
        <Container className="grid items-center gap-[clamp(48px,5vw,76px)] max-[980px]:grid-cols-1 min-[981px]:grid-cols-[minmax(0,1fr)_minmax(360px,0.68fr)]">
          <div className="min-w-0 max-w-[760px]">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="m-0 max-w-[720px] text-[clamp(38px,3.9vw,56px)] leading-[1.01] font-normal tracking-[-0.045em] text-[#15242d] max-[760px]:text-[42px]">
              {hero.title}
            </h1>
            <p className="mt-[18px] max-w-[720px] text-base leading-[1.62] text-[#596a72]">
              {hero.lead}
            </p>
            <div className="mt-[26px]">
              <Link
                href={hero.cta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-[999px] border border-inc-blue bg-inc-blue px-[22px] text-[15px] font-semibold text-white no-underline transition-colors hover:border-inc-blue-dark hover:bg-inc-blue-dark"
              >
                {hero.cta.label}
              </Link>
            </div>
          </div>

          <aside
            aria-label="Direct support contacts"
            className="w-full max-w-[560px] overflow-hidden rounded-[22px] border border-[#d9e3e8] bg-white shadow-[0_14px_36px_rgba(24,40,51,0.06)] min-[981px]:justify-self-end"
          >
            <div className="px-[26px] pt-6 pb-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.035em] text-[#4f626d]">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-[#1c9b66] shadow-[0_0_0_4px_rgba(28,155,102,0.10)]"
                />
                {hero.contactCard.liveLabel}
              </span>
              <h2 className="mt-2.5 text-[25px] leading-[1.18] font-medium tracking-[-0.025em] text-[#17242b]">
                {hero.contactCard.title}
              </h2>
            </div>

            <Link
              href={hero.contactCard.phone.href}
              className="grid min-h-[66px] grid-cols-[90px_minmax(0,1fr)] items-center gap-[18px] border-t border-[#e8edef] px-[26px] no-underline transition-colors hover:bg-[#f7fbff] focus-visible:bg-[#f7fbff] max-[640px]:grid-cols-1 max-[640px]:gap-1.5 max-[640px]:px-5 max-[640px]:py-3.5"
            >
              <span className="text-xs font-semibold tracking-[0.06em] text-[#74838b] uppercase">
                {hero.contactCard.phone.label}
              </span>
              <strong className="text-[15px] font-semibold wrap-anywhere text-[#17242b]">
                {hero.contactCard.phone.value}
              </strong>
            </Link>

            <Link
              href={hero.contactCard.email.href}
              className="grid min-h-[66px] grid-cols-[90px_minmax(0,1fr)] items-center gap-[18px] border-t border-[#e8edef] px-[26px] no-underline transition-colors hover:bg-[#f7fbff] focus-visible:bg-[#f7fbff] max-[640px]:grid-cols-1 max-[640px]:gap-1.5 max-[640px]:px-5 max-[640px]:py-3.5"
            >
              <span className="text-xs font-semibold tracking-[0.06em] text-[#74838b] uppercase">
                {hero.contactCard.email.label}
              </span>
              <strong className="text-[15px] font-semibold wrap-anywhere text-[#17242b]">
                {hero.contactCard.email.value}
              </strong>
            </Link>
          </aside>
        </Container>
      </section>

      <section
        id={requestSection.id}
        className="py-[clamp(56px,7vw,96px)]"
      >
        <Container className="grid items-start gap-[clamp(38px,7vw,92px)] max-[920px]:grid-cols-1 min-[921px]:grid-cols-[minmax(280px,0.74fr)_minmax(0,1.26fr)]">
          <aside className="max-w-[460px] min-[921px]:sticky min-[921px]:top-[110px]">
            <Eyebrow>{requestSection.eyebrow}</Eyebrow>
            <h2 className="mt-2.5 mb-3.5 text-[clamp(31px,3vw,42px)] leading-[1.05] font-normal tracking-[-0.038em] text-[#17242b]">
              {requestSection.title}
            </h2>
            <p className="m-0 max-w-[460px] leading-[1.65] text-[#64747d]">
              {requestSection.description}
            </p>

            <ol className="mt-7 list-none border-t border-[#e4e9ec] p-0">
              {requestSection.steps.map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-b border-[#e4e9ec] py-4 text-[#4f616b] leading-[1.45]"
                >
                  <span className="font-semibold text-[#0b65ce]">{step.number}</span>
                  <div>
                    <strong className="text-[#17242b]">{step.title}</strong>
                    <br />
                    {step.description}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-[22px] rounded-[18px] bg-[#102f44] px-5 py-[18px] text-white">
              <p className="m-0 mb-2 text-[13px] text-[#c8d8e2]">
                {requestSection.urgent.label}
              </p>
              <Link
                href={requestSection.urgent.href}
                className="font-semibold text-white no-underline"
              >
                {requestSection.urgent.phone}
              </Link>
            </div>
          </aside>

          <div className="min-w-0">
            <SupportRequestForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
