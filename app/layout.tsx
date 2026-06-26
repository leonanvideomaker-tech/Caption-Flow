import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SocialProofToast from "@/components/SocialProofToast";
import FreeBanner from "@/components/FreeBanner";

export const metadata: Metadata = {
  title: "Caption Flow — Legendas animadas em segundos no Premiere Pro",
  description: "Extensão nativa para Adobe Premiere Pro que automatiza a criação de legendas animadas com MOGRTs. Gere 200 legendas em 3 cliques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="scroll-restoration" strategy="beforeInteractive">{`
          (function(){
            try {
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            } catch(e){}
          })();
        `}</Script>
      </head>
      <body className="min-h-full">
        <FreeBanner />
        {children}
        <SocialProofToast />
      </body>
    </html>
  );
}
