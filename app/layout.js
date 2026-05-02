"use client";

import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import SoundToggle from "@/components/SoundToggle";
import { AudioProvider } from "@/context/AudioContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
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
        </AudioProvider>
      </body>
    </html>
  );
}