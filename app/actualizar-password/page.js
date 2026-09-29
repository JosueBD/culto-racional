"use client";

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
                setMensaje("Contraseña actualizada con éxito. Redirigiendo...");
                setTimeout(() => router.push("/"), 2000);
            }
        } catch (err) {
            setMensaje("Ocurrió un error inesperado.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.card}>
                <h2>Restablecer Contraseña</h2>
                <p style={styles.subtext}>
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
                        style={styles.input}
                    />
                    <button 
                        type="submit" 
                        disabled={loading} 
                        style={{ ...styles.button, opacity: loading ? 0.5 : 1 }}
                    >
                        {loading ? "ACTUALIZANDO..." : "GUARDAR CAMBIOS"}
                    </button>
                </form>

                {mensaje && (
                    <p style={{ 
                        ...styles.message, 
                        color: mensaje.includes("Error") ? "#ff4d4d" : "#ad8306" 
                    }}>
                        {mensaje}
                    </p>
                )}
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
    },
    card: {
        width: "350px",
        padding: "40px",
        textAlign: "center",
        background: "rgba(20, 15, 5, 0.9)",
        border: "1px solid rgba(212, 175, 55, 0.4)",
        borderRadius: "20px",
        color: "white",
    },
    subtext: {
        fontSize: "0.85rem",
        marginBottom: "20px",
        opacity: 0.7,
    },
    input: {
        width: "100%",
        padding: "12px",
        margin: "10px 0",
        borderRadius: "8px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: "white",
        boxSizing: "border-box",
    },
    button: {
        background: "#ad8306",
        border: "none",
        color: "white",
        padding: "12px",
        width: "100%",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "10px",
    },
    message: {
        marginTop: "20px",
        fontSize: "0.9rem",
    },
};