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
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '4501516380094475');
          fbq('track', 'PageView');
        `}</Script>
        <Script id="meta-pixel-checkout" strategy="afterInteractive">{`
          (function(){
            document.addEventListener('click', function(e){
              var a = e.target && e.target.closest ? e.target.closest('a[href*="pay.kiwify.com.br"]') : null;
              if (!a || typeof window.fbq !== 'function') return;
              window.fbq('track', 'InitiateCheckout', {
                content_name: 'Caption Flow',
                value: 247.00,
                currency: 'BRL'
              });
            }, true);
          })();
        `}</Script>
        <Script id="kiwify-utm-passthrough" strategy="afterInteractive">{`
          (function(){
            var KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','fbclid','src','sck'];
            var STORE_KEY = 'cf_attribution';

            function readStored(){
              try {
                var raw = sessionStorage.getItem(STORE_KEY);
                if (!raw) return {};
                var parsed = JSON.parse(raw);
                return (parsed && typeof parsed === 'object') ? parsed : {};
              } catch(e){ return {}; }
            }

            function writeStored(data){
              try { sessionStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch(e){}
            }

            var stored = readStored();
            try {
              var entry = new URLSearchParams(window.location.search);
              var touched = false;
              for (var i = 0; i < KEYS.length; i++) {
                var value = entry.get(KEYS[i]);
                if (value) { stored[KEYS[i]] = value; touched = true; }
              }
              if (touched) writeStored(stored);
            } catch(e){}

            document.addEventListener('click', function(e){
              var a = e.target && e.target.closest ? e.target.closest('a[href*="pay.kiwify.com.br"]') : null;
              if (!a) return;
              var params = readStored();
              try {
                var url = new URL(a.getAttribute('href'), window.location.href);
                for (var i = 0; i < KEYS.length; i++) {
                  var k = KEYS[i];
                  if (params[k] && !url.searchParams.has(k)) url.searchParams.set(k, params[k]);
                }
                a.href = url.toString();
              } catch(err){}
            }, true);
          })();
        `}</Script>
      </head>
      <body className="min-h-full">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=4501516380094475&ev=PageView&noscript=1"
          />
        </noscript>
        <FreeBanner />
        {children}
        <SocialProofToast />
      </body>
    </html>
  );
}
