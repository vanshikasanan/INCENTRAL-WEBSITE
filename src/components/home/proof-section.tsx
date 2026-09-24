import type { ProofSectionContent } from "@/config/proof";
import { cn } from "@/lib/utils";

import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/layout/marketing/eyebrow";

export type ProofSectionProps = ProofSectionContent & {
  className?: string;
};

export function ProofSection({
  titleId,
  eyebrow,
  title,
  description,
  statsLabel,
  stats,
  note,
  className,
}: ProofSectionProps) {
  return (
    <section
      aria-labelledby={titleId}
      className={cn("h132-proof h149-proof", className)}
    >
      <Container>
        <div className="h149-proof-shell">
          <div className="h149-proof-copy">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={titleId}>{title}</h2>
            <p>{description}</p>
          </div>

          <div aria-label={statsLabel} className="h149-proof-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="h132-proof-note h149-proof-note">{note}</p>
      </Container>
    </section>
  );
}
