"use client";

import type { GalleryData, GalleryItem } from "@/lib/gallery";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const FILTERS = [
  { id: "all" as const, label: "Tümü" },
  { id: "karakalem", label: "Karakalem" },
  { id: "kuru-fircalama", label: "Kuru fırçalama" },
  { id: "kuru-pastel", label: "Kuru pastel" },
  { id: "yagli-boya", label: "Yağlı boya" },
];

const VALID = new Set(FILTERS.map((f) => f.id));

export function GalleryTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [data, setData] = useState<GalleryData | null>(null);
  const [error, setError] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [pulseId, setPulseId] = useState<string | null>(null);

  const filter = searchParams.get("teknik") ?? "all";
  const activeFilter = VALID.has(filter) ? filter : "all";

  useEffect(() => {
    fetch("/gallery.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    const t = searchParams.get("teknik");
    if (t && !VALID.has(t)) {
      router.replace("/galeri", { scroll: false });
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (!lightbox) return;
    const id = requestAnimationFrame(() => dialogRef.current?.showModal());
    return () => cancelAnimationFrame(id);
  }, [lightbox]);

  const items: GalleryItem[] = useMemo(() => {
    if (!data?.categories) return [];
    const out: GalleryItem[] = [];
    for (const cat of data.categories) {
      for (const src of cat.images ?? []) {
        out.push({ src, catId: cat.id, title: cat.title });
      }
    }
    return out;
  }, [data]);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((x) => x.catId === activeFilter);
  }, [items, activeFilter]);

  const setFilter = useCallback(
    (id: string) => {
      setPulseId(id);
      window.setTimeout(() => setPulseId(null), 500);
      const params = new URLSearchParams(searchParams.toString());
      if (id === "all") params.delete("teknik");
      else params.set("teknik", id);
      const q = params.toString();
      router.replace("/galeri" + (q ? "?" + q : ""), { scroll: false });
    },
    [router, searchParams]
  );

  if (error) {
    return (
      <p className="py-12 text-center font-label text-on-surface-variant">
        Galeri yüklenemedi. Sayfayı yenileyin.
      </p>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div
          className="flex w-full max-w-4xl flex-wrap justify-center gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Çizim tekniği filtreleri"
        >
          {FILTERS.map(({ id, label }) => {
            const selected = activeFilter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={selected}
                data-filter={id}
                onClick={() => setFilter(id)}
                className={`gallery-tab rounded-full px-5 py-2.5 font-label text-[17px] font-semibold leading-snug ring-1 ring-outline-variant/25 transition-transform active:scale-[0.97] sm:px-6 sm:py-3 sm:text-[18px] ${
                  pulseId === id ? "is-pulse" : ""
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <p className="font-label text-[15px] font-semibold text-on-surface-variant sm:text-[16px]">
          {filtered.length} çalışma
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="py-20 text-center font-label text-[15px] font-semibold text-on-surface-variant sm:text-[16px]">
          Bu filtrede görsel bulunamadı.
        </p>
      ) : (
        <div
          key={activeFilter}
          className="gallery-grid-animated mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((item) => (
            <button
              key={item.src}
              type="button"
              className="group relative aspect-square overflow-hidden rounded-lg bg-surface-container-low text-left ring-1 ring-outline-variant/10 transition-all hover:ring-outline-variant/30"
              onClick={() => setLightbox({ src: item.src, alt: item.title })}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      )}

      <dialog
        ref={dialogRef}
        className="max-h-[95vh] max-w-[95vw] border-0 bg-transparent p-0 backdrop:bg-black/85"
        onClose={() => setLightbox(null)}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
      >
        <button
          type="button"
          className="fixed right-4 top-4 z-[60] rounded-full bg-surface-container-high/90 px-4 py-2 font-label text-sm font-semibold text-on-surface ring-1 ring-outline-variant/30"
          onClick={() => dialogRef.current?.close()}
        >
          Kapat
        </button>
        {lightbox ? (
          // eslint-disable-next-line @next/next/no-img-element -- lightbox tam çözünürlük
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        ) : null}
      </dialog>
    </>
  );
}
