import type { PolicyDocument } from "@/config/policies/types";
import { constructMetadata } from "@/lib/metadata";

export function createPolicyRouteMetadata(document: PolicyDocument) {
  return constructMetadata({
    title: document.metadata.title,
    description: document.metadata.description,
    path: document.path,
  });
}
