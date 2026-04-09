"use client";

import { useEffect, useRef, useState } from "react";

const feedbacks = [
  { file: "/feedback-01.png", name: "feedback 01.png" },
  { file: "/feedback-02.png", name: "feedback 02.png" },
  { file: "/feedback-03.png", name: "feedback 3.png" },
];

function FinderWindow({ src, filename }: { src: string; filename: string }) {
  return (
    <div style={{
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
      background: "#1e1e1e",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      width: "100%",
    }}>
      {/* Titlebar */}
      <div style={{
        background: "linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 100%)",
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        borderBottom: "1px solid rgba(0,0,0,0.4)",
      }}>
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28CA41" }} />
        </div>
        <span style={{
          flex: 1,
          textAlign: "center",
          fontSize: "0.72rem",
          color: "#b0b0b0",
          letterSpacing: "0.01em",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginRight: "30px",
        }}>
          {filename}
        </span>
      </div>
      <div style={{ background: "#000", lineHeight: 0 }}>
        <img src={src} alt={filename} style={{ width: "100%", display: "block", objectFit: "cover" }} />
      </div>
    </div>
  );
}

function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"in" | "out">("in");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function scheduleNext() {
      timerRef.current = setTimeout(() => {
        // fade out
        setDirection("out");
        setAnimating(true);
        setTimeout(() => {
          setCurrent(prev => (prev + 1) % feedbacks.length);
          setDirection("in");
          setAnimating(false);
          scheduleNext();
        }, 500);
      }, 5000); // 5s visível antes de trocar
    }
    scheduleNext();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "340px", margin: "0 auto" }}>
      <div style={{
        opacity: animating && direction === "out" ? 0 : 1,
        transform: animating && direction === "out" ? "translateY(12px)" : "translateY(0)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}>
        <FinderWindow src={feedbacks[current].file} filename={feedbacks[current].name} />
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
        {feedbacks.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "20px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "#FF6D29" : "rgba(0,0,0,0.25)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProvasSociaisSection() {
  return (
    <section className="py-20 px-6" style={{ background: "#FF6D29" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="section-label" style={{ color: "rgba(0,0,0,0.5)", borderColor: "rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.08)" }}>Resultados reais</p>
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", letterSpacing: "-0.02em", color: "#000" }}
          >
            Confira o que estão dizendo:
          </h2>
        </div>

        {/* Mobile: carrossel automático */}
        <div className="md:hidden reveal">
          <MobileCarousel />
        </div>

        {/* Desktop: 3 lado a lado */}
        <div className="hidden md:flex reveal gap-5 justify-center items-start">
          {feedbacks.map((f, i) => (
            <div key={i} style={{ flex: "1", maxWidth: "320px" }}>
              <FinderWindow src={f.file} filename={f.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
