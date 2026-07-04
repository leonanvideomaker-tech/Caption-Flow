"use client";
import React, { useId } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

export const InfiniteGridBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function InfiniteGridBackground({ className, children, ...props }, forwardedRef) {
  const uid = useId().replace(/:/g, "");
  const patternId = `gp-${uid}`;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Move ambos os grids via DOM direto — zero re-render React
  const patternRef = React.useRef<SVGPatternElement | null>(null);
  const patternRevealRef = React.useRef<SVGPatternElement | null>(null);

  useAnimationFrame(() => {
    const nx = (offsetX.get() + 0.35) % 40;
    const ny = (offsetY.get() + 0.35) % 40;
    offsetX.set(nx);
    offsetY.set(ny);
    const xs = String(nx);
    const ys = String(ny);
    if (patternRef.current) {
      patternRef.current.setAttribute("x", xs);
      patternRef.current.setAttribute("y", ys);
    }
    if (patternRevealRef.current) {
      patternRevealRef.current.setAttribute("x", xs);
      patternRevealRef.current.setAttribute("y", ys);
    }
  });

  const maskImage = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, black 30%, transparent 100%)`;

  return (
    <div
      ref={(node) => {
        containerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* Grid base — sempre visível, muito sutil, branco */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.05 }}>
        <svg className="w-full h-full">
          <defs>
            <pattern
              ref={patternRef}
              id={patternId}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>

      {/* Grid revelado pelo mouse — máscara radial segue o cursor */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage, opacity: 0.3 }}
      >
        <svg className="w-full h-full">
          <defs>
            <pattern
              ref={patternRevealRef}
              id={`${patternId}-reveal`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId}-reveal)`} />
        </svg>
      </motion.div>

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>
    </div>
  );
});
