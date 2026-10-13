/**
 * Site-wide settings and copy. Edit here to update the page without touching layout code.
 */

export const site = {
  name: "Hansman Labs",
  url: "https://hansmanlabs.com",
  title: "Hansman Labs · Practical software, thoughtfully built",
  description:
    "Hansman Labs builds practical software and helps businesses make their websites and apps safer, easier to use, and better at converting.",
  tagline: "Thoughtfully built. Purposefully useful.",
  established: 2026,
  email: "hello@hansmanlabs.com",
  // Set to null to hide the GitHub link in the footer.
  github: "https://github.com/hansmanlabs" as string | null,
} as const;

const mailtoWith = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const mailto = mailtoWith("Hello, Hansman Labs");
export const mailtoAudit = mailtoWith("Audit request");
export const mailtoProject = mailtoWith("Project inquiry");

export const auditAreas = [
  {
    title: "Security fundamentals",
    body: "Exposed secrets, authentication, authorization, input validation, dependencies, and how personal and business data is handled.",
  },
  {
    title: "UI/UX and web design",
    body: "Navigation, typography, spacing, responsive layouts, accessibility, and whether people can find their way to what they came for.",
  },
  {
    title: "Conversion rate optimization",
    body: "Messaging, calls to action, forms, trust signals, and the points of friction that stop people from getting in touch or buying.",
  },
] as const;

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
