"use client";

import { Download } from "lucide-react";
import { Banner } from "@/components/ui/banner";

const FREE_DRIVE_URL =
  "https://drive.google.com/drive/folders/1aQZTKKAB5_lpBUQqIt4Rbn_6GNf_bIt_?usp=sharing";

export default function FreeBanner() {
  return (
    <Banner
      variant="flow"
      flowColors={[
        "rgba(255,109,41,0.45)",
        "rgba(255,60,10,0.25)",
        "rgba(180,60,0,0.2)",
        "rgba(255,130,60,0.35)",
        "rgba(255,109,41,0.45)",
      ]}
    >
      {/* Mobile: texto à esquerda, botão à direita. Desktop: centralizado com gap */}
      <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-center">
        <span
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-left text-white/90 text-xs leading-snug font-medium sm:text-center sm:text-sm"
        >
          Baixe a <span className="font-bold">versão free</span>{" "}
          para testar agora
        </span>

        <a
          href={FREE_DRIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md bg-[#FF6D29] px-3 py-1 text-[11px] font-bold text-white transition-opacity hover:opacity-90 active:opacity-75 sm:text-xs"
        >
          <Download size={11} />
          Download grátis
        </a>
      </div>
    </Banner>
  );
}
