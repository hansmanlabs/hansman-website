import { cacheLife } from "next/cache";
import { mailto, site } from "@/lib/site";

// Cached so the page stays fully static; refreshed daily so the year rolls over on its own.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="page pt-16 pb-10 sm:pt-20">
      <div className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="font-serif text-[1.75rem] leading-none tracking-[-0.01em]">{site.name}</p>
          <p className="mt-3 text-muted">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="sm:justify-self-end">
          <ul className="flex items-center gap-x-6 text-sm font-medium">
            <li>
              <a href={mailto} className="link inline-flex min-h-11 items-center">
                Contact
              </a>
            </li>
            {site.github && (
              <li>
                <a href={site.github} className="link inline-flex min-h-11 items-center" rel="me noopener">
                  GitHub
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          Work in progress <span aria-hidden="true">·</span> Est. {site.established}
        </p>
        <p>
          © <CurrentYear /> {site.name}
        </p>
      </div>
    </footer>
  );
}
