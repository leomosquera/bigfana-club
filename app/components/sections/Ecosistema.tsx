"use client";

import Container from "@/app/layout/Container";
import { motion } from "framer-motion";

import {
  Smartphone,
  Trophy,
  Vote,
  Newspaper,
  ChevronRight,
  Ticket,
  Star,
  UserRound,
  MonitorPlay,
  Users,
  CreditCard,
  Crown,
  ShoppingBag,
  Shirt,
  ShieldCheck,
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

                {/* LABEL
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
                 */}

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
                  ¿Por dónde empezar?
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
                  Comenzamos a construir el perfil unificado del fan a través de Encuestas, Sorteos, Noticias y Votaciones.
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

                {/* LABEL 
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
                */}

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
                  Solución final: 
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

                {/* FEATURES 
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
                */}

                {/* DIAGRAM */}
                <div
  className="
    relative

    h-[980px]
    lg:h-[760px]

    overflow-hidden

    rounded-[40px]

    border
    border-white/10

    bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]

    backdrop-blur-xl
  "
>

  {/* BACKGROUND */}
  <div className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_left,rgba(255,45,85,0.10),transparent_40%)]
  " />

  <div className="
    absolute
    inset-0
    bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.05),transparent_45%)]
  " />

  {/* GRID */}
  <div
    className="
      absolute
      inset-0

      bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)]
      bg-[size:28px_28px]

      opacity-40
    "
  />

  {/* LABELS */}
  <div className="
    absolute

    top-10
    left-1/2
    -translate-x-1/2

    lg:left-12
    lg:translate-x-0

    text-[#FF2D55]

    text-xs
    lg:text-sm

    font-semibold

    tracking-[0.35em]
    uppercase
  ">
    Engagement
  </div>

  <div className="
    absolute

    top-[86%]
    left-1/2
    -translate-x-1/2

    lg:top-10
    lg:right-12
    lg:left-auto
    lg:translate-x-0

    text-white/40

    text-xs
    lg:text-sm

    font-semibold

    tracking-[0.35em]
    uppercase
  ">
    Monetización
  </div>

  {/* MOBILE/TABLET SHAPES */}
  <div className="lg:hidden">

    {/* TOP */}
    <div
      className="
        absolute

        left-1/2
        top-[8%]

        h-[32%]
        w-[82%]

        -translate-x-1/2

        rounded-[42px]

        border-2
        border-[#FF2D55]

        shadow-[0_0_80px_rgba(255,45,85,0.08)]
      "
    />

    {/* CENTER */}
    <div
      className="
        absolute

        left-1/2
        top-[38%]

        h-[18%]
        w-[80%]

        -translate-x-1/2

        rounded-[36px]

        border
        border-white/10

        bg-white/[0.04]

        backdrop-blur-xl
      "
    />

    {/* BOTTOM */}
    <div
      className="
        absolute

        left-1/2
        top-[54%]

        h-[30%]
        w-[82%]

        -translate-x-1/2

        rounded-[42px]

        border-2
        border-white/20
      "
    />

  </div>

  {/* DESKTOP SHAPES */}
  <div className="hidden lg:block">

    {/* LEFT SHAPE */}
    <div
      className="
        absolute

        left-[3%]
        top-[16%]

        w-[60%]
        h-[60%]

        rounded-[38%]

        border-2
        border-[#FF2D55]

        shadow-[0_0_80px_rgba(255,45,85,0.08)]
      "
    />

    {/* RIGHT SHAPE */}
    <div
      className="
        absolute

        right-[3%]
        top-[16%]

        w-[60%]
        h-[60%]

        rounded-[38%]

        border-2
        border-white/20
      "
    />

  </div>

  {/* CONTENT */}
  <div className="absolute inset-0">

    {/* MOBILE/TABLET */}
    <div className="lg:hidden">

      {/* ENGAGEMENT */}
      <div className="
        absolute
        top-[12%]
        left-1/2
        -translate-x-1/2

        grid
        grid-cols-3
        gap-x-14
        gap-y-7
      ">

        {[
          {
            title: "Acceso\nal estadio",
            icon: Ticket,
          },
          {
            title: "Fan\ntokens",
            icon: Star,
          },
          {
            title: "ADN\ndel fan",
            icon: UserRound,
          },
          {
            title: "Realidad\naumentada",
            icon: Smartphone,
          },
          {
            title: "Segunda\npantalla",
            icon: MonitorPlay,
          },
          {
            title: "Watch\nparty",
            icon: Users,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >

            <div className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              border
              border-white/8

              bg-black/30

              backdrop-blur-md
            ">

              <item.icon
                className="size-5 text-[#FF2D55]"
                strokeWidth={1.8}
              />

            </div>

            <div className="
              mt-3

              whitespace-pre-line

              text-white

              text-[13px]
              font-medium
              leading-tight
            ">
              {item.title}
            </div>

          </div>
        ))}

      </div>

      {/* CENTER */}
      <div className="
        absolute
        top-[42%]
        left-1/2
        -translate-x-1/2

        flex
        gap-12
      ">

        {[
          {
            title: "Consumo\ncashless",
            icon: CreditCard,
          },
          {
            title: "Experiencias\nPremium",
            icon: Crown,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >

            <div className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/[0.05]

              backdrop-blur-md
            ">

              <item.icon
                className="size-6 text-[#FF2D55]"
                strokeWidth={1.8}
              />

            </div>

            <div className="
              mt-3

              whitespace-pre-line

              text-white

              text-[14px]
              font-medium
              leading-tight
            ">
              {item.title}
            </div>

          </div>
        ))}

      </div>

      {/* MONETIZATION */}
      <div className="
        absolute
        top-[58%]
        left-1/2
        -translate-x-1/2

        flex
        flex-col
        items-center
        gap-y-12
      ">

        {/* ROW */}
        <div className="flex gap-x-10">

          {[
            {
              title: "Venta de\nmerchandising",
              icon: ShoppingBag,
            },
            {
              title: "Merchandising\nbajo demanda",
              icon: Shirt,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >

              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                border
                border-white/8

                bg-black/30

                backdrop-blur-md
              ">

                <item.icon
                  className="size-5 text-[#FF2D55]"
                  strokeWidth={1.8}
                />

              </div>

              <div className="
                mt-3

                whitespace-pre-line

                text-white

                text-[13px]
                font-medium
                leading-tight
              ">
                {item.title}
              </div>

            </div>
          ))}

        </div>

        {/* SINGLE CENTER */}
        <div
          className="
            -mt-6
            
            flex
            flex-col
            items-center
            text-center
          "
        >

          <div className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            border
            border-white/8

            bg-black/30

            backdrop-blur-md
          ">

            <ShieldCheck
              className="size-5 text-[#FF2D55]"
              strokeWidth={1.8}
            />

          </div>

          <div className="
            mt-3

            whitespace-pre-line

            text-white

            text-[13px]
            font-medium
            leading-tight
          ">
            {"Seguros y\npréstamos"}
          </div>

        </div>

      </div>

    </div>

    {/* DESKTOP */}
    <div className="hidden lg:block">

      {/* LEFT */}
      {[
        {
          title: "Acceso\nal estadio",
          icon: Ticket,
          top: "26%",
          left: "12%",
        },
        {
          title: "Fan\ntokens",
          icon: Star,
          top: "20%",
          left: "27%",
        },
        {
          title: "ADN\ndel fan",
          icon: UserRound,
          top: "42%",
          left: "8%",
        },
        {
          title: "Realidad\naumentada",
          icon: Smartphone,
          top: "38%",
          left: "23%",
        },
        {
          title: "Segunda\npantalla",
          icon: MonitorPlay,
          top: "57%",
          left: "13%",
        },
        {
          title: "Watch\nparty",
          icon: Users,
          top: "56%",
          left: "27%",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
          }}
        >

          <div className="
            flex
            flex-col
            items-center
            text-center
          ">

            <div className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              border
              border-white/8

              bg-black/30

              backdrop-blur-md
            ">

              <item.icon
                className="size-5 text-[#FF2D55]"
                strokeWidth={1.8}
              />

            </div>

            <div className="
              mt-3

              whitespace-pre-line

              text-white

              text-[13px]
              font-medium
              leading-tight
            ">
              {item.title}
            </div>

          </div>

        </div>
      ))}

      {/* CENTER */}
      {[
        {
          title: "Consumo\ncashless",
          icon: CreditCard,
          top: "30%",
        },
        {
          title: "Experiencias\nPremium",
          icon: Crown,
          top: "50%",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="
            absolute
            left-1/2
            -translate-x-1/2
          "
          style={{
            top: item.top,
          }}
        >

          <div className="
            flex
            flex-col
            items-center
            text-center
          ">

            <div className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-2xl

              border
              border-white/10

              bg-white/[0.05]

              backdrop-blur-md
            ">

              <item.icon
                className="size-6 text-[#FF2D55]"
                strokeWidth={1.8}
              />

            </div>

            <div className="
              mt-3

              whitespace-pre-line

              text-white

              text-[14px]
              font-medium
              leading-tight
            ">
              {item.title}
            </div>

          </div>

        </div>
      ))}

      {/* RIGHT */}
      {[
        {
          title: "Venta de\nmerchandising",
          icon: ShoppingBag,
          top: "21%",
          right: "22%",
        },
        {
          title: "Merchandising\nbajo demanda",
          icon: Shirt,
          top: "39%",
          right: "10%",
        },
        {
          title: "Seguros y\npréstamos",
          icon: ShieldCheck,
          top: "59%",
          right: "22%",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="absolute"
          style={{
            top: item.top,
            right: item.right,
          }}
        >

          <div className="
            flex
            flex-col
            items-center
            text-center
          ">

            <div className="
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              border
              border-white/8

              bg-black/30

              backdrop-blur-md
            ">

              <item.icon
                className="size-5 text-[#FF2D55]"
                strokeWidth={1.8}
              />

            </div>

            <div className="
              mt-3

              whitespace-pre-line

              text-white

              text-[13px]
              font-medium
              leading-tight
            ">
              {item.title}
            </div>

          </div>

        </div>
      ))}

    </div>

    {/* MORE */}
    <div className="
      absolute

      bottom-8
      left-1/2
      -translate-x-1/2

      lg:left-auto
      lg:translate-x-0
      lg:right-16
      lg:bottom-10

      text-white
      text-xl
      font-medium

      whitespace-nowrap
    ">

      <span className="text-[#FF2D55] mr-3">
        +
      </span>

      y mucho más...

    </div>

  </div>

</div>



              </div>

            </motion.div>

          </div>

        </div>

      </Container>

    </section>
  );
}