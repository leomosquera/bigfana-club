import Header from "@/app/layout/Header";
import Hero from "@/app/components/sections/Hero";
import Problema from "@/app/components/sections/Problema";
import Solucion from "@/app/components/sections/Solucion";
import Ingresos from "@/app/components/sections/Ingresos";
import Ecosistema from "@/app/components/sections/Ecosistema";
import Resultados from "@/app/components/sections/Resultados";
import Implementacion from "@/app/components/sections/Implementacion";
import Diferencial from "@/app/components/sections/Diferencial";
import CTA from "@/app/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Problema />
      <Solucion />
      <Ingresos />
      <Ecosistema />
      <CTA />
    </main>
  );
}