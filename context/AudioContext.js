"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
    // 1. Empezamos SIEMPRE en true para coincidir con el servidor
    const [enabled, setEnabled] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // 2. Solo cuando el componente monta en el navegador, revisamos la preferencia
        const saved = localStorage.getItem("mute");
        if (saved === "1") {
            setEnabled(false);
        }
        setIsLoaded(true);
    }, []);

    const playEffect = (src) => {
        if (!enabled) return;
        const audio = new Audio(src);
        audio.volume = 0.4;
        audio.play().catch(() => {});
    };

    return (
        <AudioContext.Provider value={{ enabled, setEnabled, playEffect, isLoaded }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    return useContext(AudioContext);
}