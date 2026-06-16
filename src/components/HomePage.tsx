"use client";

import Link from "next/link";
import Image from "next/image";
import { STAY_CATALOG, REGIONS } from "@/data/stays/catalog";
import { STAY_IMAGES } from "@/data/images";
import { StayCard } from "@/components/StayCard";
import { SearchBar } from "@/components/SearchBar";
import { useLocale } from "@/context/LocaleContext";

export function HomePage() {
  const { t } = useLocale();

  return (
    <main>
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={STAY_IMAGES.villaPool}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950/90" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            {t("home.title")}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{t("home.subtitle")}</p>
          <div className="mt-10 max-w-4xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white py-8 dark:border-ink-700 dark:bg-ink-900">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-4 sm:px-6">
          {REGIONS.map((r) => (
            <Link
              key={r}
              href={`/stays?region=${r}`}
              className="rounded-2xl border border-neutral-200 px-8 py-4 text-center transition hover:border-brand-400 hover:shadow-md dark:border-ink-600"
            >
              <span className="text-2xl">{r === "phuket" ? "🏝️" : "🌴"}</span>
              <p className="mt-2 font-heading font-bold">{t(`regions.${r}`)}</p>
              <p className="text-xs text-neutral-500">
                {STAY_CATALOG.filter((s) => s.region === r).length} {t("stays.listings")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold">{t("home.featured")}</h2>
          <Link href="/stays" className="text-sm font-semibold text-brand-600">
            {t("home.viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAY_CATALOG.slice(0, 3).map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>

      <section className="bg-brand-50 px-4 py-12 dark:bg-ink-900 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-2xl font-bold">{t("home.exploreTitle")}</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">{t("home.exploreHint")}</p>
          <Link
            href="/destinations"
            className="mt-6 inline-flex rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-500"
          >
            {t("nav.destinations")}
          </Link>
        </div>
      </section>
    </main>
  );
}
