import Image from "next/image";
import Link from "next/link";

import {
  planShowcaseCardClass,
  type PlanShowcaseCard,
} from "@/config/plans";
import { cn } from "@/lib/utils";

import { PlanFeatureIcon } from "./plan-feature-icon";

const planFinderFamilyId: Record<string, string> = {
  incert: "incert",
  insight: "insight",
  ingenious: "ingenious",
  "invision-plus": "invisionplus",
};

type PlanCardProps = {
  card: PlanShowcaseCard;
  className?: string;
};

function PlanCardContent({ card }: { card: PlanShowcaseCard }) {
  return (
    <>
      <div className="h139-media">
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(max-width: 780px) 82vw, (max-width: 1120px) 50vw, 25vw"
        />
        <span className="h139-value">{card.value}</span>
        <span aria-hidden="true" className="h139-number">
          {card.number}
        </span>
      </div>

      <div className="h139-body">
        <div className="h139-title">
          <h3>{card.name}</h3>
          <p>{card.tagline}</p>
        </div>

        <ul className="h139-features">
          {card.features.map((feature) => (
            <li key={feature.label} data-icon={feature.icon}>
              <PlanFeatureIcon />
              {feature.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function PlanCard({ card, className }: PlanCardProps) {
  const familyClass = planShowcaseCardClass[card.accent];
  const finderPlanId = planFinderFamilyId[card.id] ?? card.id;

  const cardClassName = cn("h139-card", familyClass, className);

  if (card.href) {
    return (
      <Link
        href={card.href}
        aria-label={`View ${card.name} product page`}
        data-h132-plan={finderPlanId}
        data-plan={card.id}
        className={cardClassName}
      >
        <PlanCardContent card={card} />
      </Link>
    );
  }

  return (
    <article
      data-plan={card.id}
      data-h132-plan={finderPlanId}
      className={cardClassName}
    >
      <PlanCardContent card={card} />
    </article>
  );
}
