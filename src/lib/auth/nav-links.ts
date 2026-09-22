import { authPage } from "@/config/auth";

export function getHeaderAccountLink(isAuthenticated: boolean) {
  if (isAuthenticated) {
    return {
      label: "My InCentral",
      href: authPage.accountHref,
      ariaLabel: "Open My InCentral account dashboard",
    };
  }

  return {
    label: "Sign In",
    href: authPage.signInHref,
    ariaLabel: "Sign in to InCentral",
  };
}

export function getOrdersLink(isAuthenticated: boolean) {
  return isAuthenticated
    ? authPage.accountHref
    : `${authPage.signInHref}&next=orders`;
}
