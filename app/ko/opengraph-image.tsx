import { ImageResponse } from "next/og";

export const alt = "이정락 — 포스텍 GIFT 박사후연구원";
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
          박사후연구원 · 포스텍 GIFT
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
          이정락
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
          차세대 우주 추진의 길을 그리다 — 화학, 플라즈마-하이브리드, 광자.
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
          jeongraklee.com/ko
        </div>
      </div>
    ),
    size,
  );
}
