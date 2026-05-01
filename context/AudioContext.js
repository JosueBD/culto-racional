"use client";
import { createContext, useContext, useState, useRef } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [enabled, setEnabled] = useState(false);

    // Función global para efectos de sonido (correct/wrong)
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