import type { Metadata } from "next";

import { NotFoundPage } from "@/components/errors";

export const metadata: Metadata = {
  title: "Page not found | InCentral",
  description:
    "This InCentral page isn't available yet. Return home or explore plans, help, and AIS-140 guidance.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
