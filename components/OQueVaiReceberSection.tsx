const items = [
  {
    type: "main" as const,
    text: "Extensão Caption Flow para Adobe Premiere Pro 2026+",
  },
  {
    type: "main" as const,
    text: "Aulas passo a passo explicando como instalar e utilizar",
  },
  {
    type: "bonus" as const,
    text: "Bônus — Vídeo aula sobre estilização de textos + presets para download",
  },
  {
    type: "bonus" as const,
    text: "Bônus — Masterclass: Editando o Criativo Viral do Caption Flow",
  },
];

function MainCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
      <circle cx="11" cy="11" r="11" fill="rgba(52,199,89,0.15)" />
      <path d="M7 11l3 3 5-5" stroke="#34C759" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BonusStar() {
  return (
    <div style={{
      flexShrink: 0,
      marginTop: "2px",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      background: "rgba(255,109,41,0.15)",
      border: "1px solid rgba(255,109,41,0.35)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
    }}>
      ★
    </div>
  );
}

export default function OQueVaiReceberSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-2xl mx-auto">
        <div className="reveal text-center mb-10">
          <p className="section-label">Incluso na compra</p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em" }}
          >
            O que você vai receber
          </h2>
        </div>

        <div
          className="reveal rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          {items.map((item, i) => {
            const isBonus = item.type === "bonus";
            const isLast = i === items.length - 1;
            return (
              <div
                key={i}
                style={{
                  padding: "18px 24px",
                  borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  background: isBonus ? "rgba(255,109,41,0.03)" : "transparent",
                }}
              >
                {isBonus ? <BonusStar /> : <MainCheck />}
                <span
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    color: isBonus ? "#FF9063" : "#e5e5e7",
                    fontWeight: isBonus ? 500 : 400,
                  }}
                >
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
