"use client";

import { useActionState } from "react";
import {
  submitContactDemo,
  type ContactDemoState,
} from "@/app/actions/contact-demo";
import { Loader2 } from "lucide-react";

const SUCCESS_MESSAGE =
  "¡Gracias por tu interés en BigFana! Recibimos tu consulta y nos pondremos en contacto dentro de las próximas 24 horas hábiles para coordinar una demostración personalizada.";

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#FF2D55]/50";

const labelClassName = "mb-2 block text-sm font-medium text-white/80";

export default function DemoForm() {
  const [state, formAction, isPending] = useActionState<
    ContactDemoState | null,
    FormData
  >(submitContactDemo, null);

  if (state?.ok) {
    return (
      <div className="py-4 text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full border border-[#FF2D55]/30 bg-[#FF2D55]/10 shadow-[0_0_30px_rgba(255,45,85,0.25)]">
          <span className="text-2xl text-[#FF2D55]">✓</span>
        </div>
        <p className="text-base leading-relaxed text-white/80">{SUCCESS_MESSAGE}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="min-w-0 space-y-5 overflow-hidden" noValidate>
      <div aria-hidden="true" className="hidden">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field
          label="Nombre y Apellido *"
          name="name"
          type="text"
          autoComplete="name"
          errors={state?.fieldErrors?.name}
        />
        <Field
          label="Club / Institución *"
          name="club"
          type="text"
          autoComplete="organization"
          errors={state?.fieldErrors?.club}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field
          label="Cargo *"
          name="role"
          type="text"
          autoComplete="organization-title"
          errors={state?.fieldErrors?.role}
        />
        <Field
          label="Email *"
          name="email"
          type="email"
          autoComplete="email"
          errors={state?.fieldErrors?.email}
        />
      </div>

      <Field
        label="Teléfono"
        name="phone"
        type="tel"
        autoComplete="tel"
        errors={state?.fieldErrors?.phone}
      />

      <div>
        <label htmlFor="message" className={labelClassName}>
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Contanos sobre tu club y qué te gustaría ver en la demo..."
          className={`${inputClassName} resize-none`}
        />
        {state?.fieldErrors?.message?.[0] && (
          <p className="mt-1.5 text-sm text-[#FF2D55]">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      {state?.error && (
        <p className="rounded-xl border border-[#FF2D55]/30 bg-[#FF2D55]/10 px-4 py-3 text-sm text-[#FF2D55]">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="
          flex h-14 w-full items-center justify-center gap-2
          rounded-2xl bg-[#FF2D55]
          text-lg font-semibold text-white
          shadow-[0_0_35px_rgba(255,45,85,0.35)]
          transition-all duration-200
          hover:shadow-[0_0_45px_rgba(255,45,85,0.55)]
          disabled:cursor-not-allowed disabled:opacity-70
        "
      >
        {isPending ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Enviando...
          </>
        ) : (
          "Agendar demo"
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  errors?: string[];
};

function Field({ label, name, type, autoComplete, errors }: FieldProps) {
  const id = name;

  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={inputClassName}
      />
      {errors?.[0] && (
        <p className="mt-1.5 text-sm text-[#FF2D55]">{errors[0]}</p>
      )}
    </div>
  );
}
