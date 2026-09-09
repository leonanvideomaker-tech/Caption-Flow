"use client";
import { useEffect } from "react";

export default function CheckoutIndex() {
  useEffect(() => {
    // 1. Indexador: respeita o que veio na URL, senão reaproveita o cookie, senão cria
    const q = new URLSearchParams(location.search);
    const cookieIndex = document.cookie.match(/(?:^|;\s*)index=([^;]*)/)?.[1];
    const index = q.get('sck') || cookieIndex || `${Date.now()}_${Math.floor(Math.random() * 1e14)}`;
    document.cookie = `index=${index};path=/;max-age=31536000;SameSite=Lax`;

    // 2. No clique do botão, monta o link do checkout com o contexto do momento
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest('a[href*="kiwify"]') as HTMLAnchorElement | null;
      if (!a) return;
      const u = new URL(a.href);
      u.searchParams.set('sck', index);
      new URLSearchParams(location.search).forEach((v, k) => {
        if (k.startsWith('utm_')) u.searchParams.set(k, v);
      });
      a.href = u.toString();
    };
    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  return null;
}
