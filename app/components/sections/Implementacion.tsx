"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  Smartphone,
  ScanLine,
  WalletCards,
} from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Plataforma digital",
    text: "Implementación rápida, sin hardware inicial y con foco inmediato en datos, sponsors y consumo.",
    impact: "Genera la mayor parte del valor desde el inicio",
    image: "/bigfana-dashboard.jpg",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "Acceso al estadio",
    text: "Identificación del fan y control de accesos para mejorar experiencia, trazabilidad y segmentación.",
    impact: "Más control y más información accionable",
    image: "/bigfana-entrada-qr.jpg",
  },
  {
    icon: WalletCards,
    number: "03",
    title: "Consumo cashless",
    text: "Pagos digitales dentro del estadio para maximizar consumo, velocidad operativa y monetización.",
    impact: "Máximo nivel de monetización",
    image: "/bigfana-estadio-ingreso-publicidad.jpg",
  },
];

export default function Implementacion() {
  return (
    <section
      id="implementacion"
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

      {/* RED ATMOSPHERE */}
      <div
        className="
          absolute
          top-[-200px]
          left-[-200px]

          w-[500px]
          h-[500px]

          bg-[#FF2D55]/10
          blur-[140px]
        "
      />

      <Container>
        <div className="relative z-10">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-24">

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="text-white">
                Implementación progresiva,
              </span>
              <br />
              <span className="text-[#FF2D55]">
                sin riesgo.
              </span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              El club puede comenzar rápido, validar valor y escalar por etapas.
            </p>

          </div>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
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
                    rounded-[32px]

                    min-h-[620px]

                    bg-[#080808]

                    border-[3px]
                    border-[#6B1224]

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

                  {/* IMAGE */}
                  <div className="
                    relative
                    h-[260px]
                    overflow-hidden
                  ">

                    <img
                      src={step.image}
                      alt={step.title}
                      className="
                        w-full
                        h-full
                        object-cover

                        transition-transform duration-500

                        group-hover:scale-105
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/35" />

                    {/* RED ATMOSPHERE */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,45,85,0.18),transparent_70%)]" />

                    {/* STEP NUMBER */}
                    <div className="
                      absolute
                      top-5
                      right-5

                      text-[56px]

                      font-bold
                      leading-none
                      tracking-tight

                      text-white/[0.30]
                    ">
                      .{step.number}
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="
                    relative
                    z-10

                    flex
                    flex-col

                    p-8
                    h-[calc(100%-260px)]
                  ">

                    {/* TOP */}
                    <div className="flex items-start gap-4 mb-6">

                      {/* ICON */}
                      <div className="
                        shrink-0
                        flex
                        size-14
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
                        <Icon className="size-7 text-[#FF2D55]" />
                      </div>

                      {/* TITLE */}
                      <div>
                        <span className="
                          block
                          text-[#FF2D55]
                          text-xs
                          font-semibold
                          tracking-[0.22em]
                          mb-2
                        ">
                          ETAPA {step.number}
                        </span>

                        <h3 className="
                          text-2xl
                          font-semibold
                          text-white
                          tracking-tight
                          leading-tight
                        ">
                          {step.title}
                        </h3>
                      </div>

                    </div>

                    {/* TEXT */}
                    <p className="
                      text-white/60
                      text-base
                      md:text-lg
                      leading-relaxed
                      mb-8
                    ">
                      {step.text}
                    </p>

                    {/* IMPACT */}
                    <div className="mt-auto">

                      <p className="
                        text-[#FF2D55]
                        text-sm
                        md:text-base
                        font-semibold
                        leading-relaxed
                      ">
                        {step.impact}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* CLOSING */}
          <div className="mt-20 text-center">

            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Empezás simple. Escalás cuando el club esté listo.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}