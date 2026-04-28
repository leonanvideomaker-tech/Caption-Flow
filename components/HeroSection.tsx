"use client";
import { useCallback, useState } from "react";
import { motion } from "motion/react";
import GradientBordersButton from "@/components/ui/gradient-borders-button";
import ExtensionMockup from "@/components/ExtensionMockup";
import HeroIntro from "@/components/HeroIntro";

const EASE_OUT  = [0.16, 1, 0.3, 1] as const;
const EASE_EXPO = [0.76, 0, 0.24, 1] as const;

const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "O que está incluso", href: "#o-que-esta-incluso" },
  { label: "Preço", href: "#offer" },
];

function ClipReveal({
  children,
  delay = 0,
  show,
  duration = 0.82,
}: {
  children: React.ReactNode;
  delay?: number;
  show: boolean;
  duration?: number;
}) {
  return (
    // paddingBottom prevents descenders from being clipped by overflow:hidden
    <div style={{ overflow: "hidden", paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
      <motion.div
        initial={{ y: "110%" }}
        animate={show ? { y: "0%" } : { y: "110%" }}
        transition={{ duration, delay, ease: EASE_EXPO }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SlideUp({
  children,
  delay = 0,
  show,
}: {
  children: React.ReactNode;
  delay?: number;
  show: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

const AVATARS = [
  "/avatars/avatar-pedro.png",
  "/avatars/avatar-bryan.png",
  "/avatars/avatar-gleisson.png",
  "/avatars/avatar-diego.png",
  "/avatars/avatar-jammal.png",
];

function AvatarCircle({ index }: { index: number }) {
  return (
    <div style={{
      width: 34, height: 34,
      borderRadius: "50%",
      border: "2.5px solid #0e0e0e",
      background: "#1a1a1a",
      flexShrink: 0,
      marginLeft: index > 0 ? -10 : 0,
      zIndex: 5 - index,
      overflow: "hidden",
      boxShadow: "0 1px 4px rgba(0,0,0,0.5)",
      position: "relative",
    }}>
      <img
        src={AVATARS[index % AVATARS.length]}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

export default function HeroSection() {
  const [show, setShow] = useState(false);
  const handleIntroComplete = useCallback(() => setShow(true), []);

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        overflow: "hidden",
        background: "#0e0e0e",
      }}
    >
      <HeroIntro onComplete={handleIntroComplete} />

      {/* ── Minimal inline nav ── */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.75rem clamp(2rem, 5vw, 6rem)",
        }}
      >
        {/* Links — flush left */}
        <div style={{ display: "flex", gap: "2.5rem" }} className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 400,
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#offer"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 500,
            textDecoration: "none",
            background: "#fff",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "8px",
            padding: "0.45rem 1.1rem",
            transition: "opacity 0.2s",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
        >
          Comprar agora
        </a>
      </motion.nav>

      {/* ── Content grid ── */}
      <div
        className="hero-content-grid"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          alignItems: "start",
          minHeight: "100vh",
        }}
      >
        {/* LEFT: text column */}
        <div className="hero-text-col" style={{
          padding: "7rem clamp(2rem, 4vw, 4.5rem) 4rem clamp(2rem, 6vw, 8rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "100vh",
        }}>

          {/* Eyebrow badge */}
          <div style={{ marginBottom: 28 }}>
            <ClipReveal delay={0} show={show} duration={0.7}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.12em" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "-0.01em", color: "rgba(255,255,255,0.65)" }}>Caption</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "-0.01em", color: "#FF6D29" }}>Flow</span>
              </div>
            </ClipReveal>
          </div>

          {/* Headline — 3 staggered clip reveals */}
          <div style={{ marginBottom: 32 }}>
            <ClipReveal delay={0.1} show={show} duration={0.9}>
              <span style={{
                display: "block",
                fontFamily: "'TASAOrbiter', sans-serif",
                fontSize: "clamp(2.8rem, 5.6vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
                color: "#ffffff",
              }}>
                Legende
              </span>
            </ClipReveal>
            <ClipReveal delay={0.18} show={show} duration={0.9}>
              <span style={{
                display: "block",
                fontFamily: "'TASAOrbiter', sans-serif",
                fontSize: "clamp(2.8rem, 5.6vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#ffffff",
              }}>
                vídeos em segundos
              </span>
            </ClipReveal>
            <ClipReveal delay={0.26} show={show} duration={0.9}>
              <span style={{
                display: "block",
                fontFamily: "'TASAOrbiter', sans-serif",
                fontSize: "clamp(2.8rem, 5.6vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#FF6D29",
              }}>
                direto no <br className="hero-premiere-br" />Premiere.
              </span>
            </ClipReveal>
          </div>

          {/* Description */}
          <div style={{ marginBottom: 36 }}>
            <ClipReveal delay={0.38} show={show}>
              <p style={{
                fontFamily: "'TASAOrbiter', sans-serif",
                fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
                fontWeight: 400,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.52)",
                margin: 0,
                maxWidth: "40ch",
              }}>
                <span style={{ display: "block" }}>Chega de perder tempo criando legendas,</span>
                <strong style={{ display: "block", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>
                  entregue 5x mais com o Caption Flow
                </strong>
              </p>
            </ClipReveal>
          </div>

          <SlideUp delay={0.5} show={show}>
            <GradientBordersButton
              href="#caption-flow-em-acao"
              onClick={(e) => {
                if (typeof window !== "undefined" && window.innerWidth <= 768) {
                  e.preventDefault();
                  document.getElementById("hero-mockup-mobile")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Veja como funciona
            </GradientBordersButton>
          </SlideUp>

          <SlideUp delay={0.62} show={show}>
            <p style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.22)",
              marginTop: 16,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.02em",
            }}>
              Premiere Pro 2026+ · macOS e Windows · Acesso vitalício
            </p>
          </SlideUp>

          {/* Social proof */}
          <SlideUp delay={0.74} show={show}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 24,
            }}>
              <div style={{ display: "flex", flexShrink: 0 }}>
                {AVATARS.map((_, i) => (
                  <AvatarCircle key={i} index={i} />
                ))}
              </div>
              <p style={{
                fontSize: "0.78rem",
                color: "rgba(255,255,255,0.42)",
                fontFamily: "'TASAOrbiter', sans-serif",
                margin: 0,
                lineHeight: 1.45,
              }}>
                <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>100+</strong>{" "}
                editores usam e recomendam o Caption Flow.
              </p>
            </div>
          </SlideUp>
        </div>

        {/* RIGHT: mockup column */}
        <div id="hero-mockup-mobile" className="hero-right-col" style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "9.5rem clamp(1.5rem, 3vw, 4rem) 0",
          position: "relative",
        }}>
          <p className="hero-mockup-mobile-hint" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.66rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "0 0 16px",
            display: "none",
          }}>
            Toque nas abas para explorar
          </p>

          <ClipReveal delay={0.3} show={show}>
            <p className="hero-mockup-hint" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.66rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.18)",
              textTransform: "uppercase",
              textAlign: "center",
              margin: "0 0 20px",
            }}>
              Passe o mouse e navegue pela extensão real
            </p>
          </ClipReveal>

          <SlideUp delay={0.22} show={show}>
            <div className="hero-mockup-scale" style={{
              transform: "scale(1.6)",
              transformOrigin: "top center",
              filter: "drop-shadow(0 12px 60px rgba(255,109,41,0.12))",
            }}>
              <ExtensionMockup />
            </div>
          </SlideUp>
        </div>
      </div>

      <style>{`
        .hero-premiere-br { display: none; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hero-content-grid {
            grid-template-columns: 1fr !important;
            min-height: 100dvh !important;
          }
          .hero-right-col {
            padding: 0 5px 3rem !important;
            align-items: center !important;
            justify-content: flex-start !important;
          }
          .hero-mockup-hint { display: none !important; }
          .hero-mockup-mobile-hint { display: block !important; }
          .hero-mockup-scale {
            transform: scale(1) !important;
            transform-origin: top center !important;
          }
          .hero-text-col {
            min-height: 100dvh !important;
            padding: 5.5rem 1.5rem 3rem !important;
            justify-content: center !important;
          }
          .hero-premiere-br { display: inline !important; }
        }
      `}</style>
    </section>
  );
}
