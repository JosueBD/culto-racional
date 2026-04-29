"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgreso } from "@/lib/progreso";

export default function LessonNav() {
    const [mounted, setMounted] = useState(false);
    const [progreso, setProgresoState] = useState(0);

    useEffect(() => {
        setMounted(true);
        setProgresoState(getProgreso());
    }, []);

    if (!mounted) return null;

    return (
        <div className="lesson-nav">

            <Link href="/introduccion" className="btn btn-full">
                Intro
            </Link>

            <Link                
                href="/puertas"
                className={`btn btn-full ${progreso < 1 ?  "locked" : ""}`}
            >
                Puertas
            </Link>

            <Link
                href="/atrios"
                className={`btn btn-full ${progreso < 2 ? "locked" : ""}`}
            >
                Atrios
            </Link>

            <Link
                href="/lugar-santo"
                className={`btn btn-full ${progreso < 3 ? "locked" : ""}`}
            >
                Santo
            </Link>

            <Link
                href="/lugar-santisimo"
                className={`btn btn-full ${progreso < 4 ? "locked" : ""}`}
            >
                Santísimo
            </Link>

            <Link
                href="/final"
                className={`btn btn-full ${progreso < 5 ? "locked" : ""}`}
            >
                Final
            </Link>

        </div>
    );
}