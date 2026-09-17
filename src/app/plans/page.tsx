import { PlansPage } from "@/components/plans/plans-page";
import { plansPage } from "@/config/plans";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: plansPage.metadata.title,
  description: plansPage.metadata.description,
  path: "/plans",
});

export default function PlansRoute() {
  return <PlansPage />;
}
