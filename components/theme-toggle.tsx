"use client";

import { Moon, Sun } from "@/components/icons";

// Which icon shows is handled by CSS (see globals.css .theme-toggle rules),
// so there's no React state to keep in sync and no hydration flash.
export function ThemeToggle() {
  function toggle() {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="theme-toggle flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:text-ink"
    >
      <Moon className="moon h-[18px] w-[18px]" />
      <Sun className="sun h-[18px] w-[18px]" />
    </button>
  );
}
