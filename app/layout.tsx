import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR" style={{ scrollBehavior: "auto" }}>
      <head>
        {/* Força scroll no topo ao carregar — evita browser restaurar posição */}
        <script dangerouslySetInnerHTML={{ __html: "if(history.scrollRestoration){history.scrollRestoration='manual';}window.scrollTo(0,0);window.addEventListener('load',function(){document.documentElement.style.scrollBehavior='smooth';});" }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
