import { metadataDe } from "../seo";

export const metadata = metadataDe({
  title: "Puertas — Acción de Gracias | Culto Racional",
  description: "Puertas: el término hebreo 'toodáa' y el griego 'eukjaristía' — el Sacrificio de Paz de Acción de Gracias como respuesta del creyente a la reconciliación ya lograda por Cristo.",
  ruta: "/puertas/",
  imagen: "puertas",
});

export default function PuertasLayout({ children }) {
  return children;
}
