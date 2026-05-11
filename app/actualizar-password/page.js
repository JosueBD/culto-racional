"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ActualizarPasswordPage() {
    const [nuevaPassword, setNuevaPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            console.log("SESSION:", data.session);
        });
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMensaje("");

        try {
            const { error } = await supabase.auth.updateUser({
                password: nuevaPassword,
            });

            if (error) {
                setMensaje("Error: " + error.message);
            } else {
                setMensaje("¡Contraseña actualizada con éxito! Redirigiendo...");
                setTimeout(() => router.push("/"), 2000);
            }
        } catch (err) {
            setMensaje("Ocurrió un error inesperado.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-overlay">
            <div className="glass-card auth-card">
                <h2>Restablecer Contraseña</h2>
                <p style={{ fontSize: "0.85rem", marginBottom: "20px", opacity: 0.7 }}>
                    Ingresa tu nueva clave para el proyecto de JosueBD
                </p>
                
                <form onSubmit={handleUpdate}>
                    <input 
                        type="password" 
                        placeholder="Nueva contraseña" 
                        value={nuevaPassword} 
                        onChange={(e) => setNuevaPassword(e.target.value)} 
                        required 
                        minLength={6}
                    />
                    <button type="submit" disabled={loading} className="btn-entrar">
                        {loading ? "ACTUALIZANDO..." : "GUARDAR CAMBIOS"}
                    </button>
                </form>

                {mensaje && (
                    <p style={{ 
                        marginTop: "20px", 
                        fontSize: "0.9rem",
                        color: mensaje.includes("Error") ? "#ff4d4d" : "#ad8306" 
                    }}>
                        {mensaje}
                    </p>
                )}
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
                    transition: opacity 0.2s;
                }
                .btn-entrar:disabled { opacity: 0.5; cursor: not-allowed; }
            `}</style>
        </div>
    );
}