import { Container } from "@/components/common/container";
import type { PolicyDocument } from "@/config/policies/types";

import { PolicyBlocks } from "./policy-blocks";
import { PolicyToc } from "./policy-toc";

type PolicyPageProps = {
  document: PolicyDocument;
};

export function PolicyPage({ document }: PolicyPageProps) {
  return (
    <main id="main" className="policy-page">
      <section className="policy-hero">
        <Container className="policy-hero-grid">
          <div>
            <p className="policy-eyebrow">{document.eyebrow}</p>
            <h1>{document.title}</h1>
            <p className="policy-lead">{document.lead}</p>
            <PolicyToc
              sections={document.sections}
              ariaLabel={document.tocAriaLabel}
              variant="mobile"
            />
          </div>

          <aside aria-label={document.meta.ariaLabel} className="policy-meta">
            <p className="policy-meta-kicker">{document.meta.kicker}</p>
            {document.meta.rows.map((row) => (
              <div key={row.label} className="policy-meta-row">
                <span>{row.label}</span>
                <strong>{row.value}</strong>
              </div>
            ))}
          </aside>
        </Container>
      </section>

      <section className="policy-shell">
        <Container className="policy-layout">
          <PolicyToc
            sections={document.sections}
            ariaLabel={document.tocAriaLabel}
          />

          <div className="policy-content">
            {document.introNote ? (
              <p className="policy-intro-note">{document.introNote}</p>
            ) : null}

            {document.sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="policy-section"
              >
                <span className="policy-section-number">{section.number}</span>
                <h2>{section.title}</h2>
                <PolicyBlocks blocks={section.blocks} />
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
