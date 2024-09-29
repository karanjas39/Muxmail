import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface bodyType {
  to: string;
  subject: string;
  text: string;
  app?: string;
  credentials: {
    email: string;
    password: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const API_KEY = process.env.API_KEY;
    const body: bodyType = await req.json();
    const apiKey = req.headers.get("x-api-key");

    if (!apiKey || apiKey !== API_KEY)
      throw new Error("Invalid or missing API key");

    const { to, subject, text, credentials, app = "Muxmail" } = body;

    if (!(to || subject || text)) throw new Error("All fields are required.");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: credentials.email,
        pass: credentials.password,
      },
    });

    const mailOptions = {
      from: `${app} <${credentials.email}>`,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully.", success: true },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      {
        success: false,
        message: err.message || "Failed to send email.",
      },
      { status: 400 }
    );
  }
}
