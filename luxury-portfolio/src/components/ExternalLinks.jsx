/**
 * ExternalLinks.jsx
 * --------------------------------------------------
 * Self-contained component – renders external profile
 * links (Photography, Behance, LinkedIn) in a glass-
 * morphism card grid.
 *
 * ✔ Uses only scoped styles from externalLinks.css
 * ✔ Zero modifications to existing components/styles
 */

import "../styles/externalLinks.css";

/* ── Inline SVG Icons ────────────────────────────── */

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const BehanceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.332-1.761-2.564-2.039-3.458-1.428-.67.457-1.198 1.072-1.507 1.428zM9.691 15.377C9.691 17.965 7.663 19 5.203 19H0V5h4.94c2.329 0 4.37.87 4.37 3.48 0 1.405-.697 2.35-1.82 2.95 1.39.5 2.201 1.605 2.201 3.147v.8zM3.143 9.75h1.915c1.11 0 1.878-.453 1.878-1.59 0-1.196-.726-1.6-1.878-1.6H3.143v3.19zm0 6.71h2.06c1.252 0 2.14-.574 2.14-1.87 0-1.28-.852-1.87-2.14-1.87H3.143v3.74z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Link Data ───────────────────────────────────── */

const links = [
  {
    label: "Photography",
    description: "Explore my visual storytelling",
    href: "https://www.facebook.com/share/18FQeS8RtG/",
    icon: CameraIcon,
    ariaLabel: "Visit my Photography page (opens in new tab)",
  },
  {
    label: "Behance",
    description: "Design & creative projects",
    href: "https://www.behance.net/lalpushpakumara",
    icon: BehanceIcon,
    ariaLabel: "Visit my Behance profile (opens in new tab)",
  },
  {
    label: "LinkedIn",
    description: "Professional network & experience",
    href: "https://www.linkedin.com/in/lal-pushpakumaran",
    icon: LinkedInIcon,
    ariaLabel: "Visit my LinkedIn profile (opens in new tab)",
  },
];

/* ── Component ───────────────────────────────────── */

export default function ExternalLinks() {
  return (
    <section className="external-links__section">
      <div className="external-links__heading">
        <h2 className="external-links__title">Find Me Elsewhere</h2>
        <p className="external-links__subtitle">
          More of my work and professional presence across the web
        </p>
      </div>

      <div className="external-links__grid">
        {links.map(({ label, description, href, icon: Icon, ariaLabel }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="external-links__card"
          >
            <span className="external-links__icon">
              <Icon />
            </span>
            <span className="external-links__label">{label}</span>
            <span className="external-links__description">{description}</span>
            <span className="external-links__arrow">
              <ArrowIcon />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
