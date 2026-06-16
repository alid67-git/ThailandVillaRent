"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AuthButton } from "@/components/AuthButton";
import { useLocale } from "@/context/LocaleContext";

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-lg">
            🏝️
          </span>
          <span className="font-heading text-sm font-bold tracking-wide text-white sm:text-base">
            Thailand Villa Rent
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/stays"
            className="hidden text-sm font-medium text-white/80 transition hover:text-white sm:inline"
          >
            {t("nav.stays")}
          </Link>
          <Link
            href="/destinations"
            className="hidden text-sm font-medium text-white/80 transition hover:text-white sm:inline"
          >
            {t("nav.destinations")}
          </Link>
          <LanguageSwitcher />
          <AuthButton />
        </nav>
      </div>
    </header>
  );
}
