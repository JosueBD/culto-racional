"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ActualizarPasswordPage() {
    const [nuevaPassword, setNuevaPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.auth.updateUser({
            password: nuevaPassword,
        });

        if (error) {
            setMensaje("Error: " + error.message);
        } else {
            setMensaje("¡Contraseña actualizada con éxito!");
            // Redirigir al inicio después de 2 segundos
            setTimeout(() => router.push("/"), 2000);
        }
        setLoading(false);
    };

    return (
        <div className="auth-overlay">
            <div className="glass-card auth-card">
                <h2>Nueva Contraseña</h2>
                <p style={{ fontSize: "0.9rem", marginBottom: "20px", opacity: 0.7 }}>
                    Ingresa tu nueva clave de acceso
                </p>
                
                <form onSubmit={handleUpdate}>
                    <input 
                        type="password" 
                        placeholder="Escribe la nueva contraseña" 
                        value={nuevaPassword} 
                        onChange={(e) => setNuevaPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit" disabled={loading} className="btn-entrar">
                        {loading ? "ACTUALIZANDO..." : "CAMBIAR CONTRASEÑA"}
                    </button>
                </form>

                {mensaje && <p style={{ marginTop: "20px", color: mensaje.includes("Error") ? "#ff4d4d" : "#ad8306" }}>{mensaje}</p>}
            </div>

            <style jsx>{`
                .auth-overlay {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 9999;
                }
                .auth-card {
                    width: 350px; padding: 40px; text-align: center;
                    background: rgba(20, 15, 5, 0.9) !important;
                    border: 1px solid rgba(212, 175, 55, 0.4) !important;
                    border-radius: 20px; color: white;
                }
                input {
                    width: 100%; padding: 12px; margin: 10px 0; border-radius: 8px;
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); color: white;
                }
                .btn-entrar {
                    background: #ad8306; border: none; color: white; padding: 12px; width: 100%;
                    border-radius: 8px; cursor: pointer; font-weight: bold; margin-top: 10px;
                }
                .btn-entrar:disabled { opacity: 0.5; cursor: not-allowed; }
            `}</style>
        </div>
    );
}