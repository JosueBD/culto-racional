"use client";

import Link from "next/link";
import { steps, getProgreso } from "../lib/progreso";

const labels = {
    intro: "✞ Introducción",
    puertas: "🚪 Puertas",
    atrios: "⛲ Atrios",
    santo: "🪔 Lugar Santo",
    santisimo: "👑 Lugar Santísimo",
    final: "⛪ Final"
};

const routes = {
    intro: "/introduccion",
    puertas: "/puertas",
    atrios: "/atrios",
    santo: "/lugar-santo",
    santisimo: "/lugar-santisimo",
    final: "/final"
};

export default function NavBar() {
  const progreso = getProgreso(); // número

    return (
        <nav className="nav-bar">
        <h1 className="title">Culto Racional</h1>

        <div className="logo">
            <img src="/sources/Logo.png"/>
        </div>

        {steps
            .filter(step => step !== "portada")
            .map((step, index) => {
                const locked = index + 1 > progreso;

            return (
            <Link
                key={step}
                href={routes[step]}
                className={`nav-link ${locked ? "locked" : ""}`}
            >
                {labels[step]}
            </Link>
            );
        })}
        </nav>
    );
}