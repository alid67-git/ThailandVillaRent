"use client";

import { STAY_CATALOG } from "@/data/stays/catalog";
import { StayCard } from "@/components/StayCard";
import { useLocale } from "@/context/LocaleContext";

export function StaysListPage() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-12 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">{t("stays.title")}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">{t("stays.subtitle")}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAY_CATALOG.map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>
    </main>
  );
}
