import { Reveal } from "@/components/reveal";

export function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="eyebrow text-xs font-semibold uppercase tracking-[0.12em] text-faint">{label}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
    </Reveal>
  );
}
