import { ImageResponse } from "next/og";

// Next.js file convention: this auto-generates the Open Graph + Twitter card
// image at /opengraph-image and wires the meta tags. 1200x630 is the standard size.
export const alt = "Noah Starkenburg - Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1c1c1c";
const MUTED = "#5b5b5b";
const ACCENT = "#0f766e";
const SURFACE = "#f6f6f4";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                background: ACCENT,
                borderRadius: "10px",
                display: "flex",
              }}
            />
            <div style={{ fontSize: "28px", color: MUTED }}>noahstarkenburg.dev</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "24px", color: MUTED }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "6px", background: ACCENT, display: "flex" }} />
            Open to software roles
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "94px", fontWeight: 700, color: INK, lineHeight: 1.05 }}>
            Noah Starkenburg
          </div>
          <div style={{ display: "flex", fontSize: "40px", color: ACCENT, marginTop: "18px", fontWeight: 600 }}>
            Software Engineer
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: MUTED, marginTop: "20px" }}>
            Full-stack web apps and backend services
          </div>
        </div>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {["C#", ".NET", "React", "TypeScript", "Go", "SQL"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: "24px",
                color: INK,
                background: SURFACE,
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
