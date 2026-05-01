"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

const stats = [
  {
    value: "+22%",
    label: "Consumo por fan",
  },
  {
    value: "6.8x",
    label: "ROI para sponsors",
  },
  {
    value: "+20%",
    label: "Tickets digitales",
  },
  {
    value: "70%",
    label: "Del valor sin hardware",
  },
];

export default function Resultados() {
  return (
    <section
      id="solucion"
      className="
        relative
        py-46 
        md:py-54
        overflow-hidden
        bg-black
      "
    >
    
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/bigfana-engagement.jpg"
          alt="Jugador gritando gol"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
    
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />
    
      {/* RED GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,45,85,0.12),transparent_70%)]" />

      <Container>
        <div className="relative z-10">

          {/* HEADER */}
          <div className="max-w-2xl mb-20">

            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
              <span className="text-white">Resultados medibles desde</span> <span className="text-[#FF2D55]">el primer momento</span>
            </h2>

            <p className="text-white/60 text-lg">
              Un modelo probado que impacta directamente en los ingresos del club.
            </p>
          </div>

          {/* PANEL */}
          <div className="
            relative
            rounded-3xl
            p-8 md:p-12
            bg-white/5
            border border-white/10
            backdrop-blur-md
            overflow-hidden
          ">

            {/* glow */}
            <div className="absolute inset-0 bg-[#FF2D55]/10 blur-[120px]" />

            {/* grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-2"
                >

                  {/* VALUE */}
                  <div className="
                    text-4xl md:text-5xl font-bold
                    text-white
                    drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]
                  ">
                    {stat.value}
                  </div>

                  {/* LABEL */}
                  <div className="text-white/60 text-sm md:text-base">
                    {stat.label}
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

          {/* CLOSING */}
          <div className="mt-16 max-w-xl">
            <p className="text-white/60 text-lg">
              No es una promesa. Es un modelo probado.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
}