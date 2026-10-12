/**
 * Site-wide settings and copy. Edit here to update the page without touching layout code.
 */

export const site = {
  name: "Hansman Labs",
  url: "https://hansmanlabs.com",
  title: "Hansman Labs — Practical software, thoughtfully built",
  description:
    "An independent software lab building practical tools that simplify everyday work and give people more time for what matters.",
  tagline: "Thoughtfully built. Purposefully useful.",
  established: 2026,
  email: "hello@hansmanlabs.com",
  // Set to null to hide the GitHub link in the footer.
  github: "https://github.com/hansmanlabs" as string | null,
} as const;

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Hello, Hansman Labs")}`;

export const focusAreas = [
  {
    title: "Automation that makes sense.",
    body: "Reducing repetitive tasks so people can spend less time managing work and more time doing meaningful things.",
  },
  {
    title: "Tools for everyday work.",
    body: "Practical software shaped by real needs, not unnecessary features.",
  },
  {
    title: "Thoughtful digital experiences.",
    body: "Clean, intuitive interfaces that make complicated things feel simple.",
  },
] as const;
