"use client";

import { useEffect, useState } from "react";
import { getProgreso } from "@/lib/progreso";
import { curso } from "@/data/curso";

export default function ProgressBar() {
    const [mounted, setMounted] = useState(false);
    const [progreso, setProgresoState] = useState(0);

useEffect(() => {
    setMounted(true);
    setProgresoState(getProgreso());
}, []);

    if (!mounted) return null;

    const porcentaje = (progreso / (curso.length - 1)) * 100;

    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ width: `${porcentaje}%` }}
            />
        </div>
    );
}