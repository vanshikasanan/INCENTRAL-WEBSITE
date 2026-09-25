export type CartProduct = {
  name: string;
  line: string;
  price: number;
  href: string;
};

export const CART_PRODUCTS: Record<string, CartProduct> = {
  "incert-ais-140": {
    name: "InCert",
    line: "AIS-140 Certified",
    price: 7140,
    href: "/plans/incert?line=ais",
  },
  "insight-ais-140": {
    name: "InSight",
    line: "AIS-140 Certified",
    price: 11280,
    href: "/plans/insight?line=ais",
  },
  "incert-standard": {
    name: "InCert",
    line: "Standard",
    price: 6660,
    href: "/plans/incert?line=standard",
  },
  "insight-standard": {
    name: "InSight",
    line: "Standard",
    price: 10560,
    href: "/plans/insight?line=standard",
  },
  "ingenious-ais-140": {
    name: "InGenious",
    line: "AIS-140 Certified",
    price: 21780,
    href: "/plans/ingenious?line=ais",
  },
  "invision-plus-ais-140": {
    name: "InVision+",
    line: "AIS-140 Certified",
    price: 57380,
    href: "/plans/invision-plus?line=ais",
  },
  "ingenious-standard": {
    name: "InGenious",
    line: "Standard",
    price: 19600,
    href: "/plans/ingenious?line=standard",
  },
  "invision-plus-standard": {
    name: "InVision+",
    line: "Standard",
    price: 51200,
    href: "/plans/invision-plus?line=standard",
  },
};

export function getCartProduct(sku: string) {
  return CART_PRODUCTS[sku] ?? null;
}
