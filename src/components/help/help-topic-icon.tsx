import type { HelpTopicIcon as HelpTopicIconKind } from "@/config/help";

type HelpTopicIconProps = {
  kind: HelpTopicIconKind;
};

export function HelpTopicIcon({ kind }: HelpTopicIconProps) {
  switch (kind) {
    case "plan":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[23px]">
          <path d="M5 5h14v14H5z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M8 9h8M8 13h5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "ais":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[23px]">
          <path
            d="M12 3 4.5 6v5c0 4.6 3 7.9 7.5 10 4.5-2.1 7.5-5.4 7.5-10V6z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path d="m9 12 2 2 4-5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "installation":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[23px]">
          <path
            d="M14.5 5.5a4 4 0 0 0 4.8 5.7L12 18.5 5.5 12l7.3-7.3a4 4 0 0 0 1.7.8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "orders":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[23px]">
          <path d="M6 7h12l-1 13H7z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 7a3 3 0 0 1 6 0" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "account":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[23px]">
          <circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5 20c.8-4 3-6 7-6s6.2 2 7 6" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "warranty":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[23px]">
          <path d="M12 3a8 8 0 1 0 8 8" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M17 3h4v4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
  }
}
