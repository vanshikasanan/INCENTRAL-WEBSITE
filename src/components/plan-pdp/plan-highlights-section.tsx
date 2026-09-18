import { Container } from "@/components/common/container";
import { SectionHead } from "@/components/layout/marketing";

type PlanHighlightsSectionProps = {
  planName: string;
  features: string[];
  bestFor: string;
};

export function PlanHighlightsSection({
  planName,
  features,
  bestFor,
}: PlanHighlightsSectionProps) {
  return (
    <section className="border-b border-[#e3e9ec] bg-[#f6f8fa] py-12 max-[760px]:py-10">
      <Container>
        <div className="grid gap-8 max-[900px]:grid-cols-1 min-[901px]:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <SectionHead
              align="stack"
              eyebrow="What this plan includes"
              title={`${planName} highlights`}
              description="Core capabilities included in this plan."
            />
            <ul className="mt-6 grid list-none gap-3 p-0 max-[640px]:grid-cols-1 min-[641px]:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[16px] border border-[#d8e2e6] bg-white px-4 py-3.5 text-[14px] font-medium leading-[1.45] text-[#344d59]"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[18px] border border-[#d8e2e6] bg-white px-5 py-5">
            <span className="block text-[11px] font-bold tracking-[0.06em] text-[#687680] uppercase">
              Best for
            </span>
            <p className="mt-2 mb-0 text-[14.5px] leading-[1.55] text-[#415862]">{bestFor}</p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
