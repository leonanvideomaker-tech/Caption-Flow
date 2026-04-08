"use client";

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

      {/* Mobile: ocupa tela toda */}
      <div className="md:hidden" style={{ width: "100%", maxHeight: "100vh", overflow: "hidden", lineHeight: 0 }}>
        <video
          className="video-aula"
          src="/video-aula.mp4"
          autoPlay
          playsInline
          loop
          controls
          controlsList="noplaybackrate nofullscreen nodownload noremoteplayback"
          style={{
            width: "100%",
            maxHeight: "100vh",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Desktop: proporcional, vídeo inteiro visível */}
      <div className="hidden md:flex" style={{ justifyContent: "center", padding: "48px 24px" }}>
        <video
          className="video-aula"
          src="/video-aula.mp4"
          autoPlay
          playsInline
          loop
          controls
          controlsList="noplaybackrate nofullscreen nodownload noremoteplayback"
          style={{
            width: "100%",
            maxWidth: "1100px",
            borderRadius: "16px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
