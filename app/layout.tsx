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
        <link rel="preload" href="/fonts/TASAOrbiter-Bold.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/TASAOrbiter-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <Script id="scroll-restoration" strategy="beforeInteractive">{`
          (function(){
            try {
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            } catch(e){}
          })();
        `}</Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xfe27qna3u");
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
