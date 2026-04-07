"use client";

const feedbacks = [
  { file: "/feedback-01.png", name: "feedback 01.png" },
  { file: "/feedback-02.png", name: "feedback 02.png" },
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
      maxWidth: "340px",
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
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28CA41" }} />
        </div>
        {/* Filename */}
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

      {/* Screenshot */}
      <div style={{ background: "#000", lineHeight: 0 }}>
        <img
          src={src}
          alt={filename}
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
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

        <div className="reveal flex flex-col md:flex-row gap-6 justify-center items-start">
          {feedbacks.map((f, i) => (
            <div key={i} className="flex justify-center w-full md:w-auto">
              <FinderWindow src={f.file} filename={f.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
