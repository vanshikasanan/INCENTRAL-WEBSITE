"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { Container } from "@/components/common/container";
import { helpPage } from "@/config/help";
import type { HelpSearchRecord } from "@/lib/help-search";
import { cn } from "@/lib/utils";

import { HelpSearch } from "./help-search";
import { HelpTopicIcon } from "./help-topic-icon";

function Eyebrow({
  children,
  theme = "light",
}: {
  children: ReactNode;
  theme?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "mb-2 text-[12px] leading-[1.22] font-semibold tracking-[0.085em] uppercase",
        theme === "dark" ? "text-[#9fd8ff]" : "text-[#1767ad]"
      )}
    >
      {children}
    </p>
  );
}

function PrimaryButton({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-[999px] border border-white bg-white px-[22px] text-[15px] font-semibold text-[#0e2b3d] no-underline transition-colors hover:bg-[#f4f8fb]",
        className
      )}
    >
      {label}
    </Link>
  );
}

export function HelpPage() {
  const faqRefs = useRef<Record<string, HTMLDetailsElement | null>>({});

  const searchRecords = useMemo<HelpSearchRecord[]>(() => {
    const topics = helpPage.topicsSection.topics.map((topic) => ({
      id: topic.id,
      kind: "topic" as const,
      title: topic.title,
      searchText: topic.searchText,
      href: topic.href,
    }));

    const faqs = helpPage.faqSection.faqs.map((faq) => ({
      id: faq.id,
      kind: "faq" as const,
      title: faq.question,
      searchText: faq.searchText,
      href: `/help#${faq.id}`,
    }));

    return [...topics, ...faqs];
  }, []);

  const openFaq = useCallback((id: string) => {
    const target = faqRefs.current[id] ?? document.getElementById(id);
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
      target.querySelector("summary")?.focus({ preventScroll: true });
    }
  }, []);

  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (id) openFaq(id);
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFaq]);

  const { hero, supportCard, topicsSection, faqSection, closeSection } = helpPage;

  return (
    <main id="main" className="bg-white text-[#14232b]">
      <section className="border-b border-[#e2e2dc] bg-inc-warm py-[54px] pb-14 max-[640px]:py-[38px] max-[640px]:pb-[42px]">
        <Container className="grid items-center gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-7 min-[981px]:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.65fr)] min-[981px]:gap-16">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="m-0 max-w-[760px] text-[clamp(46px,5vw,68px)] leading-[0.97] font-normal tracking-[-0.05em] text-[#14232b] max-[640px]:text-[40px]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-[760px] text-[clamp(24px,2.5vw,34px)] leading-[1.12] font-medium tracking-[-0.03em] text-[#203844]">
              {hero.question}
            </p>
            <p className="mt-2.5 max-w-[690px] text-[17px] leading-[1.55] text-[#5b6c75] max-[640px]:text-[15px]">
              {hero.lead}
            </p>

            <HelpSearch records={searchRecords} onActivateFaq={openFaq} />
          </div>

          <aside className="rounded-[22px] bg-[#0e2b3d] px-7 py-7 text-white shadow-[0_20px_44px_rgba(14,43,61,0.14)] max-[980px]:max-w-[620px]">
            <p className="m-0 text-[11px] font-semibold tracking-[0.09em] text-[#9fd8ff] uppercase">
              {supportCard.kicker}
            </p>
            <h2 className="mt-2.5 text-[27px] leading-[1.12] font-medium tracking-[-0.03em]">
              {supportCard.title}
            </h2>
            <p className="mt-3 text-[13.5px] leading-[1.55] text-[#bdd0db]">
              {supportCard.description}
            </p>
            <PrimaryButton
              href={supportCard.cta.href}
              label={supportCard.cta.label}
              className="mt-[22px]"
            />
            <div className="mt-[22px] flex justify-between gap-4 border-t border-white/15 pt-4 text-xs text-[#9db5c3] max-[640px]:flex-col max-[640px]:gap-1.5">
              <span>{supportCard.meta.label}</span>
              <Link
                href={supportCard.meta.phoneHref}
                className="font-semibold text-white no-underline"
              >
                {supportCard.meta.phone}
              </Link>
            </div>
          </aside>
        </Container>
      </section>

      <section id={topicsSection.id} className="bg-white py-[62px] max-[640px]:py-[46px]">
        <Container>
          <div className="mb-[26px] grid items-end gap-10 max-[980px]:grid-cols-1 max-[980px]:gap-2.5 min-[981px]:grid-cols-[minmax(0,0.8fr)_minmax(0,0.6fr)]">
            <div>
              <Eyebrow>{topicsSection.eyebrow}</Eyebrow>
              <h2 className="m-0 text-[clamp(32px,3.4vw,46px)] leading-[1.02] font-normal tracking-[-0.04em] text-[#14232b]">
                {topicsSection.title}
              </h2>
            </div>
            <p className="m-0 max-w-[420px] text-sm leading-[1.55] text-[#64757e] min-[981px]:justify-self-end">
              {topicsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-[980px]:grid-cols-2 max-[640px]:grid-cols-1">
            {topicsSection.topics.map((topic) => (
              <Link
                key={topic.id}
                href={topic.href}
                className="grid min-h-[122px] grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3.5 rounded-[18px] border border-[#dbe4e8] bg-white p-5 no-underline transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#9fc3e7] hover:shadow-[0_12px_26px_rgba(31,54,70,0.07)] max-[640px]:min-h-[104px]"
              >
                <span className="grid size-11 place-items-center rounded-[13px] bg-[#edf5ff] text-[#0864c8]">
                  <HelpTopicIcon kind={topic.icon} />
                </span>
                <div>
                  <h3 className="m-0 text-[17px] font-semibold text-[#19313f]">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 mb-0 text-[12.5px] leading-[1.45] text-[#687982]">
                    {topic.description}
                  </p>
                </div>
                <span aria-hidden="true" className="text-[21px] text-[#0b67c9]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section
        id={faqSection.id}
        className="border-t border-[#e4e9ec] bg-[#f6f8fa] py-[62px] max-[640px]:py-[46px]"
      >
        <Container className="mx-auto max-w-[980px]">
          <div className="mb-5">
            <Eyebrow>{faqSection.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(32px,3.4vw,46px)] leading-[1.02] font-normal tracking-[-0.04em] text-[#14232b]">
              {faqSection.title}
            </h2>
          </div>

          <div className="grid gap-2.5">
            {faqSection.faqs.map((faq) => (
              <details
                key={faq.id}
                id={faq.id}
                ref={(node) => {
                  faqRefs.current[faq.id] = node;
                }}
                className="group overflow-hidden rounded-[15px] border border-[#d9e3e8] bg-white open:[&_summary]:text-[#0565cf]"
              >
                <summary className="grid min-h-[62px] cursor-pointer list-none grid-cols-[minmax(0,1fr)_24px] items-center gap-[18px] px-[18px] text-[15px] font-semibold text-[#20343f] [&::-webkit-details-marker]:hidden max-[640px]:min-h-[58px] max-[640px]:px-[15px] max-[640px]:text-sm">
                  {faq.question}
                  <span aria-hidden="true" className="relative size-5 shrink-0">
                    <span className="absolute top-1/2 left-1/2 block h-[1.5px] w-[11px] -translate-x-1/2 -translate-y-1/2 bg-[#526b78]" />
                    <span className="absolute top-1/2 left-1/2 block h-[11px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-[#526b78] transition-transform duration-150 group-open:scale-y-0" />
                  </span>
                </summary>
                <div className="px-[18px] pb-[18px] pr-[58px] text-[13.5px] leading-[1.58] text-[#5e7079] max-[640px]:px-[15px] max-[640px]:pr-[42px] max-[640px]:pb-4">
                  <p className="m-0">{faq.answer}</p>
                  {faq.link ? (
                    <Link
                      href={faq.link.href}
                      className="mt-2.5 inline-flex font-semibold text-[#0565cf] no-underline"
                    >
                      {faq.link.label}
                    </Link>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0d1f2b] py-12 text-white max-[640px]:py-[38px]">
        <Container className="grid items-center gap-8 max-[640px]:grid-cols-1 min-[641px]:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <Eyebrow theme="dark">{closeSection.eyebrow}</Eyebrow>
            <h2 className="m-0 text-[clamp(30px,3vw,42px)] leading-[1.04] font-normal tracking-[-0.04em]">
              {closeSection.title}
            </h2>
            <p className="mt-2.5 max-w-[700px] text-sm leading-[1.55] text-[#aec0ca]">
              {closeSection.description}
            </p>
          </div>
          <PrimaryButton
            href={closeSection.cta.href}
            label={closeSection.cta.label}
            className="max-[640px]:w-full"
          />
        </Container>
      </section>
    </main>
  );
}
