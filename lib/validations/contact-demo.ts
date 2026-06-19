import { z } from "zod";

export const contactDemoSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .max(100, "Máximo 100 caracteres"),
  club: z
    .string()
    .trim()
    .min(1, "El club es obligatorio")
    .max(150, "Máximo 150 caracteres"),
  role: z
    .string()
    .trim()
    .min(1, "El cargo es obligatorio")
    .max(100, "Máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Ingresa un email válido")
    .max(254, "Email demasiado largo"),
  phone: z
    .string()
    .trim()
    .max(30, "Máximo 30 caracteres")
    .optional(),
  message: z
    .string()
    .trim()
    .max(2000, "Máximo 2000 caracteres")
    .optional(),
});

export type ContactDemoInput = z.infer<typeof contactDemoSchema>;
