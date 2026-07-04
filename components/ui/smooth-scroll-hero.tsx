"use client";
import * as React from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

interface SmoothScrollHeroProps {
  scrollHeight?: number;
  desktopImage?: string;
  mobileImage?: string;
  initialClipPercentage?: number;
  finalClipPercentage?: number;
  children?: React.ReactNode;
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1200,
  desktopImage = "",
  mobileImage = "",
  initialClipPercentage = 20,
  finalClipPercentage = 80,
  children,
}) => {
  const { scrollY } = useScroll();

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
  const clipEnd = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;
  const backgroundSize = useTransform(scrollY, [0, scrollHeight], ["170%", "100%"]);

  return (
    // Container com altura total = área de scroll + 100vh para a sticky funcionar
    <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className="relative w-full">
      {/* Elemento sticky que fica preso no topo durante o scroll */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-black"
        style={{ clipPath }}
      >
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: mobileImage ? `url(${mobileImage})` : undefined,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
          }}
        />
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: desktopImage ? `url(${desktopImage})` : undefined,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Conteúdo centrado dentro do sticky */}
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SmoothScrollHero;
