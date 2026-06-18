import { profile, facts } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="main"
      className="mx-auto max-w-5xl px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44"
    >
      <Reveal>
        <p className="flex items-center gap-2.5 text-sm text-muted">
          <span className="accent-dot h-2 w-2 rounded-full bg-faint" />
          {profile.availability}
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl">
          {profile.statement}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.hook}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="btn-primary rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            View my work
          </a>
          <a
            href={profile.resume}
            className="rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Résumé
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-16">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow text-xs uppercase tracking-[0.1em] text-faint">{f.label}</dt>
              <dd className="mt-1.5 text-sm font-medium text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
