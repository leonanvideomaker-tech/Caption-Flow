const benefits = [
  {
    icon: "⏱️",
    title: "Economiza até 2h por vídeo",
    desc: "O que levava horas de posicionamento e sincronização manual acontece em segundos.",
  },
  {
    icon: "✅",
    title: "Zero erro de timecode",
    desc: "Cada legenda no lugar certo, com o texto certo. Sem digitação manual, sem legenda fora do tempo.",
  },
  {
    icon: "🎨",
    title: "Estilo que você controla",
    desc: "Cor, fonte, tamanho e opacidade editáveis direto no painel. Color picker HEX incluso.",
  },
  {
    icon: "🔄",
    title: "Redesign sem refazer tudo",
    desc: "Mude o visual de todas as legendas depois de prontas com um clique. Sem recriar do zero.",
  },
  {
    icon: "🖥️",
    title: "100% dentro do Premiere",
    desc: "Painel integrado. Sem trocar de janela, sem ferramenta externa, sem quebrar o fluxo.",
  },
  {
    icon: "💎",
    title: "Acabamento que justifica cobrar mais",
    desc: "Legenda com visual premium, consistente e elegante. O detalhe que diferencia sua entrega.",
  },
];

export default function BeneficiosSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0e0e0e" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="section-label">Benefícios</p>
          <h2
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            <span className="md:hidden">O que muda no seu<br /><span className="gradient-text">fluxo de trabalho.</span></span>
            <span className="hidden md:inline">O que muda no <span className="gradient-text">seu fluxo de trabalho.</span></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div key={i} className="apple-card p-6 reveal">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{b.title}</h3>
              <p className="text-[#a1a1a6] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
