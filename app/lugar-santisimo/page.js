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

export default function LugarSantisimo() {
    const router = useRouter();
    const [final, setFinal] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const progresoActual = getProgreso();
        if (progresoActual < 4) {
            router.push("/lugar-santo");
            return;
        }

        setProgreso(4);
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
        <div className="stage lugar-santisimo">
            <ProgressBar />
            <LessonNav />
            <Link href="/" className="btn btn-fixed">← Volver</Link>
            <StageAudio src="/audio/santisimo.mp3" />

            <article className="reading-container">
            {!final ? (
            <motion.div
                className="threeColumns"
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div className="col" variants={left}>
                    <h3>Adoración</h3>
                    <p className="p-p-glass">Última etapa del recorrido.</p>
                    <p>
                        La Adoración es un tributo altamente disputado en el mundo espiritual;
                    </p>
                    <p>Son muchos los seres espirituales que han pretendido recibir adoración</p>
                    <div className="p-p-glass">buscando de esta manera usurpar el derecho y autoinvestirse 
                    <span className="word"> la dignidad del Dios Altísimo.</span></div>
                    <p>La consideración Divina de este grado de osadia ha sido tal que 
                    el Todopoderoso ha entendido pertinente reclamar Su inalienable
                    derecho en virtud de Su posición como Unico y Verdadero Dios.
                    </p>
                    <p>
                    Todo esto lógicamente nos hace pensar que la Adoración tiene necesariamente que constituir un
                    elemento litúrgico de insospechado valor y, por considerarnos adoradores de Dios, constituye un
                    verdadero reto para nuestro intelecto y una real necesidad para nuestra sagrada profesión alcanzar a
                    tener al menos una idea de cuánto puede significar para Él lo que a diario le estamos tributando.
                    </p>
                    <div>La Biblia nos facilita una orientación correcta para la Adoracion, 
                    proyectándola hacia el Divino Creador y asegurándonos que llegará el hermoso dia en que 
                    "toda la tierra <span className="word">(LE)</span> adorará"(Sal. 66:4).</div>
                    <p className="p-p-glass">Pudieramos definir la adoración, como tributo Privado de Dios, 
                    como la manifestación suprema de lealtad y sumisión; pues fue realmento lo que Dios le pidió al 
                    pueblo hebreo (Deut. 6.13.), lo que los magos del oriente le manifestaron al Niño, lo que Juan y 
                    otros hicieron: 
                    </p>
                    <p>
                    «Y predicaba, diciendo: Viene tras mí el que es más poderoso
                    que yo, a quien no soy digno de desatar encorvado la correa de
                    su calzado».
                    </p>
                    <p className="p-p-glass">
                    Juan estaba diciendo: No soy digno de postrarme y adorarle.
                    </p>
                    <div className="p-p-glass"><h4>Postrado, rogó</h4></div>
                    <p>22Y vino uno de los principales de la sinagoga, llamado Jairo; 
                    y luego que le vio, se postró a sus pies,</p> 
                    <p>23y le rogaba mucho, diciendo: Mi hija está agonizando; 
                    ven y pon las manos sobre ella para que sea salva, y vivirá. Mar.5.22-23</p>
                </motion.div>

                <motion.div className="col" variants={center}>
                    <h2>Lugar Santísimo</h2>
                    <p className="p-p-glass">
                    Y he aquí, Jesús les salió al encuentro, diciendo: ¡Salve! Y
                    ellas, acercándose, abrazaron sus pies, y le adoraron.
                    </p>
                <ul className="ul-p-p-glass">
                    <li><span className="word">Postrado</span></li>
                    <li><span className="word">Corazón</span> entregado</li>
                    <li>En algunos momentos <span className="word">Rogando</span></li>
                    <li>En otros en <span className="word">Silencio</span></li>
                    <li><span className="word">Esperando</span> Respuesta</li>
                </ul>

                <ul className="ul-p-p-glass"><h2>La Adoración: Es la entrega, es el murmullo, 
                es la quietud, es la espera, es la manifestación de Dios para hablarnos.</h2></ul>
                    

                    <Quiz
                    pregunta="¿Qué representa esta etapa?"
                    opciones={[
                        "Adoración",
                        "Acción de gracias",
                        "Bendición",
                        "Alabanzas",
                    ]}
                    correcta="Adoración"
                    next="/final"
                    />

                </motion.div>

                <motion.div className="col" variants={right}>
                    <h3>Acción y silencio</h3>
                    <p className="p-p-glass">La adoración es el punto final.</p>
                    <p className="p-p-glass">Entonces una mujer de la ciudad, que era pecadora, 
                    al saber que Jesús estaba a la mesa en casa del fariseo, 
                    trajo un frasco de alabastro con perfume;</p>
                    <p className="p-p-glass">
                    y estando detrás de Él a sus pies, llorando, 
                    comenzó a regar con lágrimas sus pies, y los enjugaba con sus cabellos; 
                    y besaba sus pies, y los ungía con el perfume. Lc.7.37-38</p>
                    <p>25Pero una mujer que desde hacía doce años padecía de flujo de sangre,</p> 
                    <p>26y había sufrido mucho de muchos médicos, y gastado todo lo que tenía, 
                    y nada había aprovechado, antes le iba peor,</p> 
                    <div>27cuando <span className="word">oyó</span> hablar de Jesús, vino por detrás entre la multitud, 
                    y tocó su manto. Mar.5.25-27</div>
                </motion.div>
            </motion.div>
            ) : (
                <div></div>
            )}
            </article>
        </div>
        </div>
    );
}