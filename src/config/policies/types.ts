export type PolicyInline =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string }
  | { type: "email"; address: string }
  | { type: "phone"; number: string; display?: string }
  | { type: "break" };

export type PolicyBlock =
  | { type: "paragraph"; content: string | PolicyInline[] }
  | { type: "list"; items: (string | PolicyInline[])[] }
  | { type: "callout"; title: string; content: string | PolicyInline[] }
  | { type: "definitions"; items: { term: string; description: string }[] }
  | {
      type: "contact";
      groups: Array<{
        title: string;
        content?: PolicyInline[];
        address?: string[];
      }>;
    };

export type PolicySection = {
  id: string;
  number: string;
  title: string;
  blocks: PolicyBlock[];
};

export type PolicyMetaRow = {
  label: string;
  value: string;
};

export type PolicyDocument = {
  path: string;
  metadata: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  lead: string;
  meta: {
    kicker: string;
    rows: PolicyMetaRow[];
    ariaLabel: string;
  };
  tocAriaLabel: string;
  introNote?: string;
  sections: PolicySection[];
};
