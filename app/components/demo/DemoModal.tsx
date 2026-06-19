"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import DemoForm from "@/app/components/demo/DemoForm";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function DemoModal({ open, onClose }: DemoModalProps) {
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (open) {
      setFormKey((current) => current + 1);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <button
        type="button"
        aria-label="Cerrar"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="
          relative z-10
          w-full
          max-w-[640px]
          max-h-[90vh]
          min-h-0
          overflow-y-auto
          overflow-x-hidden
          overscroll-contain
          rounded-[32px] md:rounded-[40px]
          border-[3px] border-[#6B1224]
          bg-[rgba(0,0,0,0.45)]
          px-6 py-8 md:px-10 md:py-10
          shadow-[0_0_0_1px_rgba(255,45,85,0.15),0_0_45px_rgba(120,10,30,0.35),0_0_120px_rgba(120,10,30,0.22)]
          backdrop-blur-xl
        "
      >
        <div
          className="
            pointer-events-none absolute inset-0
            rounded-[32px] md:rounded-[40px]
            border-2 border-[#FF2D55]/25 opacity-90 blur-[2px]
          "
        />

        <div
          className="
            pointer-events-none absolute inset-0
            rounded-[32px] md:rounded-[40px]
            bg-[radial-gradient(circle_at_center,rgba(255,45,85,0.14),transparent_70%)]
          "
        />

        <div className="relative z-10 min-w-0">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#FF2D55]">
                Demo personalizada
              </p>
              <h2
                id="demo-modal-title"
                className="text-2xl font-bold tracking-tight text-white md:text-3xl"
              >
                Agendá tu demo con BigFana
              </h2>
              <p className="mt-2 text-sm text-white/60 md:text-base">
                Completá el formulario y te contactamos para coordinar una
                demostración personalizada.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                flex size-10 shrink-0 items-center justify-center
                rounded-xl border border-white/10 bg-white/5
                text-white/70 transition
                hover:border-[#FF2D55]/40 hover:text-white
              "
              aria-label="Cerrar modal"
            >
              <X className="size-5" />
            </button>
          </div>

          <DemoForm key={formKey} />
        </div>
      </div>
    </div>
  );
}
