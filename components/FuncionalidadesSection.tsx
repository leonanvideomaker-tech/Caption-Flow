"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ExtensionMockup from "@/components/ExtensionMockup";

type Tab = "gerar" | "converter" | "atualizacao" | "templates" | "sfx";

interface Theme {
  bg: string;
  title: string;
  label: string;
  muted: string;
  border: string;
  desc: string;
  indicator: string;
  indicatorDim: string;
}

const THEMES: Record<Tab, Theme> = {
  gerar: {
    bg: "#0e0e0e", title: "#ffffff", label: "#FF6D29",
    muted: "#444", border: "#1e1e1e", desc: "#888",
    indicator: "#FF6D29", indicatorDim: "#2a2a2a",
  },
  converter: {
    bg: "#f0efe9", title: "#1a1a1a", label: "#FF6D29",
    muted: "#bbb", border: "#e0dfd8", desc: "#666",
    indicator: "#FF6D29", indicatorDim: "#dddcd5",
  },
  atualizacao: {
    bg: "#0e0e0e", title: "#ffffff", label: "#FF6D29",
    muted: "#444", border: "#1e1e1e", desc: "#888",
    indicator: "#FF6D29", indicatorDim: "#2a2a2a",
  },
  templates: {
    bg: "#f0efe9", title: "#1a1a1a", label: "#FF6D29",
    muted: "#bbb", border: "#e0dfd8", desc: "#666",
    indicator: "#FF6D29", indicatorDim: "#dddcd5",
  },
  sfx: {
    bg: "#FF6D29", title: "#ffffff", label: "rgba(255,255,255,0.6)",
    muted: "rgba(255,255,255,0.35)", border: "rgba(255,255,255,0.18)", desc: "rgba(255,255,255,0.8)",
    indicator: "#ffffff", indicatorDim: "rgba(255,255,255,0.22)",
  },
};

const FEATURES: { id: Tab; label: string; description: string }[] = [
  {
    id: "gerar",
    label: "Gerar",
    description:
      "Importa uma transcrição (.json, .csv, .srt ou .txt), escolhe um dos 15 templates MOGRT incluídos e gera todos os clipes de legenda na timeline do Premiere com um clique.",
  },
  {
    id: "converter",
    label: "Converter",
    description:
      "Não quer animar a legenda inteira? Escolhe um dos 15 templates MOGRT incluídos, seleciona quais textos quer legendar e converte direto sem recriar nada do zero.",
  },
  {
    id: "atualizacao",
    label: "Atualizar",
    description:
      "Legendas já na timeline? Troca o template MOGRT de todos os clipes selecionados de uma vez — entre os 15 incluídos — ou copia o estilo de um clipe e cola nos outros.",
  },
  {
    id: "templates",
    label: "Templates",
    description:
      "13 templates animados prontos (2 linhas, 3 linhas, lower third) — passe o mouse para pré-visualizar antes de aplicar.",
  },
  {
    id: "sfx",
    label: "SFX",
    description:
      "Selecione o efeito sonoro, configure a faixa de áudio e aplique direto na timeline — em segundos.",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FuncionalidadesSection() {
  const [active, setActive] = useState<Tab>("gerar");
  const t = THEMES[active];

  function handleTabClick(id: Tab) {
    setActive(id);
    if (window.innerWidth <= 768) {
      const el = document.getElementById("funcionalidades");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <motion.section
      id="funcionalidades"
      animate={{ backgroundColor: t.bg }}
      transition={{ duration: 0.55, ease: EASE }}
      style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
    >
      {/* Header */}
      <div style={{ padding: "0 clamp(2rem, 6vw, 8rem)", marginBottom: "3.5rem" }}>
        <motion.p
          animate={{ color: t.label }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Funcionalidades
        </motion.p>
        <motion.h2
          animate={{ color: t.title }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Tudo que você precisa,{" "}
          <motion.span
            animate={{ color: active === "sfx" ? "rgba(255,255,255,0.75)" : "#FF6D29" }}
            transition={{ duration: 0.4 }}
          >
            dentro do Premiere.
          </motion.span>
        </motion.h2>
      </div>

      {/* Two-column layout */}
      <div className="func-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "start",
        gap: "4rem",
        padding: "0 clamp(2rem, 6vw, 8rem)",
      }}>

        {/* Left: tab list */}
        <div>
          {FEATURES.map((f) => {
            const isActive = active === f.id;
            return (
              <motion.div
                key={f.id}
                onClick={() => handleTabClick(f.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleTabClick(f.id); } }}
                role="button"
                tabIndex={0}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "20px 0",
                  background: "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  outline: "none",
                }}
                animate={{ borderBottomColor: t.border, borderBottomWidth: "1px", borderBottomStyle: "solid" }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  {/* indicator bar */}
                  <motion.div
                    animate={{
                      background: isActive ? t.indicator : t.indicatorDim,
                      height: isActive ? 32 : 20,
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{ width: 3, borderRadius: 2, flexShrink: 0 }}
                  />
                  {/* label */}
                  <motion.span
                    animate={{
                      color: isActive ? t.title : t.muted,
                      fontSize: isActive ? "2.4rem" : "1.0rem",
                      fontWeight: isActive ? 700 : 400,
                    }}
                    transition={{ duration: 0.35, ease: EASE }}
                    style={{
                      fontFamily: "'TASAOrbiter', sans-serif",
                      letterSpacing: "-0.01em",
                      display: "block",
                    }}
                  >
                    {f.label}
                  </motion.span>
                </div>

                {/* Expandable description */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key={f.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.38, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <motion.p
                        animate={{ color: t.desc }}
                        transition={{ duration: 0.4 }}
                        style={{
                          fontFamily: "'TASAOrbiter', sans-serif",
                          fontSize: "1.05rem",
                          lineHeight: 1.65,
                          margin: "14px 0 0 17px",
                        }}
                      >
                        {f.description}
                      </motion.p>

                      {/* Templates callout */}
                      {f.id === "templates" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.18, ease: EASE }}
                          style={{
                            marginTop: 16,
                            marginLeft: 17,
                            padding: "16px 20px",
                            borderRadius: 12,
                            background: "rgba(255,109,41,0.08)",
                            border: "1.5px solid rgba(255,109,41,0.35)",
                          }}
                        >
                          <p style={{
                            fontFamily: "'TASAOrbiter', sans-serif",
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            color: "#FF6D29",
                            margin: "0 0 6px",
                            letterSpacing: "-0.02em",
                          }}>
                            Use o seu próprio template.
                          </p>
                          <p style={{
                            fontFamily: "'TASAOrbiter', sans-serif",
                            fontSize: "0.9rem",
                            color: t.desc,
                            margin: 0,
                            lineHeight: 1.6,
                          }}>
                            Criou um MOGRT com a sua identidade visual? Faça o upload direto na extensão e use como qualquer template nativo. Pouquíssimas extensões do mercado permitem isso.
                          </p>
                        </motion.div>
                      )}

                      {/* SFX callout */}
                      {f.id === "sfx" && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.18, ease: EASE }}
                          style={{
                            marginTop: 16,
                            marginLeft: 17,
                            padding: "14px 18px",
                            borderRadius: 12,
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.28)",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          <p style={{
                            fontFamily: "'TASAOrbiter', sans-serif",
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            color: "#fff",
                            margin: "0 0 4px",
                            letterSpacing: "-0.01em",
                          }}>
                            +60 efeitos sonoros inclusos
                          </p>
                          <p style={{
                            fontFamily: "'TASAOrbiter', sans-serif",
                            fontSize: "0.82rem",
                            color: "rgba(255,255,255,0.75)",
                            margin: 0,
                            lineHeight: 1.5,
                          }}>
                            Quase nenhuma extensão do mercado oferece isso. Aplique sons automaticamente, direto na timeline.
                          </p>
                        </motion.div>
                      )}

                      {/* Mobile inline mockup — hidden on desktop */}
                      <div className="func-inline-mockup">
                        <div className="func-mockup-scale">
                          <ExtensionMockup activeTab={f.id} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right: sticky mockup */}
        <div className="func-mockup" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "sticky",
          top: "5rem",
        }}>
          <ExtensionMockup activeTab={active} />
        </div>
      </div>
      <style>{`
        .func-inline-mockup { display: none; }

        @media (max-width: 768px) {
          .func-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            padding: 0 1.25rem !important;
          }
          .func-mockup { display: none !important; }
          .func-inline-mockup {
            display: block;
            margin-top: 1.5rem;
            margin-left: -20px;
            margin-right: -20px;
            overflow: hidden;
            border-radius: 14px;
          }
          .func-mockup-scale {
            transform: scale(0.92);
            transform-origin: top center;
            margin-bottom: -42px;
          }
        }
      `}</style>
    </motion.section>
  );
}
