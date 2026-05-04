"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
    // Empieza en false para que no intente sonar antes del clic
    const [enabled, setEnabled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("mute");
        if (saved === "0") setEnabled(true);
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

export function useAudio() { return useContext(AudioContext); }