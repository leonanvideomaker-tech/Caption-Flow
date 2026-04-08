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

      {/* Vídeo responsivo — funciona em mobile e desktop */}
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "32px 16px",
      }}>
        <div style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        }}>
          <iframe
            src={VIMEO_SRC}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Caption Flow — Aula 03"
          />
        </div>
      </div>
    </section>
  );
}
