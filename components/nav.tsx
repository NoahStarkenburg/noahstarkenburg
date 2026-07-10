"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-line bg-paper/85 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <a href="#main" className="text-base font-semibold tracking-tight text-ink">
          {profile.name}
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`accent-link inline-flex items-center gap-2 text-sm transition-colors hover:text-ink ${
                      isActive ? "text-ink" : "text-muted"
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full bg-accent transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-24 transition-opacity duration-200 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-2xl font-medium text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
