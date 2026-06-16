"use client";

import Image from "next/image";
import Link from "next/link";
import type { StayCatalogItem } from "@/data/stays/types";
import { useLocale } from "@/context/LocaleContext";
import { getStayContent } from "@/i18n/stays";
import type { StaySlug } from "@/data/stays/types";
import { BookButton } from "@/components/AuthButton";
import { StayProximitySection } from "@/components/StayProximitySection";

function formatMeters(
  m: number,
  t: (key: "detail.distanceM" | "detail.distanceKm", params?: Record<string, string | number>) => string,
) {
  if (m < 1000) return t("detail.distanceM", { m });
  return t("detail.distanceKm", { km: (m / 1000).toFixed(1) });
}

export function StayDetailView({ stay }: { stay: StayCatalogItem }) {
  const { locale, t } = useLocale();
  const content = getStayContent(locale, stay.slug as StaySlug);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${stay.lat},${stay.lng}`;
  const airportLabel =
    stay.airportKey === "hkt" ? t("airports.hkt") : t("airports.usm");
  const regionLabel =
    stay.region === "phuket" ? t("regions.phuket") : t("regions.koh-samui");

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <Link
            href="/stays"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white"
          >
            ← {t("detail.back")}
          </Link>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-2">
              <Image
                src={stay.image}
                alt={content.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </div>
            <div className="flex flex-col justify-end rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm text-white/70">
                {content.areas[stay.areaKey]} · {regionLabel}
              </p>
              <h1 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">{content.name}</h1>
              <p className="mt-1 text-sm text-white/60">{content.localName}</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-xl bg-white/20 px-3 py-1.5 text-lg font-bold">
                  {stay.rating}/10
                </span>
                <span className="text-sm text-white/80">{content.ratingLabel}</span>
              </div>
              <p className="mt-4 text-sm text-white/75">{content.address}</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-brand-400"
              >
                {t("detail.showOnMap")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-xl font-bold">{t("detail.overview")}</h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300">{content.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {content.longDescription}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {stay.highlightKeys.map((key) => (
                  <span
                    key={key}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-200"
                  >
                    {content.highlights[key]}
                  </span>
                ))}
              </div>
            </section>

            <StayProximitySection stay={stay} />

            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-xl font-bold">{t("detail.rooms")}</h2>
              <div className="mt-4 space-y-4">
                {content.rooms.map((room) => (
                  <div
                    key={room.name}
                    className="rounded-xl border border-neutral-100 p-4 dark:border-ink-700"
                  >
                    <h3 className="font-semibold text-ink-950 dark:text-white">{room.name}</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{room.beds}</p>
                    {room.size && (
                      <p className="mt-1 text-xs text-neutral-500">{room.size}</p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2">
                      {room.features.map((f) => (
                        <span key={f} className="text-xs text-neutral-500">
                          · {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-xl font-bold">{t("detail.amenities")}</h2>
              <h3 className="mt-4 text-sm font-semibold text-neutral-500">{t("detail.popular")}</h3>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {content.amenitiesPopular.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="text-brand-500">✓</span> {a}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-sm font-semibold text-neutral-500">{t("detail.allAmenities")}</h3>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {content.amenitiesAll.map((a) => (
                  <li key={a} className="text-sm text-neutral-600 dark:text-neutral-400">
                    · {a}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-xl font-bold">{t("detail.policies")}</h2>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  [t("detail.checkIn"), content.policies.checkIn],
                  [t("detail.checkOut"), content.policies.checkOut],
                  [t("detail.children"), content.policies.children],
                  [t("detail.cribs"), content.policies.cribs],
                  [t("detail.breakfast"), content.policies.breakfast],
                  [t("detail.deposit"), content.policies.deposit],
                  [t("detail.pets"), content.policies.pets],
                  [t("detail.age"), content.policies.age],
                  content.policies.quietHours && [t("detail.quietHours"), content.policies.quietHours],
                  content.policies.payment && [t("detail.payment"), content.policies.payment],
                ]
                  .filter(Boolean)
                  .map((row) => {
                    const [label, value] = row as [string, string];
                    return (
                      <div key={label} className="border-b border-neutral-100 pb-3 dark:border-ink-700">
                        <dt className="font-semibold text-ink-950 dark:text-white">{label}</dt>
                        <dd className="mt-1 text-neutral-600 dark:text-neutral-400">{value}</dd>
                      </div>
                    );
                  })}
              </dl>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-xl font-bold">{t("detail.faq")}</h2>
              <div className="mt-4 space-y-4">
                {content.faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="font-semibold text-ink-950 dark:text-white">{item.q}</h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lift dark:border-ink-700 dark:bg-ink-900">
              <p className="text-sm text-neutral-500">{t("stays.fromPrice", { price: stay.priceFromUsd })}</p>
              <p className="mt-1 text-2xl font-bold text-brand-600">
                ⭐ {stay.starRating} · {stay.rating}/10
              </p>
              <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <p>📞 {stay.phone}</p>
                {stay.email && <p>✉️ {stay.email}</p>}
                {stay.opened && (
                  <p>
                    {t("detail.opened")}: {stay.opened}
                    {stay.renovated ? ` · ${t("detail.renovated")}: ${stay.renovated}` : ""}
                  </p>
                )}
                <p>
                  {t("detail.roomCount")}: {stay.roomCount} · {stay.maxGuests} {t("stays.guests")}
                </p>
                <BookButton staySlug={stay.slug} />
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h3 className="font-heading font-bold">{t("detail.location")}</h3>
              <p className="mt-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                {t("detail.airport")}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {airportLabel} — {stay.airportKm} km ({stay.airportDriveMin}{" "}
                {t("detail.min")})
              </p>

              <p className="mt-4 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                {t("detail.landmarks")}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                {stay.landmarks.map((lm) => (
                  <li key={lm.id}>
                    {content.landmarks[lm.id]} — {formatMeters(lm.meters, t)}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                {t("detail.beaches")}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                {stay.beaches.map((b) => (
                  <li key={b.id}>
                    {content.beaches[b.id]} — {b.km} km ({b.driveMin} {t("detail.min")})
                  </li>
                ))}
              </ul>
            </div>

            {stay.images.length > 1 && (
              <div className="grid grid-cols-2 gap-2">
                {stay.images.slice(1, 5).map((img) => (
                  <div key={img} className="relative aspect-square overflow-hidden rounded-xl">
                    <Image src={img} alt="" fill className="object-cover" sizes="150px" />
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
