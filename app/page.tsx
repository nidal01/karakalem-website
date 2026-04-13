import { CTASection } from "@/components/CTASection";
import { PhoneButton } from "@/components/PhoneButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="relative isolate border-b border-white/[0.06] bg-background"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-10 pt-0 md:gap-10 md:pb-14 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-12 lg:pb-16 xl:gap-14">
          {/* Metin: mobilde görselin altında; lg+ solda */}
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-6 xl:col-span-5">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
              Portre atölyesi
            </p>
            <h1
              id="hero-heading"
              className="font-display mt-3 max-w-[16ch] text-[clamp(2.15rem,5.2vw,3.85rem)] leading-[1.03] sm:max-w-[18ch] md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]"
            >
              Fotoğrafınız <span className="font-display-italic text-primary">sanata</span> dönüşsün.
            </h1>
            <p className="font-lead mt-5 max-w-xl text-pretty md:mt-6">
              Dört çizim tekniğiyle — karakalem, kuru fırçalama, kuru pastel, yağlı boya — yüzlerinizi ve
              anılarınızı duvarlara taşıyoruz. Net çizgi, güçlü kontrast, sessiz lüks.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <WhatsAppButton
                  message="Merhaba, portre siparişi hakkında bilgi almak istiyorum."
                  className="min-h-[52px] w-full justify-center px-8 sm:w-auto sm:min-w-[200px]"
                />
                <PhoneButton
                  variant="outline"
                  className="min-h-[52px] w-full justify-center sm:w-auto sm:min-w-[200px]"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <Link
                  href="/galeri"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-primary px-8 py-3.5 font-label text-sm font-bold tracking-[0.12em] text-on-primary transition hover:bg-primary-dim"
                >
                  GALERİYİ İNCELE
                </Link>
                <Link
                  href="/surec"
                  className="group inline-flex min-h-[48px] items-center gap-2 font-label text-sm font-semibold tracking-wide text-on-surface/90 transition hover:text-on-surface"
                >
                  Sipariş süreci
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-white/[0.08] pt-8 sm:grid-cols-4 sm:gap-x-6">
              {[
                ["4", "Teknik"],
                ["Özel", "Sipariş"],
                ["TR", "Teslimat"],
                ["99%", "Memnuniyet"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-label text-xl font-bold tabular-nums leading-none text-[#f2f0eb] sm:text-2xl md:text-3xl">
                    {value}
                  </dd>
                  <p className="mt-2 font-label text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-[11px]">
                    {label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          {/* Görsel: mobilde üstte akışta; lg+ sağda sabit oran */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-7">
            <figure className="relative mx-auto aspect-[5/6] w-full max-w-lg overflow-hidden rounded-2xl ring-1 ring-white/[0.08] sm:aspect-[4/5] sm:max-w-none lg:mx-0 lg:aspect-[4/5] lg:max-h-[min(62vh,calc(100svh-var(--navbar-h)-4.5rem))] lg:min-h-[17rem]">
              <Image
                src="/images/karakalem/980x2055-web2.jpg"
                alt="Karakalem portre çalışması"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 46vw"
                className="object-cover object-[center_15%] brightness-[0.78] contrast-[1.12] grayscale"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent lg:bg-gradient-to-l lg:from-background lg:via-background/20 lg:to-transparent"
                aria-hidden
              />
            </figure>
          </div>
        </div>
      </section>

      <CTASection
        title="Teklif almak için bir mesaj yeter"
        subtitle="WhatsApp üzerinden fotoğrafınızı ve tercih ettiğiniz boyutu yazın; size dönüş yapalım."
        message="Merhaba, portre fiyatı ve süreç hakkında bilgi istiyorum."
      />

      <section className="border-t border-white/[0.06] bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-section-title text-4xl md:text-5xl">
                Dört teknik,
                <br />
                tek standart.
              </h2>
              <p className="font-body-strong mt-6 text-lg">
                Her teknik farklı doku ve atmosfer sunar. Galeride sekmelerle filtreleyerek örnekleri
                inceleyebilirsiniz.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                { href: "/galeri?teknik=karakalem", t: "Karakalem", d: "Derinlik ve ince ton geçişleri." },
                {
                  href: "/galeri?teknik=kuru-fircalama",
                  t: "Kuru fırçalama",
                  d: "Yumuşak geçişler, pastel etki.",
                },
                { href: "/galeri?teknik=kuru-pastel", t: "Kuru pastel", d: "Renkli ve sıcak portreler." },
                { href: "/galeri?teknik=yagli-boya", t: "Yağlı boya", d: "Klasik tuval etkisi." },
              ].map(({ href, t, d }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-xl bg-surface-container-low p-6 ring-1 ring-outline-variant/15 transition hover:ring-outline-variant/35"
                >
                  <h3 className="font-section-title text-xl">{t}</h3>
                  <p className="mt-2 font-body text-sm font-medium text-on-surface-variant">{d}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-label text-xs font-bold uppercase tracking-wider text-primary group-hover:gap-2">
                    Görüntüle →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
                Seçkin örnekler
              </p>
              <h2 className="font-section-title mt-3 text-4xl md:text-5xl">Koleksiyondan</h2>
            </div>
            <Link
              href="/galeri"
              className="font-label text-sm font-bold uppercase tracking-wider text-primary hover:text-primary-fixed-dim"
            >
              Tüm galeri →
            </Link>
          </div>
          <div className="grid min-h-[720px] grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-2 md:gap-6 lg:min-h-[820px]">
            <Link
              href="/galeri?teknik=karakalem"
              className="group relative block min-h-[240px] overflow-hidden rounded-xl bg-surface-container-high md:col-span-8 md:row-span-1"
            >
              <Image
                src="/images/karakalem/1672580515949.jpg"
                alt="Karakalem"
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                Karakalem
              </span>
            </Link>
            <Link
              href="/galeri?teknik=kuru-fircalama"
              className="group relative block min-h-[240px] overflow-hidden rounded-xl bg-surface-container-high md:col-span-4"
            >
              <Image
                src="/images/kuru-fircalama/20211223_051551_edited.jpg"
                alt="Kuru fırçalama"
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                Kuru fırçalama
              </span>
            </Link>
            <Link
              href="/galeri?teknik=kuru-pastel"
              className="group relative block min-h-[240px] overflow-hidden rounded-xl bg-surface-container-high md:col-span-4"
            >
              <Image
                src="/images/kuru-pastel/kuru-4-web-1.jpg"
                alt="Kuru pastel"
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                Kuru pastel
              </span>
            </Link>
            <Link
              href="/galeri?teknik=yagli-boya"
              className="group relative block min-h-[240px] overflow-hidden rounded-xl bg-surface-container-high md:col-span-8"
            >
              <Image
                src="/images/yagli-boya/yagli-4-web-1.jpg"
                alt="Yağlı boya"
                fill
                className="object-cover grayscale transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 font-label text-xs font-bold uppercase tracking-[0.2em] text-primary-fixed-dim">
                Yağlı boya
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-section-title text-4xl leading-[1.1] md:text-5xl">
                “Çizgi sessizdir; <span className="font-display-italic text-primary">duyguyu</span> en yüksek seste
                anlatır.”
              </h2>
              <p className="font-body-strong mt-8 text-lg">
                Her siparişte ölçü, teknik ve teslim netleşir. Şeffaf süreç, güçlü iletişim.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <WhatsAppButton
                message="Merhaba, portre siparişi için teklif almak istiyorum."
                fullWidth
                showIcon={false}
                className="justify-between px-6 py-5 text-base"
              >
                <span className="flex w-full items-center justify-between gap-3">
                  WhatsApp ile teklif iste
                  <span className="material-symbols-outlined shrink-0">chat</span>
                </span>
              </WhatsAppButton>
              <PhoneButton
                variant="outline"
                fullWidth
                className="justify-between px-6 py-5 text-base ring-1 ring-outline-variant/30"
              >
                <span className="flex w-full items-center justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined">call</span>
                    Hemen ara
                  </span>
                  <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </PhoneButton>
              <Link
                href="/surec"
                className="flex items-center justify-between rounded-xl bg-surface-container-low px-6 py-5 font-label text-sm font-bold text-on-surface ring-1 ring-outline-variant/20 transition hover:bg-surface-bright"
              >
                Sipariş sürecini oku
                <span className="material-symbols-outlined">chevron_right</span>
              </Link>
              <Link
                href="/fiyatlar"
                className="flex items-center justify-between rounded-xl bg-surface-container-low px-6 py-5 font-label text-sm font-bold text-on-surface ring-1 ring-outline-variant/20 transition hover:bg-surface-bright"
              >
                Boyutlar ve fiyatlar
                <span className="material-symbols-outlined">chevron_right</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
