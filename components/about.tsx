import { about } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const currently = [
  "Automating workflows at Byline Bank",
  "Building backend services in C#, Java, and Go",
  "Open to full-time software roles",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading label="About" title="A bit about me" />

      <div className="grid gap-10 md:grid-cols-3 md:gap-14">
        <div className="md:col-span-2">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p
                className={
                  i === 0
                    ? "mb-5 text-xl leading-relaxed text-ink"
                    : "mb-5 leading-relaxed text-muted"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="md:col-span-1">
          <p className="eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-faint">Currently</p>
          <ul className="mt-3 space-y-3">
            {currently.map((c) => (
              <li key={c} className="text-sm leading-relaxed text-muted">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
