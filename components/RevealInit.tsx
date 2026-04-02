"use client";
import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    // Garante scroll no topo — duplo rAF para pegar após o primeiro paint
    history.scrollRestoration = "manual";
    const forceTop = () => {
      window.scrollTo(0, 0);
    };
    forceTop();
    requestAnimationFrame(() => {
      requestAnimationFrame(forceTop);
    });

    // Reveal ao scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
