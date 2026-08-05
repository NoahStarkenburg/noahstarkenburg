import { skills } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading index="04" label="Toolkit" title="Skills & technologies" note="stack" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={(i % 3) * 0.05}>
            <div className="card card-hover h-full p-5">
              <div className="flex items-center gap-2 border-b border-line pb-3">
                <span className="accent-text label">{String(i + 1).padStart(2, "0")}</span>
                <p className="label">{group.label}</p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
