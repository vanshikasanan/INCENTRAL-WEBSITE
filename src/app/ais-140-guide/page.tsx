import { Ais140GuidePage } from "@/components/ais-140-guide";
import { ais140GuidePage } from "@/config/ais-140-guide";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: ais140GuidePage.metadata.title,
  description: ais140GuidePage.metadata.description,
  path: "/ais-140-guide",
});

export default function Ais140GuideRoute() {
  return <Ais140GuidePage />;
}
