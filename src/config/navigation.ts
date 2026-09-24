export type NavLink = {
  id: string;
  label: string;
  href: string;
};

export const primaryNavLinks: NavLink[] = [
  { id: "compare", label: "Compare Solutions", href: "/compare-solutions" },
  { id: "ais", label: "AIS-140 Guide", href: "/ais-140-guide" },
  { id: "help", label: "Help", href: "/help" },
  { id: "support", label: "Support", href: "/support" },
];

export const headerActions = {
  signIn: {
    label: "Sign In",
    href: "/sign-in?mode=login",
  },
  cart: {
    label: "Cart",
    href: "/cart",
  },
  call: {
    label: "Call us",
    href: "tel:18002689111",
  },
} as const;
