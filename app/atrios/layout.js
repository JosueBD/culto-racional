import { metadataDe } from "../seo";

export const metadata = metadataDe({
  title: "Atrios — Alabanza | Culto Racional",
  description: "Atrios: basado en el Salmo 148, la alabanza como mandamiento universal en modo imperativo hebreo — exaltación, reconocimiento, elogio y recomendación.",
  ruta: "/atrios/",
  imagen: "atrios",
});

export default function AtriosLayout({ children }) {
  return children;
}
