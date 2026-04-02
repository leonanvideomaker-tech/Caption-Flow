"use client";
import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, AnimatePresence } from "motion/react";
import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate";
import GradientBordersButton from "@/components/ui/gradient-borders-button";
import { GlowyWaves } from "@/components/ui/glowy-waves";

const rotatingWords = ["automáticas", "fáceis", "práticas", "rápidas", "animadas"];

export default function HeroSection() {
  const [phase, setPhase] = useState<"rotating" | "final">("rotating");
  const rotateRef = useRef<TextRotateRef>(null);
  const wordIndexRef = useRef(0);

  useEffect(() => {
    if (phase !== "rotating") return;
    const interval = setInterval(() => {
      const next = wordIndexRef.current + 1;
      if (next < rotatingWords.length) {
        wordIndexRef.current = next;
        rotateRef.current?.jumpTo(next);
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("final"), 300);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [phase]);

  return (
    <section
      className="relative flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(255,109,41,0.45) 0%, rgba(255,109,41,0.08) 50%, transparent 70%), #0e0e0e",
      }}
    >
      <GlowyWaves />

      <div className="relative max-w-4xl mx-auto" style={{ paddingTop: "80px" }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-10"
          style={{
            padding: "6px 14px", borderRadius: "100px",
            border: "1px solid rgba(72,72,71,0.25)",
            background: "rgba(255,255,255,0.03)",
            fontSize: "0.78rem", color: "#adaaaa",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF6D29", display: "inline-block" }} />
          Extensão Profissional para Adobe Premiere Pro
        </div>

        {/* Headline */}
        <div style={{ minHeight: "clamp(5rem, 14vw, 9rem)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
          <LayoutGroup>
            <AnimatePresence mode="wait">
              {phase === "rotating" ? (
                <motion.div
                  key="rotating"
                  className="flex whitespace-pre items-baseline justify-center"
                  layout
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(6px)", y: -8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.span
                    layout
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.9rem, 5.5vw, 4rem)",
                      fontWeight: 800, color: "#fff",
                      letterSpacing: "-0.04em", lineHeight: 1.1,
                    }}
                  >
                    {"Crie legendas "}
                  </motion.span>
                  <TextRotate
                    ref={rotateRef}
                    texts={rotatingWords}
                    auto={false}
                    loop={false}
                    staggerFrom="last"
                    staggerDuration={0.025}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    mainClassName="overflow-hidden py-1 px-5 justify-center rounded-2xl"
                    splitLevelClassName="overflow-hidden pb-0.5"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.9rem, 5.5vw, 4rem)",
                      fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1,
                      background: "linear-gradient(135deg, rgba(255,144,99,0.2) 0%, rgba(255,109,41,0.25) 100%)",
                      border: "1px solid rgba(255,109,41,0.3)",
                      color: "#FF6D29",
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="final"
                  className="flex whitespace-pre items-baseline justify-center"
                  layout
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.9rem, 5.5vw, 4rem)",
                    fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1,
                  }}
                >
                  <span style={{ color: "#adaaaa" }}>{"Crie com o "}</span>
                  <span style={{ color: "#fff" }}>{"Caption"}</span>
                  <span style={{ color: "#FF6D29" }}>{"Flow"}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto hero-subtitle"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.15rem)", color: "#adaaaa", maxWidth: "520px", lineHeight: 1.75, marginTop: "28px", marginBottom: "40px", fontFamily: "'Inter', sans-serif" }}
        >
          Transcreva seu vídeo inteiro com{" "}
          <span style={{
            background: "linear-gradient(135deg, #ff9063, #FF6D29)",
            borderRadius: "8px",
            padding: "3px 10px",
            color: "#fff",
            fontWeight: 700,
            boxDecorationBreak: "clone",
            WebkitBoxDecorationBreak: "clone",
            lineHeight: 2,
          }}>
            legendas animadas em menos de 1 minuto, direto no Adobe Premiere Pro.
          </span>
          {" "}Sem ferramentas externas. Sem retrabalho.
        </motion.p>

        {/* CTA único */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex justify-center"
        >
          <GradientBordersButton href="#caption-flow-em-acao">
            Veja como funciona
          </GradientBordersButton>
        </motion.div>

        {/* Micro proof */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: "0.78rem", color: "#6e6e6e", marginTop: "28px", fontFamily: "'Inter', sans-serif" }}
        >
          Premiere Pro 2026+ · macOS e Windows · Acesso vitalício
        </motion.p>
      </div>
    </section>
  );
}
