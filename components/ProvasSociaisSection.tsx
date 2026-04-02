"use client";

// Placeholders até os prints chegarem — estrutura pronta para substituição
const provas = [
  {
    nome: "Pedro Alves",
    cargo: "Editor de Vídeo",
    texto: "Fiz 200 legendas em menos de 1 minuto. Não acreditei até ver na timeline.",
  },
  {
    nome: "Mariana Costa",
    cargo: "Videomaker",
    texto: "Nunca mais abri ferramenta externa para legenda. O workflow mudou completamente.",
  },
  {
    nome: "Rafael Souza",
    cargo: "Editor Profissional",
    texto: "O acabamento ficou em outro nível. Cliente elogiou sem eu falar nada sobre.",
  },
  {
    nome: "Camila Torres",
    cargo: "Criadora de Conteúdo",
    texto: "Economizo pelo menos 1h por vídeo. No mês, isso é muita hora de volta pra mim.",
  },
];

export default function ProvasSociaisSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#FF6D29" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="section-label" style={{ color: "rgba(0,0,0,0.5)", borderColor: "rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.08)" }}>Resultados reais</p>
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em", color: "#000" }}
          >
            Confira o que estão dizendo:
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-4">
          {provas.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "14px",
                padding: "24px",
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              {/* Estrelas */}
              <div style={{ marginBottom: "12px", display: "flex", gap: "3px" }}>
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: "#FF6D29", fontSize: "0.9rem" }}>★</span>
                ))}
              </div>
              <p style={{ color: "#1a1a1a", fontSize: "0.97rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
                "{p.texto}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #ff9063, #FF6D29)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.85rem", fontWeight: 700, color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  flexShrink: 0,
                }}>
                  {p.nome[0]}
                </div>
                <div>
                  <p style={{ color: "#0e0e0e", fontWeight: 600, fontSize: "0.85rem", margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>{p.nome}</p>
                  <p style={{ color: "#666", fontSize: "0.78rem", margin: 0, fontFamily: "'Inter', sans-serif" }}>{p.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
