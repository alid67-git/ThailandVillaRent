"use client";

import { useLocale } from "@/context/LocaleContext";

export function LoadingText({ className }: { className?: string }) {
  const { t } = useLocale();
  return <div className={className}>{t("auth.loading")}</div>;
}
