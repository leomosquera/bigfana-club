"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

const items = [
  {
    phase: "FASE 01",
    number: ".01",
    title: "Campañas del club, más rentables",
    text: "Entradas, abonos, merchandise y socios con segmentación real. Menor costo de adquisición, mayor conversión.",
    impact: "Genera valor desde el primer mes",
    featured: true,
  },
  {
    phase: "FASE 02",
    number: ".02",
    title: "Sponsors con retorno medible",
    text: "Activaciones segmentadas por el comportamiento real del fan. Más valor por contrato, mejores renovaciones.",
    impact: "ROI demostrable para cada sponsor",
  },
  {
    phase: "FASE 03",
    number: ".03",
    title: "Nuevas verticales monetizables",
    text: "Cashless en el estadio, segunda pantalla, merch on-demand. El ecosistema completo del fan.",
    impact: "Máximo nivel de monetización",
  },
];

export default function Ingresos() {
  return (
    <section
      id="ingresos"
      className="
        relative
        overflow-hidden
        bg-black
        py-36
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden bg-[#050505]">

        {/* RED LIGHT 1 */}
        <motion.div
          animate={{
            x: [-150, 150, -150],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-200px]
            left-[-200px]

            h-[700px]
            w-[700px]

            rounded-full

            bg-[#FF2D55]

            opacity-20

            blur-[120px]
          "
        />

        {/* RED LIGHT 2 */}
        <motion.div
          animate={{
            x: [150, -150, 150],
            y: [50, -50, 50],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-250px]
            right-[-200px]

            h-[800px]
            w-[800px]

            rounded-full

            bg-[#781020]

            opacity-25

            blur-[140px]
          "
        />

        {/* CENTER LIGHT */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2

            h-[500px]
            w-[900px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#FF2D55]

            blur-[120px]
          "
        />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(rgba(255,45,85,0.12)_1px,transparent_1px)]
            bg-[size:34px_34px]

            opacity-20
          "
        />

        {/* VIGNETTE */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.82)_100%)]
          "
        />

      </div>

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
                Ingresos
              </span>

            </div>

          </div>

          {/* TITLE */}
          <div className="max-w-5xl mx-auto mb-16 text-center">

            <h2 className="
              text-4xl
              md:text-6xl

              font-bold

              tracking-tight
              leading-[1.05]

              text-white

              mb-6
            ">

              Cómo BigFana{" "}

              <span className="text-[#FF2D55]">
                genera ingresos
              </span>

              {" "}para el club.

            </h2>

            <p className="
              text-white/60
              text-lg
              md:text-xl
              leading-relaxed
              max-w-3xl
              mx-auto
            ">
              Monetización inteligente y engagement conectado en una única plataforma premium para el fan.
            </p>

          </div>

          {/* CARDS */}
          <div
            className="
              grid
              gap-6
              md:grid-cols-3
            "
          >

            {items.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  relative

                  flex
                  flex-col

                  h-full
                  overflow-hidden

                  rounded-3xl

                  border

                  transition-all
                  duration-500

                  ${
                    item.featured
                      ? "border-[#5A1524]"
                      : "border-[#3A0D16]"
                  }

                  bg-[#080808]

                  hover:border-[#FF2D55]/30

                  ${
                    item.featured
                      ? "hover:shadow-[0_0_60px_rgba(120,10,30,0.35)]"
                      : "hover:shadow-[0_0_40px_rgba(120,10,30,0.18)]"
                  }
                `}
              >

                {/* TOP GLOW */}
                <div
                  className={`
                    absolute
                    inset-x-0
                    top-0
                    h-[2px]

                    ${
                      item.featured
                        ? "bg-[#FF2D55]"
                        : "bg-[#5A1524]"
                    }
                  `}
                />

                {/* CONTENT */}
                <div className="
                  relative
                  p-7

                  flex-1
                ">

                  {/* HEADER */}
                  <div className="
                    flex
                    items-start
                    justify-between
                    mb-10
                  ">

                    <div
                      className="
                        rounded-2xl
                        border
                        border-[#5A1524]

                        bg-[#20060B]

                        px-4
                        py-2
                      "
                    >

                      <span className="
                        text-[11px]
                        uppercase
                        tracking-[0.35em]
                        text-[#FF2D55]
                        font-semibold
                      ">
                        {item.phase}
                      </span>

                    </div>

                    <span
                      className={`
                        text-[56px]
                        font-black
                        leading-none
                        tracking-[-0.06em]

                        ${
                          item.featured
                            ? "text-[#FF2D55]"
                            : "text-white/90"
                        }
                      `}
                    >
                      {item.number}
                    </span>

                  </div>

                  {/* TITLE */}
                  <h3 className="
                    text-3xl
                    md:text-4xl

                    font-semibold

                    tracking-tight
                    leading-tight

                    text-white

                    mb-6
                  ">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="
                    text-white/55
                    text-lg
                    leading-relaxed
                  ">
                    {item.text}
                  </p>

                </div>

                {/* FOOTER */}
                <div
                  className={`
                    border-t
                
                    px-7
                    py-5
                
                    ${
                      item.featured
                        ? "bg-[#FF2D55] border-[#FF2D55]"
                        : "bg-[#120306] border-[#3A0D16]"
                    }
                  `}
                >

                  <p className="
                    text-white
                    font-medium
                    text-lg
                    tracking-tight
                  ">
                    {item.impact}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

          {/* FOOTER CLAIM */}
          <div className="mt-16 text-center">

            <p className="
              text-white/65
              text-xl
              md:text-xl
              italic
              tracking-tight
            ">
              Cada interacción del fan =
              <span className="text-[#FF2D55] font-semibold">
                {" "}una nueva oportunidad de monetización medible.
              </span>
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}