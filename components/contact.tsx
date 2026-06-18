import { profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GitHub, LinkedIn } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading label="Contact" title="Get in touch" />

      <Reveal>
        <p className="max-w-2xl leading-relaxed text-muted">
          I&apos;m looking for a software engineering or developer role on a team building real
          products. If your team is hiring, or you just want to talk shop, my inbox is open.
        </p>

        <a
          href={profile.socials.email}
          className="accent-link mt-6 inline-block break-words text-2xl font-semibold text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink sm:text-3xl"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="accent-link inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <GitHub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="accent-link inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <LinkedIn className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={profile.resume}
            className="accent-link text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
