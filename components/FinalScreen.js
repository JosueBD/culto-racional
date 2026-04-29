"use client";

import { useRouter } from "next/navigation";
import { setProgreso } from "@/lib/progreso";

export default function FinalScreen() {
    const router = useRouter();

    const reiniciar = () => {
        setProgreso(0);
        router.push("/");
    };

    return (
        <div className="final-screen">
            <h1>Has llegado al centro</h1>

            <p>
                No es el final del recorrido.
                Es el inicio de una vida ordenada.
            </p>

            <button onClick={reiniciar}>
                Volver a comenzar
            </button>
        </div>
    );
}