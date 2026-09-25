import Link from "next/link";

import { Container } from "@/components/common/container";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Checkout",
  description: "Continue secure checkout for your InCentral order.",
  path: "/checkout",
  noIndex: true,
});

export default function CheckoutPage() {
  return (
    <main id="main" className="py-16">
      <Container className="max-w-xl text-center">
        <h1 className="text-2xl font-semibold text-[#163541]">Checkout</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[#61747d]">
          Headless checkout is being wired to the InCentral API. Review your cart and sign in to
          continue when checkout is enabled in this environment.
        </p>
        <Link
          href="/cart"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-inc-blue bg-inc-blue px-5 text-[14px] font-semibold text-white no-underline"
        >
          Back to cart
        </Link>
      </Container>
    </main>
  );
}
