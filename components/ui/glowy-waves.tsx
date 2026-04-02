"use client";

import { useEffect, useRef } from "react";

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

const WAVES: WaveConfig[] = [
  { offset: 0,              amplitude: 55, frequency: 0.003,  color: "rgba(255,109,41,0.9)",  opacity: 0.35 },
  { offset: Math.PI / 2,   amplitude: 70, frequency: 0.0026, color: "rgba(255,144,99,0.8)",  opacity: 0.25 },
  { offset: Math.PI,       amplitude: 45, frequency: 0.0034, color: "rgba(255,80,20,0.85)",  opacity: 0.2  },
  { offset: Math.PI * 1.5, amplitude: 60, frequency: 0.0022, color: "rgba(255,120,60,0.7)",  opacity: 0.18 },
];

export function GlowyWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      mouseRef.current = { x: cx, y: cy };
      targetRef.current = { x: cx, y: cy };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      targetRef.current = { x: canvas.width / 2, y: canvas.height / 2 };
    };

    const draw = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 3) {
        const dx = x - mouseRef.current.x;
        const dy = canvas.height / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 280) * 50 *
          Math.sin(t * 0.001 + x * 0.01 + wave.offset);

        const y =
          canvas.height / 2 +
          Math.sin(x * wave.frequency + t * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + t * 0.003) * (wave.amplitude * 0.4) +
          influence;

        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 28;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      t++;
      mouseRef.current.x += (targetRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetRef.current.y - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      WAVES.forEach(draw);
      animId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    const parent = canvas.parentElement || window;
    parent.addEventListener("mousemove", onMouseMove as EventListener);
    parent.addEventListener("mouseleave", onMouseLeave as EventListener);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMouseMove as EventListener);
      parent.removeEventListener("mouseleave", onMouseLeave as EventListener);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
