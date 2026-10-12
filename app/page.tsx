import { ConstructionMark } from "@/components/construction-mark";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { focusAreas, mailto, site } from "@/lib/site";

const grid = "grid grid-cols-4 gap-x-5 md:grid-cols-12 md:gap-x-6 lg:gap-x-8";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section aria-labelledby="hero-heading" className="page pt-14 pb-24 sm:pt-20 md:pb-32 lg:pt-28 lg:pb-40">
          <div className={grid}>
            <div className="col-span-4 md:col-span-12 lg:col-span-8">
              <p className="label">
                <span className="whitespace-nowrap">Independent software lab</span>{" "}
                <span aria-hidden="true">·</span> <span className="whitespace-nowrap">Currently building</span>
              </p>
              <h1
                id="hero-heading"
                className="mt-7 font-serif text-display text-balance sm:mt-9"
              >
                Practical software, <em className="block text-accent-ink">thoughtfully built.</em>
              </h1>
            </div>

            <div className="col-span-4 mt-10 md:col-span-7 md:mt-14 lg:col-span-5 lg:col-start-3 lg:mt-16">
              <p className="max-w-[24ch] font-serif text-lede text-pretty">
                Good tools should make life simpler, not more complicated.
              </p>
              <p className="mt-6 max-w-[46ch] text-pretty">
                {site.name} is an independent software lab building thoughtful digital products that
                simplify everyday work, solve real problems, and give people more time for what matters.
              </p>
              <p className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                <a href={mailto} className="link-ruled inline-flex min-h-11 items-center gap-2 font-medium">
                  Get in touch <span className="arrow" aria-hidden="true">→</span>
                </a>
                <span className="text-sm text-muted">{site.email}</span>
              </p>
            </div>

            <figure className="col-span-4 mt-16 md:col-span-5 md:col-start-8 md:mt-14 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:mt-1">
              <div className="flex aspect-5/4 items-center justify-center bg-surface md:aspect-4/5">
                <ConstructionMark className="w-[72%] overflow-visible" />
              </div>
              <figcaption className="label mt-4">
                Fig. 01 <span aria-hidden="true">—</span> The mark, in construction
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Mission */}
        <section aria-labelledby="mission-heading" className="page">
          <div className={`${grid} border-t border-line pt-12 pb-24 md:pt-16 md:pb-32 lg:pb-40`}>
            <p className="label col-span-4 md:col-span-3">
              Our approach
            </p>
            <div className="col-span-4 mt-8 md:col-span-9 md:mt-0 lg:col-span-9 lg:col-start-4">
              <h2 id="mission-heading" className="max-w-[16ch] font-serif text-headline text-balance">
                Small ideas. Real problems. Useful solutions.
              </h2>

              <div className="mt-12 grid gap-x-8 md:mt-16 lg:grid-cols-9">
                <div className="space-y-6 lg:col-span-5">
                  <p className="max-w-[46ch]">
                    We believe the best products often begin with a simple question:
                  </p>
                  <p className="font-serif text-lede italic">
                    “There has to be a better way to do this.”
                  </p>
                  <p className="max-w-[46ch]">
                    That’s where we start. From repetitive workflows to everyday frustrations, we explore
                    ways to make technology work better for the people using it.
                  </p>
                </div>

                <p className="mt-14 max-w-[22ch] font-serif text-lede text-pretty before:mb-5 before:block before:h-px before:w-10 before:bg-accent md:mt-20 lg:col-span-3 lg:col-start-7 lg:mt-0 lg:self-end">
                  Less busywork. Less friction. More room for what matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section aria-labelledby="focus-heading" className="page">
          <div className={`${grid} border-t border-line pt-12 pb-24 md:pt-16 md:pb-32 lg:pb-40`}>
            <h2 id="focus-heading" className="label col-span-4 md:col-span-3">
              Focus areas
            </h2>

            <ol className="col-span-4 mt-8 md:col-span-9 md:mt-0 lg:col-span-9 lg:col-start-4">
              {focusAreas.map((area, i) => (
                <li
                  key={area.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-[3rem_1fr] md:py-10 lg:grid-cols-[3rem_5fr_4fr] lg:gap-x-8"
                >
                  <span className="pt-[0.4rem] text-sm text-muted tabular-nums" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="max-w-[18ch] font-serif text-title text-balance">{area.title}</h3>
                  <p className="col-start-2 mt-4 max-w-[42ch] text-muted lg:col-start-3 lg:mt-1">{area.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing */}
        <section aria-labelledby="closing-heading" className="bg-surface">
          <div className={`page ${grid} py-20 md:py-28 lg:py-36`}>
            <h2
              id="closing-heading"
              className="col-span-4 font-serif text-headline md:col-span-5 lg:col-span-5"
            >
              Built with purpose.
            </h2>
            <div className="col-span-4 mt-8 space-y-6 md:col-span-6 md:col-start-7 md:mt-2 lg:col-span-5 lg:col-start-7">
              <p className="max-w-[46ch]">
                {site.name} started with a simple desire: to build tools that make everyday life and work a
                little easier.
              </p>
              <p className="max-w-[46ch]">
                We’re starting small, solving problems we encounter ourselves, and building with care.
              </p>
              <p className="pt-6 font-serif text-lede">There’s more to come.</p>
              <p className="flex items-center gap-3 text-sm text-muted">
                <span className="status-dot shrink-0" aria-hidden="true" />
                Currently building. Check back soon.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
