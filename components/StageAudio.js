"use client";
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext"; 

export default function StageAudio({ src }) {
    const { enabled } = useAudio();
    const audioRef = useRef(null);

    useEffect(() => {
        // Crear el audio solo si no existe o si cambia el src
        const audio = new Audio(src);
        audio.loop = true; // Si es música de fondo, suele ir en loop
        audio.volume = 0.5;
        audioRef.current = audio;

        if (enabled) {
            // Este play() fallará al cargar la página (por políticas del navegador)
            // pero se activará en cuanto el usuario haga clic en cualquier botón (como "Introducción")
            audio.play().catch(() => console.log("Esperando interacción para sonar..."));
        }

        return () => {
            audio.pause();
            audio.src = "";
            audioRef.current = null;
        };
    }, [src]);

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