"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const feedbacks = [
  { src: "/feedback-01.png" },
  { src: "/feedback-02.png" },
  { src: "/feedback-03.png" },
  { src: "/feedback-04.png" },
  { src: "/feedback-05.png" },
  { src: "/feedback-06.png" },
  { src: "/feedback-07.png" },
  { src: "/feedback-08.png" },
  { src: "/feedback-09.png" },
  { src: "/feedback-10.png" },
];

const col1 = feedbacks.filter((_, i) => i % 3 === 0); // 0, 3, 6, 9
const col2 = feedbacks.filter((_, i) => i % 3 === 1); // 1, 4, 7
const col3 = feedbacks.filter((_, i) => i % 3 === 2); // 2, 5, 8

export default function ProvasSociaisSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#f0efe9", paddingTop: "5rem", paddingBottom: "6rem" }}
    >
      {/* Header */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12 text-center"
        >
          <p style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 400,
            letterSpacing: "0.18em",
            color: "#999",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Quem já usa
          </p>
          <h2 style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.1,
            color: "#1a1a1a",
            margin: "0 0 14px",
          }}>
            Editores reais.<br /><span style={{ color: "#FF6D29" }}>Resultados reais.</span>
          </h2>
          <p style={{
            fontFamily: "'TASAOrbiter', sans-serif",
            fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
            color: "#777",
            margin: 0,
            lineHeight: 1.55,
          }}>
            Veja o que os editores que já usam o Caption Flow estão falando.
          </p>
        </motion.div>
      </div>

      {/* 3 Scrolling columns — masked top/bottom */}
      <div
        className="flex justify-center gap-5"
        style={{
          maxHeight: 720,
          overflow: "hidden",
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          padding: "0 clamp(1rem, 4vw, 5rem)",
        }}
      >
        <TestimonialsColumn items={col1} duration={18} className="w-full max-w-xs" />
        <TestimonialsColumn items={col2} duration={22} className="hidden md:block w-full max-w-xs" />
        <TestimonialsColumn items={col3} duration={16} className="hidden lg:block w-full max-w-xs" />
      </div>
    </section>
  );
}
