"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  BadgeDollarSign,
  ShoppingBag,
  Ticket,
  Database,
} from "lucide-react";

const items = [
  {
    icon: BadgeDollarSign,
    number: ".01",
    title: "Sponsors Data-Driven",
    text: "Activaciones segmentadas con datos reales del fan.",
    impact: "Mayor valor comercial y ROI medible",
    image: "/bigfana-estadio-ingreso-publicidad.jpg",
  },
  {
    icon: ShoppingBag,
    number: ".02",
    title: "Consumo & E-commerce",
    text: "Incremento directo del gasto por fan dentro del ecosistema.",
    impact: "+22% consumo por fan",
    image: "/bigfana-compra-inmediata.jpg",
  },
  {
    icon: Ticket,
    number: ".03",
    title: "Tickets digitales",
    text: "Optimización de venta y control total del acceso.",
    impact: "Hasta +20% en tickets digitales",
    image: "/bigfana-entrada-qr.jpg",
  },
  {
    icon: Database,
    number: ".04",
    title: "Data del fan",
    text: "Construcción de first-party data propia del club.",
    impact: "Activo estratégico a largo plazo",
    image: "/bigfana-analytics.jpg",
  },
];

export default function Ingresos() {
  return (
    <section
      id="ingresos"
      className="
        relative
        py-32
        overflow-hidden
        bg-black
      "
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/bigfana-bg-gamificacion-monetizacion.jpg"
          alt="Gamificación y monetización"
          className="
            w-full
            h-full
            object-cover
            object-center
            opacity-70
            scale-105
          "
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/100" />

      {/* RED ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,45,85,0.10),transparent_70%)]" />

      {/* DOT GRID */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(rgba(255,45,85,0.08)_1px,transparent_1px)]
          bg-[size:32px_32px]
        "
      />

      {/* CENTER ENERGY PARTICLES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {[0, 1, 2, 3, 4].map((col) => (
        <div
          key={col}
          className="
            absolute
            top-0
            bottom-0
            left-1/2
          "
          style={{
            transform: `translateX(${(col - 2) * 28}px)`,
          }}
        >

          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              initial={{
                y: -300,
                opacity: 0,
              }}
              animate={{
                y: 2200,
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.8 + Math.random() * 1.5,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                rounded-full
                bg-[#FF2D55]
                blur-[2px]
              "
              style={{
                width: `${2 + Math.random() * 2}px`,
                height: `${60 + Math.random() * 80}px`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

        </div>
      ))}

      {/* CENTRAL ATMOSPHERE */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-[240px]
          -translate-x-1/2

          bg-[radial-gradient(circle_at_center,rgba(255,45,85,0.06),transparent_70%)]

          blur-[100px]
        "
      />

    </div>

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

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-28">

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-white">
                Cómo genera ingresos
              </span>
              <br />
              <span className="text-[#FF2D55]">
                BigFana
              </span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Cada módulo impacta directamente en la facturación del club.
            </p>

          </div>

          {/* BLOCKS */}
          <div className="relative flex flex-col gap-16 md:gap-20">

            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    gap-14
                    items-center
                  "
                >

                  {/* TEXT */}
                  <div
                    className={`
                      relative
                      z-10

                      ${index % 2 !== 0 ? "md:order-2" : ""}
                    `}
                  >

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

                      hover:scale-110
                      hover:shadow-[0_0_35px_rgba(120,10,30,0.28)]
                    ">
                      <Icon className="size-8 text-[#FF2D55]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="
                      text-3xl
                      md:text-4xl
                      font-semibold
                      text-white
                      mb-5
                      tracking-tight
                      leading-tight
                    ">
                      {item.title}
                    </h3>

                    {/* TEXT */}
                    <p className="
                      text-white/60
                      text-lg
                      leading-relaxed
                      mb-6
                      max-w-xl
                    ">
                      {item.text}
                    </p>

                    {/* IMPACT */}
                    <p className="
                      text-[#FF2D55]
                      font-semibold
                      text-xl
                    ">
                      {item.impact}
                    </p>

                  </div>

                  {/* IMAGE */}
                  <motion.div
                    whileHover={{
                      scale: 1.025,
                    }}
                    transition={{
                      scale: {
                        duration: 0.12,
                        ease: "easeOut",
                      },
                    }}
                    className={`
                      group
                      relative
                      z-10

                      h-[280px]
                      md:h-[380px]

                      overflow-hidden
                      rounded-[34px]

                      border-[3px] border-[#6B1224]

                      transition-[border-color,box-shadow,transform]
                      duration-200

                      hover:border-[#FF2D55]/60

                      shadow-[0_0_0_1px_rgba(255,45,85,0.15),0_0_45px_rgba(120,10,30,0.35),0_0_120px_rgba(120,10,30,0.22)]

                      hover:shadow-[0_0_0_2px_rgba(255,45,85,0.18),0_0_45px_rgba(255,45,85,0.45),0_0_120px_rgba(120,10,30,0.30)]

                      ${index % 2 !== 0 ? "md:order-1" : ""}
                    `}
                  >

                    {/* OUTER NEON RING */}
                    <div className="
                      absolute
                      inset-[-2px]
                      rounded-[36px]

                      border-2 border-[#FF2D55]/25

                      opacity-90

                      blur-[2px]

                      transition-all duration-200

                      group-hover:opacity-100
                      group-hover:border-[#FF2D55]/40
                    " />

                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/25" />

                    {/* RED ATMOSPHERE */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,45,85,0.18),transparent_70%)]" />

                    {/* BIG NUMBER */}
                    <div className="
                      absolute
                      bottom-6
                      right-6

                      text-[90px]
                      md:text-[120px]

                      font-bold
                      tracking-tight
                      leading-none

                      text-white/[0.06]

                      transition-all duration-300

                      group-hover:text-[#FF2D55]/[0.12]
                    ">
                      {item.number}
                    </div>

                  </motion.div>

                </motion.div>
              );
            })}

</div>

        </div>
      </Container>
    </section>
  );
}