const chips = [
  "⚡ 200 legendas em menos de 1 minuto",
  "🎨 Personalize cor, fonte e tamanho",
  "🔄 Atualize estilos com um clique",
  "📄 Suporte a .srt .json .csv .txt",
  "🖥️ 100% dentro do Premiere Pro",
  "✅ Sem ferramentas externas",
  "🔁 Acesso vitalício",
  "🛡️ Garantia de 7 dias",
  "💼 Licença comercial inclusa",
  "💎 Visual premium sem After Effects",
];

export default function MarqueeRibbon() {
  const doubled = [...chips, ...chips];
  return (
    <div className="marquee-wrapper py-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "var(--surface)" }}>
      <div className="marquee-track">
        {doubled.map((chip, i) => (
          <span key={i} className="chip">{chip}</span>
        ))}
      </div>
    </div>
  );
}
