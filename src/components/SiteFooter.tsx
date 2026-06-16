"use client";

import { APP_VERSION_LABEL } from "@/lib/version";
import { useLocale } from "@/context/LocaleContext";

export function SiteFooter() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-neutral-200 bg-white py-8 dark:border-ink-700 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-neutral-500 sm:px-6 dark:text-neutral-400">
        <p>{t("footer.tagline")}</p>
        <p className="mt-1">{t("footer.copyright")}</p>
        <p className="mt-2 text-xs text-neutral-400">{APP_VERSION_LABEL}</p>
      </div>
    </footer>
  );
}
