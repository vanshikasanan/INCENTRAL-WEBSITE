import { notFound } from "next/navigation";

import { PolicyPage } from "@/components/policy";
import {
  getPolicyBySlug,
  isPolicySlug,
  policySlugs,
} from "@/config/policies";
import { createPolicyRouteMetadata } from "@/lib/policies/create-policy-route";

type PolicyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PolicyRouteProps) {
  const { slug } = await params;
  const document = getPolicyBySlug(slug);
  if (!document) {
    return createPolicyRouteMetadata(getPolicyBySlug(policySlugs[0])!);
  }

  return createPolicyRouteMetadata(document);
}

export default async function PolicyRoute({ params }: PolicyRouteProps) {
  const { slug } = await params;

  if (!isPolicySlug(slug)) {
    notFound();
  }

  const document = getPolicyBySlug(slug);
  if (!document) notFound();

  return <PolicyPage document={document} />;
}
