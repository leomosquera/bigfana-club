"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";
import HeroStats from "@/app/components/sections/HeroStats";
import FloatingCard from "@/app/components/FloatingCard";
import ParticlesBG from "@/app/components/ParticlesBG";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden text-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Fans estadio"
          className="w-full h-full object-cover"
        />
      </div>

      {/* PARTICLES (simples) */}
      <ParticlesBG />

      {/* OVERLAY NEGRO (más liviano) */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* RED GLOW */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,45,85,0.25),transparent_60%)]" />

      <Container>
        <div className="relative z-20">

          {/* EPIGRAPH */}
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[#FF2D55]/80 uppercase mb-6">
            <span className="h-px w-6 bg-[#FF2D55]" />
            <span>Fan engagement platform</span>
          </div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02]"
          >
            <span className="text-white">
            Transformá la pasión 
            </span>
            <br />
            <span className="text-[#FF2D55]">
            de tus fans
            </span>
            <br />
            <span className="text-white">
            en crecimiento real para tu club.
            </span>
          </motion.h1>

          {/* SUB */}
          <p className="mt-6 text-lg text-white/70">
          Para el club que quiere crecer. Para el fan que quiere más.
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">

            <button className="
              h-12 px-6 rounded-xl
              bg-[#FF2D55]
              font-semibold text-white
              shadow-[0_0_40px_rgba(255,45,85,0.5)]
              hover:scale-[1.05]
              transition
            ">
              Agendar demo
            </button>

            <button className="
              h-12 px-6 rounded-xl
              border border-white/30
              text-white/80
              hover:bg-white/10
              transition
            ">
              Ver cómo funciona
            </button>

          </div>

          {/* STATS BASE */}
          <div className="mt-10 flex justify-center">
            <HeroStats />
          </div>

        </div>
      </Container>

      {/* FLOATING STATS */}

      {/* LEFT */}
      {/*
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-[10%] top-[35%] hidden lg:block"
      >
        <FloatingCard title="Fans activos" value="+120K" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-[15%] bottom-[25%] hidden lg:block"
      >
        <FloatingCard title="Clubes" value="50+" />
      </motion.div>

      {/* RIGHT 
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity }}
        className="absolute right-[10%] top-[30%] hidden lg:block"
      >
        <FloatingCard title="Puntos" value="1M+" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6.5, repeat: Infinity }}
        className="absolute right-[15%] bottom-[20%] hidden lg:block"
      >
        <FloatingCard title="Experiencias" value="300+" />
      </motion.div>
      */}

    </section>
  );
}