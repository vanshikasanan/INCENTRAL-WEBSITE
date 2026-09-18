import Link from "next/link";

import { Container } from "@/components/common/container";

type PlanBreadcrumbProps = {
  planName: string;
  lineLabel: string;
};

export function PlanBreadcrumb({ planName, lineLabel }: PlanBreadcrumbProps) {
  return (
    <Container className="py-4">
      <nav aria-label="Breadcrumb" className="flex min-h-12 flex-wrap items-center gap-2 text-[13px] text-[#74828a]">
        <Link href="/" className="text-[#4d6573] no-underline hover:underline">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/plans" className="text-[#4d6573] no-underline hover:underline">
          Plans
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-[#17242b]">
          {planName} · {lineLabel}
        </span>
      </nav>
    </Container>
  );
}
