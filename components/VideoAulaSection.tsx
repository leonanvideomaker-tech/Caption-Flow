"use client";

const VIMEO_ID = "1181017978";
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?dnt=1`;

export default function VideoAulaSection() {
  return (
    <section style={{ background: "#0e0e0e" }}>
      {/* Faixa laranja de fora a fora */}
      <div style={{
        background: "#FF6D29",
        width: "100%",
        padding: "14px 24px",
        textAlign: "center",
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
          color: "#000",
          letterSpacing: "0.01em",
        }}>
          Veja como é por dentro | Aula 03
        </span>
      </div>

      {/* Mobile: 16:9 full width */}
      <div className="md:hidden" style={{ width: "100%", position: "relative", paddingBottom: "56.25%", lineHeight: 0 }}>
        <iframe
          src={VIMEO_SRC}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Desktop: centralizado, max 1100px */}
      <div className="hidden md:flex" style={{ justifyContent: "center", padding: "48px 24px" }}>
        <div style={{ width: "100%", maxWidth: "1100px", position: "relative", paddingBottom: "calc(56.25% * 1100 / 1100)", aspectRatio: "16/9" }}>
          <iframe
            src={VIMEO_SRC}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "16px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              display: "block",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
