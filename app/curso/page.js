import Link from "next/link";
import { curso } from "../../data/curso";

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