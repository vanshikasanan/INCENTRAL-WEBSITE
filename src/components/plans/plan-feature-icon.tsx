import type { CSSProperties } from "react";

import type { PlanFeatureIconId } from "@/config/plans";

const featureIconMasks: Record<PlanFeatureIconId, string> = {
  route:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M5 3a3 3 0 0 0-3 3c0 2.25 3 5.5 3 5.5S8 8.25 8 6a3 3 0 0 0-3-3Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm14 7a3 3 0 0 0-3 3c0 2.25 3 5.5 3 5.5s3-3.25 3-5.5a3 3 0 0 0-3-3Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8 6h5a3 3 0 0 1 3 3v1h-2V9a1 1 0 0 0-1-1H8V6Zm8 11H9a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1h7v2Z'/%3E%3C/svg%3E\")",
  alert:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 2a6 6 0 0 0-6 6v3.5L4 15v2h16v-2l-2-3.5V8a6 6 0 0 0-6-6Zm0 20a3 3 0 0 0 2.83-2H9.17A3 3 0 0 0 12 22Z'/%3E%3C/svg%3E\")",
  report:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M4 3h16v18H4V3Zm3 12v3h2v-3H7Zm4-5v8h2v-8h-2Zm4 3v5h2v-5h-2ZM7 6v2h10V6H7Z'/%3E%3C/svg%3E\")",
  analytics:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M4 3h16v18H4V3Zm3 12v3h2v-3H7Zm4-5v8h2v-8h-2Zm4 3v5h2v-5h-2ZM7 6v2h10V6H7Z'/%3E%3C/svg%3E\")",
  fuel: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M5 2h9a2 2 0 0 1 2 2v16H3V4a2 2 0 0 1 2-2Zm1 3v5h7V5H6Zm11.5 1 2.8 2.8A2.4 2.4 0 0 1 21 10.5V17a2 2 0 0 1-4 0v-5h2v5h.5v-6.5a.5.5 0 0 0-.15-.35L16 6.8 17.5 6Z'/%3E%3C/svg%3E\")",
  fault:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M7 5h10v3h3v8h-3v3H7v-3H4V8h3V5Zm2 3v8h6V8H9Zm2 1h2v4h-2V9Zm0 5h2v2h-2v-2Z'/%3E%3C/svg%3E\")",
  repair:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M14.7 3.3a6 6 0 0 0-7.4 7.4L2 16v6h6l5.3-5.3a6 6 0 0 0 7.4-7.4l-4 4-3-3 4-4a6 6 0 0 0-3-3Z'/%3E%3C/svg%3E\")",
  health:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M3 11h4l2-5 4 12 2-7h6v2h-4.5L13 23 9 11l-1 2H3v-2Z'/%3E%3C/svg%3E\")",
  automation:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 1h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2Zm-3-9h2v2h-2V6Zm0 10h2v2h-2v-2Z'/%3E%3C/svg%3E\")",
  camera:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M3 6h13a2 2 0 0 1 2 2v2l4-2v8l-4-2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v8h13V8H3Z'/%3E%3C/svg%3E\")",
  dual: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M3 6h13a2 2 0 0 1 2 2v2l4-2v8l-4-2v2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v8h13V8H3Z'/%3E%3C/svg%3E\")",
  cabin:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 12c5 0 9 2.5 9 5.5V22H3v-2.5C3 16.5 7 14 12 14Zm0 2c-3.8 0-7 1.7-7 3.5v.5h14v-.5c0-1.8-3.2-3.5-7-3.5Z'/%3E%3C/svg%3E\")",
};

type PlanFeatureIconProps = {
  icon: PlanFeatureIconId;
};

export function PlanFeatureIcon({ icon }: PlanFeatureIconProps) {
  const mask = featureIconMasks[icon];

  return (
    <span
      aria-hidden="true"
      className="grid size-7 shrink-0 place-items-center rounded-[9px] border border-[color-mix(in_srgb,var(--accent)_15%,#dae4e9)] bg-[var(--soft)]"
    >
      <span
        className="block size-3.5 bg-[var(--accent)] [mask-image:var(--icon-mask)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:var(--icon-mask)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
        style={{ "--icon-mask": mask } as CSSProperties}
      />
    </span>
  );
}
