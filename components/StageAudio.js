"use client";
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

export default function StageAudio({ src }) {
    const { enabled, setEnabled } = useAudio();
    const audioRef = useRef(null);
    const playedOnceRef = useRef(false);

    useEffect(() => {
        if (playedOnceRef.current) return; // no repetir nunca

        const audio = new Audio(src);
        audio.volume = 0.5;
        audio.loop = false;

        audio.onended = () => {
            playedOnceRef.current = true;
            setEnabled(false); // se apaga al terminar
        };

        audioRef.current = audio;

        if (enabled) {
            playedOnceRef.current = true;
            audio.play().catch(() => {});
        }

        return () => {
            audio.pause();
            audio.src = "";
        };
    }, [src, enabled, setEnabled]);

    return null;
}