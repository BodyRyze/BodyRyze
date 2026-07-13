import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#05070d",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 300,
            width: 900,
            height: 900,
            borderRadius: "50%",
            background: "#1e6bff",
            opacity: 0.35,
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: -2,
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            Body
            <span style={{ color: "#00e5ff" }}>Ryze</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "#9dc0ff",
            textTransform: "uppercase",
            letterSpacing: 6,
            zIndex: 1,
          }}
        >
          Coaching sportif 100% sur-mesure
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            padding: "14px 36px",
            borderRadius: 999,
            border: "2px solid rgba(30,107,255,0.6)",
            background: "rgba(30,107,255,0.12)",
            color: "#ffffff",
            fontSize: 26,
            textTransform: "uppercase",
            letterSpacing: 3,
            zIndex: 1,
          }}
        >
          Réponse sous 24h
        </div>
      </div>
    ),
    { ...size }
  );
}
