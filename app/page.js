"use client";
import { useState } from "react";
import { useAudio } from "@/context/AudioContext";
import NavBar from "@/components/NavBar";
import StageAudio from "@/components/StageAudio";

export default function Home() {
  const [showInfo, setShowInfo] = useState(true);
  const { setEnabled } = useAudio();

  const handleStart = () => {
    setShowInfo(false);
    setEnabled(true); 
  };

  return (
    <main className="background">
      {/* CAMBIO AQUÍ: Solo cargamos el componente de audio si el cartel se cerró */}
      {!showInfo && <StageAudio src="/audio/fondo.mp3" />}
      
      <NavBar />

      {showInfo && (
        <div className="modal-overlay">
          <div className="glass-modal">
            <h2>Guía de Inicio</h2>
            <div className="text-left" style={{ textAlign: "left", margin: "20px 0" }}>
                <p><strong>🔊 Audio:</strong> La atmósfera sonora se activará ahora.</p>
                <p><strong>🖱️ Navegación:</strong> Usa el menú izquierdo para las etapas.</p>
                <p><strong>📱 Interacción:</strong> Toca los elementos para explorar.</p>
            </div>
            <button onClick={handleStart} className="btn-entrar">
              EMPEZAR EXPERIENCIA
            </button>
          </div>
        </div>
      )}
    </main>
  );
}