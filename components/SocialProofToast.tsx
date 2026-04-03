"use client";

import { useEffect, useRef, useState } from "react";

const INTERVALS = [5, 10, 8, 3, 9];
const VISIBLE_MS = 4000;

const NAMES_RAW = [
  "Ana C.","Lucas M.","Mariana S.","Pedro H.","Fernanda L.",
  "Rafael T.","Juliana B.","Gustavo R.","Camila F.","Bruno A.",
  "Letícia O.","Diego V.","Patrícia N.","Felipe C.","Vanessa M.",
  "Rodrigo P.","Aline K.","Thiago D.","Bianca E.","Leandro G.",
  "Daniela W.","Matheus J.","Sabrina Q.","Vinicius Z.","Larissa I.",
  "Eduardo Y.","Natalia X.","Henrique U.","Priscila R.","Gabriel S.",
  "Renata B.","Caio F.","Jéssica T.","Samuel A.","Tainá L.",
  "Marcos V.","Beatriz H.","André N.","Isabela C.","Leonardo M.",
  "Clarice P.","Murilo D.","Elisa G.","Otávio K.","Viviane E.",
  "Yago W.","Monique J.","Cauã Q.","Stefany Z.","Davi I.",
  "Luana Y.","Cristian X.","Rebeca U.","Augusto R.","Naomi B.",
  "Tiago F.","Lorena T.","Fabrício A.","Heloísa L.","Igor S.",
  "Vitória M.","Cássio P.","Emília D.","Nilton G.","Carla K.",
  "Enzo E.","Rafaela W.","Márcio J.","Giovanna Q.","Breno Z.",
  "Yasmin I.","Átila Y.","Flávia X.","Wellington U.","Cecília R.",
];

const TEXTS_ONCE = [
  '"melhor investimento que fiz pra minha edição"',
  '"fiz 3 reels dinâmicos em menos de 1h 🤯🔥"',
];

const TEXTS_REPEAT = [
  "acabou de agilizar sua edição",
  "acabou de adquirir o Caption Flow 🔥",
  "acabou de economizar 2h da sua edição 🔥",
  "recomenda você comprar o Caption Flow",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const cityRef        = useRef<string | null>(null);
  const namePoolRef    = useRef<string[]>([]);
  const lastNameRef    = useRef("");
  const oncePoolRef    = useRef([...TEXTS_ONCE]);
  const repeatPoolRef  = useRef<string[]>([]);
  const intervalIdxRef = useRef(0);
  const hideTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  function nextName(): string {
    if (!namePoolRef.current.length) {
      namePoolRef.current = shuffle(NAMES_RAW);
      if (namePoolRef.current[0] === lastNameRef.current && namePoolRef.current.length > 1) {
        [namePoolRef.current[0], namePoolRef.current[1]] = [namePoolRef.current[1], namePoolRef.current[0]];
      }
    }
    const n = namePoolRef.current.shift()!;
    lastNameRef.current = n;
    return n;
  }

  function nextText(): string {
    if (oncePoolRef.current.length) {
      const idx = Math.floor(Math.random() * oncePoolRef.current.length);
      return oncePoolRef.current.splice(idx, 1)[0];
    }
    if (!repeatPoolRef.current.length) repeatPoolRef.current = shuffle(TEXTS_REPEAT);
    return repeatPoolRef.current.shift()!;
  }

  function showToast() {
    const n    = nextName();
    const text = nextText();
    const isQuote = text.startsWith('"');
    const firstName = n.split(" ")[0];

    let d: string;
    if (isQuote) {
      d = text;
    } else {
      d = cityRef.current ? `${firstName}, de ${cityRef.current}, ${text}` : text;
    }

    setName(n);
    setDesc(d);
    setVisible(true);

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setVisible(false), VISIBLE_MS);
  }

  function scheduleNext() {
    const delay = INTERVALS[intervalIdxRef.current % INTERVALS.length] * 1000;
    intervalIdxRef.current++;
    setTimeout(() => {
      showToast();
      scheduleNext();
    }, delay);
  }

  useEffect(() => {
    async function fetchCity() {
      const sources = [
        async () => { const r = await fetch("https://ipapi.co/json/");               const d = await r.json(); return d.city; },
        async () => { const r = await fetch("https://ipwho.is/");                    const d = await r.json(); return d.city || d.region; },
        async () => { const r = await fetch("https://get.geojs.io/v1/ip/geo.json"); const d = await r.json(); return d.city || d.region; },
        async () => { const r = await fetch("https://freeipapi.com/api/json");       const d = await r.json(); return d.cityName; },
      ];
      for (const fn of sources) {
        try {
          const c = await fn();
          if (c && String(c).trim() && c !== "undefined") return String(c).trim();
        } catch (_) {}
      }
      return null;
    }

    fetchCity()
      .then(c => { cityRef.current = c; })
      .catch(() => {})
      .finally(() => scheduleNext());

    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "80px",
        left: "20px",
        zIndex: 9999,
        maxWidth: "300px",
        background: "rgba(28, 28, 30, 0.72)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "16px",
        padding: "12px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.45s cubic-bezier(0.23,0.86,0.39,0.96), transform 0.45s cubic-bezier(0.23,0.86,0.39,0.96)",
        pointerEvents: "none",
      }}
      className="sp-toast-responsive"
    >
      {/* Avatar */}
      <div style={{
        width: "36px", height: "36px", borderRadius: "50%",
        background: "linear-gradient(135deg, #ff6d29, #ff9063)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "15px", fontWeight: 700, color: "#fff",
        flexShrink: 0,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}>
        {name.charAt(0)}
      </div>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: 0 }}>
        <span style={{
          fontSize: "13px", fontWeight: 700, color: "#ffffff",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {name}
        </span>
        <span style={{
          fontSize: "11px", color: "rgba(255,255,255,0.50)",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
          display: "flex", alignItems: "center", gap: "4px", lineHeight: 1.4,
        }}>
          <span style={{ color: "#30d158", fontWeight: 700, flexShrink: 0 }}>✓</span>
          <span>{desc}</span>
        </span>
      </div>
    </div>
  );
}
