"use client";

import { getWhatsAppUrl, SITE_EMAIL, SITE_PHONE_TEL } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

/** Sayfa tepesinde çubuk kapalı */
const SCROLL_TOP_SAFE = 48;
/** Yukarı / aşağı yönü için minimum piksel (titremeyi keser) */
const DIRECTION_DELTA = 5;
const WA_ORDER = getWhatsAppUrl("Merhaba, portre siparişi vermek istiyorum.");
const WA_ICON = getWhatsAppUrl();

/** Cam panel — ikon / küçük CTA */
const glassIconBtn =
  "inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-gradient-to-b from-white/[0.09] to-white/[0.02] text-primary-fixed shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:from-primary/20 hover:to-primary/5 hover:text-on-surface hover:shadow-[0_0_0_1px_rgba(198,199,193,0.15),inset_0_1px_0_rgba(255,255,255,0.14)] active:scale-[0.97]";

/** Birincil şerit CTA — palet primary */
const glassPrimaryCta =
  "inline-flex h-[52px] items-center justify-between gap-2.5 rounded-[40px] border border-white/[0.12] bg-gradient-to-b from-primary-fixed via-primary to-primary-dim px-5 font-label text-sm font-semibold tracking-wide text-on-primary shadow-[0_8px_28px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:from-primary-fixed-dim hover:via-primary-fixed hover:to-primary hover:shadow-[0_12px_36px_rgba(0,0,0,0.4)] active:scale-[0.99]";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function StickyFooterBar() {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const applyOffset = (show: boolean) => {
      const h = show ? "min(120px, calc(96px + env(safe-area-inset-bottom, 0px)))" : "0px";
      document.documentElement.style.setProperty("--sticky-bar-offset", h);
    };

    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y <= SCROLL_TOP_SAFE) {
        setVisible(false);
        applyOffset(false);
        return;
      }

      if (delta > DIRECTION_DELTA) {
        setVisible(true);
        applyOffset(true);
      } else if (delta < -DIRECTION_DELTA) {
        setVisible(false);
        applyOffset(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.removeProperty("--sticky-bar-offset");
    };
  }, []);

  return (
    <aside
      role="complementary"
      aria-label="Hızlı iletişim"
      aria-hidden={!visible}
      className={`fixed bottom-0 left-0 right-0 z-[100] overflow-hidden rounded-t-[1.75rem] border-t border-white/[0.12] bg-background/82 pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-12px_48px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-[28px] backdrop-saturate-[1.65] transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] supports-[backdrop-filter]:bg-background/52 md:mx-auto md:mb-3 md:max-w-4xl md:rounded-[2rem] md:border md:border-white/[0.1] md:shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      {/* Cam katmanı: üst highlight + hafif vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(198,199,193,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 gap-y-3 px-4 py-3.5 md:gap-10 md:px-6 md:py-4">
        <p className="hidden max-w-[30ch] text-balance text-center font-headline text-lg font-semibold leading-snug tracking-tight text-on-surface md:block md:text-left md:text-2xl">
          Hikâyenizi çizecek bir mesaj yeter.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-black/20 px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:gap-2.5 md:px-2.5">
          <a href={WA_ICON} target="_blank" rel="noopener noreferrer" className={glassIconBtn} aria-label="WhatsApp">
            <WhatsAppGlyph className="h-[22px] w-[22px]" />
          </a>

          <a href={`tel:${SITE_PHONE_TEL}`} className={`${glassIconBtn} hidden md:inline-flex`} aria-label="Telefon">
            <span className="material-symbols-outlined text-[22px]">call</span>
          </a>

          <a href={`mailto:${SITE_EMAIL}`} className={glassIconBtn} aria-label="E-posta">
            <span className="material-symbols-outlined text-[22px]">mail</span>
          </a>

          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className={`${glassPrimaryCta} hidden min-w-[200px] md:inline-flex`}
          >
            <span>PORTRE SİPARİŞİ</span>
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </a>

          <a href={`tel:${SITE_PHONE_TEL}`} className={`${glassPrimaryCta} min-w-[180px] md:hidden`}>
            <span>HEMEN ARA</span>
            <span className="material-symbols-outlined text-xl">call</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
