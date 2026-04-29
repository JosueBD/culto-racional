"use client";

import { useEffect } from "react"; 
import { setProgreso, getProgreso } from "@/lib/progreso";
import LessonNav from "@/components/LessonNav";
import ProgressBar from "@/components/ProgressBar"; 
import Quiz from "@/components/Quiz"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import StageAudio from "@/components/StageAudio";
import { motion } from "framer-motion";

export default function LugarSanto() {
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);

        const progresoActual = getProgreso();
        if (progresoActual < 3) {
            router.push("/atrios");
            return;
        }

        setProgreso(3);
    }, [router]);

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
            <div className="stage lugar-santo">
                <ProgressBar />
                <LessonNav />
                <Link href="/" className="btn btn-fixed">← Volver</Link>

                <StageAudio src="/audio/santo.mp3" />

                <article className="reading-container">
                    <motion.div
                        className="threeColumns"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div className="col" variants={left}>
                            <h3>Bendecir</h3>
                            <div className="p-p-glass">
                                <h4>Qué no es bendecir.</h4>
                            </div> 
                            <p>Bendecir a Dios no es darle gracias, 
                            aunque la acción de bendecir a Dios es motivada por el deseo de
                            "recompensar" al Señor por Su bondad y favor hacia nosotros y, 
                            por ende, surge de un corazon agradecido</p>
                            <p>pero esto ultimo tambien se puede decir de la
                            Alabanza y la Adoracion. Bendecir a Dios tampoco es alabarle: 
                            la Alabanza pone de relieve lo que Dios ya es, ha hecho y tiene; 
                            mientras que la bendición apunta a lo que queremos "añadirle"
                            a lo que El ya es, ha hecho y tiene</p>
                            <div className="p-p-glass">
                                <small>(Note nuevamente la identidad individual de 
                                estas tres actividades espirituales en Sal. 100:4; Ap. 7:12 y Lc. 24:53).</small>
                            </div>
                        </motion.div>

                        <motion.div className="col" variants={center}>
                            <h2>Lugar Santo</h2>
                            <p className="p-p-glass">Alabadle, bendecid su Nombre</p>
                            <p>Entonces, ¿qué es bendecir a Dios? Pareciera como si al bendecir 
                            a Dios se tratara de 'añadir aún más' a lo que Él ya es y tiene;</p>
                            <div>pero ¡eso es imposible!: <span className="word"> Él lo es todo y lo tiene todo.</span></div>
                            <p className="p-p-glass">Por otro lado, hay un elemento divino, 
                            presente en toda expresion de bendicion (y tambien de maldicion) 
                            biblica: nos referimos a la 'fe'.</p>
                            <p>¿Qué es la fe? Es la firme seguridad de que algo que queremos va a suceder..
                            "(Heb. 11:1; V.Living Bible). Notemos ahora lo que nos dice la Escritura:</p>
                            <p className="p-p-glass">"Por la fe bendijo Isaac a Jacob y a Esau respecto a 
                            cosas venideras"(Heb. 11:20)</p>
                            <p className="p-p-glass">Es decir: Mas adelante, la fe convirtió el deseo
                            en una bendición.</p>
                            
                            <Quiz
                                pregunta="¿Qué representa esta etapa?"
                                opciones={["Adoración", "Acción de gracias", "Bendición", "Alabanzas"]}
                                correcta="Bendición"
                                next="/lugar-santisimo"
                                onCorrect={() => setProgreso(4)}
                            />
                        </motion.div>

                        <motion.div className="col" variants={right}>
                            <h3>Bendecir a Dios</h3>
                            <p>Es declarar en fe el deseo profundo de que Dios reciba 
                            especificamente algo que Él Merece recibir de Sus criaturas, 
                            eternamente o en determinados momentos y lugar'.</p>
                            <div className="p-p-glass">
                                <p>Observe estos siete patrones:</p>
                            </div>

                            <div className="col-inner-list">
                                <ol>
                                    <li>Bendito tu Nombre para siempre.</li>
                                    <li>que tu proposito sea cumplido.</li>
                                    <li>Que tu Nombre sea glorificado.</li>
                                    <li>Que todos tiemblen bajo tu presencia.</li>
                                    <li>Que tu Reino sea extendido.</li>
                                    <li>Que tu Palabra sea obedecida.</li>
                                    <li>Que todos te reconozcan como lo que eres, y Tú recibas:</li>
                                    <ul>
                                        <li>La Magnificencia</li>
                                        <li>el Poder</li>
                                        <li>La Gloria</li>
                                        <li>La Victoria</li>
                                        <li>El Honor</li>
                                        <li>El Reino</li>
                                        <li>La Suprema Excelencia</li>
                                    </ul>
                                </ol>
                            </div>
                        </motion.div>
                    </motion.div>
                </article>
            </div>
        </div>
    );
}