import { Resend } from "resend";
import type { ContactDemoInput } from "@/lib/validations/contact-demo";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailText(data: ContactDemoInput): string {
  const lines = [
    `Nombre: ${data.name}`,
    `Club: ${data.club}`,
    `Cargo: ${data.role}`,
    `Email: ${data.email}`,
  ];

  if (data.phone) {
    lines.push(`Teléfono: ${data.phone}`);
  }

  if (data.message) {
    lines.push("", "Mensaje:", data.message);
  }

  return lines.join("\n");
}

export async function sendContactEmail(data: ContactDemoInput): Promise<void> {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!process.env.RESEND_API_KEY || !to || !from) {
    throw new Error("Missing email configuration");
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[BigFana Demo] ${data.club} — ${data.name}`,
    text: buildEmailText(data),
  });

  if (error) {
    throw new Error(error.message);
  }
}
