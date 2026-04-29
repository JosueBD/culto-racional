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

export default function Atrios() {
    const router = useRouter();
    const [ok, setOk] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const progresoActual = getProgreso();
        if (progresoActual < 2) {
            router.push("/puertas");
            return;
        }

        setProgreso(2);
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
        <div className="stage atrio">
            <ProgressBar />
            <LessonNav />
            <Link href="/" className="btn btn-fixed">← Volver</Link>
            <StageAudio src="/audio/atrios.mp3" />

            <article className="reading-container">

            <motion.div
                className="threeColumns"
                variants={container}
                initial="hidden"
                animate="show"
            >

                <motion.div className="col" variants={left}>
                    <h3>Alabanza</h3>
                    <p className="p-p-glass">"La Alabanza es un mandamiento universal".</p>
                    <p> 
                    Si leemos analiticamente el Salmo 148 nos
                    daremos cuenta de la veracidad de esta afirmación:</p>
                    <p>"En el v. 1 la forma verbal 'Alabad'(heb, jalelúu) 
                    corresponde al Modo Imperativo del verbo hebreo, que implica' una orden, 
                    un mandato', la cual es extendida primeramente a la Creación</p>
                    <div className="p-p-glass">
                    <h4>Tercer Cielo</h4></div>                    
                    <p>"Alabad a Jehová desde los Cielos; alabadle en las alturas.
                    Alabadle, vosotros todos sus ingeles; alabadle vosotros todos sus ejércitos".</p>
                    <div className="p-p-glass">
                    <h4>Segundo Cielo</h4></div>
                    <p>"Alabadle, sol y luna; alabadle, vosotros todas lucientes estrellas. 
                    Alabadle, cielos de los cielos".</p>
                    <div className="p-p-glass">
                    <h4>sigue al Primer Cielo, a los terrenales, y termina el Salmo de esta manera:</h4></div>
                <div class="reading">
                    <blockquote>El ha exaltado el poderío de su pueblo; Alábenle todos sus santos, 
                    los hijos de Israel, El pueblo a él cercano. Aleluya.</blockquote>
                </div>
                </motion.div>

                <motion.div className="col" variants={center}>
                    <h2>Atrios</h2>
                    <p className="p-p-glass">Por sus atrios con alabanzas</p>
                    <p>Dios ordena alabarle no sólo porque a Él le pertenece nuestra Alabanza 
                    y le gusta nuestra Alabanza,</p>
                    <p>sino porque nos conviene Alabarle.</p>
                    <h4><div className="p-p-glass">Alabarle trae sobre nosotros:</div></h4>
                <ul>
                    <p className="p-p-glass">
                    <li>Manto de alegría</li>
                    <li>Fortaleza en derredor nuestro</li>
                    <li>Prepara el camino de nuestra liberación</li>
                    </p>
                </ul>

                <Quiz
                    pregunta="¿Qué representa esta etapa?"
                    opciones={["Adoración", "Acción de gracias", "Bendición", "Alabanzas"]}
                    correcta="Alabanzas"
                    next="/lugar-santo"
                    onCorrect={() => setProgreso(3)}
                />
                </motion.div>

                <motion.div className="col" variants={right}>
                    <h3>Punto Clave</h3>
                    <h4>Qué es Alabanza</h4>
                <ul>
                    <p className="p-p-glass">
                        <li>Exaltación</li>
                        <li>Reconocimiento</li>
                        <li>Elogio</li>
                        <li>Recomendación</li>
                    </p>
                </ul>
                    <h4>Ejemplo</h4>
                    <li>Porque ¿quién es Dios sino sólo Jehová?
                    ¿Y qué roca hay fuera de nuestro Dios?(exaltacion) sal18.31</li>
                    <li> Abres tu mano, Y colmas de bendición a todo ser viviente. (reconocimiento)sal145.16</li>
                    <li>Te alabaré; porque formidables, maravillosas son tus obras;(elogio)"sal139.14</li>
                    <li>Gustad, y ved que es bueno Jehová; Dichoso el hombre que confía en él.(recomendación)sal34.8</li>
                </motion.div>

            </motion.div>
            </article>
        </div>
</div>
    );
}