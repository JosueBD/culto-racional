import { curso } from "../../../data/curso";
import Link from "next/link";
import LessonNav from "../../../components/LessonNav";

// ESTA FUNCIÓN ES LA QUE FALTA:
// Next.js la usa en el build para saber qué páginas estáticas crear.
export async function generateStaticParams() {
    // Retornamos un array de objetos con el nombre del parámetro [modulo]
    return curso.map((m) => ({
        modulo: m.slug,
    }));
}

export default function Modulo({ params }) {
    const modulo = curso.find(m => m.slug === params.modulo);

    if (!modulo) return <div>No encontrado</div>;

    return (
        <main>
            <Link href="/curso" className="back">← Curso</Link>

            {/* LECTURA */}
            {modulo.tipo === "lectura" && (
                <article className="reading-container">
                    <h1>{modulo.titulo}</h1>
                    {modulo.contenido.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </article>
            )}

            {/* VISUAL */}
            {modulo.tipo === "visual" && (
                <div className={`stage ${modulo.slug}`}>
                    <h2>{modulo.titulo}</h2>
                    <p>{modulo.texto}</p>
                </div>
            )}

            <LessonNav prev="introduccion" next="puertas" />
        </main>
    );
}