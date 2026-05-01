"use client";
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext"; 

export default function StageAudio({ src }) {
    const { enabled } = useAudio();
    const audioRef = useRef(null);

    useEffect(() => {
        // Solo creamos el audio en el cliente
        const audio = new Audio(src);
        audio.loop = true;
        audio.volume = 0.5;
        audioRef.current = audio;

        if (enabled) {
            audio.play().catch(() => {
                // El navegador bloquea el autoplay, es normal.
            });
        }

        return () => {
            audio.pause();
            audio.src = "";
            audioRef.current = null;
        };
    }, [src]); // Quitamos enabled de aquí para que no se reinicie el archivo al mutear

    useEffect(() => {
        if (!audioRef.current) return;
        
        if (enabled) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
        }
    }, [enabled]);

    return null;
}