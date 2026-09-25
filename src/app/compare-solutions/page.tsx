import Link from "next/link";

import { Container } from "@/components/common/container";
import { planProducts } from "@/config/plans";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Compare Solutions",
  description:
    "Compare InCentral fleet intelligence solutions by capability. Check vehicle compatibility to see available options and pricing.",
  path: "/compare-solutions",
});

const progression = [
  { step: "01 · Tracking", productId: "incert" as const },
  { step: "02 · Fuel & repair", productId: "insight" as const },
  { step: "03 · Predictive health", productId: "ingenious" as const },
  { step: "04 · Predictive + video", productId: "invision-plus" as const },
];

export default function CompareSolutionsPage() {
  return (
    <main id="main" className="bg-white text-[#14232b]">
      <section
        aria-labelledby="compareHeroTitle"
        className="border-b border-[#e3e9ec] bg-[linear-gradient(180deg,#f8fbfd_0%,#fff_72%)] py-14 pb-12"
      >
        <Container>
          <p className="m-0 text-[11px] font-bold tracking-[0.12em] text-[#1767ad] uppercase">
            Compare solutions
          </p>
          <h1
            id="compareHeroTitle"
            className="mt-3 mb-0 max-w-[760px] text-[clamp(32px,4vw,44px)] leading-[1.05] font-normal tracking-[-0.04em] text-[#163541]"
          >
            See how each InCentral solution builds on the last.
          </h1>
          <p className="mt-4 mb-0 max-w-[680px] text-[15px] leading-[1.55] text-[#61747d]">
            Compare included capabilities across InCert, InSight, InGenious and InVision+. Check
            your vehicle when you are ready to see compatible options and pricing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#check-compatibility"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-inc-blue bg-inc-blue px-5 text-[14px] font-semibold text-white no-underline hover:bg-inc-blue-dark"
            >
              Check compatibility
            </Link>
            <a
              href="#compare-progression"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#c9d5dc] bg-white px-5 text-[14px] font-semibold text-[#15242d] no-underline hover:bg-[#f6f7f7]"
            >
              Compare capabilities
            </a>
          </div>
          <p className="mt-4 mb-0 text-[13px] text-[#6d7c84]">
            Pricing is shown after vehicle compatibility is confirmed.
          </p>
        </Container>
      </section>

      <section aria-label="Solution progression" id="compare-progression" className="py-12">
        <Container>
          <div className="grid gap-4 min-[900px]:grid-cols-2 min-[1200px]:grid-cols-4">
            {progression.map(({ step, productId }) => {
              const product = planProducts.find((p) => p.id === productId);
              if (!product) return null;
              return (
                <article
                  key={productId}
                  className="flex min-h-full flex-col rounded-[18px] border border-[#dde5e9] bg-white p-5 shadow-[0_8px_24px_rgba(24,40,51,0.04)]"
                >
                  <span className="text-[11px] font-bold tracking-[0.06em] text-[#6a7880] uppercase">
                    {step}
                  </span>
                  <h2 className="mt-2 mb-0 text-[22px] font-semibold tracking-[-0.03em] text-[#163541]">
                    {product.name}
                  </h2>
                  <p className="mt-2 mb-0 flex-1 text-[13.5px] leading-[1.5] text-[#61747d]">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-4 inline-flex text-[13px] font-semibold text-[#1767ad] no-underline hover:underline"
                  >
                    View {product.name} →
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e3e9ec] bg-[#f8fafb] py-12">
        <Container className="text-center">
          <p className="mx-auto mb-0 max-w-[560px] text-[15px] leading-[1.55] text-[#61747d]">
            Found the capabilities you need? Check your vehicle to see which solutions are
            compatible and reveal pricing.
          </p>
          <Link
            href="/#check-compatibility"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-inc-blue bg-inc-blue px-6 text-[14px] font-semibold text-white no-underline hover:bg-inc-blue-dark"
          >
            Check compatibility &amp; price
          </Link>
        </Container>
      </section>
    </main>
  );
}
