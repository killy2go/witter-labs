import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, projectType, budget, message } = body as {
      name?: string;
      email?: string;
      projectType?: string;
      budget?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Transporter mit Hostinger-SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // 465 = SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const lines = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      projectType && `Projekt-Typ: ${projectType}`,
      budget && `Budget: ${budget}`,
      "",
      "Nachricht:",
      message,
    ].filter(Boolean);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Neue Projektanfrage von ${name} (Witter Labs)`,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Kontakt-API Fehler:", err);
    return NextResponse.json(
      { ok: false, error: "Fehler beim Versenden der Nachricht." },
      { status: 500 }
    );
  }
}
