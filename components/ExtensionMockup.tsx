"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate, useTransform, useSpring, MotionValue } from "motion/react";

function GlowOverlay({ glowX, glowY }: { glowX: MotionValue<number>; glowY: MotionValue<number> }) {
  const bg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,109,41,0.12) 0%, transparent 55%)`;
  return (
    <motion.div style={{
      position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10, borderRadius: 14,
      background: bg,
    }} />
  );
}

type Tab = "gerar" | "converter" | "atualizacao" | "templates" | "sfx";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "gerar", label: "Gerar",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/><path d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>,
  },
  {
    id: "converter", label: "Converter",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>,
  },
  {
    id: "atualizacao", label: "Atualizar",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>,
  },
  {
    id: "templates", label: "Templates",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>,
  },
  {
    id: "sfx", label: "SFX",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="13" height="13"><path d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"/></svg>,
  },
];

// ─── MOGRT data ──────────────────────────────────────────────────────

const MOGRTS = [
  { name: "Simples Direita",      src: "/videos/mogrts/simples-direita.mp4" },
  { name: "Simples Esquerda",     src: "/videos/mogrts/simples-esquerda.mp4" },
  { name: "Simples Cima",         src: "/videos/mogrts/simples-cima.mp4" },
  { name: "Simples Baixo",        src: "/videos/mogrts/simples-baixo.mp4" },
  { name: "Bounce Direita",       src: "/videos/mogrts/bounce-direita.mp4" },
  { name: "Bounce Esquerda",      src: "/videos/mogrts/bounce-esquerda.mp4" },
  { name: "Bounce Cima",          src: "/videos/mogrts/bounce-cima.mp4" },
  { name: "Bounce Baixo",         src: "/videos/mogrts/bounce-baixo.mp4" },
  { name: "Typewrite",            src: "/videos/mogrts/typewrite.mp4" },
  { name: "Cinematico",           src: "/videos/mogrts/cinematico.mp4" },
  { name: "Glitch",               src: "/videos/mogrts/glitch.mp4" },
  { name: "Flicker",              src: "/videos/mogrts/flicker.mp4" },
  { name: "Grande Texto Centro",  src: "/videos/mogrts/grande-texto-centro.mp4" },
  { name: "Grande Texto Direita", src: "/videos/mogrts/grande-texto-direita.mp4" },
  { name: "Grande Texto Esquerda",src: "/videos/mogrts/grande-texto-esquerda.mp4" },
];

function MogrtGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  function onEnter(name: string) {
    setHoveredVideo(name);
    videoRefs.current[name]?.play();
  }
  function onLeave(name: string) {
    setHoveredVideo(null);
    const v = videoRefs.current[name];
    if (v) { v.pause(); v.currentTime = 0; }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 5 }}>
        {MOGRTS.map((m) => (
          <div
            key={m.name}
            onClick={() => setSelected(m.name)}
            onMouseEnter={() => onEnter(m.name)}
            onMouseLeave={() => onLeave(m.name)}
            style={{
              borderRadius: 5, overflow: "hidden", cursor: "pointer", position: "relative",
              border: `1px solid ${selected === m.name ? "rgba(255,109,41,0.6)" : hoveredVideo === m.name ? "rgba(255,109,41,0.3)" : "#222"}`,
              background: "#111", transition: "border-color 0.15s",
            }}
          >
            <video
              ref={(el) => { videoRefs.current[m.name] = el; }}
              src={m.src}
              muted loop playsInline preload="none"
              style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
            />
            {hoveredVideo !== m.name && (
              <div style={{
                position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%",
                  background: selected === m.name ? "rgba(255,109,41,1)" : "rgba(255,109,41,0.75)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#fff", fontSize: 8, marginLeft: 1 }}>▶</span>
                </div>
              </div>
            )}
            <div style={{ padding: "3px 4px", fontSize: 8.5, color: "#777", background: "#0e0e0e", lineHeight: 1.3 }}>
              {m.name}
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div style={{
          display: "flex", alignItems: "center", gap: 6, padding: "5px 8px",
          background: "rgba(255,109,41,0.08)", borderRadius: 5, border: "1px solid rgba(255,109,41,0.2)",
        }}>
          <span style={{ color: "#FF6D29", fontSize: 10 }}>✓</span>
          <span style={{ fontSize: 10, color: "#ccc" }}>{selected}</span>
        </div>
      )}
    </div>
  );
}

// ─── Template video card ──────────────────────────────────────────────

function TemplateVideoCard({ name, src }: { name: string; src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  function onEnter() {
    setHovered(true);
    videoRef.current?.play();
  }
  function onLeave() {
    setHovered(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        borderRadius: 6, overflow: "hidden", cursor: "pointer", position: "relative",
        border: `1px solid ${hovered ? "rgba(255,109,41,0.4)" : "#222"}`,
        transition: "border-color 0.2s",
        background: "#111",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted loop playsInline preload="none"
        style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
      />
      {!hovered && (
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(0,0,0,0.45)",
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", background: "rgba(255,109,41,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: 10, marginLeft: 2 }}>▶</span>
          </div>
        </div>
      )}
      <div style={{ padding: "5px 6px", fontSize: 9.5, color: "#888", fontFamily: "'Space Grotesk', sans-serif", background: "#0e0e0e" }}>
        {name}
      </div>
    </div>
  );
}

// ─── Tab panes ────────────────────────────────────────────────────────

function PaneGerar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", background: "#161616", borderRadius: 6 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6D29", flexShrink: 0 }} />
        <span style={{ fontSize: 10.5, color: "#888" }}>Sequência:</span>
        <span style={{ fontSize: 10.5, color: "#555", fontStyle: "italic" }}>—</span>
      </div>
      <DemoCard step={1} title="Escolher MOGRT">
        <MogrtGrid />
      </DemoCard>
      <DemoCard step={2} title="Importar Transcrição">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, fontSize: 10.5, color: "#555", fontStyle: "italic" }}>Nenhum arquivo selecionado</div>
          <div style={{ padding: "4px 10px", background: "#2a2929", borderRadius: 5, fontSize: 10.5, color: "#888" }}>Procurar</div>
        </div>
        <div style={{ fontSize: 9.5, color: "#444", marginTop: 4 }}>Aceita .json · .csv · .srt · .txt</div>
      </DemoCard>
      <DemoCard step={3} title="Configurações">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10.5, color: "#888" }}>Faixa de vídeo</span>
          <div style={{ padding: "3px 10px", background: "#2a2929", borderRadius: 5, fontSize: 10.5, color: "#ccc" }}>V3</div>
        </div>
      </DemoCard>
      <FlowButton disabled>Gerar Legendas</FlowButton>
    </div>
  );
}

function PaneConverter() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <DemoCard step={1} title="MOGRT de Destino">
        <MogrtGrid />
      </DemoCard>
      <DemoCard step={2} title="Transcrição">
        <div style={{ padding: "5px 10px", background: "#2a2929", borderRadius: 5, fontSize: 10.5, color: "#888", textAlign: "center" }}>
          Importar Transcrição
        </div>
      </DemoCard>
      <DemoCard step={3} title="Selecionar Legendas">
        <div style={{ fontSize: 10.5, color: "#555", fontStyle: "italic" }}>Importe uma transcrição para ver as legendas</div>
      </DemoCard>
      <FlowButton disabled>Converter → MOGRT</FlowButton>
    </div>
  );
}

function PaneAtualizar() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <SyncCard title="Trocar Modelo MOGRT">
        <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.7, marginBottom: 8 }}>
          1. Escolha o <strong style={{ color: "#aaa" }}>Novo Template</strong>.<br />
          2. Selecione os MOGRTs <strong style={{ color: "#aaa" }}>na timeline</strong>.<br />
          3. Clique em <strong style={{ color: "#aaa" }}>Trocar MOGRTs</strong>.
        </div>
        <MogrtGrid />
        <FlowButton disabled style={{ marginTop: 8 }}>⇄ Trocar MOGRT dos Clipes Selecionados</FlowButton>
      </SyncCard>
      <SyncCard title="Atualizar Estilo dos Clips">
        <div style={{ fontSize: 10.5, color: "#666", lineHeight: 1.7 }}>
          1. Selecione um clip MOGRT na timeline.<br />
          2. Clique em <strong style={{ color: "#aaa" }}>Copiar Estilo</strong>.<br />
          3. Selecione destinos e clique em <strong style={{ color: "#aaa" }}>Colar</strong>.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, marginTop: 8 }}>
          <FlowButton disabled>① Copiar Estilo do Clip Selecionado</FlowButton>
          <FlowButton disabled>② Colar nos Clips Selecionados</FlowButton>
        </div>
      </SyncCard>
    </div>
  );
}

const TEMPLATE_VIDEOS = [
  { name: "2 Linhas 1", src: "/videos/templates/2linhas-1.mp4", cat: "2 linhas" },
  { name: "2 Linhas 2", src: "/videos/templates/2linhas-2.mp4", cat: "2 linhas" },
  { name: "2 Linhas 3", src: "/videos/templates/2linhas-3.mp4", cat: "2 linhas" },
  { name: "2 Linhas 4", src: "/videos/templates/2linhas-4.mp4", cat: "2 linhas" },
  { name: "2 Linhas 5", src: "/videos/templates/2linhas-5.mp4", cat: "2 linhas" },
  { name: "3 Linhas 1", src: "/videos/templates/3linhas-1.mp4", cat: "3 linhas" },
  { name: "3 Linhas 2", src: "/videos/templates/3linhas-2.mp4", cat: "3 linhas" },
  { name: "3 Linhas 3", src: "/videos/templates/3linhas-3.mp4", cat: "3 linhas" },
  { name: "3 Linhas 4", src: "/videos/templates/3linhas-4.mp4", cat: "3 linhas" },
  { name: "3 Linhas 5", src: "/videos/templates/3linhas-5.mp4", cat: "3 linhas" },
  { name: "Nome 01", src: "/videos/templates/lower-third-1.mp4", cat: "lower third" },
  { name: "Nome 02", src: "/videos/templates/lower-third-2.mp4", cat: "lower third" },
  { name: "Nome 03", src: "/videos/templates/lower-third-3.mp4", cat: "lower third" },
];

function PaneTemplates() {
  const [cat, setCat] = useState("2 linhas");
  const cats = ["2 linhas", "3 linhas", "lower third"];
  const filtered = TEMPLATE_VIDEOS.filter((t) => t.cat === cat);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <DemoCard step={1} title="Transcrição (SRT)">
        <div style={{ padding: "5px 10px", background: "#2a2929", borderRadius: 5, fontSize: 10.5, color: "#888", textAlign: "center" }}>
          Importar SRT
        </div>
        <div style={{ fontSize: 9.5, color: "#444", marginTop: 4, textAlign: "center" }}>Importe o arquivo .srt do seu projeto</div>
      </DemoCard>
      <DemoCard step={2} title="Escolher Template">
        <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              padding: "3px 8px", borderRadius: 4, fontSize: 9.5, cursor: "pointer", border: "1px solid",
              background: cat === c ? "rgba(255,109,41,0.15)" : "#1c1b1b",
              borderColor: cat === c ? "rgba(255,109,41,0.4)" : "#2a2929",
              color: cat === c ? "#FF6D29" : "#888",
              textTransform: "capitalize",
            }}>
              {c}
            </button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
          {filtered.map((t) => (
            <TemplateVideoCard key={t.src} name={t.name} src={t.src} />
          ))}
        </div>
      </DemoCard>
    </div>
  );
}

const SFX_DATA: Record<string, string[]> = {
  celular: ['celular 01','celular 02','celular 03','celular 04','celular 05','celular 06','celular 07','celular 08','celular 09'],
  click:   ['click 01','click 02','click 03','click 04','click 05','click 06','click 07','click 08','click 09','click 10','click 11','click 12','click 13','click 14','click 15','click 16','click 17','click 18','click 19','click 20','click 21','click 22','click 23','click 24','click 25','click 26','click 27','click 28','click 29','click 30','click 31','click 32','click 33','click 34','click 35','click 36','click 37','click 38'],
  digital: ['digital 01','digital 02','digital 03','digital 04','digital 05','digital 06','digital 07','digital 08','digital 09','digital 10','digital 11','digital 12','digital 13'],
  teclado: ['teclado 01','teclado 02','teclado 03','teclado 04','teclado 05','teclado 06','teclado 07','teclado 08','teclado 09'],
};

const SFX_FOLDERS = Object.entries(SFX_DATA).map(([name, files]) => ({ name, count: files.length }));

function PaneSFX() {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      <DemoCard step={1} title="Escolher Efeito Sonoro">
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {SFX_FOLDERS.map((folder) => (
            <div key={folder.name}>
              <div
                onClick={() => setOpenFolder(openFolder === folder.name ? null : folder.name)}
                style={{
                  display: "flex", alignItems: "center", gap: 7, padding: "6px 8px",
                  borderRadius: 5, cursor: "pointer",
                  background: openFolder === folder.name ? "rgba(255,109,41,0.07)" : "transparent",
                  border: `1px solid ${openFolder === folder.name ? "rgba(255,109,41,0.15)" : "transparent"}`,
                }}
              >
                <span style={{ fontSize: 10.5, color: openFolder === folder.name ? "#FF6D29" : "#aaa", flex: 1, textTransform: "capitalize" }}>
                  {folder.name}
                </span>
                <span style={{ fontSize: 9, color: "#555" }}>{folder.count}</span>
                <span style={{ fontSize: 9, color: "#555", display: "inline-block", transform: openFolder === folder.name ? "rotate(90deg)" : "none", transition: "transform 0.15s" }}>▶</span>
              </div>
              {openFolder === folder.name && (
                <div style={{ marginLeft: 14, marginTop: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                  {SFX_DATA[folder.name].map((sfx) => (
                    <div
                      key={sfx}
                      onClick={() => setSelected(sfx)}
                      style={{
                        display: "flex", alignItems: "center", gap: 7, padding: "5px 8px",
                        borderRadius: 4, cursor: "pointer",
                        background: selected === sfx ? "rgba(255,109,41,0.12)" : "transparent",
                      }}
                    >
                      <div style={{
                        width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                        background: selected === sfx ? "rgba(255,109,41,0.2)" : "#1e1e1e",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: selected === sfx ? "#FF6D29" : "#555", fontSize: 7,
                      }}>▶</div>
                      <span style={{ fontSize: 10, color: selected === sfx ? "#FF6D29" : "#888" }}>{sfx}.wav</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </DemoCard>

      <DemoCard title="Meus Efeitos">
        <div style={{ fontSize: 10.5, color: "#555", lineHeight: 1.6 }}>
          Clique em <strong style={{ color: "#888" }}>+ Pasta</strong> para importar seus próprios efeitos sonoros.
        </div>
      </DemoCard>

      <DemoCard title="Configurações">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10.5, color: "#888" }}>Faixa de áudio</span>
          <div style={{ padding: "3px 10px", background: "#2a2929", borderRadius: 5, fontSize: 10.5, color: "#ccc" }}>A1</div>
        </div>
      </DemoCard>

      <FlowButton>Gerar SFX</FlowButton>
    </div>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────

function DemoCard({ step, title, children }: { step?: number; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#161616", borderRadius: 7, border: "1px solid #222", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 10px", borderBottom: "1px solid #1e1e1e" }}>
        {step && (
          <span style={{
            width: 16, height: 16, borderRadius: "50%", background: "rgba(255,109,41,0.15)",
            border: "1px solid rgba(255,109,41,0.3)", fontSize: 9, color: "#FF6D29",
            display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0,
          }}>{step}</span>
        )}
        <span style={{ fontSize: 10.5, fontWeight: 600, color: "#ccc", fontFamily: "'Space Grotesk', sans-serif" }}>{title}</span>
      </div>
      <div style={{ padding: 9 }}>{children}</div>
    </div>
  );
}

function SyncCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#161616", borderRadius: 7, border: "1px solid #222", padding: "9px 11px" }}>
      <div style={{ fontSize: 10.5, fontWeight: 700, color: "#ccc", marginBottom: 7, fontFamily: "'Space Grotesk', sans-serif" }}>{title}</div>
      {children}
    </div>
  );
}

function FlowButton({ children, disabled, style }: { children: React.ReactNode; disabled?: boolean; style?: React.CSSProperties }) {
  return (
    <button disabled={disabled} style={{
      width: "100%", padding: "8px 12px", borderRadius: 6, border: "none", cursor: disabled ? "default" : "pointer",
      background: disabled ? "#1e1e1e" : "linear-gradient(135deg, #ff9063 0%, #FF6D29 100%)",
      color: disabled ? "#444" : "#fff", fontSize: 11, fontWeight: 700,
      fontFamily: "'Space Grotesk', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
      opacity: disabled ? 0.6 : 1, ...style,
    }}>
      {children}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────

const CARD_WIDTH = 380;
const CARD_CONTENT_HEIGHT = 400;

export default function ExtensionMockup({ activeTab: controlledTab }: { activeTab?: Tab } = {}) {
  const [localTab, setLocalTab] = useState<Tab>("gerar");
  const activeTab = controlledTab ?? localTab;

  function handleTabClick(id: Tab) {
    if (controlledTab === undefined) setLocalTab(id);
  }
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 30 });
  const glowX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div style={{ perspective: "1200px" }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <motion.div
        ref={cardRef}
        style={{
          rotateX, rotateY,
          transformStyle: "preserve-3d",
          borderRadius: 14,
          border: "1px solid rgba(255,109,41,0.15)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
          background: "#0e0e0e",
          width: CARD_WIDTH,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cursor glow */}
        <GlowOverlay glowX={glowX} glowY={glowY} />

        {/* Header */}
        <div style={{
          padding: "10px 14px 8px",
          background: "linear-gradient(160deg, #1e0d03 0%, #0e0e0e 100%)",
          borderBottom: "1px solid #1a1a1a",
        }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800 }}>
            <span style={{ color: "#fff" }}>Caption</span>
            <span style={{ background: "linear-gradient(135deg,#ff9063,#FF6D29)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}> Flow</span>
            <span style={{ fontSize: 9, color: "#FF6D29", marginLeft: 2, fontWeight: 700, WebkitTextFillColor: "#FF6D29" }}>PRO</span>
          </span>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", background: "#0e0e0e", borderBottom: "1px solid #1a1a1a" }}>
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => handleTabClick(tab.id)} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
              padding: "7px 2px 6px", border: "none", background: "transparent", cursor: "pointer",
              color: activeTab === tab.id ? "#FF6D29" : "#555",
              borderBottom: `2px solid ${activeTab === tab.id ? "#FF6D29" : "transparent"}`,
              transition: "color 0.15s, border-color 0.15s", minWidth: 0,
            }}>
              {tab.icon}
              <span style={{ fontSize: 9, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, whiteSpace: "nowrap" }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Status bar */}
        <div style={{ padding: "4px 12px", fontSize: 9.5, color: "#555", background: "#0a0a0a", borderBottom: "1px solid #141414" }}>
          Selecione a pasta de MOGRTs para começar.
        </div>

        {/* Fixed-height content area */}
        <div style={{
          height: CARD_CONTENT_HEIGHT,
          overflowY: "auto",
          padding: 9,
          scrollbarWidth: "thin",
          scrollbarColor: "#2a2929 transparent",
        }}>
          {activeTab === "gerar" && <PaneGerar />}
          {activeTab === "converter" && <PaneConverter />}
          {activeTab === "atualizacao" && <PaneAtualizar />}
          {activeTab === "templates" && <PaneTemplates />}
          {activeTab === "sfx" && <PaneSFX />}
        </div>

        {/* Bottom shine */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,109,41,0.2), transparent)",
          pointerEvents: "none",
        }} />
      </motion.div>
    </div>
  );
}
