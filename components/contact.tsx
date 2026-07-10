import { profile } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CopyEmail } from "@/components/copy-email";
import { GitHub, LinkedIn } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      {/* Ambient glow that bookends the hero at the bottom of the page. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(45% 55% at 30% 90%, var(--accent-glow), transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <SectionHeading label="Contact" title="Get in touch" />

        <Reveal>
          <p className="max-w-2xl leading-relaxed text-muted">
            I&apos;m looking for a software engineering or developer role on a team building real
            products. If your team is hiring, or you just want to talk shop, my inbox is open.
          </p>

          <CopyEmail />

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
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
