"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";

interface Props { onComplete: () => void; }

const EASE_EXPO  = [0.76, 0, 0.24, 1] as const;
const EASE_POWER = [0.83, 0, 0.17, 1] as const;
const WIPE_DUR   = 0.65;

function WipeCurtain({ onInComplete, onDone }: {
  onInComplete: () => void;
  onDone: () => void;
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ scaleY: 0, originY: 1 });
    controls
      .start({ scaleY: 1, transition: { duration: WIPE_DUR, ease: EASE_POWER } })
      .then(() => {
        onInComplete();
        controls.set({ originY: 0 });
        return controls.start({ scaleY: 0, transition: { duration: WIPE_DUR, ease: EASE_POWER } });
      })
      .then(() => onDone());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      animate={controls}
      style={{ position: "fixed", inset: 0, background: "#f0efe9", zIndex: 10001 }}
    />
  );
}

export default function HeroIntro({ onComplete }: Props) {
  const [mounted, setMounted]     = useState(true);
  const [wiping, setWiping]       = useState(false);
  const [wipeVisible, setWipeVisible] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setWiping(true);
      setWipeVisible(true);
    }, 1500);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleWipeInComplete() {
    if (!done.current) { done.current = true; onComplete(); }
    setMounted(false);
  }

  function handleWipeDone() {
    setWipeVisible(false);
  }

  const textSize = "clamp(2.25rem, 6.5vw, 5.5rem)";

  return (
    <>
      {wipeVisible && wiping && (
        <WipeCurtain
          onInComplete={handleWipeInComplete}
          onDone={handleWipeDone}
        />
      )}

      {mounted && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e0e0e",
        }}>
          {/* Ray of light — corner burst, top-left to bottom-right */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(255,109,41,0.88) 0%, rgba(255,109,41,0.22) 28%, transparent 55%)",
            pointerEvents: "none",
          }} />

          {/* Caption Flow — staggered clip up */}
          <div style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "baseline",
            gap: "0.2em",
          }}>
            <div style={{ overflow: "hidden", lineHeight: 0.9 }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.88, ease: EASE_EXPO }}
                style={{
                  display: "block",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: textSize,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#fff",
                }}
              >
                Caption
              </motion.span>
            </div>

            <div style={{ overflow: "hidden", lineHeight: 0.9 }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.88, delay: 0.07, ease: EASE_EXPO }}
                style={{
                  display: "block",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: textSize,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "#FF6D29",
                }}
              >
                Flow
              </motion.span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
