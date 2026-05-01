"use client";
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext"; 

export default function StageAudio({ src }) {
    const { enabled } = useAudio();
    const audioRef = useRef(null);

    useEffect(() => {
        // Limpia cualquier audio anterior
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
            audioRef.current = null;
        }

        const audio = new Audio(src);
        audio.onended = () => {
        // No hacer nada → evita reinicio automático
        };
        audio.volume = 0.5;
        audioRef.current = audio;

        if (enabled) {
            audio.play().catch(() => {});
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = "";
            }
        };
    }, [src]); // solo src

    // Toggle play/pause cuando cambia enabled
    useEffect(() => {
        if (!audioRef.current) return;
        enabled ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    }, [enabled]);

    return null;
}