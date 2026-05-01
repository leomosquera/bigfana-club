"use client";

import { useEffect, useState } from "react";

export default function ParticlesBG() {
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      {[...Array(300)].map((_, i) => {
        const size = Math.random() * 5 + 2;// 3px → 9px
        const isWhite = Math.random() > 0.6;

        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
              background: isWhite
                ? "rgba(255,255,255,0.9)"
                : "rgba(255,45,85,0.9)",
              filter: Math.random() > 0.7 ? "blur(1px)" : "none",
            }}
          />
        );
      })}
    </div>
  );
}