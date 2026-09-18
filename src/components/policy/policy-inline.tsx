import Link from "next/link";

import type { PolicyInline } from "@/config/policies/types";

type PolicyInlineTextProps = {
  content: string | PolicyInline[];
};

export function PolicyInlineText({ content }: PolicyInlineTextProps) {
  if (typeof content === "string") {
    return <>{content}</>;
  }

  return (
    <>
      {content.map((part, index) => {
        switch (part.type) {
          case "text":
            return <span key={index}>{part.value}</span>;
          case "link":
            return (
              <Link key={index} href={part.href}>
                {part.label}
              </Link>
            );
          case "email":
            return (
              <Link key={index} href={`mailto:${part.address}`}>
                {part.address}
              </Link>
            );
          case "phone":
            return (
              <Link key={index} href={`tel:${part.number.replace(/\D/g, "")}`}>
                {part.display ?? part.number}
              </Link>
            );
          case "break":
            return <br key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
}
