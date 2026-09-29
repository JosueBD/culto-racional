"use client";

import { AnimatePresence, motion } from "framer-motion";
import SoundToggle from "@/components/SoundToggle";
import { AudioProvider } from "@/context/AudioContext";

export default function ClientShell({ children }) {
  return (
    <AudioProvider>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <SoundToggle />

      <a href="https://store-esbdgg.com/pages/esbdgg-ecosistema"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 1000,
          color: "white",
          fontSize: "13px",
          textDecoration: "none",
          opacity: 0.7,
        }}
      >
        ESBDGG Ecosistema →
      </a>

      <a href="/politica-de-privacidad"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          color: "white",
          fontSize: "13px",
          textDecoration: "none",
          opacity: 0.7,
        }}
      >
        Política de Privacidad
      </a>
    </AudioProvider>
  );
}
