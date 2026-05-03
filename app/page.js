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
    localStorage.setItem("mute", "0");
  };

  return (
    <main className="background">
      {!showInfo && <StageAudio src="/audio/fondo.mp3" />}
      
      <NavBar />

      {showInfo && (
        <div className="modal-overlay">
          <div className="glass-modal">
            <h2>Guía de Inicio</h2>
            <div className="text-left" style={{ textAlign: "left", margin: "20px 0" }}>
                <p><strong>🔊 Audio:</strong> La atmósfera sonora se activará ahora.</p>
                <p><strong>🖱️ Navegación:</strong> Usa el menú izquierdo para las etapas.</p>
                <p><strong>📖 Lectura:</strong> En las etapas (Puertas en adelante), lee primero la columna <strong>izquierda</strong>, luego la <strong>derecha</strong> y finalmente el <strong>centro</strong>.</p>
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