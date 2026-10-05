import { metadataDe } from "../seo";

export const metadata = metadataDe({
  title: "Lugar Santo — Bendecir | Culto Racional",
  description: "Lugar Santo: qué diferencia bendecir de agradecer y alabar, apoyado en Hebreos 11:1 y 11:20 y en los siete patrones de bendición hacia Dios.",
  ruta: "/lugar-santo/",
  imagen: "lugar-santo",
});

export default function LugarSantoLayout({ children }) {
  return children;
}
