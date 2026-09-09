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
        <meta name="facebook-domain-verification" content="0gjaawjizcutdsggoxms9aihji5bo3" />
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://api.captionflow.com.br/d7ysednnoxju.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','ap3e=HA5FKDojSVA4Uk48OiNTQwNXSkFfSAALSAkZHxoHCwsTBhcYQA0LCFsICg%3D%3D');
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
