import { profile } from "@/lib/content";
import { ArrowUp } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <span className="label !tracking-[0.08em]">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a
          href="#main"
          className="accent-link label !tracking-[0.08em] inline-flex items-center gap-1.5 transition-colors hover:text-ink"
        >
          <ArrowUp className="h-3.5 w-3.5" aria-hidden />
          Back to top
        </a>
      </div>
    </footer>
  );
}
