import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ACIC-BMU Foundation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #e67e22 0%, #c0651a 50%, #8b4513 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "32px",
            padding: "50px 80px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            ACIC-BMU Foundation
          </div>
          <div
            style={{
              width: 80,
              height: 4,
              background: "rgba(255,255,255,0.5)",
              borderRadius: 4,
              marginTop: 24,
              marginBottom: 24,
            }}
          />
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Innovating Ideas, Transforming Ventures
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: 32,
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span>110+ Startups</span>
            <span>|</span>
            <span>500+ Women Empowered</span>
            <span>|</span>
            <span>850 Cr+ Valuation</span>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 14,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Supported by Atal Innovation Mission, NITI Aayog
        </div>
      </div>
    ),
    { ...size }
  );
}
