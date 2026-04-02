const steps = [
  {
    n: "1",
    title: "Escolha seu template",
    desc: "Aponte uma pasta com seus arquivos .mogrt do Clean Animation Pack. A extensão exibe todos em grade visual com pré-visualização. Clicou, selecionado.",
  },
  {
    n: "2",
    title: "Importe sua transcrição",
    desc: "Suba o arquivo .srt, .json, .csv ou .txt gerado por qualquer ferramenta de transcrição. A extensão detecta os blocos de texto com timecodes automaticamente.",
  },
  {
    n: "3",
    title: "Gere tudo de uma vez",
    desc: "Escolha a faixa de vídeo e clique em Gerar. Cada MOGRT é inserido na timeline no timecode certo, com o texto certo, duração ajustada. 200 legendas em segundos.",
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-24 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="section-label" style={{ color: "rgba(0,0,0,0.45)", borderColor: "rgba(0,0,0,0.12)", background: "rgba(0,0,0,0.05)" }}>Como funciona</p>
          <h2
            className="font-bold mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em", color: "#0e0e0e" }}
          >
            Três passos.
            <br />
            <span style={{ color: "#FF6D29" }}>Menos de 1 minuto.</span>
          </h2>
          <p style={{ color: "#5a5a5a" }}>Qualquer editor consegue. Sério.</p>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal flex gap-6 items-start p-8 rounded-2xl"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="step-number">{step.n}</div>
              <div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#0e0e0e" }}>{step.title}</h3>
                <p className="leading-relaxed" style={{ color: "#5a5a5a" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a href="#offer" className="btn-primary" style={{ fontSize: "1rem" }}>
            Quero o Caption Flow agora <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
