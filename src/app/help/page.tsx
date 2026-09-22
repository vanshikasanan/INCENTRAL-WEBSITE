import { HelpPage } from "@/components/help";
import { helpPage } from "@/config/help";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: helpPage.metadata.title,
  description: helpPage.metadata.description,
  path: "/help",
});

export default function HelpRoute() {
  return <HelpPage />;
}
