"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
      <a
        href={profile.socials.email}
        className="accent-link break-words text-3xl font-semibold text-ink underline decoration-line-strong underline-offset-[6px] transition-colors hover:decoration-ink sm:text-4xl"
      >
        {profile.email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-ink hover:text-ink"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
