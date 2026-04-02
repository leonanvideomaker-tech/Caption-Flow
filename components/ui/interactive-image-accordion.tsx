"use client";
import React, { useState, useRef, useEffect } from "react";

export interface AccordionItemData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  icon: string;
}

// Mobile: accordion vertical com animação CSS suave
function MobileAccordion({ items }: { items: AccordionItemData[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const toggle = (index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden"
            style={{
              border: isActive ? "1.5px solid rgba(255,109,41,0.5)" : "1px solid rgba(255,255,255,0.08)",
              transition: "border-color 0.3s ease",
            }}
          >
            {/* Header — tap para expandir */}
            <button
              onClick={() => toggle(index)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                background: isActive ? "rgba(255,109,41,0.1)" : "rgba(255,255,255,0.04)",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.3s ease",
              }}
            >
              <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{item.icon}</span>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#fff",
                flex: 1,
              }}>
                {item.title}
              </span>
              <span style={{
                color: "#FF6D29",
                fontSize: "1rem",
                display: "inline-block",
                transition: "transform 0.35s ease",
                transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
              }}>▾</span>
            </button>

            {/* Conteúdo expansível com animação via max-height */}
            <div style={{
              maxHeight: isActive ? "600px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              {/* Vídeo em proporção 5:6 completo */}
              <div style={{ position: "relative", width: "100%", paddingBottom: "120%" /* 5:6 = 120% */ }}>
                {item.videoUrl ? (
                  <video
                    ref={el => { videoRefs.current[index] = el; }}
                    src={item.videoUrl}
                    muted
                    loop
                    playsInline
                    // @ts-ignore
                    {...{ "webkit-playsinline": "true" }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}
                {/* Gradiente só na base */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)",
                  pointerEvents: "none",
                }} />
              </div>
              {/* Descrição */}
              <div style={{ padding: "14px 16px", background: "#111" }}>
                <p style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.88rem",
                  lineHeight: 1.6,
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Desktop: accordion horizontal original
const DesktopAccordionItem = ({
  item, isActive, onMouseEnter,
}: {
  item: AccordionItemData; isActive: boolean; onMouseEnter: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      className={`relative h-[480px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0 ${isActive ? "w-[420px]" : "w-[64px]"}`}
      onMouseEnter={onMouseEnter}
    >
      {item.videoUrl ? (
        <video ref={videoRef} src={item.videoUrl} muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=480&fit=crop"; }} />
      )}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 25%, transparent 50%)" }} />
      <span className={`absolute text-white text-sm font-semibold whitespace-nowrap transition-all duration-500 ease-in-out ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"} bottom-24 left-1/2 -translate-x-1/2 rotate-90`}>
        {item.title}
      </span>
      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ease-in-out ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, color: "#FF6D29", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em", marginBottom: "6px" }}>
          {String(item.id).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{item.icon}</span>
          <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
      </div>
      <div className={`absolute inset-0 rounded-2xl border-2 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} style={{ borderColor: "rgba(255,109,41,0.5)" }} />
    </div>
  );
};

export function InteractiveImageAccordion({ items }: { items: AccordionItemData[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <MobileAccordion items={items} />
      </div>
      {/* Desktop */}
      <div className="hidden md:flex flex-row items-center justify-center gap-3 overflow-x-auto p-2 no-scrollbar">
        {items.map((item, index) => (
          <DesktopAccordionItem key={item.id} item={item} isActive={index === activeIndex} onMouseEnter={() => setActiveIndex(index)} />
        ))}
      </div>
    </>
  );
}
