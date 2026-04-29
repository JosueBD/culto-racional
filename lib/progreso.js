export function setProgreso(nivel) {
    if (typeof window === "undefined") return;

    const actual = getProgreso();

    if (nivel < actual) return;

    localStorage.setItem("progreso", String(nivel));
}

export function getProgreso() {
    if (typeof window === "undefined") return 0;

    const valor = localStorage.getItem("progreso");

    if (!valor) return 0;

    const num = parseInt(valor, 10);

    return isNaN(num) ? 0 : num;
}

export function resetProgreso() {
    if (typeof window === "undefined") return;

    localStorage.removeItem("progreso");
}

export const steps = [
    "intro",
    "puertas",
    "atrios",
    "santo",
    "santisimo",
    "final"
];

// Ejemplo de progreso del usuario (esto luego viene de DB o localStorage)
export const getUserProgress = () => {
  return "puertas"; // último nivel desbloqueado
};

// Función que decide si está bloqueado
export const isLocked = (step, currentProgress) => {
    return steps.indexOf(step) > steps.indexOf(currentProgress);
};