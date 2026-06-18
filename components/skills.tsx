import { skills } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading label="Toolkit" title="Skills & technologies" />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 0.05}>
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-faint">
              {group.label}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded bg-surface px-2.5 py-1 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
