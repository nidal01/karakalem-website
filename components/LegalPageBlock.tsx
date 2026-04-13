import type { ReactNode } from "react";

export function LegalPageBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-section-title text-xl md:text-2xl">{title}</h2>
      <div className="font-body-strong mt-4 space-y-3 text-[15px] leading-relaxed text-on-surface/90 md:text-base">
        {children}
      </div>
    </div>
  );
}
