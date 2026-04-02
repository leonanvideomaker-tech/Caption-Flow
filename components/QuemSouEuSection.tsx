export default function QuemSouEuSection() {
  return (
    <section className="py-28 px-6" style={{ background: "#f5f0eb" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-12">
          <p className="section-label" style={{ color: "rgba(0,0,0,0.45)", borderColor: "rgba(0,0,0,0.12)", background: "rgba(0,0,0,0.05)" }}>Quem criou</p>
        </div>

        <div className="reveal flex flex-col md:flex-row gap-12 items-start">
          {/* Finder frame com foto */}
          <div className="flex-shrink-0 mx-auto md:mx-0" style={{ width: "260px" }}>
            <div className="mockup-frame" style={{ width: "260px" }}>
              <div className="titlebar">
                <div className="dot" style={{ background: "#FF5F57" }} />
                <div className="dot" style={{ background: "#FFBD2E" }} />
                <div className="dot" style={{ background: "#28CA41" }} />
                <span style={{ fontSize: "0.7rem", color: "#6e6e6e", marginLeft: "8px", fontFamily: "'Inter', sans-serif" }}>leonan.jpg</span>
              </div>
              <div style={{ height: "300px", overflow: "hidden", position: "relative" }}>
                <img
                  src="/foto-leonan.jpg"
                  alt="Leonan Patrizzi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                />
                <div style={{
                  position: "absolute", bottom: "10px", right: "10px",
                  background: "linear-gradient(135deg, #ff9063, #FF6D29)",
                  borderRadius: "8px", padding: "4px 10px",
                  fontSize: "0.68rem", fontWeight: 700, color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.04em",
                }}>
                  Videomaker + 4 anos
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1">
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontWeight: 800, letterSpacing: "-0.03em", color: "#0e0e0e", marginBottom: "24px",
            }}>
              Leonan Patrizzi
            </h2>

            <div className="space-y-4" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.97rem", color: "#4a4a4a", lineHeight: 1.75 }}>
              <p>🎥 Nos últimos 4 anos, minha rotina é a mesma: abrir o Premiere, montar vídeos que precisam parecer caros e entregar no prazo.</p>

              <p>🏥 Sou referência em <strong style={{ color: "#0e0e0e" }}>Marketing Médico em São José do Rio Preto</strong>, trabalhando lado a lado com os melhores profissionais da área. E se tem uma coisa que esse mercado exige, é sofisticação. Cada detalhe importa. Cada animação precisa transmitir autoridade.</p>

              <p>📊 Nesse caminho, meus projetos já acumulam <strong style={{ color: "#0e0e0e" }}>mais de 1.500.000 de views</strong> em Reels de clientes, com vídeos que precisam converter e parecer premium.</p>

              <p>🔧 O Caption<span style={{ color: "#FF6D29" }}>Flow</span> nasceu do meu próprio workflow. Durante anos, toda edição tinha o mesmo gargalo: a legenda. Sair do Premiere, usar ferramenta externa, exportar, reimportar, torcer pra qualidade não cair. Repetir isso em todo projeto, toda semana.</p>

              <p>💎 Decidi resolver de dentro do Premiere. <strong style={{ color: "#0e0e0e" }}>O Caption Flow é o que eu uso em todos os meus projetos hoje.</strong> Cada cliente que assiste um vídeo meu está vendo o resultado dessa extensão.</p>

            </div>

            <div className="mt-8">
              <a href="#offer" className="btn-primary" style={{ fontSize: "0.95rem" }}>
                Quero o Caption Flow <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
