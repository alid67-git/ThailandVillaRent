"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { LoadingText } from "@/components/LoadingText";

type ProviderFlags = {
  google: boolean;
  apple: boolean;
  email: boolean;
};

function SignInForm({ providers }: { providers: ProviderFlags }) {
  const { t } = useLocale();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const hasOAuth = providers.google || providers.apple;
  const hasAny = hasOAuth || providers.email;

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-neutral-200 bg-white p-8 shadow-lift-lg dark:border-ink-700 dark:bg-ink-900">
      <h1 className="font-heading text-2xl font-bold text-ink-950 dark:text-white">
        {t("auth.title")}
      </h1>
      <p className="mt-2 text-sm text-neutral-500">{t("auth.subtitle")}</p>

      {!hasAny && (
        <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-200">
          {t("auth.setupNote")}
        </p>
      )}

      {hasOAuth && (
        <div className="mt-8 space-y-3">
          {providers.google && (
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl })}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-neutral-50 dark:border-ink-600 dark:bg-ink-800"
            >
              <span>{t("auth.google")}</span>
            </button>
          )}
          {providers.apple && (
            <button
              type="button"
              onClick={() => signIn("apple", { callbackUrl })}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-900"
            >
              <span>{t("auth.apple")}</span>
            </button>
          )}
        </div>
      )}

      {providers.email && hasOAuth && (
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200 dark:bg-ink-700" />
          <span className="text-xs text-neutral-400">{t("auth.orEmail")}</span>
          <div className="h-px flex-1 bg-neutral-200 dark:bg-ink-700" />
        </div>
      )}

      {providers.email &&
        (emailSent ? (
          <p className="mt-8 rounded-xl bg-brand-50 p-4 text-sm text-brand-800 dark:bg-brand-500/10 dark:text-brand-200">
            {t("auth.emailSent")}
          </p>
        ) : (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await signIn("nodemailer", { email, callbackUrl, redirect: false });
              setEmailSent(true);
            }}
            className={`space-y-3 ${hasOAuth ? "" : "mt-8"}`}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("auth.emailPlaceholder")}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm dark:border-ink-600 dark:bg-ink-800"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-brand-600 py-3 text-sm font-bold text-white hover:bg-brand-500"
            >
              {t("auth.emailContinue")}
            </button>
          </form>
        ))}

      {hasAny && (
        <p className="mt-6 text-center text-xs text-neutral-400">{t("auth.setupNote")}</p>
      )}
      <Link href="/" className="mt-4 block text-center text-sm text-brand-600 hover:underline">
        ← {t("detail.back")}
      </Link>
    </div>
  );
}

export function SignInPage({ providers }: { providers: ProviderFlags }) {
  return (
    <main className="min-h-[70vh] bg-neutral-50 px-4 py-16 dark:bg-ink-950">
      <Suspense fallback={<LoadingText className="text-center" />}>
        <SignInForm providers={providers} />
      </Suspense>
    </main>
  );
}
