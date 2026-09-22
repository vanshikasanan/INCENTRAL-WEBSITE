export const AUTH_STORAGE_KEY = "incentralPortalAuthV52";

export type AuthSession = {
  authenticated: true;
  identity: string;
  name?: string;
  company?: string;
  email?: string;
  mobile?: string;
  mode: "signin" | "create";
  signedInAt: string;
};

export function readAuthSession(): AuthSession | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as AuthSession;
    return parsed?.authenticated ? parsed : null;
  } catch {
    return null;
  }
}

export function writeAuthSession(session: AuthSession) {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
    window.dispatchEvent(new CustomEvent("incentral:auth-changed"));
  } catch {
    /* ignore quota errors */
  }
}

export function clearAuthSession() {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("incentral:auth-changed"));
  } catch {
    /* ignore */
  }
}

export function isAuthenticated() {
  return readAuthSession()?.authenticated === true;
}
