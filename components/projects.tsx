import { projects } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading label="Projects" title="Things I've built" />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.06} as="article">
            <div className="card flex h-full flex-col rounded-lg bg-surface p-6 md:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                <span className="shrink-0 text-xs text-faint">
                  {p.status} · {p.year}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-muted">{p.tagline}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded bg-paper px-2 py-0.5 text-xs text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 pt-1">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="accent-link text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
