"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      className="hero-section relative flex items-center justify-center text-center px-6 overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(255,109,41,0.45) 0%, rgba(255,109,41,0.08) 50%, transparent 70%), #0e0e0e",
      }}
    >
      <GlowyWaves />

      <div className="hero-inner relative max-w-4xl mx-auto w-full" style={{ paddingTop: "80px", paddingBottom: "0px" }}>
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8"
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

        {/* Headline — container com altura fixa para não deslocar demais conteúdo */}
        <div style={{ height: "clamp(4.5rem, 12vw, 8rem)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
          <AnimatePresence mode="wait">
            {phase === "rotating" ? (
              <motion.div
                key="rotating"
                className="flex flex-wrap items-baseline justify-center gap-x-2"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(6px)", y: -8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.6rem, 5vw, 4rem)",
                    fontWeight: 800, color: "#fff",
                    letterSpacing: "-0.04em", lineHeight: 1.15,
                    whiteSpace: "nowrap",
                  }}
                >
                  Crie legendas
                </span>
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
                  mainClassName="overflow-hidden py-1 px-4 justify-center rounded-2xl"
                  splitLevelClassName="overflow-hidden pb-0.5"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.6rem, 5vw, 4rem)",
                    fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.15,
                    background: "linear-gradient(135deg, rgba(255,144,99,0.2) 0%, rgba(255,109,41,0.25) 100%)",
                    border: "1px solid rgba(255,109,41,0.3)",
                    color: "#FF6D29",
                    whiteSpace: "nowrap",
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="final"
                className="flex flex-wrap items-baseline justify-center gap-x-1"
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.6rem, 5vw, 4rem)",
                  fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.15,
                }}
              >
                <span style={{ color: "#adaaaa", whiteSpace: "nowrap" }}>Crie com o </span>
                <span style={{ color: "#fff", whiteSpace: "nowrap" }}>Caption</span>
                <span style={{ color: "#FF6D29", whiteSpace: "nowrap" }}>Flow</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto hero-subtitle"
          style={{ fontSize: "clamp(0.92rem, 2.5vw, 1.15rem)", color: "#adaaaa", maxWidth: "520px", lineHeight: 1.75, marginTop: "20px", marginBottom: "32px", fontFamily: "'Inter', sans-serif" }}
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
          style={{ fontSize: "0.78rem", color: "#6e6e6e", marginTop: "24px", marginBottom: "0", fontFamily: "'Inter', sans-serif" }}
        >
          Premiere Pro 2026+ · macOS e Windows · Acesso vitalício
        </motion.p>

        {/* Separador laranja mobile — ponta a ponta, fora do container */}
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100vw",
            height: "5px",
            background: "linear-gradient(90deg, #ff9063, #FF6D29)",
            marginTop: "32px",
          }}
        />
      </div>
    </section>
  );
}
