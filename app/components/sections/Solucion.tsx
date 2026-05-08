"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  Wallet,
  Database,
  BadgeDollarSign,
} from "lucide-react";

const items = [
  {
    icon: Wallet,
    title: "Más consumo por fan",
    text: "Cada visita, cada compra, cada momento convertido en valor para el club.",
  },
  {
    icon: Database,
    title: "Datos propios y accionables",
    text: "Construí tu propio activo de datos y tomá decisiones basadas en comportamiento real.",
  },
  {
    icon: BadgeDollarSign,
    title: "Sponsors con ROI real",
    text: "Activaciones segmentadas según el comportamiento de cada hincha.",
  },
];

export default function Solucion() {
  return (
    <section
      id="solucion"
      className="
        relative
        py-36
        md:py-44
        overflow-hidden
        bg-black
      "
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/bigfana-grito-gol.jpg"
          alt="Jugador gritando gol"
          className="
            w-full
            h-full
            object-cover
            object-top
            opacity-70
            scale-105
          "
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/25" />

      {/* RED ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,45,85,0.10),transparent_70%)]" />

      <Container>
        <div className="relative z-10">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-20">

            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-white">
                Un ecosistema diseñado
              </span>
              <br />
              <span className="text-[#FF2D55]">
                para todos
              </span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              BigFana transforma interacción, datos y comunidad en valor tangible para el club, los sponsors y los fans.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.5, delay: index * 0.1 },
                    scale: {
                      duration: 0.10,
                      ease: "easeOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    transform-gpu
                    overflow-hidden
                    rounded-3xl
                    p-8

                    bg-[rgba(0,0,0,0.35)]
                    border border-[#3A0D16]
                    backdrop-blur-xl

                    transition-[border-color,box-shadow]
                    duration-200

                    hover:border-[#FF2D55]/30

                    shadow-[0_0_30px_rgba(80,10,20,0.10)]
                    hover:shadow-[0_0_60px_rgba(120,10,30,0.35)]
                  "
                >

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-col items-center text-center">

                    {/* ICON */}
                    <div className="
                      mb-6
                      flex
                      size-16
                      items-center
                      justify-center
                      rounded-2xl

                      border border-[#5A1524]
                      bg-[#20060B]

                      shadow-[0_0_30px_rgba(120,10,30,0.18)]

                      transition-all duration-200

                      group-hover:scale-110
                      group-hover:shadow-[0_0_35px_rgba(120,10,30,0.28)]
                    ">
                      <Icon className="size-8 text-[#FF2D55]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="
                      text-xl
                      font-semibold
                      text-white
                      mb-3
                      leading-snug
                      tracking-tight
                    ">
                      {item.title}
                    </h3>

                    {/* TEXT */}
                    <p className="
                      text-white/55
                      leading-relaxed
                      text-sm
                      md:text-base
                      max-w-[260px]
                    ">
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </Container>
    </section>
  );
}