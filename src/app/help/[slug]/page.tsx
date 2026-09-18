import { notFound } from "next/navigation";

import { HelpPage } from "@/components/help";
import { helpPage } from "@/config/help";
import {
  getHelpFaqBySlug,
  helpFaqSlugs,
} from "@/lib/help/faq-slugs";
import { constructMetadata } from "@/lib/metadata";

type HelpFaqRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return helpFaqSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: HelpFaqRouteProps) {
  const { slug } = await params;
  const faq = getHelpFaqBySlug(slug);

  if (!faq) {
    return constructMetadata({
      title: helpPage.metadata.title,
      description: helpPage.metadata.description,
      path: "/help",
    });
  }

  return constructMetadata({
    title: `${faq.question} | InCentral Help`,
    description: faq.answer,
    path: `/help/${slug}`,
  });
}

export default async function HelpFaqRoute({ params }: HelpFaqRouteProps) {
  const { slug } = await params;

  if (!getHelpFaqBySlug(slug)) {
    notFound();
  }

  return <HelpPage activeFaqId={slug} />;
}
