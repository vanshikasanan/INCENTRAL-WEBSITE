import { HeroSection, ProofSection } from "@/components/home";
import { PlanFinderSection } from "@/components/plan-finder";
import { PlansSection } from "@/components/plans";
import { plansSectionHome } from "@/config/plans";
import { proofSectionHome } from "@/config/proof";

export default function HomePage() {
  const plans = plansSectionHome;

  return (
    <main id="main">
      <HeroSection />
      <PlansSection
        id={plans.id}
        titleId={plans.titleId}
        eyebrow={plans.eyebrow}
        title={plans.title}
        description={plans.description}
        cards={plans.cards}
      />
      <PlanFinderSection />
      <ProofSection {...proofSectionHome} />
    </main>
  );
}
