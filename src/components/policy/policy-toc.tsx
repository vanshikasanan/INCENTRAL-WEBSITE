import Link from "next/link";

import type { PolicySection } from "@/config/policies/types";

type PolicyTocProps = {
  sections: PolicySection[];
  ariaLabel: string;
  variant?: "desktop" | "mobile";
};

export function PolicyToc({
  sections,
  ariaLabel,
  variant = "desktop",
}: PolicyTocProps) {
  if (variant === "mobile") {
    return (
      <details className="policy-mobile-toc">
        <summary>On this page</summary>
        <ol>
          {sections.map((section) => (
            <li key={section.id}>
              <Link href={`#${section.id}`}>{section.title}</Link>
            </li>
          ))}
        </ol>
      </details>
    );
  }

  return (
    <aside aria-label={ariaLabel} className="policy-toc">
      <div className="policy-toc-head">
        <span className="policy-toc-kicker">Contents</span>
        <h2>Jump to a section</h2>
      </div>
      <ol className="policy-toc-list">
        {sections.map((section) => (
          <li key={section.id}>
            <Link href={`#${section.id}`}>{section.title}</Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
