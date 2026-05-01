"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [enabled, setEnabled] = useState(true); // Siempre true al inicio

    useEffect(() => {
        // Esto solo corre en el navegador, Vercel lo ignorará en el build
        const saved = localStorage.getItem("mute");
        if (saved === "1") {
            setEnabled(false);
        }
    }, []);

    // Definimos playEffect para que no de error de referencia
    const playEffect = (src) => {
        if (!enabled) return;
        const audio = new Audio(src);
        audio.volume = 0.4;
        audio.play().catch(() => {});
    };

    return (
        <AudioContext.Provider value={{ enabled, setEnabled, playEffect }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    return useContext(AudioContext);
}