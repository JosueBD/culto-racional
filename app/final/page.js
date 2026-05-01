"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { setProgreso, getProgreso, resetProgreso } from "@/lib/progreso";
import StageAudio from "@/components/StageAudio";
import ProgressBar from "@/components/ProgressBar";

export default function Final() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const progresoActual = getProgreso();

        if (progresoActual < 4) {
            router.replace("/lugar-santisimo");
            return;
        }

        setProgreso(5);
    }, [router]);

    const handleReset = () => {
        resetProgreso(); 
        router.push("/"); 
    };

    if (!isMounted) {
        return <div className="stage final" style={{ background: 'black' }} />;
    }

    return (
        <div className="stage final">
            <ProgressBar />
            <StageAudio src="/audio/final.mp3" />

            <div className="reading-container">
                <div className="threeColumns">

                    {/* COLUMNA IZQUIERDA */}
                    <motion.div
                        className="col"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="lead-p-glass">Conclusión Puertas/Atrios</h3>
                        <h4 className="lead-p-glass">Puertas</h4>
                        <p>Entramos por Sus puertas con Acción de Gracias. 
                        Nuestros primeros cánticos y ofrendas al entrar deben
                        ser aquellos que expresan nuestra gratitud o 
                        acción de gracias de corazón al Señor..</p>
                        <h4 className="lead-p-glass">Atrios</h4>
                        <p>Una vez que atravesamos 'sus puertas', 
                        nos encontramos en 'sus atrios'</p>
                        <p>Para entonces no estaremos preparados a 
                        precipitarnos dentro del Lugar Santisimo en la más 
                        intima y solemne actitud de adoración, 
                        sino que antes debemos emplear tiempo en 'sus atrios.' 
                        Se nos instruye que en 'sus atrios' debemos alabar. 
                        A medida que pasa el tiempo en los atrios de alabanza', 
                        comenzamos a sentir en nuestro espíritu una atracción a
                        acercarnos aún más a Dios. Lentamente somos dominados 
                        por lo que ÉL ES.</p>
                    </motion.div>

                    {/* COLUMNA CENTRO */}
                    <motion.div
                        className="col"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h1 className="lead-p-glass">Has llegado al Final</h1>
                            
                        <div> <h3 className="lead-p-glass">Quiero agradecer:</h3></div>
                        <p>A <span className="word">Dios Padre</span> Celestial.</p>
                        <p>A <span className="word">JesuCristo</span> Nuestro Redentor.</p>
                        <p>Al <span className="word">Espíritu Santo</span> por su Consuelo y guia.</p>
                        <p>A mi Amada esposa Oleydis de Borges por estar a mi lado orando, apoyando y aconsejando.</p>
                        <p>A mis hermanos Mario su esposa Margarita y Dámaris Borges por sus oraciones, consejos y ayudas.</p>
                        <p>A mis hijos Peter Josué su esposa Karen y mi hija Noemí Borges por sus oraciones.</p>
                        <p>A la hermana Yudmila Dieguez Cuellar(gracias mi hermana) por prestar los folletos para sacar extractos de:</p>
                        <p className="lead-p-glass">Teología del ministerio de la música (I) y (II) DEMAD 
                        (Departamento de música Iglesia Evangélica Pentecostal "Asambleas de Dios" 2009)</p>
                        <p>Si deseas el folleto en PDF contacta a: josuepjnv@gmail.com</p>
                        <div><h3 className="lead-p-glass">Dios te siga guiando a toda verdad. Juan 8.32: 
                        y conoceréis la verdad, y la verdad os hará libres.</h3></div>
                            

                        {/* Aquí usamos la función handleReset */}
                        <button className="btn" onClick={handleReset}>
                            Reiniciar recorrido
                        </button>
                    </motion.div>

                    {/* COLUMNA DERECHA */}
                    <motion.div
                        className="col"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="lead-p-glass">Conclusión Bendición/Adoración</h3>
                        <h4 className="lead-p-glass">Bendición</h4>
                        <p>Comenzamos a entrar en una forma superior de alabanza, 
                        a medida que nos introducimos en 'sus cámaras', en el
                        Lugar Santo. Repentinamente, dejamos de danzar o aplaudir. 
                        Nos volvemos tan conscientes de la Presencia de Dios que 
                        nuestras manos comienzan a levantarse a Él en profunda reverencia.</p>
                        <h4 className="lead-p-glass">Adoración</h4>
                        <p>Nos encontramos ya en el Lugar Santisimo, en lo intimo de la Presencia de Dios. 
                        Una vez que hayamos logrado llegar al Lugar Santísimo, no debemos retirarnos apresuradamente 
                        de Su Presencia, sino permanecer por un tiempo en ella: mientras lo hacemos, 
                        nuestras vidas serán cambiadas, renovadas.</p>
                        <p>Nos hallamos tan cerca de Él que en nuestro espiritu queda una impresión indeleble de Su 
                        carácter. Mientras más tiempo invertimos entregados en Su Presencia en total intimidad con Él, 
                        más conformados a Su imagen sera nuestro espiritu, más transformadas en la imagen de Su 
                        Hijo Jesús serán nuestras vidas, más semejantes a Él llegaremos a ser. Es aqui donde se 
                        experimenta el más alto nivel de comunión. Es aqui donde podemos oir Su voz claramente.</p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}