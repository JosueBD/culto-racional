import { supabase } from "./supabase";

export const steps = [
    "portada",   
    "intro",     
    "puertas",
    "atrios",
    "santo",
    "santisimo",
    "final"
];

// --- PERSISTENCIA EN NUBE ---

async function guardarEnNube(nivel) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
        .from("user_progress")
        .upsert({
            user_id: user.id,
            curso_slug: "culto-racional",
            etapa_actual: nivel,
            updated_at: new Date().toISOString()
        }, {
            onConflict: 'user_id, curso_slug'
        });

    if (error) console.error("Error al sincronizar con la nube:", error.message);
}

export async function cargarProgresoDesdeNube() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return null;

    const { data, error } = await supabase
        .from("user_progress")
        .select("etapa_actual")
        .eq("user_id", user.id)
        .eq("curso_slug", "culto-racional")
        .single();

    if (error && error.code === "PGRST116") return null;
    if (error) return null;

    return data ? data.etapa_actual : null;
}


export async function sincronizarProgreso() {
    if (typeof window === "undefined") return 0;

    const nivelLocal = getProgreso();

    // revisar autenticación primero
    const {
        data: { user }
    } = await supabase.auth.getUser();

    // invitado: no tocar progreso
    if (!user) {
        return nivelLocal;
    }

    // usuario autenticado
    const nivelNube = await cargarProgresoDesdeNube();

    // primera vez logueado: desbloquear intro
    if (nivelNube === null) {
        const nivelInicial = Math.max(1, nivelLocal);

        localStorage.setItem(
            "progreso",
            String(nivelInicial)
        );

        await guardarEnNube(nivelInicial);

        return nivelInicial;
    }

    const nivelFinal = Math.max(
        nivelLocal,
        nivelNube
    );

    localStorage.setItem(
        "progreso",
        String(nivelFinal)
    );

    return nivelFinal;
}

// --- FUNCIONES LOCALES ---

export async function setProgreso(nivel) {
    if (typeof window === "undefined") return;

    const actual = getProgreso();
    if (nivel < actual) return;

    localStorage.setItem("progreso", String(nivel));

    await guardarEnNube(nivel);
}

export function getProgreso() {
    if (typeof window === "undefined") return 0;
    const valor = localStorage.getItem("progreso");
    if (!valor) return 0;
    const num = parseInt(valor, 10);
    return isNaN(num) ? 0 : num;
}

export async function resetProgreso() {
    if (typeof window === "undefined") return;

    // reset local
    localStorage.removeItem("progreso");

    // dejar estado inicial
    localStorage.setItem("progreso", "1");

    // reset nube
    await guardarEnNube(1);
}

export const getUserProgress = () => {
    if (typeof window === "undefined") return "intro";
    const nivelIndex = getProgreso();
    return steps[nivelIndex] || "intro";
};

export const isLocked = (step, currentProgress) => {
    return steps.indexOf(step) > steps.indexOf(currentProgress);
};