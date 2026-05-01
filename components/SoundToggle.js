"use client";
import { useAudio } from "@/context/AudioContext"; 

export default function SoundToggle() {
    const { enabled, setEnabled } = useAudio();

    const handleToggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        // Guardamos '0' para sonido activado, '1' para muteado
        localStorage.setItem("mute", newState ? "0" : "1");
    };

    return (
        <button
            onClick={handleToggle} 
            className="btn"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                zIndex: 1000,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                padding: "0",
                fontSize: "24px", // Un poquito más grande para que se vea bien
                background: "rgba(255, 255, 255, 0.2)", // Estilo cristal para que combine con tu web
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                cursor: "pointer"
            }}
        >
            {enabled ? "🔊" : "🔇"}
        </button>
    );
}