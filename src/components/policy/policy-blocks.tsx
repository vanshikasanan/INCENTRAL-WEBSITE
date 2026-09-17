import type { PolicyBlock } from "@/config/policies/types";

import { PolicyInlineText } from "./policy-inline";

type PolicyBlocksProps = {
  blocks: PolicyBlock[];
};

export function PolicyBlocks({ blocks }: PolicyBlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index}>
                <PolicyInlineText content={block.content} />
              </p>
            );
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <PolicyInlineText content={item} />
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div key={index} className="policy-callout">
                <strong>{block.title}</strong>
                <p>
                  <PolicyInlineText content={block.content} />
                </p>
              </div>
            );
          case "definitions":
            return (
              <div key={index} className="policy-definition-grid">
                {block.items.map((item) => (
                  <div key={item.term} className="policy-definition">
                    <strong>{item.term}</strong>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            );
          case "contact":
            return (
              <div key={index} className="policy-contact-card">
                {block.groups.map((group) => (
                  <div key={group.title}>
                    <strong>{group.title}</strong>
                    {group.content ? (
                      <span>
                        <PolicyInlineText content={group.content} />
                      </span>
                    ) : null}
                    {group.address ? (
                      <address>
                        {group.address.map((line, lineIndex) => (
                          <span key={line}>
                            {line}
                            {lineIndex < group.address!.length - 1 ? (
                              <br />
                            ) : null}
                          </span>
                        ))}
                      </address>
                    ) : null}
                  </div>
                ))}
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
