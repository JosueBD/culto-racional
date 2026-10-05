import Link from "next/link";
import { curso } from "../../data/curso";
import { metadataDe } from "../seo";

export const metadata = metadataDe({
    title: "Curso | Culto Racional",
    description: "Índice del curso Culto Racional: Introducción, Puertas, Atrios, Lugar Santo, Lugar Santísimo y Final.",
    ruta: "/curso/",
    imagen: "portada",
});

export default function Curso() {
    return (
        <main className="reading">
        <h1>Curso: Culto Racional</h1>

        {curso.map((item) => (
            <Link key={item.slug} href={`/curso/${item.slug}`} className="nav-link">
            {item.titulo}
            </Link>
        ))}
        </main>
    );
}