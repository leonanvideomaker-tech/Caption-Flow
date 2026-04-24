export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        fontFamily: "sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🔧</p>
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "1rem",
            lineHeight: 1.4,
          }}
        >
          Site passando por reforma
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#aaaaaa",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          Estou atualizando o site agora. Volte em breve!
        </p>
      </div>
    </main>
  );
}
