"use client"

import { useEffect, useRef } from "react"
import { useScroll, useTransform, motion } from "motion/react"

// Mobile: vídeo autoplay simples (iOS não suporta scrubbing por currentTime)
function MobileExpandSection() {
  return (
    <section id="caption-flow-em-acao" style={{ background: "#0e0e0e", padding: "0" }}>
      <div style={{ textAlign: "center", padding: "48px 24px 24px" }}>
        <p className="section-label" style={{ marginBottom: "12px" }}>Caption Flow em ação</p>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.5rem, 6vw, 2.2rem)",
          fontWeight: 800, letterSpacing: "-0.03em",
          color: "#fff", lineHeight: 1.2, marginBottom: "8px",
        }}>
          Expanda sua forma de criar legendas{" "}
          <span className="orange-gradient-text">no Adobe Premiere</span>
        </h2>
        <p style={{ color: "#adaaaa", fontSize: "0.9rem", lineHeight: 1.6, fontFamily: "'Inter', sans-serif", marginBottom: "24px" }}>
          Veja o painel em ação.
        </p>
      </div>
      <div style={{ width: "100%", aspectRatio: "16/9", position: "relative", background: "#000" }}>
        <video
          src="/video-pagina-scrub.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    </section>
  )
}

// Desktop: scrubbing por scroll
function DesktopExpandSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef(0)
  const currentRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.18], [0, -28])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    video.currentTime = 0

    const onReady = () => {
      if (!video.duration) return

      const unsubscribe = scrollYProgress.on("change", (v) => {
        targetRef.current = v * video.duration
      })

      const tick = () => {
        const diff = targetRef.current - currentRef.current
        if (Math.abs(diff) > 0.01) {
          currentRef.current += diff * 0.15
          video.currentTime = currentRef.current
        }
        rafRef.current = requestAnimationFrame(tick)
      }

      rafRef.current = requestAnimationFrame(tick)
      return unsubscribe
    }

    let unsubscribe: (() => void) | undefined

    if (video.readyState >= 1) {
      unsubscribe = onReady()
    } else {
      const handler = () => {
        unsubscribe = onReady()
        video.removeEventListener("loadedmetadata", handler)
      }
      video.addEventListener("loadedmetadata", handler)
    }

    return () => {
      unsubscribe?.()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [scrollYProgress])

  return (
    <section id="caption-flow-em-acao" ref={sectionRef} className="expand-section" style={{ height: "350vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", background: "#0e0e0e" }}>
        <video
          ref={videoRef}
          src="/video-pagina-scrub.mp4"
          muted
          playsInline
          preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(14,14,14,0.35) 0%, transparent 30%, transparent 60%, rgba(14,14,14,0.5) 100%)",
          pointerEvents: "none",
        }} />

        <motion.div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "80%",
          background: "linear-gradient(to bottom, rgba(5,5,5,0.96) 0%, rgba(14,14,14,0.85) 30%, rgba(14,14,14,0.5) 60%, transparent 100%)",
          pointerEvents: "none", opacity: textOpacity,
        }} />

        <motion.div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          display: "flex", flexDirection: "column", alignItems: "center",
          paddingTop: "88px", textAlign: "center",
          opacity: textOpacity, y: textY, pointerEvents: "none",
        }}>
          <p className="section-label" style={{ marginBottom: "12px" }}>Caption Flow em ação</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.7rem, 4.5vw, 3rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "#fff", lineHeight: 1.2, maxWidth: "640px", margin: "0 auto",
          }}>
            Expanda sua forma de criar legendas{" "}
            <span className="orange-gradient-text">no Adobe Premiere</span>
          </h2>
          <p style={{ color: "#adaaaa", fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "420px", margin: "12px auto 0", fontFamily: "'Inter', sans-serif" }}>
            Role para ver o painel em ação.
          </p>

          <motion.div
            style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
              <rect x="1" y="1" width="18" height="28" rx="9" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
              <motion.rect
                x="8.5" y="5" width="3" height="7" rx="1.5" fill="rgba(255,109,41,0.7)"
                animate={{ y: [0, 9, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              />
            </svg>
            <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}>
              ROLE PARA VER
            </span>
          </motion.div>
        </motion.div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.06)" }}>
          <motion.div style={{
            height: "100%",
            background: "linear-gradient(90deg, #ff9063, #FF6D29)",
            scaleX: scrollYProgress,
            transformOrigin: "left",
          }} />
        </div>
      </div>
    </section>
  )
}

export default function ExpandSection() {
  return (
    <>
      <div className="md:hidden"><MobileExpandSection /></div>
      <div className="hidden md:block"><DesktopExpandSection /></div>
    </>
  )
}
