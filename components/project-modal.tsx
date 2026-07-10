"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { type Project } from "@/lib/content";
import { BrowserFrame } from "@/components/browser-frame";
import { ChevronLeft, ChevronRight, GitHub, Maximize, X } from "@/components/icons";

function hostLabel(project: Project) {
  const link = project.links.find((l) => l.href.startsWith("http"));
  if (!link) return "noahstarkenburg.dev";
  try {
    return new URL(link.href).host.replace(/^www\./, "");
  } catch {
    return "noahstarkenburg.dev";
  }
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [i, setI] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [shown, setShown] = useState<Project | null>(project);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Reset to the first slide (and un-zoom) whenever a different project opens.
  if (project !== shown) {
    setShown(project);
    setI(0);
    setZoomed(false);
  }

  const images = project?.images ?? [];
  const count = images.length;

  const prev = useCallback(() => setI((n) => (count ? (n - 1 + count) % count : 0)), [count]);
  const next = useCallback(() => setI((n) => (count ? (n + 1) % count : 0)), [count]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(false);
        else onClose();
      } else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose, prev, next, zoomed]);

  if (!project) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden />

        <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-line-strong bg-paper shadow-2xl">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-paper/80 text-muted backdrop-blur transition-colors hover:border-ink hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Screenshot viewer: full width, scrolls vertically for tall shots */}
          {count > 0 ? (
            <div className="relative shrink-0 border-b border-line bg-surface">
              <div className="max-h-[62vh] overflow-y-auto">
                <button
                  type="button"
                  onClick={() => setZoomed(true)}
                  aria-label="Enlarge screenshot"
                  className="block w-full cursor-zoom-in"
                >
                  <Image
                    src={images[i]}
                    alt={`${project.title} screenshot ${i + 1} of ${count}`}
                    width={0}
                    height={0}
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="h-auto w-full"
                  />
                </button>
              </div>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous screenshot"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-paper/85 text-ink backdrop-blur transition-colors hover:border-ink"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next screenshot"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong bg-paper/85 text-ink backdrop-blur transition-colors hover:border-ink"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-paper/85 px-2 py-1 text-[11px] font-medium text-muted backdrop-blur">
                <Maximize className="h-3.5 w-3.5" />
                Click to enlarge
              </span>
            </div>
          ) : (
            <div className="aspect-video shrink-0 overflow-hidden border-b border-line">
              <BrowserFrame
                title={project.title}
                subtitle={project.tagline}
                label={hostLabel(project)}
              />
            </div>
          )}

          {count > 1 && (
            <div className="flex shrink-0 items-center justify-center gap-2 border-b border-line py-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setI(idx)}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  aria-current={idx === i}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-6 bg-accent" : "w-2 bg-line-strong hover:bg-faint"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Details */}
          <div className="overflow-y-auto p-6 md:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <span className="shrink-0 text-xs text-faint">
                {project.status} · {project.year}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
            <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="rounded bg-surface px-2 py-0.5 text-xs text-muted">
                  {s}
                </li>
              ))}
            </ul>

            {project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                {project.links.map((l) => {
                  const external = l.href.startsWith("http");
                  const props = external ? { target: "_blank", rel: "noreferrer" } : {};
                  const isDemo = /live|demo/i.test(l.label);
                  if (isDemo) {
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        {...props}
                        className="btn-primary inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
                      >
                        {l.label}
                        <span aria-hidden>&rarr;</span>
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
            )}
          </div>
        </div>
      </div>

      {/* Full-screen lightbox */}
      {zoomed && count > 0 && (
        <div
          className="fixed inset-0 z-[120] overflow-auto bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged screenshot"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Close enlarged view"
            className="fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white transition-colors hover:bg-black/70"
          >
            <X className="h-5 w-5" />
          </button>
          <Image
            src={images[i]}
            alt={`${project.title} screenshot ${i + 1} of ${count}, enlarged`}
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto h-auto w-full max-w-6xl rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
