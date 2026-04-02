"use client";
import { InteractiveImageAccordion, AccordionItemData } from "@/components/ui/interactive-image-accordion";

const items: AccordionItemData[] = [
  {
    id: 1,
    title: "Gerar Legendas",
    description: "MOGRT + transcrição + clique. 200 legendas na timeline em segundos.",
    imageUrl: "",
    videoUrl: "/videos/gerar.mp4",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Estilo Visual",
    description: "Cor, fonte e opacidade direto no painel. Color picker HEX incluso.",
    imageUrl: "",
    videoUrl: "/videos/estilizar.mp4",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Atualizar Estilo",
    description: "Redesign após legendar? Copie e cole o estilo em todos os clips de uma vez.",
    imageUrl: "",
    videoUrl: "/videos/atualizar.mp4",
    icon: "🔄",
  },
  {
    id: 4,
    title: "Converter Clips",
    description: "Troque legendas de texto por MOGRTs animados com um clique.",
    imageUrl: "",
    videoUrl: "/videos/converter.mp4",
    icon: "🔁",
  },
  {
    id: 5,
    title: "Painel Profissional",
    description: "Sem sair do Premiere. Acesso direto à timeline, sem janela externa.",
    imageUrl: "",
    videoUrl: "/videos/painel.mp4",
    icon: "🖥️",
  },
];

export default function FuncionalidadesSection() {
  return (
    <section id="funcionalidades" className="py-24 px-6" style={{ background: "#0e0e0e" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="section-label">Funcionalidades</p>
          <h2
            className="font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Tudo que você precisa,
            <br />
            <span className="gradient-text">dentro do <span style={{ color: "#FF6D29" }}>Adobe Premiere</span>.</span>
          </h2>
          <p className="text-[#a1a1a6] mx-auto" style={{ maxWidth: "500px" }}>
            Passe o mouse sobre cada aba para explorar o que o Caption<span style={{ color: "#FF6D29" }}>Flow</span> faz por você.
          </p>
        </div>

        <div className="reveal">
          <InteractiveImageAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
