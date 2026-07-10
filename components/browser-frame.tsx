// A mock browser window used as the gallery cover before real screenshots are
// added. Reads as an intentional title card, not a missing image.
export function BrowserFrame({
  title,
  subtitle,
  label,
}: {
  title: string;
  subtitle?: string;
  label?: string;
}) {
  return (
    <div className="flex h-full w-full flex-col bg-surface">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        {label && (
          <span className="ml-3 max-w-[60%] truncate rounded bg-paper px-2 py-0.5 font-mono text-[11px] text-faint">
            {label}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 p-8 text-center">
        <p className="text-xl font-semibold text-ink sm:text-2xl">{title}</p>
        {subtitle && <p className="max-w-md text-sm text-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
