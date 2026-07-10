import { ImageResponse } from "next/og";

// Next file convention: generates the favicon at /icon and wires the meta tag.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f766e",
          color: "#ffffff",
          fontSize: 22,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
