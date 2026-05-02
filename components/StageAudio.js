"use client";
import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

export default function StageAudio({ src }) {
    const { enabled } = useAudio();
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
        }

        const audio = new Audio(src);
        audio.volume = 0.5;
        audio.loop = false;

        audioRef.current = audio;

        if (enabled) {
            audio.play().catch(() => {});
        }

        return () => {
            audio.pause();
            audio.src = "";
        };
    }, [src]); // solo cambia por escena

    useEffect(() => {
        if (!audioRef.current) return;

        if (enabled && audioRef.current.paused) {
            audioRef.current.play().catch(() => {});
        }

        if (!enabled) {
            audioRef.current.pause();
        }
    }, [enabled]);

    return null;
}