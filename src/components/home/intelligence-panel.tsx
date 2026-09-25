import { heroContent } from "@/config/hero";

type CapabilityIconId =
  (typeof heroContent.intelligencePanel.capabilities)[number]["id"];

function CapabilityIcon({ id }: { id: CapabilityIconId }) {
  const svgProps = {
    viewBox: "0 0 32 32",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "health":
      return (
        <svg {...svgProps}>
          <path d="M4.5 20h4l3.3-6.2 4.2 11.4 3.8-8.4 2.4 3.2h5.3" />
          <circle cx="24.7" cy="10" r="2.6" />
        </svg>
      );
    case "automation":
      return (
        <svg {...svgProps}>
          <rect height="15" rx="2.2" width="10.5" x="6" y="5.5" />
          <path d="M9 10h4.5M9 14h4.5" />
          <path d="M20.5 10.5h5.8M23.4 7.6v5.8" />
          <path d="M20 21.5h6" />
          <path d="M18.5 18.5l8 8" />
          <circle cx="17.5" cy="17.5" r="2.2" />
        </svg>
      );
    case "fuel":
      return (
        <svg {...svgProps}>
          <path d="M6 21.5a10 10 0 0 1 20 0" />
          <path d="M16 21.5l4.8-7.8" />
          <circle cx="16" cy="21.5" r="2.1" />
          <path d="M23.8 8.3c0 3.1-2.1 5.1-4.4 5.1 0-3 1.7-5.1 4.4-5.1Z" />
        </svg>
      );
    case "fault":
      return (
        <svg {...svgProps}>
          <path d="M5 18h5l2.1-4.7 4 8.8 2.9-6 2.1 1.9H27" />
          <circle cx="25" cy="9.2" r="3" />
          <path d="M25 7.7v2.3" />
          <path d="M25 12.2v.1" />
        </svg>
      );
    case "driver":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="9.8" />
          <circle cx="16" cy="16" r="3" />
          <path d="M9.3 22.1c2.2-3.3 4.4-4.9 6.7-4.9s4.5 1.6 6.7 4.9" />
          <path d="M10.6 10.8l2.2 2.2M21.4 10.8 19.2 13" />
        </svg>
      );
    case "video":
      return (
        <svg {...svgProps}>
          <rect height="14" rx="3" width="14" x="6" y="9" />
          <path d="M20 13.5l5-3v11l-5-3" />
          <circle cx="13" cy="16" r="3" />
          <path d="M10 6V4h4" />
          <path d="M22 6h4v4" />
          <path d="M10 26H6v-4" />
          <path d="M22 26h4v-4" />
        </svg>
      );
  }
}

export function IntelligencePanel() {
  const { intelligencePanel } = heroContent;

  return (
    <aside
      aria-label="Flexible fleet intelligence capabilities"
      className="h140-intelligence-panel"
    >
      <div className="h140-panel-head">
        <div>
          <span className="h140-kicker">{intelligencePanel.kicker}</span>
          <h2>{intelligencePanel.title}</h2>
        </div>
        <span className="h140-plan-chip">{intelligencePanel.chip}</span>
      </div>

      <div className="h140-cap-grid">
        {intelligencePanel.capabilities.map((capability) => (
          <article
            key={capability.id}
            className={`h140-cap ${capability.toneClass}`}
          >
            <span className="h140-icon">
              <CapabilityIcon id={capability.id} />
            </span>
            <h3>{capability.title}</h3>
          </article>
        ))}
      </div>

      <div aria-hidden="true" className="h140-signal">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </aside>
  );
}
