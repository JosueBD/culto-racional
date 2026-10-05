import "./globals.css";
import ClientShell from "./ClientShell";
import { SITIO, metadataDe } from "./seo";

// Sin canonical ni og:url: este metadata lo heredan las rutas que no definen el suyo.
const { alternates, openGraph: { url, ...openGraph }, ...base } = metadataDe({
  title: "Culto Racional | El Tabernáculo de David Reedificado",
  description: "Recorrido progresivo por puertas, atrios, lugar santo y lugar santísimo — acción de gracias, alabanza, bendición y adoración.",
  imagen: "portada",
});

export const metadata = {
  metadataBase: new URL(SITIO),
  ...base,
  openGraph,
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