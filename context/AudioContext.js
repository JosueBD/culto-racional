"use client";
import { createContext, useContext, useState, useRef } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [enabled, setEnabled] = useState(() => {
        // Solo ejecutamos esto en el cliente para evitar errores de Hydration en Next.js
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("mute");
            // Si es '1', significa que el usuario lo muteó manualmente antes
            return saved === "1" ? false : true; 
        }
        return true; // Estado por defecto
    });

    return (
        <AudioContext.Provider value={{ enabled, setEnabled, playEffect }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    return useContext(AudioContext);
}