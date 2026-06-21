import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getStayBySlug } from "@/data/stays/catalog";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { getStayContentForItem } from "@/i18n/stays";

type BookingRequestBody = {
  staySlug?: string;
  locale?: string;
  name?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  message?: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function resolveLocale(value: unknown): Locale {
  return typeof value === "string" && locales.includes(value as Locale)
    ? (value as Locale)
    : defaultLocale;
}

export async function POST(request: Request) {
  let body: BookingRequestBody;

  try {
    body = (await request.json()) as BookingRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const staySlug = clean(body.staySlug);
  const stay = getStayBySlug(staySlug);
  if (!stay) {
    return NextResponse.json({ error: "Stay not found" }, { status: 404 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const checkIn = clean(body.checkIn);
  const checkOut = clean(body.checkOut);
  const message = clean(body.message);
  const guests = Number(body.guests || 1);

  if (!name || !email || !phone || !checkIn || !checkOut || guests < 1) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.EMAIL_SERVER || !process.env.EMAIL_FROM) {
    return NextResponse.json({ error: "Email is not configured" }, { status: 503 });
  }

  const locale = resolveLocale(body.locale);
  const content = getStayContentForItem(locale, stay);
  const to = process.env.BOOKING_REQUEST_TO || process.env.EMAIL_FROM;
  const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER);
  const subject = `Booking request: ${content.name}`;
  const text = [
    `Property: ${content.name}`,
    `Slug: ${stay.slug}`,
    `Region: ${stay.region}`,
    `Price from: ${stay.priceFromUsd} USD/night`,
    "",
    `Guest name: ${name}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    `Check-in: ${checkIn}`,
    `Check-out: ${checkOut}`,
    `Guests: ${guests}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");

  try {
    await transporter.sendMail({
      to,
      from: process.env.EMAIL_FROM,
      replyTo: email,
      subject,
      text,
    });
  } catch {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
