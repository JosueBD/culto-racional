"use client";
import { useState, useEffect } from "react";
import { useAudio } from "@/context/AudioContext";
import NavBar from "@/components/NavBar";
import StageAudio from "@/components/StageAudio";
import { sincronizarProgreso, getUserProgress } from "@/lib/progreso";
import AuthModal from "@/components/AuthModal";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [showInfo, setShowInfo] = useState(true);
  const [isSyncing, setIsSyncing] = useState(true);
  const { setEnabled } = useAudio();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [progresoLocal, setProgresoLocal] = useState(0);

  useEffect(() => {
    async function inicializarTodo() {
      try {
        // 1. Obtener usuario
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        setUser(currentUser);
        
        // 2. Sincronizar (si hay usuario trae de nube, si no usa local)
        const nivelSincronizado = await sincronizarProgreso();
        setProgresoLocal(nivelSincronizado);
      } catch (error) {
        console.error("Error al inicializar:", error);
      } finally {
        setIsSyncing(false);
      }
    }
    
    inicializarTodo();
  }, []);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleStart = () => {
    setShowInfo(false);
    setEnabled(true); 
    localStorage.setItem("mute", "0");
  };

  if (isSyncing) {
    return (
      <div className="background" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        <p>Sincronizando tu camino...</p>
      </div>
    );
  }

  const etapaActual = getUserProgress();

  return (
    <main className="background">
      {!showInfo && <StageAudio src="/audio/fondo.mp3" />}
      
      {!showInfo && !isAuthOpen && <NavBar />}

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Interfaz principal a la derecha */}
      {!showInfo && (
        <div 
          className="content-overlay"
          style={{
            padding: "40px 10px",
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: "0.5px",
            right: "50px",
            zIndex: 20,
            width: "250px",
          }}
        >
          <div className="glass-card">
            <h2 style={{ color: "#ad8306", fontSize: "1.2rem", marginBottom: "15px" }}>
              {user ? `Bienvenido, ${user.email.split('@')[0]}` : "Bienvenido(a)"}
            </h2>
            
            <div style={{ borderTop: "1px solid rgba(212, 175, 55, 0.2)", paddingTop: "15px" }}>
              <span style={{ fontSize: "0.7rem", letterSpacing: "1px", opacity: 0.8 }}>ESTADO ACTUAL</span>
              <h3 style={{ textTransform: "uppercase", color: "white", marginTop: "5px", fontSize: "1.5rem" }}>
                {etapaActual === "portada" ? "INICIO" : etapaActual}
              </h3>
            </div>

            <button 
              onClick={() => setIsAuthOpen(true)}
              style={{ 
                background: 'none', 
                border: '1px solid #ad8306', 
                color: 'white', 
                padding: '8px 0', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                width: '100%',
                fontSize: '0.7rem',
                marginTop: '10px',
                transition: '0.3s'
              }}
            >
              {user ? "GESTIONAR CUENTA" : "IDENTIFICARSE / REGISTRARSE"}
            </button>

            <p style={{ fontSize: "0.7rem", opacity: 0.5, marginTop: "15px", fontStyle: "italic" }}>
              {user ? "✦ Nube Sincronizada" : "✧ Modo Invitado"}
            </p>
          </div>
        </div>
      )}

      {/* Modal de Guía */}
      {showInfo && (
        <div className="modal-overlay">
          <div className="glass-modal">
            <h2>Guía de Inicio</h2>
            <div className="text-left" style={{ textAlign: "left", margin: "20px 0" }}>
                <p><strong>🙌 Bienvenida A:</strong> Culto Racional</p>
                <p><strong>🔐 Registro:</strong> Registrese.</p>
                <p><strong>🔑 Autenticarse:</strong> Inicie sesión.</p>
                <p><strong>🔓 Gestionar cuenta:</strong> Click.</p>
                <p><strong>⏱ Sincronizar programa:</strong> sincronice, Resetée, o Cierre.</p>
                <p><strong>🔊 Audio:</strong> Se activará al empezar.</p>
                <p><strong>🖱️ Navegación:</strong> Use el menú izquierdo, cuando haya sido desbloqueado. Cada etapa
                se irá desbloqueando a medida que avance.En el movil el menú queda en el centro.</p>
                <p><strong>📖 Lectura:</strong> Orden: izquierda, derecha y centro.</p>
                <p><strong>📱 Interacción:</strong> Toca para explorar.</p>
            </div>
            <button onClick={handleStart} className="btn-entrar">
              Empezar Experiencia
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .glass-card {
          background: rgba(20, 15, 5, 0.6); 
          border: 1px solid rgba(212, 175, 55, 0.3); 
          backdrop-filter: blur(10px); 
          -webkit-backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5); 
          color: #e0e0e0; 
          line-height: 1.4;
        }
        .content-overlay {
          z-index: 120;
        }
          
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
}
      `}</style>
    </main>
  );
}