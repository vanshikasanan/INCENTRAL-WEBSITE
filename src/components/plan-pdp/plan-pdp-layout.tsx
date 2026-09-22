import type { ReactNode } from "react";
import { Suspense } from "react";

import type { PlanProduct } from "@/config/plans";

import { PlanBreadcrumb } from "./plan-breadcrumb";
import { PlanLineToggle } from "./plan-line-toggle";

type PlanPdpLayoutProps = {
  product: PlanProduct;
  lineLabel: string;
  children: ReactNode;
};

export function PlanPdpLayout({ product, lineLabel, children }: PlanPdpLayoutProps) {
  return (
    <main id="main" className="bg-white text-[#14232b]">
      <PlanBreadcrumb planName={product.name} lineLabel={lineLabel} />
      <Suspense fallback={null}>
        <PlanLineToggle product={product} />
      </Suspense>
      {children}
    </main>
  );
}
