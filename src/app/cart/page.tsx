import { CartPageContent } from "@/components/cart";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Cart",
  description:
    "Review the InCentral solutions, quantities and installation choices in your cart before checkout or requesting a quote.",
  path: "/cart",
  noIndex: true,
});

export default function CartPage() {
  return <CartPageContent />;
}
