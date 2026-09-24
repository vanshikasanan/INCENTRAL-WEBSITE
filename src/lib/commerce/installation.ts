import { INSTALL_FEE } from "./constants";
import type { CartLine } from "@/lib/plan-finder/types";

export type InstallationPolicy = {
  optional: boolean;
  method: "self" | "intangles";
  fee: number;
  label: string;
  camera: boolean;
};

export function installationPolicy(sku: string, line: Partial<CartLine> = {}): InstallationPolicy {
  const camera = String(sku).startsWith("invision");
  if (camera) {
    return {
      optional: false,
      method: "intangles",
      fee: INSTALL_FEE,
      label: "Professional installation by Intangles",
      camera: true,
    };
  }

  const isAis = Boolean(line.aisRequired) || String(sku).includes("-ais-140");
  const optional =
    isAis ||
    ["incert-standard", "insight-standard", "ingenious-standard"].includes(sku);

  if (optional) {
    const method = line.installationMethod === "self" ? "self" : "intangles";
    return {
      optional: true,
      method,
      fee: method === "intangles" ? INSTALL_FEE : 0,
      label: method === "intangles" ? "Installed by Intangles" : "Self-install",
      camera: false,
    };
  }

  return {
    optional: false,
    method: "intangles",
    fee: INSTALL_FEE,
    label: "Installed by Intangles",
    camera: false,
  };
}

export function normalizeConfiguredLine(line: CartLine): CartLine {
  const policy = installationPolicy(line.sku, line);
  return {
    ...line,
    quantity: Math.max(1, Math.floor(Number(line.quantity) || 1)),
    installationMethod: policy.method,
    installationLabel: policy.label,
    installationFeeExGst: policy.fee,
    installationRequired: !policy.optional,
  };
}
