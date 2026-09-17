import { helpPage, type HelpFaq } from "@/config/help";

export const helpFaqSlugs = helpPage.faqSection.faqs.map((faq) => faq.id);

export function getHelpFaqBySlug(slug: string): HelpFaq | undefined {
  return helpPage.faqSection.faqs.find((faq) => faq.id === slug);
}

export function isHelpFaqSlug(slug: string): slug is HelpFaq["id"] {
  return helpFaqSlugs.includes(slug);
}

export function helpFaqHref(id: string) {
  return `/help/${id}`;
}
