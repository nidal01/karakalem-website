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
    <section className="relative overflow-x-clip overflow-hidden border-b border-white/[0.06] bg-background">
      <div
        key={key}
        className="gallery-hero-animate relative min-h-[min(52vh,26rem)] bg-background sm:min-h-[46vh] md:min-h-[48vh] lg:min-h-[52vh]"
      >
        <Image
          src={hero.src}
          alt=""
          fill
          priority
          className="object-cover object-center brightness-[0.72] contrast-[1.08] grayscale lg:object-contain lg:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 md:via-background/65 lg:via-background/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent md:from-background/75 md:via-transparent lg:from-background/70" />
        <div className="relative z-10 mx-auto flex min-h-[min(48vh,24rem)] max-w-7xl flex-col justify-end px-4 pb-9 pt-10 text-center sm:min-h-[42vh] md:min-h-[44vh] md:px-6 md:pb-14 md:text-left lg:min-h-[48vh] lg:px-12 lg:pb-16">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">
            {hero.kicker}
          </p>
          <h1 className="font-section-title mx-auto mt-3 max-w-2xl text-3xl sm:text-4xl md:mx-0 md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="font-body-strong mx-auto mt-4 max-w-xl text-base md:mx-0 md:text-lg">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <WhatsAppButton
              message="Merhaba, galerideki çalışmalar için sipariş ve fiyat bilgisi almak istiyorum."
              className="min-h-[48px] w-full max-w-xs justify-center sm:w-auto sm:max-w-none"
            />
            <PhoneButton variant="outline" className="min-h-[48px] w-full max-w-xs justify-center sm:w-auto sm:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
