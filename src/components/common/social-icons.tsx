import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.25 2.25 0 1 0 5.25 7.5 2.25 2.25 0 0 0 5.25 3ZM9.06 8.5V20h3.37v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38v-6.27c0-3.08-.66-5.45-4.26-5.45-1.73 0-2.89.95-3.37 1.85h-.05V8.5H9.06Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8h3.1l.46-4H13.5V7.43c0-1.16.32-1.95 1.99-1.95h1.72V1.9c-.3-.04-1.32-.13-2.5-.13-2.47 0-4.16 1.5-4.16 4.25V10H8v4h2.55v8h2.95Z" />
    </svg>
  );
}

export function XSocialIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.26l-4.9-6.41L6.46 22H3.35l7.24-8.28L2.93 2h6.42l4.43 5.85L18.9 2Zm-1.1 18h1.73L8.4 3.93H6.61L17.8 20Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.35-3.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5A3.02 3.02 0 0 0 23.5 17.8c.5-1.88.5-5.8.5-5.8s0-3.93-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}
