"use client";

import Image from "next/image";
import { useState } from "react";

function initialsOf(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  // Single word: use internal capitals if present (FamilyCore -> FC).
  const caps = parts[0].match(/[A-Z]/g);
  if (caps && caps.length >= 2) return (caps[0] + caps[1]).toUpperCase();
  return parts[0].slice(0, 2).toUpperCase();
}

// Shows the image when `src` is set and loads; otherwise a monogram of the
// name. Falls back to the monogram if the image ever fails to load. Sizing and
// shape come entirely from `className` so it works for photos and logos alike.
export function Avatar({
  src,
  name,
  className = "",
  imgSizes = "48px",
  contain = false,
}: {
  src?: string;
  name: string;
  className?: string;
  imgSizes?: string;
  // `contain` fits the whole image on a white chip (for logos); the default
  // covers/fills the frame (for photos).
  contain?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <div className={`relative overflow-hidden ${contain ? "bg-white" : ""} ${className}`}>
        <Image
          src={src}
          alt={name}
          fill
          sizes={imgSizes}
          className={contain ? "object-contain p-1" : "object-cover"}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-surface text-faint ${className}`}
      aria-label={name}
    >
      {initialsOf(name)}
    </div>
  );
}
