import "./globals.css";
import ClientShell from "./ClientShell";

export const metadata = {
  title: "Culto Racional | El Tabernáculo de David Reedificado",
  description: "Recorrido progresivo por puertas, atrios, lugar santo y lugar santísimo — acción de gracias, alabanza, bendición y adoración.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}