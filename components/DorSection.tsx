export default function DorSection() {
  const vozes = [
    { texto: "\"Vou ter que abrir aquele site externo de novo. Que saco.\"", emoji: "😤" },
    { texto: "\"Perdi 40 minutos só ajustando legenda. 40 minutos.\"", emoji: "⏱️" },
    { texto: "\"Esse vídeo ficaria incrível se a legenda não parecesse feita em aplicativo de celular.\"", emoji: "😔" },
    { texto: "\"Podia estar finalizando o projeto e tô aqui sincronizando legenda pela terceira vez.\"", emoji: "🔁" },
    { texto: "\"Todo mundo usa a mesma legenda animada amarela — o meu não pode ser igual a isso.\"", emoji: "🙈" },
    { texto: "\"Queria que as legendas ficassem automáticas e ainda assim parecessem profissionais.\"", emoji: "🎯" },
  ];

  return (
    <section className="py-24 px-6" style={{ background: "#FF6D29" }}>
      <div className="max-w-3xl mx-auto">
        <div className="reveal">
          <p className="section-label" style={{ color: "rgba(0,0,0,0.5)", borderColor: "rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.08)" }}>O problema</p>
          <h2
            className="font-bold leading-tight mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#fff" }}
          >
            A cada entrega, você passa
            <br className="mobile-hide" />
            pelo mesmo inferno silencioso.
          </h2>
        </div>

        <div className="reveal space-y-4 leading-relaxed mb-10" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)" }}>
          <p>Você abre o Premiere. Monta a edição. Fica boa.</p>
          <p>Aí chega a hora da legenda.</p>
          <p>E começa tudo de novo.</p>
        </div>

        {/* Vozes da Cabeça — estilo notificação iMessage */}
        <div className="reveal space-y-3 mb-10">
          {vozes.map((voz, i) => (
            <div
              key={i}
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "18px",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              }}
            >
              {/* Círculo vermelho com seta branca diagonal direita-baixo */}
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: "#FF3B30",
                flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Seta apontando para diagonal direita-baixo ↘ */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5.5 11H11V5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p style={{
                color: "#000",
                fontSize: "0.95rem",
                margin: 0,
                lineHeight: 1.55,
                fontFamily: "'Inter', sans-serif",
                flex: 1,
              }}>
                {voz.texto} <span>{voz.emoji}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Insight final — retângulo branco com bloco laranja interno */}
        <div className="reveal">
          <div
            className="rounded-2xl overflow-hidden mx-auto dor-insight"
            style={{ background: "#fff", maxWidth: "560px" }}
          >
            {/* 2/3 branco — texto principal centralizado */}
            <div className="px-8 py-6 text-center">
              <p className="font-semibold" style={{ fontSize: "1.05rem", color: "#000", lineHeight: 1.75, whiteSpace: "normal" }}>
                Você sabe que a legenda está brega. Mas entrega assim
              </p>
              <p className="font-semibold" style={{ fontSize: "1.05rem", color: "#000", lineHeight: 1.75, whiteSpace: "normal" }}>
                mesmo porque não tem outra saída no prazo.
              </p>
            </div>
            {/* 1/3 preto — subtítulo maior centralizado */}
            <div
              className="px-6 py-5 text-center"
              style={{ background: "#000" }}
            >
              <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FF6D29", lineHeight: 1.7, margin: 0 }}>
                Isso não é falta de talento.
                <br />
                É falta de ferramenta. 👇
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
