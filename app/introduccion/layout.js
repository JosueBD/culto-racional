import { metadataDe } from "../seo";

export const metadata = metadataDe({
  title: "Introducción | Culto Racional",
  description: "Bienvenida al estudio del Culto Racional: un recorrido progresivo, no simbólico, donde cada etapa tiene un orden, un propósito y una función específica.",
  ruta: "/introduccion/",
  imagen: "introduccion",
});

export default function IntroduccionLayout({ children }) {
  return children;
}
