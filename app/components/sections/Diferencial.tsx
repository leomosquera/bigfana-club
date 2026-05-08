"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

const leftItems = [
  "Apps que generan interacción pero no ingresos",
  "Tokens con baja adopción y alta fricción",
  "Sistemas aislados sin impacto real",
];

const rightItems = [
  "Más ingresos para el club, mejor experiencia para el fan",
  "Modelo simple, sin fricción",
  "Ecosistema integrado que genera valor",
];

export default function Diferencial() {
  return (
    <section id="diferencial" className="py-28 bg-black">
      <Container>

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            No es una app. Es un negocio.
          </h2>

          <p className="text-white/60 text-lg">
            Diseñado para que cada interacción tenga un impacto real en el club.
          </p>
        </div>

        {/* COMPARISON */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative
              p-6 md:p-7
              rounded-2xl
              bg-white/5
              border border-white/10
              backdrop-blur-md
              flex flex-col gap-4
            "
          >
            <h3 className="text-lg font-semibold text-white/70 mb-2">
              Lo tradicional
            </h3>

            <ul className="flex flex-col gap-3">
              {leftItems.map((item, i) => (
                <li key={i} className="text-white/60 text-sm md:text-base">
                  ❌ {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              relative
              p-6 md:p-7
              rounded-2xl
              bg-white/5
              border border-[#FF2D55]/30
              hover:border-[#FF2D55]/60
              backdrop-blur-md
              flex flex-col gap-4
              transition-all duration-300
              shadow-[0_0_20px_rgba(255,45,85,0.08)]
            "
          >
            <h3 className="text-lg font-semibold text-[#FF2D55] mb-2">
              BigFana
            </h3>

            <ul className="flex flex-col gap-3">
              {rightItems.map((item, i) => (
                <li key={i} className="text-white text-sm md:text-base">
                  ✔ {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}