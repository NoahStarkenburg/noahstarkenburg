"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ArrowUpRight, Gallery, GitHub } from "@/components/icons";
import { ProjectModal } from "@/components/project-modal";

type Link = Project["links"][number];

const isDemo = (label: string) => /live|demo/i.test(label);

function ProjectLinks({ links }: { links: Link[] }) {
  if (links.length === 0) return null;

  return (
    <div className="relative z-20 flex flex-wrap items-center gap-x-5 gap-y-2">
      {links.map((l) => {
        const external = l.href.startsWith("http");
        const props = external ? { target: "_blank", rel: "noreferrer" } : {};

        if (isDemo(l.label)) {
          return (
            <a
              key={l.label}
              href={l.href}
              {...props}
              className="btn-primary inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          );
        }

        return (
          <a
            key={l.label}
            href={l.href}
            {...props}
            className="accent-link inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
          >
            {l.href.includes("github.com") && <GitHub className="h-4 w-4" />}
            {l.label}
          </a>
        );
      })}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="chip">
          {s}
        </li>
      ))}
    </ul>
  );
}

function GalleryHint({ count }: { count: number }) {
  return (
    <span className="accent-text label inline-flex items-center gap-1.5 !tracking-[0.08em]">
      <Gallery className="h-3.5 w-3.5" />
      {count} screenshot{count > 1 ? "s" : ""}
    </span>
  );
}

// Stretched overlay button: opens the gallery when the whole card is clicked
// while the links (higher z-index) stay independently clickable.
function OpenButton({ title, onOpen }: { title: string; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${title} screenshots`}
      className="absolute inset-0 z-10 rounded-lg"
    />
  );
}

function Footer({
  count,
  links,
  className = "",
}: {
  count: number;
  links: Link[];
  className?: string;
}) {
  if (count === 0 && links.length === 0) return null;
  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 ${className}`}>
      {count > 0 && <GalleryHint count={count} />}
      <ProjectLinks links={links} />
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-28">
      <SectionHeading index="03" label="Projects" title="Things I've built" note="selected work" />

      <div className="space-y-5">
        {featured.map((p) => {
          const count = p.images?.length ?? 0;
          return (
            <Reveal key={p.title} as="article">
              <div
                className={`card card-hover relative p-6 md:p-8 ${
                  count > 0 ? "cursor-pointer" : ""
                }`}
              >
                {count > 0 && <OpenButton title={p.title} onOpen={() => setActive(p)} />}
                <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="display text-2xl font-bold text-ink">{p.title}</h3>
                      <span className="accent-text label inline-flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        Featured
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>
                  </div>
                  <span className="label shrink-0 whitespace-nowrap">
                    {p.status} · {p.year}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{p.description}</p>
                <Stack items={p.stack} />
                <Footer count={count} links={p.links} className="mt-6" />
              </div>
            </Reveal>
          );
        })}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => {
            const count = p.images?.length ?? 0;
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.06} as="article">
                <div
                  className={`card card-hover relative flex h-full flex-col p-6 md:p-7 ${
                    count > 0 ? "cursor-pointer" : ""
                  }`}
                >
                  {count > 0 && <OpenButton title={p.title} onOpen={() => setActive(p)} />}
                  <div className="flex items-start justify-between gap-3 border-b border-line pb-3.5">
                    <h3 className="display text-lg font-bold text-ink">{p.title}</h3>
                    <span className="label shrink-0 whitespace-nowrap">{p.status}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{p.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                  <Stack items={p.stack} />
                  <Footer count={count} links={p.links} className="mt-auto pt-6" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
