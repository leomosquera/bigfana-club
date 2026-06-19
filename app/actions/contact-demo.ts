"use server";

import { sendContactEmail } from "@/lib/email/send-contact-email";
import { contactDemoSchema } from "@/lib/validations/contact-demo";

export type ContactDemoState =
  | { ok: true }
  | {
      ok: false;
      error?: string;
      fieldErrors?: Record<string, string[]>;
    };

const GENERIC_ERROR =
  "Ocurrió un error al enviar tu solicitud. Por favor intenta nuevamente.";

function parseOptional(value: FormDataEntryValue | null): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed === "" ? undefined : trimmed;
}

export async function submitContactDemo(
  _prev: ContactDemoState | null,
  formData: FormData
): Promise<ContactDemoState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  const parsed = contactDemoSchema.safeParse({
    name: formData.get("name"),
    club: formData.get("club"),
    role: formData.get("role"),
    email: formData.get("email"),
    phone: parseOptional(formData.get("phone")),
    message: parseOptional(formData.get("message")),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};

    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string") {
        fieldErrors[key] ??= [];
        fieldErrors[key].push(issue.message);
      }
    }

    return { ok: false, fieldErrors };
  }

  try {
    await sendContactEmail(parsed.data);
    return { ok: true };
  } catch (error) {
    console.error("CONTACT DEMO ERROR");
    console.error(error);
  
    return {
      ok: false,
      error: GENERIC_ERROR,
    };
  }
}
