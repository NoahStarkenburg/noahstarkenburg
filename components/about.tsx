import { about, profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Avatar } from "@/components/avatar";

const currently = [
  "Automating workflows at Byline Bank",
  "Building backend services in C#, Java, and Go",
  "Open to full-time software roles",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading index="01" label="About" title="A bit about me" note="who · what · how" />

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
          <Avatar
            src={profile.photo}
            name={profile.name}
            imgSizes="144px"
            className="h-36 w-36 rounded-xl border border-line-strong text-3xl font-semibold"
          />
          <p className="label mt-8">Currently</p>
          <ul className="mt-3.5 space-y-2.5">
            {currently.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-px w-2.5 shrink-0 bg-line-strong" aria-hidden />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
