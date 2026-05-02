"use client";
import { useAudio } from "@/context/AudioContext";

export default function SoundToggle() {
    const { enabled, setEnabled } = useAudio();

    const handleToggle = () => {
        const newState = !enabled;
        setEnabled(newState);
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
                fontSize: "20px"
            }}
        >
            {enabled ? "🔊" : "🔇"}
        </button>
    );
}