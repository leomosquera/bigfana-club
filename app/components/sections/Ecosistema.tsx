"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  Smartphone,
  Trophy,
  Vote,
  Newspaper,
  ChevronRight,
} from "lucide-react";

export default function Ecosistema() {
  return (
    <section
      id="ecosistema"
      className="
        relative
        overflow-hidden
        bg-black
        py-36
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">


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
                Ecosistema
              </span>

            </div>

          </div>

          {/* HEADER */}
          <div className="max-w-4xl mx-auto mb-16 text-center">

            <h2 className="
              text-4xl
              md:text-6xl
              font-bold
              leading-[1.05]
              tracking-tight
              mb-6
            ">

              <span className="text-white">
                De producto a ecosistema,
              </span>

              <br />

              <span className="text-[#FF2D55]">
                sin riesgo.
              </span>

            </h2>

            <p className="
              text-white/60
              text-lg
              md:text-xl
              leading-relaxed
              max-w-3xl
              mx-auto
            ">
              Tu ecosistema se construye a medida, de acuerdo a las necesidades de tu club y sus fans.
            </p>

          </div>

          {/* CONTENT */}
          <div className="
            grid
            gap-6
            lg:grid-cols-12
          ">

            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="
                lg:col-span-3

                rounded-3xl
                border
                border-[#FF2D55]/25

                bg-[linear-gradient(180deg,rgba(255,45,85,0.12),rgba(7,18,37,0.96))]

                overflow-hidden
              "
            >

              <div className="p-8">

                {/* LABEL */}
                <div className="
                  inline-flex
                  items-center
                  gap-2

                  mb-8

                  rounded-full
                  border
                  border-[#FF2D55]/20

                  bg-[#FF2D55]/10

                  px-4
                  py-2
                ">

                  <span className="
                    text-[11px]
                    uppercase
                    tracking-[0.35em]
                    text-[#FF2D55]
                    font-semibold
                  ">
                    Paso 01
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
                  Por donde empezar
                  <br />
                  Plataforma digital
                </h3>

                {/* TEXT */}
                <p className="
                  text-white/55
                  text-lg
                  leading-relaxed
                  mb-10
                ">
                  Comenzamos a construir el perfil unificado del hincha a través de Encuestas, Sorteos, Noticias y Votaciones.
                </p>

                {/* FEATURES */}
                <div className="
                  flex
                  flex-col
                  gap-4
                ">

                  {[
                    {
                      icon: Smartphone,
                      label: "Rápido",
                    },
                    {
                      icon: Trophy,
                      label: "Sin hardware",
                    },
                    {
                      icon: Vote,
                      label: "Con valor desde el primer paso",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="
                          flex
                          items-center
                          gap-4

                          rounded-2xl
                          border
                          border-white/5

                          bg-white/[0.03]

                          px-4
                          py-4
                        "
                      >

                        <div className="
                          flex
                          size-11
                          items-center
                          justify-center

                          rounded-xl

                          bg-[#FF2D55]/10
                          border
                          border-[#FF2D55]/15
                        ">

                          <Icon className="size-5 text-[#FF2D55]" />

                        </div>

                        <span className="
                          text-white
                          font-medium
                          tracking-tight
                        ">
                          {item.label}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
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
                duration: 0.45,
                delay: 0.08,
              }}
              className="
                lg:col-span-9

                overflow-hidden
              "
            >

              {/* TOP */}
              <div className="p-8 md:p-10">

                {/* LABEL */}
                <div className="
                  inline-flex
                  items-center
                  gap-2

                  mb-8
                  px-4
                  py-2
                ">

                  <span className="
                    text-[11px]
                    uppercase
                    tracking-[0.35em]
                    text-white/50
                    font-semibold
                  ">
                    Paso 02
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

                  mb-4
                ">
                  Solución final
                  <br />
                  Ecosistema para el fan
                </h3>

                {/* SUBTITLE */}
                <p className="
                  text-white/60
                  text-lg
                  leading-relaxed
                  max-w-3xl
                  mb-10
                ">
                  Plataforma de engagement y monetización ampliada a medida.
                </p>

                {/* FEATURES */}
                <div className="
                  flex
                  flex-wrap
                  gap-3
                  mb-10
                ">

                  {[
                    "Acceso al estadio",
                    "Consumo cashless",
                    "Segunda pantalla",
                    "Merchandise exclusivo",
                    "On demand",
                    "Y más",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-full
                        border
                        border-white/10

                        bg-white/[0.03]

                        px-4
                        py-2

                        text-sm
                        text-white/80
                        tracking-tight
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

                {/* IMAGE */}
                <div className="
                  relative
                  overflow-hidden
                ">

                  <img
                    src="/ecosistema.png"
                    alt="Ecosistema BigFana"
                    className="
                      w-full
                      h-[420px]
                      object-cover
                      object-center
                    "
                  />

                  {/* OVERLAY */}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </Container>

    </section>
  );
}