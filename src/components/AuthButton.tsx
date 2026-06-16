"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";

export function AuthButton() {
  const { data: session, status } = useSession();
  const { t } = useLocale();

  if (status === "loading") {
    return <span className="text-sm text-white/60">{t("auth.loading")}</span>;
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden max-w-[120px] truncate text-sm text-white/80 sm:inline">
          {session.user.name ?? session.user.email}
        </span>
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-lg border border-white/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/10"
        >
          {t("auth.signOut")}
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/auth/signin"
      className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/15"
    >
      {t("auth.signIn")}
    </Link>
  );
}

export function BookButton({ staySlug }: { staySlug: string }) {
  const { data: session } = useSession();
  const { t } = useLocale();

  if (!session) {
    return (
      <Link
        href={`/auth/signin?callbackUrl=/stays/${staySlug}`}
        className="inline-flex w-full justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-500"
      >
        {t("auth.signInToBook")}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-500"
    >
      {t("detail.book")}
    </button>
  );
}
