import { PricingCategoryBlock } from "@/components/PricingCategoryBlock";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PRICING_CATEGORIES, PRICING_HERO_IMAGE } from "@/lib/pricing-data";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiyatlarımız | Karakalem Atölye",
  description:
    "Güncel karakalem ve portre fiyatları; farklı teknik ve boyutlara göre çizim ücretleri. Her bütçeye uygun seçenekler için iletişime geçin.",
};

const heroBadges = ["%100 el çizimi", "Ücretsiz kargo", "Müze kalitesi"] as const;

export default function FiyatlarPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-gradient-to-b from-surface-container-low to-background">
        <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-12 lg:px-12">
          <div className="relative mx-auto mb-8 max-w-[1000px] overflow-hidden rounded-[1.25rem] border border-white/[0.06] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.45)]">
            <Image
              src={PRICING_HERO_IMAGE}
              alt="Portre çizim fiyatları"
              width={1930}
              height={1350}
              className="h-auto w-full object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>
          <div className="text-center">
            <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">Fiyat listesi</p>
            <h1 className="font-section-title mt-3 text-4xl md:text-5xl lg:text-6xl">Fiyat listemiz</h1>
            <p className="font-body-strong mx-auto mt-6 max-w-[850px] text-pretty text-base leading-relaxed text-on-surface/90 md:text-lg">
              Hayatınızdaki en değerli anları sanata dönüştürüyoruz. Aşağıda teknik ve boyutlara göre detaylı fiyatlarımızı
              bulabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
              {heroBadges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/[0.1] bg-surface-container-high/90 px-4 py-2 font-label text-[11px] font-bold uppercase tracking-wider text-on-surface sm:text-xs"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton message="Merhaba, güncel portre fiyatları ve teklif hakkında bilgi almak istiyorum." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-6 md:py-10">
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
          {PRICING_CATEGORIES.map((cat) => (
            <PricingCategoryBlock key={cat.id} category={cat} />
          ))}

          <div className="flex flex-col items-stretch justify-between gap-5 rounded-[1.25rem] border border-white/[0.08] bg-gradient-to-br from-surface-bright to-surface-container-high px-5 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-8">
            <p className="max-w-xl text-center font-body-strong text-base leading-relaxed text-on-surface/95 sm:text-left md:text-lg">
              Fotoğrafınızı gönderin; size özel fiyat ve detayları hemen iletelim.
            </p>
            <WhatsAppButton
              message="Merhaba, fotoğrafımı göndermek ve özel fiyat almak istiyorum."
              className="shrink-0 justify-center px-8"
            >
              WhatsApp üzerinden yazın
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
