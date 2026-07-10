import { profile, facts, highlights } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="main" className="relative isolate overflow-hidden">
      {/* Dot-grid texture, fading in from the top. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--line-strong) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 0%, #000 0%, transparent 80%)",
          maskImage: "radial-gradient(80% 60% at 50% 0%, #000 0%, transparent 80%)",
        }}
      />
      {/* Soft teal glow filling the space to the right of the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(50% 55% at 70% 25%, var(--accent-glow), transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 py-32 md:px-8">
        <Reveal>
          <p className="flex items-center gap-2.5 text-sm text-muted">
            <span className="accent-dot h-2 w-2 rounded-full bg-faint" />
            {profile.availability}
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {profile.statement}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.hook}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-primary rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={profile.resume}
              className="rounded-md border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Resume
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {highlights.map((h) => {
              const base =
                "inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-medium text-muted";
              return (
                <li key={h.label}>
                  {h.href ? (
                    <a
                      href={h.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${base} transition-colors hover:border-ink hover:text-ink`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {h.label}
                    </a>
                  ) : (
                    <span className={base}>
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {h.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow text-xs uppercase tracking-[0.1em] text-faint">{f.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
