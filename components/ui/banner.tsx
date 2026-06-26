"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BannerVariant = "default" | "flow";

export function Banner({
  variant = "default",
  flowColors = [
    "rgba(255,109,41,0.5)",
    "rgba(255,60,10,0.3)",
    "rgba(255,144,80,0.4)",
    "rgba(255,109,41,0.5)",
  ],
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  variant?: BannerVariant;
  flowColors?: string[];
}) {
  return (
    <div
      {...props}
      className={cn(
        "sticky top-0 z-50 flex items-center justify-center px-4 text-center text-sm font-medium overflow-hidden",
        "border-b border-white/[0.06]",
        "bg-[#0e0e0e]",
        "py-2.5",
        className,
      )}
    >
      {variant === "flow" && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: `repeating-linear-gradient(80deg, ${[...flowColors, flowColors[0]]
                .map((c, i) => `${c} ${(i * 60) / flowColors.length}%`)
                .join(", ")})`,
              backgroundSize: "200% 100%",
              animation: "banner-flow 10s linear infinite",
              maskImage:
                "radial-gradient(ellipse 80% 100% at 50% 50%, white 40%, transparent 100%)",
              filter: "saturate(1.5) blur(1px)",
            }}
          />
          <style>{`
            @keyframes banner-flow {
              from { background-position: 0% 0; }
              to   { background-position: 200% 0; }
            }
          `}</style>
        </>
      )}

      {children}
    </div>
  );
}
