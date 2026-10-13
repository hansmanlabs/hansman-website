import Link from "next/link";
import { mailto, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="page">
      <div className="flex min-h-18 items-center justify-between gap-6 border-b border-line">
        <Link href="/" className="inline-flex min-h-11 items-center font-serif text-[1.5rem] leading-none tracking-[-0.01em]">
          {site.name}
        </Link>

        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <p className="hidden items-center gap-3 text-sm text-muted sm:flex">
            <span className="status-dot" aria-hidden="true" />
            Currently building
          </p>
          <a href="#services" className="link inline-flex min-h-11 items-center text-sm font-medium">
            Services
          </a>
          <a href={mailto} className="link inline-flex min-h-11 items-center text-sm font-medium">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
