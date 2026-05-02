"use client";
import { createContext, useContext, useState } from "react";

const AudioContext = createContext(null);

export function AudioProvider({ children }) {
    const [enabled, setEnabled] = useState(() => {
        if (typeof window === "undefined") return true;
        const saved = localStorage.getItem("mute");
        if (saved === null) return true; // arranca sin mute
        return saved !== "1";
    });

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