import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, projectType, budget } = body;

    // SMTP-Transporter (Hostinger)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail zusammenbauen
    await transporter.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `Neue Anfrage über witterlabs.de – ${name || "Unbekannter Kontakt"}`,
      text: `
Name: ${name || "-"}
E-Mail: ${email || "-"}

Projekt-Typ: ${projectType || "-"}
Budget: ${budget || "-"}

Nachricht:
${message || "-"}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kontakt-API Fehler:", err);
    return NextResponse.json(
      { ok: false, error: "Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
