"use client";

import { useCallback, useEffect, useState } from "react";

import { authPage } from "@/config/auth";
import {
  clearAuthSession,
  readAuthSession,
  type AuthSession,
} from "@/lib/auth/session";

export function useAuth() {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    setSession(readAuthSession());
    setReady(true);
  }, []);

  useEffect(() => {
    refresh();

    const onChange = () => refresh();
    window.addEventListener("incentral:auth-changed", onChange);
    window.addEventListener("storage", onChange);

    return () => {
      window.removeEventListener("incentral:auth-changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [refresh]);

  const signOut = useCallback(() => {
    clearAuthSession();
    refresh();
  }, [refresh]);

  return {
    ready,
    session,
    isAuthenticated: Boolean(session?.authenticated),
    accountHref: authPage.accountHref,
    signInHref: authPage.signInHref,
    signOut,
  };
}
