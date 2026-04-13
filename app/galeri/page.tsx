import { CTASection } from "@/components/CTASection";
import { GalleryHero } from "@/components/GalleryHero";
import { GalleryTabs } from "@/components/GalleryTabs";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Galeri | Karakalem Atölye",
  description:
    "Karakalem, kuru fırçalama, kuru pastel ve yağlı boya galerisi. Tekniklere göre filtreleyin.",
};

function GalleryFallback() {
  return (
    <p className="py-12 text-center font-label text-on-surface-variant">Galeri yükleniyor…</p>
  );
}

function HeroFallback() {
  return (
    <section className="relative min-h-[38vh] animate-pulse border-b border-white/[0.06] bg-surface-container-low md:min-h-[44vh]" />
  );
}

export default function GaleriPage() {
  return (
    <>
      <Suspense fallback={<HeroFallback />}>
        <GalleryHero />
      </Suspense>
      <section className="bg-surface py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Suspense fallback={<GalleryFallback />}>
            <GalleryTabs />
          </Suspense>
        </div>
      </section>
      <CTASection
        title="Beğendiğiniz tekniği mi seçtiniz?"
        subtitle="WhatsApp üzerinden örnek görsel veya fikrinizi paylaşın; size özel teklif hazırlayalım."
        message="Merhaba, galeriden bir teknik seçtim; portre siparişi hakkında konuşmak istiyorum."
      />
    </>
  );
}
