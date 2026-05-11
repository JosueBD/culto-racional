"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { sincronizarProgreso, resetProgreso } from "@/lib/progreso";

export default function AuthModal({ isOpen, onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const getActiveUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        if (isOpen) getActiveUser();
    }, [isOpen]);

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = isRegister 
            ? await supabase.auth.signUp({ email, password })
            : await supabase.auth.signInWithPassword({ email, password });

        if (error) alert(error.message);
        else {
            if (isRegister) alert("¡Registro exitoso! Revisa tu email.");
            onClose();
            router.refresh();
        }
        setLoading(false);
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem("progreso");
        onClose();
        window.location.reload();
    };

        if (!isOpen) return null;

        const handleSyncProgress = async () => {
            setLoading(true);

            await sincronizarProgreso();

            setLoading(false);

            onClose();

            router.refresh();

            alert("Progreso sincronizado.");
        };

        const handleResetProgress = async () => {
            resetProgreso();

            onClose();

            router.refresh();

            alert("Progreso restablecido.");
        };

        const handleForgotPassword = async () => {
            if (!email) {
                alert("Escribe tu email primero.");
                return;
            }

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/actualizar-password`,
        });

        if (error) alert(error.message);
        else alert("Revisa tu correo para cambiar la contraseña.");
        };


    return (
        <div className="auth-overlay">
            <div className="glass-card auth-card">
                <button className="close-btn" onClick={onClose}>×</button>
                
                {user ? (
                    <div className="user-info">
                        <h2>Mi Perfil</h2>
                        <p style={{ marginBottom: "20px", opacity: 0.8 }}>{user.email}</p>
                        <button onClick={handleSyncProgress} className="btn-entrar">
                            SINCRONIZAR PROGRESO 
                        </button>
                        <button onClick={handleResetProgress} className="btn-entrar">
                            RESTABLECER PROGRESO
                        </button>
                        <button onClick={handleSignOut} className="btn-salir">
                            CERRAR SESIÓN
                        </button>
                    </div>
                ) : (
                    <div className="auth-content">
                        <h2>{isRegister ? "Crear Cuenta" : "Iniciar Sesión"}</h2>
                        <form onSubmit={handleAuth}>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <button type="submit" disabled={loading} className="btn-entrar">
                                {loading ? "Procesando..." : (isRegister ? "REGISTRARSE" : "ENTRAR")}
                            </button>
                        </form>
                        <p className="toggle-text" onClick={() => setIsRegister(!isRegister)}>
                            {isRegister ? "¿Ya tienes cuenta? Entra aquí" : "¿Eres nuevo? Crea una cuenta"}
                        </p>
                        <p onClick={handleForgotPassword}> ¿Olvidaste tu contraseña? </p>
                    </div>
                )}
            </div>

            <style jsx>{`
                .auth-overlay {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 99999;
                }
                .auth-card {
                    width: 350px; padding: 40px; text-align: center;
                    background: rgba(20, 15, 5, 0.9) !important;
                    border: 1px solid rgba(212, 175, 55, 0.4) !important;
                    border-radius: 20px; color: white; position: relative;
                }
                input {
                    width: 100%; padding: 12px; margin: 10px 0; border-radius: 8px;
                    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); color: white;
                }
                .btn-salir {
                    background: rgba(255, 0, 0, 0.2); border: 1px solid rgba(255, 0, 0, 0.5);
                    color: white; padding: 10px 20px; border-radius: 20px; cursor: pointer; width: 100%;
                }
                .btn-entrar {
                    background: #ad8306; border: none; color: white; padding: 12px; width: 100%;
                    border-radius: 8px; cursor: pointer; font-weight: bold; margin-top: 10px;
                }
                .close-btn { position: absolute; top: 10px; right: 15px; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
                .toggle-text { margin-top: 20px; font-size: 0.8rem; cursor: pointer; opacity: 0.7; }
                .toggle-text:hover { color: #ad8306; opacity: 1; }
            `}</style>
        </div>
    );
}