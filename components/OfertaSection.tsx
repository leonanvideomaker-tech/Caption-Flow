"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Check } from "lucide-react";

const ITEMS = [
  { label: "Caption Flow Pro — legendas completas + SFX + templates", bonus: false },
  { label: "Vídeo aulas passo a passo", bonus: false },
  { label: "Acesso vitalício + atualizações futuras", bonus: false },
  { label: "Suporte 100% humano com o próprio criador", bonus: false },
  { label: "Bônus — Vídeo aula estilização + presets", bonus: true },
  { label: "Bônus — Masterclass Criativo Viral do Caption Flow", bonus: true },
];

const ANCHOR_ROWS = [
  { label: "Caption Flow Pro (Premiere 2025 e 2026)", value: "R$449", bonus: false },
  { label: "Vídeo aulas passo a passo", value: "R$97", bonus: false },
  { label: "Acesso vitalício + atualizações futuras", value: "Imensurável", bonus: false, priceless: true },
  { label: "Suporte 100% humano com o próprio criador", value: "Imensurável", bonus: false, priceless: true },
  { label: "Bônus — Vídeo aula estilização + presets", value: "R$97", bonus: true },
  { label: "Bônus — Masterclass Criativo Viral", value: "R$157", bonus: true },
];

const AVATARS = [
  "/avatars/avatar-pedro.png",
  "/avatars/avatar-bryan.png",
  "/avatars/avatar-gleisson.png",
  "/avatars/avatar-diego.png",
  "/avatars/avatar-jammal.png",
];

function AvatarStack() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex" }}>
        {AVATARS.map((src, i) => (
          <div
            key={i}
            style={{
              width: 32, height: 32,
              borderRadius: "50%",
              border: "2px solid #fff",
              overflow: "hidden",
              marginLeft: i > 0 ? -10 : 0,
              zIndex: 5 - i,
              position: "relative",
              background: "#1a1a1a",
              flexShrink: 0,
            }}
          >
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
      </div>
      <p style={{
        fontFamily: "'TASAOrbiter', sans-serif",
        fontSize: "0.78rem",
        color: "rgba(255,255,255,0.45)",
        margin: 0,
        lineHeight: 1.45,
      }}>
        <strong style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>+300</strong>{" "}
        editores já usam o Caption Flow.
      </p>
    </div>
  );
}

export default function OfertaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="offer"
      ref={ref}
      className="py-24 px-6 relative"
      style={{ background: "#000" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 60%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-label">Oferta</p>
          <h2
            className="font-extrabold text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.12}
              staggerFrom="first"
              containerClassName="justify-center"
              transition={{ type: "spring", stiffness: 250, damping: 40 }}
            >
              Tudo que você precisa para nunca mais perder tempo com legenda.
            </VerticalCutReveal>
          </h2>
          <p className="text-[#a1a1a6] mt-4 mx-auto" style={{ maxWidth: "520px", fontSize: "1rem" }}>
            Pagamento único. Sem mensalidade. Acesso imediato após a compra.
          </p>
        </div>

        {/* Anchor table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="px-6 py-5">
            <p className="text-xs font-semibold text-[#6e6e73] tracking-widest uppercase mb-4">
              O que você está recebendo
            </p>
            {ANCHOR_ROWS.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "0.9rem" }}>{row.bonus ? "⭐" : "✅"}</span>
                  <span className="text-sm" style={{ color: row.bonus ? "#FF9063" : "#a1a1a6" }}>{row.label}</span>
                </div>
                <span
                  className="text-sm font-semibold ml-4 shrink-0"
                  style={{
                    color: row.priceless ? "#34C759" : "#6e6e73",
                    textDecoration: row.priceless ? "none" : "line-through",
                  }}
                >
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-3 mt-1">
              <span className="font-bold text-white">Valor real</span>
              <span className="font-bold line-through" style={{ color: "#FF3B30" }}>R$800</span>
            </div>
          </div>
        </motion.div>

        {/* ── BRIDGE BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 rounded-3xl overflow-hidden"
          style={{ background: "#fff" }}
        >
          <div
            style={{
              padding: "2.25rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 8,
            }}
          >
            <p style={{
              fontFamily: "'TASAOrbiter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#FF6D29",
              textTransform: "uppercase",
            }}>
              Promoção de lançamento · Por tempo limitado
            </p>
            <p style={{
              fontFamily: "'TASAOrbiter', sans-serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.25,
              margin: 0,
            }}>
              Você pagaria{" "}
              <span style={{ textDecoration: "line-through", color: "#bbb" }}>R$800</span>
              , mas hoje você vai pagar apenas:
            </p>

            {/* Primary: installment */}
            <div style={{ marginTop: 8, display: "flex", alignItems: "baseline", gap: 6 }}>
              {/* 12x — proportional to main number */}
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "2.2rem",
                fontWeight: 800,
                color: "#FF6D29",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                alignSelf: "flex-end",
                marginBottom: 4,
              }}>12x</span>

              {/* R$ 25,55 */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 2, lineHeight: 1 }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#FF6D29",
                  alignSelf: "flex-start",
                  marginTop: 6,
                }}>R$</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#FF6D29",
                  lineHeight: 1,
                }}>25</span>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  color: "#FF6D29",
                  lineHeight: 1,
                  alignSelf: "flex-end",
                  marginBottom: 4,
                }}>,55</span>
              </div>
            </div>

            {/* Secondary: lump sum */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9rem",
              color: "#888",
              margin: 0,
            }}>
              ou <span style={{ color: "#1a1a1a", fontWeight: 700 }}>R$247</span> à vista · Preço sobe em breve
            </p>
          </div>

          {/* Orange divider stripe */}
          <div style={{ height: 4, background: "linear-gradient(90deg, #ff9063, #FF6D29)" }} />
        </motion.div>

        {/* ── TWO-COLUMN OFFER CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ paddingTop: 18 }}
        >
          {/* Launch badge — outside overflow-hidden wrapper */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #ff9063, #FF6D29)",
            color: "#fff", fontSize: "0.68rem", fontWeight: 700,
            padding: "5px 20px", borderRadius: 100, letterSpacing: "0.08em",
            whiteSpace: "nowrap", zIndex: 10,
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            ✦ LANÇAMENTO — OFERTA POR TEMPO LIMITADO
          </div>

          <div
            className="oferta-card-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "rgba(10,10,10,0.95)",
              border: "1.5px solid rgba(255,109,41,0.5)",
              boxShadow: "0 0 60px rgba(255,109,41,0.15)",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            {/* LEFT: price + CTA */}
            <div
              style={{
                padding: "3rem 2.5rem",
                borderRight: "1px solid rgba(255,109,41,0.15)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "2rem",
                background: "linear-gradient(160deg, rgba(255,109,41,0.06) 0%, transparent 60%)",
              }}
            >
              <div>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.68rem",
                  color: "#FF9063",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}>
                  Caption Flow
                </p>
                <h3 style={{
                  fontFamily: "'TASAOrbiter', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 4px",
                  letterSpacing: "-0.02em",
                }}>
                  Acesso Vitalício
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  color: "#555",
                  margin: "0 0 28px",
                }}>
                  Pagamento único · Sem mensalidade
                </p>

                {/* Installment price (primary) */}
                <div style={{ marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 3, lineHeight: 1 }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.82rem",
                      color: "#888",
                    }}>12x de</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "3rem",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      color: "#fff",
                      lineHeight: 1.1,
                    }}>R$25</span>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}>,55</span>
                  </div>
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "#555",
                  marginBottom: 0,
                }}>
                  ou <span style={{ color: "#FF9063", fontWeight: 600 }}>R$247</span> à vista
                  {" "}·{" "}
                  <span style={{ textDecoration: "line-through" }}>R$800</span>
                </p>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="https://pay.kiwify.com.br/ZBIgHVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    borderRadius: 12,
                    padding: "14px 20px",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    background: "linear-gradient(135deg, #ff9063, #FF6D29)",
                    textDecoration: "none",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "opacity 0.2s",
                    marginBottom: 20,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  Quero o Caption Flow →
                </a>

                {/* Avatar social proof */}
                <AvatarStack />
              </div>
            </div>

            {/* RIGHT: feature list */}
            <div style={{ padding: "3rem 2.5rem" }}>
              <p style={{
                fontFamily: "'TASAOrbiter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#555",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}>
                Tudo incluso
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {ITEMS.map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                  >
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0, marginTop: 2,
                      background: item.bonus ? "rgba(255,109,41,0.15)" : "rgba(52,199,89,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Check
                        size={10}
                        color={item.bonus ? "#FF9063" : "#34C759"}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span style={{
                      fontFamily: "'TASAOrbiter', sans-serif",
                      fontSize: "0.88rem",
                      color: item.bonus ? "#FF9063" : "#d1d1d1",
                      lineHeight: 1.4,
                    }}>
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Guarantee note */}
              <div style={{
                marginTop: 28,
                padding: "12px 14px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "#555",
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  ↩️ Garantia incondicional de 7 dias. Se não gostar, devolvemos 100%.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          {["🔒 Checkout seguro", "⚡ Acesso imediato", "↩️ Garantia 7 dias", "🔄 Atualizações grátis"].map((item, i) => (
            <span key={i} className="text-sm text-[#6e6e73]">{item}</span>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .oferta-card-grid {
            grid-template-columns: 1fr !important;
          }
          .oferta-card-grid > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,109,41,0.15) !important;
          }
        }
      `}</style>
    </section>
  );
}
