"use client";
import { X, Check } from "lucide-react";

const SEM = [
  "Posicionamento manual de cada legenda — leva horas por vídeo",
  "Erros de sincronização constantes",
  "Recriar o estilo do zero a cada redesign",
  "Alternar entre ferramentas externas e o Premiere",
  "Entrega atrasada por causa das legendas",
  "Cobrar menos por levar mais tempo",
];

const COM = [
  "200 legendas na timeline em segundos",
  "Sincronização automática e perfeita",
  "Atualizar o estilo de todos os clips com um clique",
  "Tudo dentro do Premiere, sem sair do fluxo",
  "Entrega 5x mais rápida, mesmo volume de trabalho",
  "Acabamento premium que justifica cobrar mais",
];

export default function BeneficiosSection() {
  return (
    <section style={{ background: "#0e0e0e", paddingTop: "5rem", paddingBottom: "6rem" }}>
      <div style={{ padding: "0 clamp(2rem, 6vw, 8rem)" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            color: "#FF6D29",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Comparação
          </p>
          <h2 style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.05,
            color: "#fff",
            margin: 0,
          }}>
            Antes e depois do{" "}
            <span style={{ color: "#FF6D29" }}>Caption Flow.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="beneficios-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>

          {/* Sem Caption Flow */}
          <div style={{
            background: "rgba(255,59,48,0.04)",
            border: "1px solid rgba(255,59,48,0.14)",
            borderRadius: 16,
            padding: "1.75rem 2rem",
          }}>
            <p style={{
              fontFamily: "'TASAOrbiter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "#FF3B30",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Sem Caption Flow
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SEM.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(255,59,48,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <X size={10} color="#FF3B30" strokeWidth={2.5} />
                  </div>
                  <span style={{
                    fontFamily: "'TASAOrbiter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Com Caption Flow */}
          <div style={{
            background: "rgba(52,199,89,0.04)",
            border: "1px solid rgba(52,199,89,0.15)",
            borderRadius: 16,
            padding: "1.75rem 2rem",
          }}>
            <p style={{
              fontFamily: "'TASAOrbiter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "#34C759",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Com Caption Flow
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {COM.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(52,199,89,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <Check size={10} color="#34C759" strokeWidth={2.5} />
                  </div>
                  <span style={{
                    fontFamily: "'TASAOrbiter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#e5e5e7",
                    lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .beneficios-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
