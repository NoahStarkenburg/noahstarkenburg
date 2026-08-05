import { experience } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Avatar } from "@/components/avatar";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="02"
        label="Experience"
        title="Where I've worked"
        note="2 roles · since 2025"
      />

      <div className="space-y-6">
        {experience.map((job) => (
          <Reveal key={job.company} as="article">
            <div className="card card-hover grid gap-5 p-6 md:grid-cols-4 md:gap-8 md:p-8">
              <div className="md:col-span-1">
                <p className="label !text-muted">{job.period}</p>
                <Avatar
                  src={job.logo}
                  name={job.company}
                  imgSizes="120px"
                  className="mt-4 h-24 w-24 rounded-xl border border-line-strong text-2xl font-semibold"
                />
              </div>

              <div className="md:col-span-3">
                <h3 className="display text-xl font-bold text-ink">{job.role}</h3>
                <p className="label mt-1 !normal-case !tracking-normal !text-faint">{job.company}</p>
                <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 leading-relaxed text-muted">
                      <span className="mt-3 h-px w-3 shrink-0 bg-line-strong" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <li key={s} className="chip">
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
