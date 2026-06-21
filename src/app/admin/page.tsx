import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { STAY_CATALOG, REGIONS } from "@/data/stays/catalog";

export const dynamic = "force-dynamic";

function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function maskEmail(value?: string) {
  if (!value) return "Not configured";
  const [name, domain] = value.split("@");
  if (!domain) return value;
  return `${name.slice(0, 2)}***@${domain}`;
}

export default async function AdminPage() {
  const session = await auth();
  const callbackUrl = encodeURIComponent("/admin");

  if (!session?.user?.email) {
    redirect(`/auth/signin?callbackUrl=${callbackUrl}`);
  }

  const adminEmails = getAdminEmails();
  const currentEmail = session.user.email.toLowerCase();
  const isAdmin = adminEmails.includes(currentEmail);
  const emailConfigured = Boolean(process.env.EMAIL_SERVER && process.env.EMAIL_FROM);
  const bookingInbox = process.env.BOOKING_REQUEST_TO || process.env.EMAIL_FROM;

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-neutral-50 px-4 py-12 dark:bg-ink-950 sm:px-6">
        <section className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-lift dark:border-ink-700 dark:bg-ink-900">
          <p className="text-xs font-bold uppercase tracking-wide text-red-600">Admin access</p>
          <h1 className="mt-2 font-heading text-2xl font-bold text-ink-950 dark:text-white">
            Bu hesap admin listesinde değil
          </h1>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Giriş yapan hesap: {session.user.email}. Erişim vermek için canlı ortamda
            ADMIN_EMAILS değişkenine bu e-postayı ekleyin.
          </p>
          <Link href="/" className="mt-6 inline-flex rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white">
            Siteye dön
          </Link>
        </section>
      </main>
    );
  }

  const stats = [
    { label: "Toplam ilan", value: STAY_CATALOG.length },
    { label: "Bölge", value: REGIONS.length },
    { label: "E-posta bildirimi", value: emailConfigured ? "Aktif" : "Eksik" },
    { label: "Talep kayıt modu", value: "E-posta" },
  ];

  const pipeline = [
    "Yeni talep geldi",
    "Villa/otel uygunluğu kontrol edildi",
    "Fiyat ve şartlar müşteriye gönderildi",
    "Müşteri ödeme yöntemine yönlendirildi",
    "Otel/villa sahibi rezervasyonu onayladı",
    "Konaklama öncesi hatırlatma gönderildi",
  ];

  const checklist = [
    "Her villa için gerçek işletme iletişim kişisi ve WhatsApp hattı doğrulanacak.",
    "Komisyon oranı, iptal, no-show ve iade şartları yazılı sözleşmeye bağlanacak.",
    "Gelen talepler aynı gün içinde yanıtlanacak şekilde operasyon sorumlusu atanacak.",
    "Müşteriye ödeme linki yalnızca tesis veya onaylı ödeme sağlayıcı üzerinden gönderilecek.",
    "Bir sonraki adımda talep kayıtları Postgres/Supabase gibi kalıcı veritabanına alınacak.",
  ];

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="border-b border-neutral-200 bg-white px-4 py-8 dark:border-ink-700 dark:bg-ink-900 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Operations</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-heading text-3xl font-extrabold text-ink-950 dark:text-white">
                Admin panel
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-300">
                İlk canlı sürüm için ödeme almayan rezervasyon talebi akışını buradan yöneteceğiz.
                Şu aşamada talepler e-posta kutusuna düşer; panel operasyon kontrol merkezi olarak hazır.
              </p>
            </div>
            <Link
              href="/stays"
              className="inline-flex justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-bold text-brand-700 hover:border-brand-300 dark:border-ink-600 dark:bg-ink-800 dark:text-brand-200"
            >
              İlanları gör
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-ink-700 dark:bg-ink-900">
              <p className="text-xs font-bold uppercase tracking-wide text-neutral-500">{item.label}</p>
              <p className="mt-2 text-2xl font-extrabold text-ink-950 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900 lg:col-span-2">
            <h2 className="font-heading text-xl font-bold text-ink-950 dark:text-white">
              Rezervasyon talebi akışı
            </h2>
            <div className="mt-5 space-y-3">
              {pipeline.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-xl border border-neutral-100 p-4 dark:border-ink-700">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-lg font-bold text-ink-950 dark:text-white">
                Bildirim ayarları
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-neutral-500">SMTP</dt>
                  <dd className={emailConfigured ? "text-emerald-700" : "text-red-700"}>
                    {emailConfigured ? "Hazır" : "EMAIL_SERVER / EMAIL_FROM eksik"}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-500">Talep kutusu</dt>
                  <dd className="text-neutral-700 dark:text-neutral-300">{maskEmail(bookingInbox)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-500">Admin hesabı</dt>
                  <dd className="text-neutral-700 dark:text-neutral-300">{session.user.email}</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
              <h2 className="font-heading text-lg font-bold text-ink-950 dark:text-white">
                Canlıya çıkış notu
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                Bu sürüm ödeme almaz. Müşteri talep bırakır, ekip uygunluğu kontrol eder, ödeme tesise
                veya onaylı ödeme linkine yönlendirilir.
              </p>
            </section>
          </aside>
        </div>

        <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
          <h2 className="font-heading text-xl font-bold text-ink-950 dark:text-white">
            Operasyon kontrol listesi
          </h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="rounded-xl bg-neutral-50 p-4 text-sm text-neutral-700 dark:bg-ink-800 dark:text-neutral-300">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
