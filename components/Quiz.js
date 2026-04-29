"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Quiz({ pregunta, opciones, correcta, onCorrect, next }) {
    const router = useRouter();

    const [respondido, setRespondido] = useState(false);
    const [seleccion, setSeleccion] = useState(null);
    const [estado, setEstado] = useState(null);
    

    const correctAnim = {
        scale: [1, 1.1, 1],
        transition: { duration: 0.3 }
    };

    const wrongAnim = {
        x: [0, -10, 10, -10, 0],
        transition: { duration: 0.4 }
    };

    const playSound = (src) => {
        const audio = new Audio(src);
        audio.volume = 0.5;
        audio.play().catch(() => {});
    };

    const handleClick = (opcion) => {
        if (respondido) return;

        setSeleccion(opcion);
        setRespondido(true);

        if (opcion === correcta) {
            setEstado("correct");
            playSound("/audio/correct.mp3");
            onCorrect?.();

            setTimeout(() => {
                if (next) router.push(next);
            }, 800);
        } else {
            setEstado("wrong");
            playSound("/audio/wrong.mp3");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h3>{pregunta}</h3>

            {opciones.map((op, i) => {
                let className = "btn btn-block";

                if (respondido) {
                    if (op === correcta) className += " btn-success";
                    else if (op === seleccion) className += " btn-error";
                }

                return (
                    <motion.button
                        key={i}
                        onClick={() => handleClick(op)}
                        className={className}
                        disabled={respondido}
                        whileTap={{ scale: 0.97 }}
                        animate={
                            respondido && op === correcta
                                ? correctAnim
                                : respondido && op === seleccion
                                ? wrongAnim
                                : {}
                        }
                    >
                        {op}
                    </motion.button>
                );
            })}

            {estado === "correct" && (
                <p style={{ color: "#2ecc71", marginTop: "10px" }}>
                    Correcto. Avanzando...
                </p>
            )}

            {estado === "wrong" && (
                <p style={{ color: "#e74c3c", marginTop: "10px" }}>
                    Incorrecto. Intenta de nuevo.
                </p>
            )}
        </div>
    );
}