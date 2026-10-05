import { metadataDe } from "../seo";

export const metadata = metadataDe({
  title: "Final | Culto Racional",
  description: "El cierre del recorrido de Culto Racional, tras completar Puertas, Atrios, Lugar Santo y Lugar Santísimo.",
  ruta: "/final/",
  imagen: "final",
});

export default function FinalLayout({ children }) {
  return children;
}
