import { profile, facts, highlights } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Clock } from "@/components/clock";

export function Hero() {
  return (
    <section id="main" className="relative isolate overflow-hidden">
      <div className="relative mx-auto min-h-[92vh] max-w-5xl px-6 py-32 md:px-8">
        <div className="relative flex min-h-[calc(92vh-16rem)] flex-col justify-center">
          <Reveal>
            {/* Instrument status line. */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 label">
              <span className="inline-flex items-center gap-2">
                <span className="accent-dot h-1.5 w-1.5 rounded-full bg-faint" />
                {profile.availability}
              </span>
              <span className="h-3 w-px bg-line-strong" aria-hidden />
              <span>{profile.location}</span>
              <span className="h-3 w-px bg-line-strong" aria-hidden />
              <span className="accent-text">
                <Clock />
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">
              {profile.statement}
            </h1>

            {/* Drafting rule: the one deliberate accent stroke. */}
            <div className="accent-dot mt-7 h-[3px] w-16 rounded-full bg-faint" />

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {profile.hook}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
              >
                View my work
              </a>
              <a
                href={profile.resume}
                className="group inline-flex items-center gap-2 rounded-md border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Résumé
                <span className="font-mono text-xs text-faint transition-colors group-hover:text-ink">
                  PDF
                </span>
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="accent-link px-3 py-3 text-sm font-semibold text-muted transition-colors hover:text-ink"
              >
                GitHub
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {highlights.map((h) => {
                const inner = (
                  <>
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    {h.label}
                  </>
                );
                return (
                  <li key={h.label}>
                    {h.href ? (
                      <a
                        href={h.href}
                        target="_blank"
                        rel="noreferrer"
                        className="chip gap-1.5 transition-colors hover:border-ink hover:text-ink"
                      >
                        {inner}
                      </a>
                    ) : (
                      <span className="chip gap-1.5">{inner}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Spec table of quick facts. */}
          <Reveal delay={0.1} className="mt-16">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.label} className="bg-paper px-4 py-4">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
