import { Container } from "@/components/common/container";
import { Eyebrow } from "@/components/layout/marketing/eyebrow";
import { MarketingCtaLink } from "@/components/ui/marketing-cta-link";
import { heroContent } from "@/config/hero";

import { IntelligencePanel } from "./intelligence-panel";

export function HeroSection() {
  const { eyebrow, title, lead, actions } = heroContent;

  return (
    <section aria-labelledby="h132HeroTitle" className="h132-hero">
      <Container className="h132-hero-grid">
        <div className="h132-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="h132HeroTitle">{title}</h1>
          <p className="h132-hero-lead">{lead}</p>
          <div className="h132-hero-actions">
            <MarketingCtaLink href={actions.primary.href} variant="primary">
              {actions.primary.label}
            </MarketingCtaLink>
            <MarketingCtaLink href={actions.secondary.href} variant="secondary">
              {actions.secondary.label}
            </MarketingCtaLink>
          </div>
        </div>

        <IntelligencePanel />
      </Container>
    </section>
  );
}
