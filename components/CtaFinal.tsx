export default function CtaFinal() {
  return (
    <section
      className="py-28 px-6 text-center"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,109,41,0.14) 0%, transparent 70%), linear-gradient(180deg, var(--surface) 0%, #080808 100%)",
        borderTop: "1px solid rgba(255,109,41,0.1)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="reveal">
          <h2
            className="font-extrabold text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            <span className="md:hidden">Você vai legendar o<br />próximo vídeo do<br /><span className="gradient-text">mesmo jeito?</span></span>
            <span className="hidden md:inline">Você vai legendar o próximo<br /><span className="gradient-text">vídeo do mesmo jeito?</span></span>
          </h2>
          <p className="text-[#a1a1a6] mb-6 mx-auto leading-relaxed" style={{ maxWidth: "560px", fontSize: "1.05rem" }}>
            Pode continuar assim. Pode continuar saindo do Premiere, usando ferramenta externa, reimportando, sincronizando na mão, entregando com aquela legenda que você mesmo sabe que não está à altura do resto da edição.
          </p>
          <p className="text-[#a1a1a6] mb-10 mx-auto leading-relaxed" style={{ maxWidth: "560px", fontSize: "1.05rem" }}>
            Mas toda hora gasta em legenda manual é uma hora a menos criando. É um projeto a menos entregue. É mais um vídeo com acabamento que não reflete o seu nível.
          </p>
          <p className="text-white font-semibold mb-10" style={{ fontSize: "1.1rem" }}>
            Por <strong style={{ color: "#FF6D29" }}>12x de R$16,17</strong>, você para de perder tempo com isso hoje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#offer" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 36px" }}>
              Resolver isso agora <span className="arrow">→</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-[#6e6e73]">
            Acesso imediato · Premiere Pro 2026+ · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
