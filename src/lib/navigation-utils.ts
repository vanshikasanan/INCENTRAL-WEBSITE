export function isNavLinkActive(pathname: string, href: string): boolean {
  if (href.startsWith("/#")) {
    return pathname === "/";
  }

  const [path] = href.split("?");
  if (path === "/") {
    return pathname === "/";
  }

  return pathname === path || pathname.startsWith(`${path}/`);
}
