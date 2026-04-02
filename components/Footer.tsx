export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,109,41,0.12) 0%, transparent 70%), #0a0a0a",
        borderTop: "1px solid rgba(255,109,41,0.12)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-white text-base tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Caption<span style={{ color: "#FF6D29" }}>Flow</span>
        </span>
        <div className="flex gap-6 text-[#6e6e73]" style={{ fontSize: "0.75rem" }}>
          <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
          <a href="#offer" className="hover:text-white transition-colors">Preços</a>
          <a href="#offer" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-[#6e6e73]" style={{ fontSize: "0.72rem" }}>
            Leonan Videomaker LTDA · CNPJ: 54.129.520/0001-28
          </p>
          <p className="text-[#6e6e73]" style={{ fontSize: "0.72rem" }}>
            © 2025 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
