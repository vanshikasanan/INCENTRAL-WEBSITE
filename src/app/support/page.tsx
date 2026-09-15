import { SupportPage } from "@/components/support";
import { supportPage } from "@/config/support";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: supportPage.metadata.title,
  description: supportPage.metadata.description,
  path: "/support",
});

export default function SupportRoute() {
  return <SupportPage />;
}
