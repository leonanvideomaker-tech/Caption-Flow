"use client";

export default function DevViewportToggle() {
  const openMobile = () => {
    window.open(
      window.location.href,
      "_blank",
      "width=390,height=844,left=100,top=60,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#1a1a1a",
        borderRadius: 100,
        padding: "8px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={openMobile}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 600,
        color: "#fff",
        letterSpacing: "0.04em",
      }}>
        Ver mobile
      </span>
    </div>
  );
}
