"use client";
import React, { useState } from "react";

// ─── CSS 3D box geometry ───────────────────────────────────────────────────────
const FW = 164;   // front face width
const FH = 256;   // front face height
const D  = 30;    // box depth (right + top strip thickness)
const BAND = 80;  // colored bottom band height (within front face)

interface BoxConfig {
  badge: string;
  isBonus: boolean;
  titleLine1: string;
  titleLine2: string;
  titleColor: string;
  titleSize?: string;
  ghostLetter: string;
  subtitle: string;
  value: string;
  bodyBg: string;
  bandBg: string;
  topFaceBg: string;
  sideFaceBg: string;
}

const PRODUCT_BOXES: BoxConfig[] = [
  {
    badge: "Extensão",
    isBonus: false,
    titleLine1: "Caption Flow",
    titleLine2: "Basic",
    titleColor: "#a8a8a8",
    ghostLetter: "B",
    subtitle: "Módulo essencial de legendas para Premiere",
    value: "R$147",
    bodyBg: "#111111",
    bandBg: "#252525",
    topFaceBg: "#2a2a2a",
    sideFaceBg: "#0d0d0d",
  },
  {
    badge: "Extensão Pro",
    isBonus: false,
    titleLine1: "Caption Flow",
    titleLine2: "Pro",
    titleColor: "#FF6D29",
    ghostLetter: "P",
    subtitle: "SFX, templates animados e recursos avançados",
    value: "R$297",
    bodyBg: "linear-gradient(170deg, #1e1000 0%, #111 100%)",
    bandBg: "#FF6D29",
    topFaceBg: "#2e1800",
    sideFaceBg: "#0e0800",
  },
  {
    badge: "Curso em vídeo",
    isBonus: false,
    titleLine1: "Vídeo",
    titleLine2: "Aulas",
    titleColor: "#e5e5e7",
    ghostLetter: "V",
    subtitle: "Passo a passo completo para dominar a extensão",
    value: "R$97",
    bodyBg: "#111111",
    bandBg: "#2a2a2a",
    topFaceBg: "#2a2a2a",
    sideFaceBg: "#0d0d0d",
  },
];

const BONUS_BOXES: BoxConfig[] = [
  {
    badge: "✦ Bônus",
    isBonus: true,
    titleLine1: "",
    titleLine2: "Estilização\ne Presets",
    titleColor: "#FF6D29",
    titleSize: "1.25rem",
    ghostLetter: "E",
    subtitle: "Vídeo aula exclusiva + presets prontos para usar",
    value: "R$97",
    bodyBg: "linear-gradient(170deg, #2e1200 0%, #1a0a00 100%)",
    bandBg: "#FF6D29",
    topFaceBg: "#3e1a00",
    sideFaceBg: "#1a0800",
  },
  {
    badge: "✦ Bônus",
    isBonus: true,
    titleLine1: "",
    titleLine2: "Masterclass\nEditando Reels Viral",
    titleColor: "#FF6D29",
    titleSize: "1.4rem",
    ghostLetter: "M",
    subtitle: "Como criar conteúdo que explode nas redes sociais",
    value: "R$157",
    bodyBg: "linear-gradient(170deg, #2e1200 0%, #1a0a00 100%)",
    bandBg: "#FF6D29",
    topFaceBg: "#3e1a00",
    sideFaceBg: "#1a0800",
  },
];


function Box3D({ cfg, lightBg = false, scale = 1 }: { cfg: BoxConfig; lightBg?: boolean; scale?: number }) {
  const { badge, isBonus, titleLine1, titleLine2, titleColor, titleSize,
          ghostLetter, subtitle, value, bodyBg, bandBg, topFaceBg, sideFaceBg } = cfg;
  const [hovered, setHovered] = useState(false);

  const fw   = Math.round(FW   * scale);
  const fh   = Math.round(FH   * scale);
  const d    = Math.round(D    * scale);
  const band = Math.round(BAND * scale);
  const r    = (n: number) => Math.round(n * scale);
  const fs   = (rem: number) => `${(rem * scale).toFixed(3)}rem`;
  const titleFontSize = titleSize
    ? `${(parseFloat(titleSize) * scale).toFixed(3)}rem`
    : fs(2.0);

  return (
    <div
      style={{
        perspective: "1000px",
        perspectiveOrigin: "58% 38%",
        flexShrink: 0,
        width: fw + d + r(24),
        height: fh + d + r(50),
        paddingTop: d + r(14),
        paddingLeft: r(10),
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((h) => !h)}
    >
      {/* 3D rotating container */}
      <div style={{
        width: fw,
        height: fh,
        position: "relative",
        transformStyle: "preserve-3d",
        transform: hovered
          ? "rotateX(4deg) rotateY(-14deg) translateY(-20px)"
          : "rotateX(14deg) rotateY(-22deg)",
        transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}>

        {/* ── Front face ── */}
        <div style={{
          position: "absolute",
          width: fw,
          height: fh,
          overflow: "hidden",
          background: bodyBg,
        }}>
          {/* Ghost letter bg decoration */}
          <div style={{
            position: "absolute",
            top: r(-20),
            right: r(-10),
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: `${r(180)}px`,
            fontWeight: 900,
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.05em",
          }}>
            {ghostLetter}
          </div>

          {/* Brand + badge */}
          <div style={{ position: "absolute", top: r(16), left: r(18) }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: fs(0.52), fontWeight: 700, letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.4)", textTransform: "uppercase", margin: 0,
            }}>
              Caption Flow
            </p>
            <span style={{
              display: "inline-block", marginTop: r(5),
              background: isBonus ? "rgba(255,109,41,0.15)" : "rgba(255,255,255,0.07)",
              color: isBonus ? "#FF9063" : "#555",
              fontSize: fs(0.48), fontWeight: 700, letterSpacing: "0.1em",
              padding: `${r(2)}px ${r(8)}px`, borderRadius: r(3), textTransform: "uppercase",
            }}>
              {badge}
            </span>
          </div>

          {/* Title block — anchored above colored band */}
          <div style={{
            position: "absolute",
            bottom: band + r(10),
            left: 0, right: 0,
            padding: `0 ${r(16)}px`,
          }}>
            <p style={{
              fontFamily: "'TASAOrbiter', sans-serif",
              fontSize: fs(0.65), fontWeight: 400,
              color: "rgba(255,255,255,0.28)",
              margin: `0 0 ${r(3)}px`, letterSpacing: "0.03em",
            }}>
              {titleLine1}
            </p>
            <p style={{
              fontFamily: "'TASAOrbiter', sans-serif",
              fontSize: titleFontSize,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: titleColor,
              margin: `0 0 ${r(8)}px`,
              whiteSpace: "pre-line",
            }}>
              {titleLine2}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: fs(0.56),
              color: "rgba(255,255,255,0.28)",
              margin: 0,
              lineHeight: 1.4,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            } as React.CSSProperties}>
              {subtitle}
            </p>
          </div>

          {/* Colored bottom band */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: band,
            background: bandBg,
            padding: `${r(14)}px ${r(18)}px ${r(12)}px`,
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}>
            <div style={{
              position: "absolute", inset: 0, overflow: "hidden",
              opacity: 0.07,
              fontSize: `${r(64)}px`, fontFamily: "'TASAOrbiter', sans-serif", fontWeight: 900,
              color: "#fff", letterSpacing: "-0.05em", lineHeight: 1,
              display: "flex", alignItems: "center", justifyContent: "flex-end",
              paddingRight: r(8),
              userSelect: "none",
            }}>
              CF
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: fs(0.5), fontWeight: 600,
              color: "rgba(255,255,255,0.55)", textTransform: "uppercase",
              letterSpacing: "0.12em", margin: `0 0 ${r(3)}px`,
            }}>
              Incluso no combo
            </p>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: fs(1.15), fontWeight: 800,
              color: "#fff", letterSpacing: "-0.02em",
              textDecoration: "line-through", opacity: 0.8,
              margin: 0,
            }}>
              {value}
            </p>
          </div>
        </div>

        {/* ── Right face ── */}
        <div style={{
          position: "absolute",
          width: d,
          height: fh,
          top: 0,
          left: fw,
          transformOrigin: "left center",
          transform: "rotateY(90deg)",
          background: sideFaceBg,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: 1, height: "100%",
            background: "rgba(255,255,255,0.07)",
          }} />
        </div>

        {/* ── Top face (lid) ── */}
        <div style={{
          position: "absolute",
          width: fw,
          height: d,
          top: 0,
          left: 0,
          transformOrigin: "top center",
          transform: "rotateX(-90deg)",
          background: topFaceBg,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: r(5), left: r(12),
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: fs(0.42), fontWeight: 700, letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.22)", textTransform: "uppercase",
          }}>
            CAPTION FLOW — {titleLine2.toUpperCase()}
          </div>
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: 1,
            background: "rgba(255,255,255,0.1)",
          }} />
        </div>
      </div>

      {/* Shadow ellipse */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: hovered ? "10%" : "15%",
        width: hovered ? "85%" : "75%",
        height: hovered ? r(22) : r(16),
        background: `radial-gradient(ellipse, rgba(0,0,0,${hovered ? "0.3" : "0.45"}) 0%, transparent 70%)`,
        filter: `blur(${hovered ? r(10) : r(6)}px)`,
        transform: `translateY(${hovered ? r(12) : r(4)}px)`,
        transition: "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

export default function OQueVaiReceberSection() {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const productScale = isMobile ? 0.52 : 1;
  const bonusScale   = isMobile ? 0.72 : 1;

  return (
    <section id="o-que-esta-incluso" style={{ background: "#0a0a0a", paddingTop: "5rem", overflow: "hidden" }}>

      {/* Header */}
      <div style={{ padding: "0 clamp(2rem, 6vw, 8rem)", marginBottom: "3.5rem", textAlign: "center" }}>
        <p style={{
          fontFamily: "'TASAOrbiter', sans-serif",
          fontSize: "0.72rem", fontWeight: 400,
          letterSpacing: "0.18em", color: "#FF6D29",
          textTransform: "uppercase", marginBottom: 14,
        }}>
          Incluso na compra
        </p>
        <h2 style={{
          fontFamily: "'TASAOrbiter', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700,
          letterSpacing: "-0.025em", lineHeight: 1.05, color: "#fff", margin: 0,
        }}>
          O que você vai receber
        </h2>
      </div>

      {/* ── Split row ── */}
      <div className="oquevai-split" style={{ display: "flex", alignItems: "stretch" }}>

        {/* Left — product boxes, orange gradient */}
        <div className="oquevai-left" style={{
          flex: "0 0 auto",
          display: "flex", flexDirection: "column",
          justifyContent: "flex-end",
          padding: `2rem 24px 3rem clamp(2rem, 6vw, 8rem)`,
          background: "linear-gradient(160deg, #FF6D29 0%, #c94b12 45%, #0a0a0a 100%)",
          gap: 16,
        }}>
          <div className="oquevai-label" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ height: 1, width: 28, background: "rgba(255,255,255,0.4)" }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.2em", color: "#fff",
              textTransform: "uppercase",
            }}>
              ✦ Ferramentas incluídas
            </span>
          </div>
          <div className="boxes-row boxes-row-product" style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            {PRODUCT_BOXES.map((cfg, i) => <Box3D key={i} cfg={cfg} scale={productScale} />)}
          </div>
        </div>

        {/* Right — bonus boxes, warm white */}
        <div className="oquevai-right" style={{
          flex: 1,
          background: "#fff9f5",
          display: "flex", flexDirection: "column",
          justifyContent: "flex-end",
          padding: `2rem clamp(2rem, 6vw, 8rem) 3rem 24px`,
          gap: 16,
        }}>
          <div className="oquevai-label" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ height: 1, width: 28, background: "rgba(255,109,41,0.3)" }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.6rem", fontWeight: 700,
              letterSpacing: "0.2em", color: "#FF6D29",
              textTransform: "uppercase",
            }}>
              ✦ Bônus exclusivos
            </span>
          </div>
          <div className="boxes-row boxes-row-bonus" style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            {BONUS_BOXES.map((cfg, i) => <Box3D key={i} cfg={cfg} lightBg scale={bonusScale} />)}
          </div>
        </div>
      </div>

      {/* ── Bottom bar — total value, centered ── */}
      <div style={{
        background: "#0a0a0a",
        padding: "3rem clamp(2rem, 6vw, 8rem) 3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.82rem",
          color: "#444",
          margin: 0,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}>
          O valor que você vai receber de tudo isso
        </p>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(3.5rem, 7vw, 6rem)",
          fontWeight: 900,
          color: "#FF6D29",
          textDecoration: "none",
          letterSpacing: "-0.05em",
          margin: 0,
          lineHeight: 1,
        }}>
          R$795,00
        </p>
      </div>

      {/* Full-width white bar — text sits inside it */}
      <div style={{
        width: "100%",
        background: "#fff",
        padding: "1.2rem clamp(2rem, 6vw, 8rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <p style={{
          fontFamily: "'TASAOrbiter', sans-serif",
          fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
          fontWeight: 700,
          margin: 0,
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}>
          <span style={{ color: "#FF6D29" }}>mas você </span>
          <span style={{ color: "#1a1a1a" }}>não vai pagar</span>
          <span style={{ color: "#FF6D29" }}> esse valor hoje</span>
        </p>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: "3rem", background: "#0a0a0a" }} />

      <style>{`
        @media (max-width: 768px) {
          .oquevai-split {
            flex-direction: column !important;
          }
          .oquevai-left, .oquevai-right {
            width: 100% !important;
            flex: none !important;
            padding: 2rem 1rem 2.5rem !important;
            align-items: center !important;
          }
          .oquevai-label {
            justify-content: center !important;
          }
          .boxes-row-product {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            flex-wrap: nowrap !important;
            padding-bottom: 0.5rem !important;
          }
          .boxes-row-bonus {
            flex-wrap: nowrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
