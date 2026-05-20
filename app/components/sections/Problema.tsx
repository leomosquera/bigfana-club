"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  Users,
  BadgeDollarSign,
  Activity,
  TrendingDown,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Tener Fans ≠ Conocerlos",
    text: "Sin datos propios, realmente conoces a tus fans?",
  },
  {
    icon: BadgeDollarSign,
    title: "Inversiones ≠ retorno",
    text: "Sin metricas concretas, como se mide el retorno sobre inversión?",
  },
  {
    icon: Activity,
    title: "Engagement ≠ escalamiento",
    text: "A pesar de todas las campañas, realmente se ve un crecimiento en engagement?",
  },
  {
    icon: TrendingDown,
    title: "Ingresos ≠ máximo potential",
    text: "Aunque crezcan los ingresos, realmente se está alcanzando el máximo potencial?",
  },
];

export default function Problema() {
  return (
    <section
      id="problema"
      className="
        relative
        py-32
        overflow-hidden
        bg-black
      "
    >

      {/* DOT GRID */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(rgba(255,45,85,0.08)_1px,transparent_1px)]
          bg-[size:32px_32px]
        "
      />

      {/* RED GLOW */}
      <div
        className="
          absolute
          top-[-200px]
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-[#FF2D55]/10
          blur-[140px]
        "
      />

      <Container>
        <div className="relative z-10">

          {/* SECTION TAG */}
  <div className="flex justify-center mb-8">

<div
  className="
    inline-flex
    items-center
    gap-3

    rounded-2xl

    border
    border-[#5A1524]

    bg-[#20060B]

    px-6
    py-3
  "
>

  <div className="
    h-2
    w-2
    rounded-full
    bg-[#FF2D55]
  " />

  <span className="
    text-[#FF2D55]

    text-sm
    font-semibold

    uppercase
    tracking-[0.35em]
  ">
    Problema
  </span>

</div>

</div>

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-20">

            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-white">
              Siempre tuviste a los fans. 
              </span>
              <br />
              <span className="text-[#FF2D55]">
              Este es el momento de empezar a hacer más.
              </span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Hay interacción con los fans, pero no se transforma en ingresos reales.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

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
                    scale: { duration: 0.10, ease: "easeOut" },
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    p-8
                    bg-[#080808]
                    border border-[#3A0D16]
                    backdrop-blur-xl
                    transition-all duration-200
                    hover:border-[#FF2D55]/30
                    hover:shadow-[0_0_60px_rgba(120,10,30,0.35)]
                    transform-gpu
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
                      transition-[border-color,box-shadow,background-color] duration-300
                      group-hover:scale-110
                      group-hover:shadow-[0_0_25px_rgba(255,45,85,0.18)]
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