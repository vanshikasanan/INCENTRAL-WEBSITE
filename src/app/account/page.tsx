import { AccountPage } from "@/components/account";
import { accountPage } from "@/config/account";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: accountPage.metadata.title,
  description: accountPage.metadata.description,
  path: "/account",
  noIndex: true,
});

export default function AccountRoute() {
  return <AccountPage />;
}
