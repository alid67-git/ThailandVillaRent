"use client";

import { useState } from "react";
import type { StayCatalogItem } from "@/data/stays/types";
import { useLocale } from "@/context/LocaleContext";
import { getStayContentForItem } from "@/i18n/stays";

const copy = {
  tr: {
    title: "Rezervasyon talebi",
    intro: "Kart bilgisi almadan talebinizi iletin. Ekip uygunluğu kontrol edip size dönecek.",
    name: "Ad soyad",
    email: "E-posta",
    phone: "Telefon / WhatsApp",
    checkIn: "Giriş",
    checkOut: "Çıkış",
    guests: "Misafir",
    message: "Notunuz",
    messagePlaceholder: "Özel istek, varış saati veya ödeme tercihi...",
    submit: "Talep gönder",
    sending: "Gönderiliyor...",
    success: "Talebiniz alındı. Uygunluk kontrolünden sonra sizinle iletişime geçeceğiz.",
    error: "Talep gönderilemedi. Lütfen daha sonra tekrar deneyin.",
    required: "Lütfen zorunlu alanları doldurun.",
    noPayment: "Bu aşamada ödeme alınmaz.",
  },
  en: {
    title: "Booking request",
    intro: "Send a request without entering card details. The team will check availability and reply.",
    name: "Full name",
    email: "Email",
    phone: "Phone / WhatsApp",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    message: "Message",
    messagePlaceholder: "Special request, arrival time or payment preference...",
    submit: "Send request",
    sending: "Sending...",
    success: "Your request was received. We will contact you after checking availability.",
    error: "Could not send the request. Please try again later.",
    required: "Please fill in the required fields.",
    noPayment: "No payment is taken at this stage.",
  },
} as const;

type CopyLocale = keyof typeof copy;

function getCopy(locale: string) {
  return copy[(locale in copy ? locale : "en") as CopyLocale];
}

export function BookingRequestForm({ stay }: { stay: StayCatalogItem }) {
  const { locale } = useLocale();
  const content = getStayContentForItem(locale, stay);
  const c = getCopy(locale);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      staySlug: stay.slug,
      locale,
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      checkIn: String(formData.get("checkIn") ?? ""),
      checkOut: String(formData.get("checkOut") ?? ""),
      guests: Number(formData.get("guests") ?? 1),
      message: String(formData.get("message") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.checkIn || !payload.checkOut) {
      setStatus("error");
      setError(c.required);
      return;
    }

    try {
      const response = await fetch("/api/booking-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setError(c.error);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lift dark:border-ink-700 dark:bg-ink-900"
    >
      <h2 className="font-heading text-xl font-bold text-ink-950 dark:text-white">{c.title}</h2>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{c.intro}</p>
      <p className="mt-3 rounded-xl bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
        {content.name} · {c.noPayment}
      </p>

      <div className="mt-5 grid gap-3">
        <input
          name="name"
          required
          placeholder={c.name}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
        />
        <input
          name="email"
          type="email"
          required
          placeholder={c.email}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
        />
        <input
          name="phone"
          required
          placeholder={c.phone}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {c.checkIn}
            <input
              name="checkIn"
              type="date"
              required
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm font-normal normal-case tracking-normal dark:border-ink-600 dark:bg-ink-800"
            />
          </label>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {c.checkOut}
            <input
              name="checkOut"
              type="date"
              required
              className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm font-normal normal-case tracking-normal dark:border-ink-600 dark:bg-ink-800"
            />
          </label>
        </div>
        <input
          name="guests"
          type="number"
          min={1}
          max={40}
          defaultValue={Math.min(2, stay.maxGuests)}
          placeholder={c.guests}
          className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
        />
        <textarea
          name="message"
          rows={4}
          placeholder={c.messagePlaceholder}
          className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
        />
      </div>

      {status === "success" && (
        <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200">
          {c.success}
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-800 dark:bg-red-500/10 dark:text-red-200">
          {error || c.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 inline-flex w-full justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? c.sending : c.submit}
      </button>
    </form>
  );
}
