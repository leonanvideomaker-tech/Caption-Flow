"use client";

const faqs = [
  {
    q: "Precisa do After Effects?",
    a: "Não. O Caption Flow roda 100% dentro do Adobe Premiere Pro. Nenhuma outra ferramenta necessária.",
  },
  {
    q: "Funciona com qualquer MOGRT?",
    a: "O Caption Flow é otimizado e testado para funcionar com os templates do Clean Animation Pack. Para MOGRTs de outras fontes, a compatibilidade pode variar.",
  },
  {
    q: "Funciona em qualquer versão do Adobe Premiere?",
    a: "Não. O Caption Flow é compatível somente com o Adobe Premiere Pro 2026 ou versões superiores. Versões anteriores não são suportadas.",
  },
  {
    q: "Funciona no Windows também?",
    a: "Sim. Compatível com macOS e Windows, Premiere Pro 2026 ou mais recente.",
  },
  {
    q: "A instalação é difícil?",
    a: "São três passos que levam menos de 5 minutos. Tem um tutorial em vídeo incluso mostrando cada etapa do processo.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. 7 dias com 100% do dinheiro de volta, sem perguntas, sem burocracia.",
  },
  {
    q: "Como vou receber o acesso?",
    a: "Imediatamente após a compra, você recebe pelo e-mail e pela Hotmart o link de download da extensão + uma videoaula passo a passo explicando como instalar e utilizar.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-24 px-6" style={{ background: "#0e0e0e" }}>
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="section-label">FAQ</p>
          <h2
            className="font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em" }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="reveal">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary>
                {faq.q}
                <svg className="chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="faq-body">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
