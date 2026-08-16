import { ImageResponse } from "next/og";

export const alt = "Jeongrak Lee — Postdoctoral Researcher, POSTECH GIFT";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ffffff 0%, #eef2ff 50%, #fdf4ff 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#4f46e5",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          Postdoctoral Researcher · POSTECH GIFT
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            color: "#0b1120",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          Jeongrak Lee
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#475569",
            maxWidth: 980,
            lineHeight: 1.35,
          }}
        >
          Charting the path to next-generation space propulsion — chemical,
          plasma-hybrid, and photonic.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 22,
            color: "#94a3b8",
            fontFamily: "monospace",
            letterSpacing: "0.06em",
          }}
        >
          jeongraklee-site.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
