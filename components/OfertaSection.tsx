"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

// Card 1: extensão + acesso vitalício, SEM Clean Animation Pack
const extensaoItems = [
  "Extensão Caption Flow para Adobe Premiere Pro",
  "Acesso vitalício + atualizações futuras",
  "Compatível com macOS e Windows",
  "Tutorial de instalação em vídeo passo a passo",
  "Garantia de 7 dias",
];

// Card 2: tudo do card 1 + Clean Animation Pack
const comboExtraItems = [
  "Clean Animation Pack — 15 templates .mogrt estética Apple",
];

const revealVariants = {
  hidden: { filter: "blur(8px)", y: -16, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1, filter: "blur(0px)",
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

function GreenCheck({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm" style={{ color: "#e5e5e7" }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
        <circle cx="9" cy="9" r="9" fill="rgba(52,199,89,0.15)" />
        <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#34C759" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{text}</span>
    </li>
  );
}

export default function OfertaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="offer"
      ref={ref}
      className="py-24 px-6 relative"
      style={{ background: "#000" }}
    >
      {/* Grid sutil de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-label">Oferta</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.12}
              staggerFrom="first"
              containerClassName="justify-center"
              transition={{ type: "spring", stiffness: 250, damping: 40 }}
            >
              Tudo que você precisa para nunca mais perder tempo com legenda.
            </VerticalCutReveal>
          </h2>
          <p className="text-[#a1a1a6] mt-4 mx-auto" style={{ maxWidth: "520px", fontSize: "1rem" }}>
            Pagamento único. Sem mensalidade. Acesso imediato após a compra.
          </p>
        </div>

        {/* Tabela de ancoragem */}
        <div className="reveal mb-12 mx-auto" style={{ maxWidth: "520px" }}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
          >
            <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-xs font-semibold text-[#6e6e73] tracking-widest uppercase mb-3">O que você está recebendo</p>
              {[
                { label: "Extensão Caption Flow (Premiere Pro 2026+)", value: "R$197" },
                { label: "Tutorial de instalação em vídeo", value: "R$97" },
                { label: "Acesso vitalício + atualizações futuras", value: "R$97" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "1rem" }}>✅</span>
                    <span className="text-sm text-[#a1a1a6]">{row.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#6e6e73] line-through">{row.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 mt-1">
                <span className="font-bold text-white" style={{ fontSize: "1rem" }}>Valor real</span>
                <span className="font-bold line-through" style={{ fontSize: "1.1rem", color: "#FF3B30" }}>R$391</span>
              </div>
            </div>
            {/* Você paga hoje — fundo laranja */}
            <div
              className="px-6 py-5 flex items-center justify-between"
              style={{ background: "linear-gradient(135deg, #ff9063, #FF6D29)" }}
            >
              <span className="font-bold text-white" style={{ fontSize: "1rem" }}>Você paga hoje</span>
              <span style={{ fontSize: "2rem" }}>👇</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-5">

          {/* Card 1 — Somente a Extensão (aparece 2º no mobile) */}
          <motion.div
            custom={1}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col order-2 md:order-1"
            style={{
              flex: "0 0 auto",
              width: "100%",
              maxWidth: "320px",
              margin: "0 auto",
            }}
          >
            <div
              className="flex flex-col h-full rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="px-6 py-5"
                style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p style={{ fontSize: "0.72rem", color: "#6e6e73", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                  Caption Flow
                </p>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "2px" }}>Somente a Extensão</h3>
                <p style={{ color: "#6e6e73", fontSize: "0.8rem" }}>Para quem já tem o Clean Animation Pack.</p>
                <div className="mt-4">
                  <div style={{ display: "flex", alignItems: "baseline", gap: "3px", lineHeight: 1 }}>
                    <span style={{ fontSize: "0.8rem", color: "#adaaaa", fontFamily: "'Inter', sans-serif" }}>12x de</span>
                    <span style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>R$12</span>
                    <span style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>,25</span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#6e6e6e", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
                    ou <span style={{ color: "#adaaaa", fontWeight: 500 }}>R$147</span> à vista
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 px-6 py-5" style={{ background: "#0a0a0a" }}>
                <ul className="flex flex-col gap-3 flex-1">
                  {extensaoItems.map((item, i) => <GreenCheck key={i} text={item} />)}
                  {/* Clean Animation Pack — não incluso */}
                  <li className="flex items-start gap-3 text-sm" style={{ color: "#48484a" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                      <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.04)" />
                      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#3a3a3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Clean Animation Pack — 15 templates .mogrt estética Apple</span>
                  </li>
                </ul>
                <a
                  href="https://pay.kiwify.com.br/FoI7aY5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-[#a1a1a6] transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", background: "transparent" }}
                >
                  Quero a Extensão →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Combo Completo (aparece 1º no mobile) */}
          <motion.div
            custom={2}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col flex-1 relative order-1 md:order-2"
            style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}
          >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              animation: inView ? "cardFloat 3.2s ease-in-out infinite" : "none",
            }}
          >
            {/* Badge */}
            <div
              style={{
                position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg,#ff9063,#FF6D29)", color: "#fff", fontSize: "0.7rem", fontWeight: 700,
                padding: "5px 18px", borderRadius: "100px", letterSpacing: "0.08em",
                whiteSpace: "nowrap", zIndex: 10, fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ⭐ RECOMENDADO
            </div>

            <div
              className="flex flex-col h-full rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid rgba(255,109,41,0.6)", boxShadow: "0 0 40px rgba(255,109,41,0.18)" }}
            >
              <div
                className="px-7 py-6"
                style={{
                  background: "linear-gradient(135deg, rgba(255,144,99,0.12) 0%, rgba(255,109,41,0.08) 100%)",
                  borderBottom: "1px solid rgba(255,109,41,0.2)",
                }}
              >
                <p style={{ fontSize: "0.72rem", color: "var(--primary)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Caption Flow + Clean Animation Pack
                </p>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.3rem", marginBottom: "2px", fontFamily: "'Space Grotesk', sans-serif" }}>Combo Completo</h3>
                <p style={{ color: "#adaaaa", fontSize: "0.85rem", fontFamily: "'Inter', sans-serif" }}>Extensão + Clean Animation Pack. Tudo que você precisa, num único acesso.</p>
                <div className="mt-4">
                  <div style={{ display: "flex", alignItems: "baseline", gap: "3px", lineHeight: 1 }}>
                    <span style={{ fontSize: "0.8rem", color: "#adaaaa", fontFamily: "'Inter', sans-serif" }}>12x de</span>
                    <span style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>R$16</span>
                    <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>,17</span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#6e6e6e", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>
                    ou <span style={{ color: "#adaaaa", fontWeight: 500 }}>R$194</span> à vista
                  </p>
                </div>
              </div>
              <div className="flex flex-col flex-1 px-7 py-6" style={{ background: "rgba(0,0,0,0.6)" }}>
                <ul className="flex flex-col gap-3 flex-1">
                  {extensaoItems.map((item, i) => <GreenCheck key={i} text={item} />)}
                  {comboExtraItems.map((item, i) => <GreenCheck key={i} text={item} />)}
                </ul>
                <a
                  href="https://pay.kiwify.com.br/ZBIgHVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "linear-gradient(135deg,#ff9063,#FF6D29)" }}
                >
                  Quero o Combo Completo →
                </a>
              </div>
            </div>
          </div>
          </motion.div>
        </div>

        {/* Selos */}
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {["🔒 Checkout seguro", "⚡ Acesso imediato", "↩️ Garantia 7 dias", "🔄 Atualizações grátis"].map((item, i) => (
            <span key={i} className="text-sm text-[#6e6e73]">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
