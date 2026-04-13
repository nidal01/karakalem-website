"use client";

import type { PricingCard, PricingCategory } from "@/lib/pricing-data";
import Image from "next/image";
import { useId, useState } from "react";

function PriceCard({ card }: { card: PricingCard }) {
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-surface-container-high/50 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/[0.04] transition-shadow hover:shadow-[0_0_0_1px_rgba(198,199,193,0.15),0_12px_32px_rgba(0,0,0,0.25)]">
      <span className="mb-4 block border-b border-white/[0.06] pb-3 font-label text-base font-bold text-on-surface">{card.size}</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-surface-container-low/80 px-3 py-3 font-label text-sm">
          <span className="text-on-surface-variant">{card.portraitLabel}</span>
          <strong className="shrink-0 text-on-surface">{card.portraitPrice}</strong>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-xl border border-primary/25 bg-primary/[0.08] px-3 py-3 font-label text-sm">
          <span className="font-semibold text-primary-fixed">{card.framedLabel}</span>
          <strong className="shrink-0 text-primary-fixed-dim">{card.framedPrice}</strong>
        </div>
      </div>
    </div>
  );
}

export function PricingCategoryBlock({ category }: { category: PricingCategory }) {
  const uid = useId();
  const [active, setActive] = useState(category.panels[0].id);
  const panelDomId = (id: string) => `${uid}-${id}`;
  const currentPanel = category.panels.find((p) => p.id === active) ?? category.panels[0];

  return (
    <section id={category.id} className="mb-12 overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-gradient-to-b from-surface-container-high/40 to-surface-container-low/30 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm md:mb-16">
      <div className="flex flex-col gap-4 border-b border-white/[0.06] bg-gradient-to-r from-surface-container-high/60 to-surface-container-low/40 px-5 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-8 md:px-10">
        <div>
          <h2 className="font-section-title text-2xl md:text-3xl">{category.title}</h2>
          <p className="font-body-strong mt-2 text-sm text-on-surface-variant md:text-base">{category.subtitle}</p>
        </div>
        <span className="inline-flex w-fit shrink-0 rounded-full border border-white/10 bg-surface-container-high px-4 py-2 font-label text-[11px] font-bold uppercase tracking-wider text-on-surface">
          {category.badge}
        </span>
      </div>

      {category.imageSrc ? (
        <div className="relative max-h-[min(55vh,550px)] w-full overflow-hidden border-b border-white/[0.06]">
          <Image
            src={category.imageSrc}
            alt={category.imageAlt ?? category.title}
            width={1200}
            height={800}
            className="h-auto w-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={false}
          />
        </div>
      ) : null}

      <div className="px-4 py-6 sm:px-6 md:px-8 md:py-8">
        <div className="mb-6 flex flex-wrap gap-2 gap-y-2" role="tablist" aria-label={`${category.title} fiyat seçenekleri`}>
          {category.panels.map((panel, i) => {
            const selected = active === panel.id;
            return (
              <button
                key={panel.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                id={`tab-${panelDomId(panel.id)}`}
                onClick={() => setActive(panel.id)}
                className={`rounded-full border-2 px-4 py-2.5 font-label text-[13px] font-bold transition sm:px-5 sm:text-sm ${
                  selected
                    ? "border-on-surface bg-on-surface text-background"
                    : "border-white/15 bg-transparent text-on-surface hover:border-white/25"
                }`}
              >
                {category.tabLabels[i]}
              </button>
            );
          })}
        </div>

        <div
          id={`${uid}-panel`}
          role="tabpanel"
          aria-labelledby={`tab-${panelDomId(active)}`}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {currentPanel.cards.map((c) => (
            <PriceCard key={c.size + currentPanel.id} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
