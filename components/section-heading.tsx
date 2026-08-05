import { Reveal } from "@/components/reveal";

/**
 * Section masthead: a hairline rule carrying a mono "coordinate" (index + label)
 * on the left and an optional annotation on the right, then the display title.
 * The numbering is wayfinding — it matches the nav order, not decoration.
 */
export function SectionHeading({
  index,
  label,
  title,
  note,
}: {
  index: string;
  label: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 border-t border-line-strong pt-3.5">
        <span className="accent-text label">{index}</span>
        <span className="label">{label}</span>
        {note ? (
          <span className="label ml-auto hidden !tracking-[0.12em] text-faint sm:block">
            {note}
          </span>
        ) : null}
      </div>
      <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
