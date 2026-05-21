"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  X,
  Check,
} from "lucide-react";

const leftItems = [
  "Apps que generan interacción, pero no ingresos.",
  "Falta de métricas y segmentación.",
  "Sistemas aislados sin análisis unificado.",
];

const rightItems = [
  "Perfil unificado del fan.",
  "Datos reales que permiten mayor penetración.",
  "Modelo simple y escalable.",
];

export default function DiferencialCTA() {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        py-36
        bg-black
      "
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/bigfana-final-bg.jpg"
          alt="BigFana stadium"
          className="
            w-full
            h-full
            object-cover
            object-center

            opacity-35
            scale-105
          "
        />
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/bigfana-bg-grieta.jpg"
          alt="BigFana"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
    
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />
    
      {/* RED GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,45,85,0.12),transparent_70%)]" />

      <Container>
        <div className="relative z-10">

          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-24">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >

              <p className="
                mb-6

                text-[#FF2D55]
                text-sm
                uppercase
                tracking-[0.35em]
                font-semibold
              ">
                El diferencial
              </p>

              <h2 className="
                text-4xl
                md:text-6xl

                font-bold
                tracking-tight
                leading-[1.05]

                mb-8
              ">
                <span className="text-white">
                Diseñado para que cada interacción tenga 
                </span>

                <br />

                <span className="text-[#FF2D55]">
                un impacto real en el club.
                </span>
              </h2>

              <p className="
                text-white/60
                text-lg
                md:text-xl

                leading-relaxed

                max-w-2xl
                mx-auto
              ">
                Mejor experiencia para el fan, más ingresos para el club
              </p>

            </motion.div>

          </div>

          {/* COMPARISON */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                group
                relative

                overflow-hidden
                rounded-[32px]

                p-8
                md:p-10

                bg-[rgba(255,255,255,0.03)]

                border border-white/10

                backdrop-blur-xl

                transition-all duration-300
              "
            >

              {/* INNER ATMOSPHERE */}
              <div className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_70%)]
              " />

              <div className="relative z-10">

                <h3 className="
                  text-2xl
                  font-semibold

                  text-white/70

                  mb-8
                ">
                  Lo tradicional
                </h3>

                <ul className="flex flex-col gap-5">

                  {leftItems.map((item, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

                      <div className="
                        mt-1

                        flex
                        size-7
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-white/5
                        border border-white/10
                      ">
                        <X className="size-4 text-white/40" />
                      </div>

                      <span className="
                        text-white/60
                        text-base
                        md:text-lg
                        leading-relaxed
                      ">
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                group
                relative

                overflow-hidden
                rounded-[32px]

                p-8
                md:p-10

                bg-[rgba(0,0,0,0.35)]

                border-[3px]
                border-[#6B1224]

                backdrop-blur-xl

                transition-[border-color,box-shadow,transform]
                duration-200

                hover:border-[#FF2D55]/60

                shadow-[0_0_0_1px_rgba(255,45,85,0.15),0_0_45px_rgba(120,10,30,0.35),0_0_120px_rgba(120,10,30,0.22)]

                hover:shadow-[0_0_0_2px_rgba(255,45,85,0.18),0_0_45px_rgba(255,45,85,0.45),0_0_120px_rgba(120,10,30,0.30)]
              "
            >

              {/* OUTER NEON */}
              <div className="
                absolute
                inset-[-2px]

                rounded-[34px]

                border-2
                border-[#FF2D55]/25

                opacity-90

                blur-[2px]

                transition-all duration-200

                group-hover:border-[#FF2D55]/40
              " />

              {/* RED ATMOSPHERE */}
              <div className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top,rgba(255,45,85,0.10),transparent_70%)]
              " />

              <div className="relative z-10">

                <h3 className="
                  text-2xl
                  font-semibold

                  text-[#FF2D55]

                  mb-8
                ">
                  BigFana
                </h3>

                <ul className="flex flex-col gap-5">

                  {rightItems.map((item, i) => (
                    <li
                      key={i}
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

                      <div className="
                        mt-1

                        flex
                        size-7
                        shrink-0
                        items-center
                        justify-center

                        rounded-full

                        bg-[#FF2D55]/10
                        border border-[#FF2D55]/20

                        shadow-[0_0_20px_rgba(255,45,85,0.18)]
                      ">
                        <Check className="size-4 text-[#FF2D55]" />
                      </div>

                      <span className="
                        text-white
                        text-base
                        md:text-lg
                        leading-relaxed
                      ">
                        {item}
                      </span>

                    </li>
                  ))}

                </ul>

              </div>

            </motion.div>

          </div>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              relative

              overflow-hidden
              rounded-[40px]

              border-[3px]
              border-[#6B1224]

              bg-[rgba(0,0,0,0.45)]

              px-8
              py-14

              md:px-16
              md:py-20

              text-center

              backdrop-blur-xl

              shadow-[0_0_0_1px_rgba(255,45,85,0.15),0_0_45px_rgba(120,10,30,0.35),0_0_120px_rgba(120,10,30,0.22)]
            "
          >

            {/* OUTER NEON */}
            <div className="
              absolute
              inset-[-2px]

              rounded-[42px]

              border-2
              border-[#FF2D55]/25

              opacity-90

              blur-[2px]
            " />

            {/* RED GLOW */}
            <div className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,rgba(255,45,85,0.14),transparent_70%)]
            " />

            <div className="relative z-10 max-w-3xl mx-auto">

              {/* EYEBROW */}
              <p className="
                mb-6

                text-[#FF2D55]
                text-sm
                uppercase
                tracking-[0.35em]
                font-semibold
              ">
                Demo personalizada
              </p>

              {/* TITLE */}
              <h3 className="
                text-4xl
                md:text-6xl

                font-bold
                tracking-tight
                leading-[1.05]

                text-white

                mb-8
              ">
                Descubre lo que BigFana puede hacer por tu club y sus fans.
              </h3>

              {/* SUB */}
              <p className="
                text-white/60
                text-lg
                md:text-xl

                leading-relaxed

                mb-10
              ">
                Una nueva forma de interactuar con el fan que genera valor real.
              </p>

              {/* CTA */}
              <button
                className="
                  h-14
                  px-10

                  rounded-2xl

                  bg-[#FF2D55]

                  text-lg
                  font-semibold
                  text-white

                  transition-all duration-200

                  hover:scale-105
                  hover:shadow-[0_0_45px_rgba(255,45,85,0.55)]

                  shadow-[0_0_35px_rgba(255,45,85,0.35)]
                "
              >
                Agendar demo
              </button>

              {/* MICRO COPY */}
              <p className="
                mt-6

                text-white/40
                text-sm
              ">
                Sin compromiso. Demo 100% personalizada.
              </p>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}