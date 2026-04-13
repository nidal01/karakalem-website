import { PhoneButton } from "@/components/PhoneButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Süreç | Karakalem Atölye",
  description: "Sipariş süreci: fotoğraf, eskiz, çizim, teslimat.",
};

const steps = [
  {
    icon: "photo_camera",
    title: "1. Fotoğraf",
    text: "Net, iyi ışıklı referans fotoğrafını paylaşın. Çözünürlük detay için önemlidir.",
  },
  {
    icon: "edit_square",
    title: "2. Eskiz & onay",
    text: "Kompozisyon ve teknik için taslak sunulur; düzeltmeler birlikte netleşir.",
  },
  {
    icon: "brush",
    title: "3. Çizim",
    text: "Seçtiğiniz teknikle (karakalem, kuru fırça, pastel, yağlı boya) eser üretilir.",
  },
  {
    icon: "package_2",
    title: "4. Teslimat",
    text: "Koruyucu paketleme ve anlaşılan sürede kargo veya elden teslim.",
  },
] as const;

export default function SurecPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 lg:px-12">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">Nasıl çalışıyoruz</p>
          <h1 className="font-section-title mt-3 text-4xl md:text-6xl">Sipariş süreci</h1>
          <p className="font-body-strong mt-6 max-w-2xl text-lg">
            Dört adımda net iletişim: fotoğrafınızı alırız, taslağı onaylatırız, çizeriz ve güvenle teslim ederiz.
          </p>
        </div>
      </section>
      <section className="bg-surface py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.title} className="flex flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-surface-container-high text-primary ring-1 ring-outline-variant/25">
                  <span className="material-symbols-outlined text-[32px]">{s.icon}</span>
                </div>
                <h2 className="font-section-title text-2xl">{s.title}</h2>
                <p className="font-body-strong mt-3 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/[0.06] bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <h2 className="font-section-title text-3xl md:text-4xl">Hazır mısınız?</h2>
          <p className="font-body-strong mt-4 text-lg">
            Boyut ve örnekler için fiyatlar ve galeri sayfalarına bakın; teklif için WhatsApp veya telefon en hızlı
            yol.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              message="Merhaba, sipariş süreci ve portre teklifi hakkında bilgi almak istiyorum."
              className="min-h-[52px] justify-center px-8 sm:min-w-[260px]"
            />
            <PhoneButton variant="outline" className="min-h-[52px] justify-center px-8 sm:min-w-[220px]" />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/fiyatlar"
              className="rounded-md bg-primary px-8 py-4 font-label text-sm font-bold tracking-wider text-on-primary hover:bg-primary-dim"
            >
              Fiyatlar
            </Link>
            <Link
              href="/galeri"
              className="rounded-md px-8 py-4 font-label text-sm font-bold tracking-wider text-on-surface ring-1 ring-outline-variant/30 hover:bg-surface-container-high"
            >
              Galeri
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
