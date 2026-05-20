"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Problema", href: "#problema" },
  { label: "Cómo funciona", href: "#solucion" },
  { label: "Ingresos", href: "#ingresos" },
  { label: "Ecosistema", href: "#ecosistema" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#000000]/80 backdrop-blur border-b border-[#FF2D55]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <img
            src="/logo-bigfana.png"
            alt="BigFana"
            className="h-6 md:h-10 object-contain"
          />

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            
            {/* CTA */}
            <button className="hidden md:block h-10 px-5 rounded-lg bg-[#FF2D55] text-sm font-semibold text-white hover:opacity-90 transition">
              Agendar demo
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0F1A] flex flex-col items-center justify-center gap-8 text-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <button className="mt-4 h-12 px-6 rounded-xl bg-[#FF2D55] font-semibold">
            Agendar demo
          </button>
        </div>
      )}
    </>
  );
}