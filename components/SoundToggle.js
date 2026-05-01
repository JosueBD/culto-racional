"use client";
import { useAudio } from "@/context/AudioContext"; 

export default function SoundToggle() {
    const { enabled, setEnabled, isLoaded } = useAudio();

    if (!isLoaded) return null; // No mostrar nada hasta que el cliente cargue el localStorage

    const handleToggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        localStorage.setItem("mute", newState ? "0" : "1");
    };

    return (
        <button onClick={handleToggle} className="btn-audio">
            {enabled ? "🔊" : "🔇"}
        </button>
    );
}