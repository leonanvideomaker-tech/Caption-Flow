"use client";

const faqs = [
  {
    q: "Precisa do After Effects?",
    a: "Não. O Caption Flow roda 100% dentro do Adobe Premiere Pro. Nenhuma outra ferramenta necessária.",
  },
  {
    q: "Funciona com qualquer MOGRT?",
    a: "Sim. O Caption Flow consegue ler e aplicar MOGRTs externos, sendo compatível com uma ampla variedade de templates. Porém, a compatibilidade depende do MOGRT: arquivos muito complexos ou de baixa qualidade podem apresentar erros ao serem importados. Para melhores resultados, use MOGRTs bem estruturados.",
  },
  {
    q: "Funciona em qualquer versão do Adobe Premiere?",
    a: "Não. O Caption Flow é compatível com o Adobe Premiere Pro 2025 e 2026. Versões anteriores não são suportadas.",
  },
  {
    q: "Funciona no Windows também?",
    a: "Sim. Compatível com macOS e Windows, Premiere Pro 2025 e 2026.",
  },
  {
    q: "A instalação é difícil?",
    a: "Não. A instalação é feita com apenas um clique — você baixa o instalador e ele faz tudo automaticamente. Incluso na compra tem uma videoaula mostrando o processo completo em menos de 5 minutos.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. 7 dias com 100% do dinheiro de volta, sem perguntas, sem burocracia.",
  },
  {
    q: "Como vou receber o acesso?",
    a: "Imediatamente após a compra, você recebe pelo e-mail e pela Kiwify o link de download da extensão + uma videoaula passo a passo explicando como instalar e utilizar.",
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
