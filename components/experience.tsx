import { experience } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Avatar } from "@/components/avatar";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading label="Experience" title="Where I've worked" />

      <div className="space-y-14">
        {experience.map((job) => (
          <Reveal key={job.company} as="article">
            <div className="grid gap-4 md:grid-cols-4 md:gap-8">
              <div className="md:col-span-1">
                <p className="text-sm text-muted">{job.period}</p>
                <Avatar
                  src={job.logo}
                  name={job.company}
                  imgSizes="128px"
                  className="mt-4 h-32 w-32 rounded-2xl border border-line-strong text-2xl font-semibold"
                />
              </div>

              <div className="md:col-span-3">
                <h3 className="text-lg font-semibold text-ink">
                  {job.role} <span className="text-muted">· {job.company}</span>
                </h3>
                <p className="mt-1 text-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
