import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-faint md:flex-row md:items-center md:justify-between md:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#main" className="accent-link transition-colors hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}
