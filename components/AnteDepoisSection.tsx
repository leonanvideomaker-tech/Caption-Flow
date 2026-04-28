"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VideoComparison } from "@/components/ui/image-comparison-slider";

const PAIRS = [
  { id: 1, beforeSrc: "/comparisons/01-antes.mp4", afterSrc: "/comparisons/01-depois.mp4" },
  { id: 2, beforeSrc: "/comparisons/02-antes.mp4", afterSrc: "/comparisons/02-depois.mp4" },
  { id: 3, beforeSrc: "/comparisons/03-antes.mp4", afterSrc: "/comparisons/03-depois.mp4" },
];

export default function AnteDepoisSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const count = window.innerWidth < 640 ? 1 : 3;
      setVisibleCount(count);
      setPage((p) => Math.min(p, PAIRS.length - count));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxPage = PAIRS.length - visibleCount;

  const prev = () => { setDir(-1); setPage((p) => Math.max(0, p - 1)); };
  const next = () => { setDir(1); setPage((p) => Math.min(maxPage, p + 1)); };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 40) next();
    else if (delta < -40) prev();
    touchStartX.current = null;
  };


  const visible = PAIRS.slice(page, page + visibleCount);

  return (
    <section id="caption-flow-em-acao" style={{ background: "#f0efe9", paddingTop: "5rem", paddingBottom: "6rem" }}>

      {/* Header */}
      <div className="ante-depois-header" style={{ padding: "0 clamp(2rem, 6vw, 8rem)", marginBottom: "3rem" }}>
        <p style={{
          fontFamily: "'TASAOrbiter', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 400,
          letterSpacing: "0.18em",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 16,
        }}>
          Caption Flow em ação
        </p>
        <h2 style={{
          fontFamily: "'TASAOrbiter', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.05,
          color: "#1a1a1a",
          margin: "0 0 12px",
        }}>
          O resultado fala por si só.
        </h2>
        <p style={{
          fontFamily: "'TASAOrbiter', sans-serif",
          fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
          fontWeight: 400,
          color: "#777",
          margin: 0,
          lineHeight: 1.5,
        }}>
          Arraste o divisor para comparar antes e depois.
        </p>
      </div>

      {/* Cards row with side arrows */}
      <div
        className="ante-depois-row"
        style={{ padding: "0 clamp(2rem, 5vw, 6rem)", display: "flex", alignItems: "center", gap: 16 }}
      >

        {/* Left arrow */}
        <button
          className="ante-depois-arrow"
          onClick={prev}
          disabled={page === 0}
          style={{
            flexShrink: 0,
            width: 48, height: 48,
            borderRadius: "50%",
            border: "1px solid #ccc",
            background: page === 0 ? "transparent" : "#1a1a1a",
            cursor: page === 0 ? "default" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, opacity 0.2s",
            opacity: page === 0 ? 0.25 : 1,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke={page === 0 ? "#999" : "#fff"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Cards */}
        <div style={{ flex: 1, overflow: "hidden" }}>
          <AnimatePresence initial={false} custom={dir} mode="popLayout">
            <motion.div
              key={page}
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: d >= 0 ? "100%" : "-100%", opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d >= 0 ? "-100%" : "100%", opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", gap: 16 }}
            >
              {visible.map((pair, i) => (
                <div key={pair.id} style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "#ccc",
                    textAlign: "center",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}>
                    {page + i + 1} / {PAIRS.length}
                  </p>
                  <VideoComparison
                    beforeSrc={pair.beforeSrc}
                    afterSrc={pair.afterSrc}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <button
          className="ante-depois-arrow"
          onClick={next}
          disabled={page === maxPage}
          style={{
            flexShrink: 0,
            width: 48, height: 48,
            borderRadius: "50%",
            border: "1px solid #ccc",
            background: page === maxPage ? "transparent" : "#1a1a1a",
            cursor: page === maxPage ? "default" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, opacity 0.2s",
            opacity: page === maxPage ? 0.25 : 1,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke={page === maxPage ? "#999" : "#fff"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Swipe hint — mobile only */}
      <p className="ante-depois-swipe-hint" style={{
        display: "none",
        textAlign: "center",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        color: "#aaa",
        textTransform: "uppercase",
        margin: "14px 0 0",
      }}>
        ← Deslize para ver os demais →
      </p>

      {/* Dots below */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
        {Array.from({ length: maxPage + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{
              width: i === page ? 20 : 6, height: 6,
              borderRadius: 3, border: "none",
              background: i === page ? "#1a1a1a" : "#ccc",
              cursor: "pointer", padding: 0,
              transition: "width 0.3s, background 0.3s",
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .ante-depois-row {
            padding: 0 0.75rem !important;
            gap: 8px !important;
          }
          .ante-depois-arrow {
            width: 40px !important;
            height: 40px !important;
          }
          .ante-depois-header {
            padding: 0 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
