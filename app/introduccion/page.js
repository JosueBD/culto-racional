"use client";

import { useEffect } from "react";
import { setProgreso, getProgreso } from "@/lib/progreso";
import LessonNav from "@/components/LessonNav";
import ProgressBar from "@/components/ProgressBar"; 
import Link from "next/link";
import { useRouter } from "next/navigation";
import StageAudio from "@/components/StageAudio";

export default function Introduccion() {
    const router = useRouter();

    useEffect(() => {
        const progreso = getProgreso();

        if (progreso === 0) {
            setProgreso(0);
        }
    }, []);

    
    const manejarClick = () => {
        setProgreso(1);
        router.push("/puertas"); 
    };

    return (
        <div className="stage introduccion">
            <ProgressBar />
            <LessonNav />
            <Link href="/" className="btn btn-fixed">← Volver</Link>
            <StageAudio src="/audio/intro.mp3" />

            <article className="reading-container">
                <h1 className="lead-p-glass">Introducción</h1>

            <p className="lead p-glass">
                Bienvenidos al estudio del Culto Racional. Este recorrido no es simbólico,
                sino progresivo: cada etapa tiene un orden, un propósito y una función específica.
            </p>

            <section>
                <h2 className="lead-p-glass">Fundamento</h2>

            <p className="p-glass">
            En aquel día yo levantaré el tabernáculo caído de David, 
            y cerraré sus portillos y levantaré sus ruinas, 
            y lo edificaré como en el tiempo pasado; 
            para que aquellos sobre los cuales es invocado mi nombre 
            posean el resto de Edom, y a todas las naciones, dice Jehová que hace esto.
            Amos 9.11-12
            </p>

            <p className="p-glass">
            Después de esto volveré Y reedificaré el tabernáculo de David, 
            que está caído; Y repararé sus ruinas, Y lo volveré a levantar, 
            Para que el resto de los hombres busque al Señor, 
            Y todos los gentiles, sobre los cuales es invocado mi nombre, 
            Dice el Señor, que hace conocer todo esto desde tiempos antiguos.
            Hechos 15.16-18
            </p>
            </section>

            <section>
                <h2 className="lead-p-glass">Principio clave</h2>

            <p className="p-glass">
            La adoración no es equivalente a todas las expresiones del culto.
            Existe un orden que no debe mezclarse. Por consiguiente, el salmo
            100.4 declara: Entrad por sus puertas con acción de gracias,
            Por sus atrios con alabanza;
            Alabadle, bendecid su nombre. (ojo: no es religiosidad)
            es establecer el principio Bíblico de que Cristo nos legó 
            a través de su sacrificio vivo, santo, y agradable, 
            de romper el obstáculo que había del velo, 
            y rasgarlo, para poder penetrar a la 
            presencia de Dios(Lugar Santísimo)            
            </p>

        <div class="reading">
            <blockquote>
            <ul>                
                    <p>Por tanto, no se debe confundir lo que Dios nos 
                    dió para este tiempo, no debemos mezclar
                    este principio Bíblico:</p>
                    <li>Acción de gracias no es adoración</li>
                    <li>Alabanza no es adoración</li>
                    <li>Bendición no es adoración</li>
                    <li>La adoración es algo más profundo y que no se debe mezclar</li>                
            </ul>
            </blockquote>
        </div>
            </section>

            <section>
                <h2 className="lead-p-glass">Orden espiritual</h2>

            <p className="p-glass">
            Cada elemento del culto tiene su momento. Alterar el orden produce
            confusión y pérdida de sentido.
            </p>
        <div class="reading">
                <blockquote>
                    <p className="p-glass">
                    El avance correcto implica transición:
                    </p>
                    <p className="p-glass">
                    puertas → atrios → lugar santo → lugar santísimo.
                    </p>
                    <p className="p-glass">                        
                    ¿Por qué no empezar el recorrido
                    </p>
                    <p className="p-glass">
                    que nos diseña la palabra de Dios,
                    </p>
                    <p className="p-glass">
                    que es la espada del Espíritu?
                    </p>
                </blockquote>
        </div>            
            </section>

            <div className="button-container" style={{ marginTop: '2.5rem', 
                display: 'flex',
                justifyContent: 'center'
            }}>
                    <button className="btn" onClick={manejarClick}>
                        Comenzar recorrido
                    </button>
            </div>

            </article>
        </div>
    );
}