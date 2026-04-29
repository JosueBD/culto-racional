"use client";

import { useEffect, useState } from "react"; 
import { setProgreso, getProgreso } from "@/lib/progreso";
import LessonNav from "@/components/LessonNav";
import ProgressBar from "@/components/ProgressBar"; 
import Quiz from "@/components/Quiz"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import StageAudio from "@/components/StageAudio";
import { motion } from "framer-motion";

export default function Puertas() {
    const router = useRouter();
    const [ok, setOk] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const progresoActual = getProgreso();
        if (progresoActual < 1) {
            router.push("/introduccion");
            return;
        }

        setProgreso(1);
    }, []);

        const container = {
            hidden: {},
            show: {
                transition: {
                    staggerChildren: 0.3
                }
            }
        };

        const left = {
            hidden: { opacity: 0, x: -60 },
            show: { opacity: 1, x: 0 }
        };

        const center = {
            hidden: { opacity: 0, y: 60 },
            show: { opacity: 1, y: 0 }
        };

        const right = {
            hidden: { opacity: 0, x: 60 },
            show: { opacity: 1, x: 0 }
        };

    return (
        <div className="grid">
        <div className="stage puerta">
            <ProgressBar />
            <LessonNav />
            <Link href="/" className="btn btn-fixed">← Volver</Link>
            <StageAudio src="/audio/puertas.mp3" />

            <article className="reading-container">

            <motion.div
                className="threeColumns"
                variants={container}
                initial="hidden"
                animate="show"
            >

                <motion.div className="col" variants={left}>
                    <h3>Acción de Gracias</h3>
                    <p className="p-p-glass">El término hebreo por excelencia
                        para referir Acción de Gracias 
                        en el AT es 'toodáa' y significa
                        propiamente una 'extensión de la mano.'</p>
                    <p className="p-p-glass">Por su parte en el NT utiliza el término griego
                        'eukjaristía' que literalmente resalta el hecho
                        de haber sido 'bien favorecido'.
                    </p>
                    <p className="p-p-glass">En el AT también se le denomina a la Acción de Gracias
                        'Sacrificio de Paz de Acción de Gracias'; lo cual quiere
                        realmente decir: 'Sacrificio de Acción de Gracias 
                        para Reconciliación con Dios'.</p>
                        <p className="p-p-glass">Lo que nos interesa hacer resaltar de todo esto es lo siguiente:
                        El Sacrificio de Paz (o Sacrificio de Reconciliación con Dios) 
                        perfecto lo hizo Cristo (o más bien, fue Cristo) 
                        en el altar de la Cruz. Resultado: nos reconcilió con Dios.
                        </p>
                        <p className="p-p-glass">PERO a nosotros hoy dia nos toca ofrecer 
                        el sacrificio de gratitud (o el sacrificio en acción de 
                        gracias o en agradecimiento) por esa Reconciliación 
                        (esa Paz con Dios) lograda por Cristo y a la cual 
                        el Padre accedió.</p>
                </motion.div>

                <motion.div className="col" variants={center}>
                    <h2>Puertas</h2>
                    <p className="p-p-glass">Entrad por sus puertas con acción de gracias</p>
                    
                <Quiz
                    pregunta="¿Qué representa esta etapa?"
                    opciones={["Adoración", "Acción de gracias", "Bendición", "Alabanzas"]}
                    correcta="Acción de gracias"
                    next="/atrios"
                    onCorrect={() => setProgreso(2)}
                />
                </motion.div>

                <motion.div className="col" variants={right}>
                    <h3>Clave</h3>
                    <div className="p-p-glass">
                    <h4>Resumen o punto importante.</h4></div>
                    <p className="p-p-glass">Pudiéramos afirmar entonces que la Acción de Gracias:</p>
                    <p className="p-p-glass">a. Constituye el sacrificio espiritual que nos permite
                    responder adecuadamente a la Gracia de Dios manifestada 
                    en Su acceder bondadoso a hacer las paces con nosotros.
                    </p>
                    <p className="p-p-glass">b. En virtud de haber sido una modalidad del sacrificio de
                    paz, constituye un recurso espiritual que permite complementar 
                    en la vida particular de cada creyente la
                    Obra de Reconciliación con Dios efectuada por Cristo.
                    </p>
                    <p className="p-p-glass">c. Constituye también, en cierto modo, un medio de celebrar
                    la continua restauración a la comunion con Dios que el creyente puede experimentar a diario, sobre la
                    base de la Reconciliación efectuada una vez y para siempre mediante el Sacrificio de Paz Perfecto sobre
                    el Altar de la Cruz.</p>
                    <p className="p-p-glass">"dar gracias es la mas pura y simple expresion de fe" el
                    lamento no tiene otro poder mas que el de multiplicar la 
                    tristeza y se enfoca en la necesidad, pero la
                    accion de gracias se enfoca en la fuente de provisión para 
                    esa necesidad". De modo que el creyente hará bien en dar 
                    gracias a Dios "en todo"(1 a Tes. 5:18).</p>
                </motion.div>

            </motion.div>
            </article>
        </div>
        </div>
    );
}