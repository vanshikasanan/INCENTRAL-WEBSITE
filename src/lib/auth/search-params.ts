import type { AuthTab } from "@/config/auth";

export type AuthSearchParams = {
  mode: AuthTab;
  next: string | null;
  checkout: boolean;
};

export function parseAuthSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): AuthSearchParams {
  const modeParam = pickParam(searchParams.mode);
  const mode: AuthTab =
    modeParam === "create" || modeParam === "signup" ? "create" : "signin";

  return {
    mode,
    next: pickParam(searchParams.next),
    checkout:
      pickParam(searchParams.checkout) === "1" ||
      pickParam(searchParams.next) === "checkout",
  };
}

function pickParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? null;
  return value ?? null;
}
