import { marquee } from "@/lib/content";

// Seamless infinite scroll: the list is duplicated and the track slides by 50%.
// Edge fade via an inline mask (Lightning CSS drops masks in authored CSS).
export function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <div
      className="marquee relative overflow-hidden border-y border-line py-5"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max items-center gap-10">
        {items.map((t, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="whitespace-nowrap font-mono text-sm text-muted">{t}</span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
