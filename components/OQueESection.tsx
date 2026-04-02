export default function OQueESection() {
  const razoes = [
    {
      title: "Você depende de ferramentas externas",
      desc: "Toda vez que precisa de legenda animada, você sai do Premiere, usa outra ferramenta, exporta, reimporta. A qualidade cai. O tempo vai embora.",
    },
    {
      title: "Você sincroniza na mão",
      desc: "Linha por linha. Timecode por timecode. Uma mudança no corte e você recomeça do zero.",
    },
    {
      title: "Você não controla o estilo",
      desc: "Fonte padrão. Cor padrão. Animação padrão. O acabamento que você consegue não reflete o nível da sua edição.",
    },
    {
      title: "Você repete o mesmo gargalo em cada projeto",
      desc: "Todo projeto tem o mesmo problema. E você já sabe qual é. Mas ainda não resolveu.",
    },
  ];

  return (
    <section className="py-24 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="section-label" style={{ color: "rgba(0,0,0,0.45)", borderColor: "rgba(0,0,0,0.12)", background: "rgba(0,0,0,0.05)" }}>Entenda de uma vez</p>
          <h2
            className="font-bold mb-5 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#0e0e0e" }}
          >
            O problema não é o seu vídeo.
            <br />
            É o{" "}
            <span style={{
              display: "inline",
              background: "#FF6D29",
              color: "#fff",
              fontWeight: 800,
              padding: "2px 10px",
              borderRadius: "6px",
            }}>workflow</span>
            {" "}que te trava.
          </h2>
          <p
            className="mx-auto leading-relaxed text-center"
            style={{ maxWidth: "480px", fontSize: "1.05rem", color: "#5a5a5a" }}
          >
            As principais razões pelas quais você perde
            <br />
            horas com legenda em vez de editar:
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-2xl mx-auto mb-12">
          {razoes.map((r, i) => (
            <div
              key={i}
              className="reveal flex items-start gap-4"
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "20px 24px",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* X vermelho estilo iPhone */}
              <div style={{
                width: "26px", height: "26px", borderRadius: "50%",
                background: "#FF3B30",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: "2px",
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 style={{ color: "#0e0e0e", fontWeight: 700, fontSize: "0.97rem", marginBottom: "4px", fontFamily: "'Space Grotesk', sans-serif" }}>{r.title}</h3>
                <p style={{ color: "#5a5a5a", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center">
          <div
            className="inline-block px-8 py-5 rounded-2xl"
            style={{ background: "rgba(255,109,41,0.1)", border: "1px solid rgba(255,109,41,0.3)" }}
          >
            <p className="font-bold" style={{ fontSize: "1.1rem", color: "#0e0e0e" }}>
              É exatamente isso que o Caption<span style={{ color: "#FF6D29" }}>Flow</span> resolve. ✅
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
