import Link from "next/link";

export const metadata = {
  title: "Página no encontrada | Culto Racional",
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0c0a06",
        color: "rgba(255,255,255,0.85)",
        padding: "64px 24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#ad8306" }}>Página no encontrada</h1>
      <p style={{ margin: "16px 0 32px" }}>La dirección que buscas no existe en Culto Racional.</p>
      <Link href="/" style={{ color: "#f4d47b" }}>Volver al inicio</Link>
    </main>
  );
}
