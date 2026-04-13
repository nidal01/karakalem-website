"use client";

import { PhoneButton } from "@/components/PhoneButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GALLERY_HERO, type GalleryHeroKey } from "@/lib/gallery-hero";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

function resolveKey(raw: string | null): GalleryHeroKey {
  if (!raw) return "all";
  return raw in GALLERY_HERO ? (raw as GalleryHeroKey) : "all";
}

export function GalleryHero() {
  const searchParams = useSearchParams();
  const key = useMemo(
    () => resolveKey(searchParams.get("teknik")),
    [searchParams]
  );
  const hero = GALLERY_HERO[key];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-background">
      <div
        key={key}
        className="gallery-hero-animate relative min-h-[42vh] bg-background md:min-h-[48vh] lg:min-h-[52vh]"
      >
        <Image
          src={hero.src}
          alt=""
          fill
          priority
          className="object-contain object-center brightness-[0.72] contrast-[1.08] grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/25 md:via-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent md:from-background/70" />
        <div className="relative z-10 mx-auto flex min-h-[38vh] max-w-7xl flex-col justify-end px-6 pb-10 pt-8 md:min-h-[44vh] md:pb-14 lg:min-h-[48vh] lg:px-12 lg:pb-16">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
            {hero.kicker}
          </p>
          <h1 className="font-section-title mt-3 max-w-2xl text-4xl md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="font-body-strong mt-4 max-w-xl text-base md:text-lg">{hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              message="Merhaba, galerideki çalışmalar için sipariş ve fiyat bilgisi almak istiyorum."
              className="min-h-[48px] justify-center"
            />
            <PhoneButton variant="outline" className="min-h-[48px] justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
}
