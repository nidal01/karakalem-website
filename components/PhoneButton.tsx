import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";
import type { ComponentProps } from "react";

type PhoneButtonProps = {
  variant?: "primary" | "outline" | "navbar" | "fab" | "compact";
  fullWidth?: boolean;
  children?: React.ReactNode;
} & Omit<ComponentProps<"a">, "href">;

const variantClass: Record<NonNullable<PhoneButtonProps["variant"]>, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-md bg-on-surface px-6 py-3.5 font-label text-sm font-bold tracking-wide text-background transition hover:bg-on-surface/90",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-md border-2 border-on-surface/30 bg-transparent px-6 py-3.5 font-label text-sm font-bold tracking-wide text-on-surface transition hover:bg-on-surface/10",
  navbar:
    "inline-flex items-center justify-center gap-1.5 rounded-md border border-white/20 bg-transparent px-2.5 py-2 font-label text-[15px] font-semibold text-on-surface transition hover:bg-white/5 md:px-3 md:py-2.5 md:text-[17px]",
  fab: "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-surface-container-high text-on-surface shadow-lg transition hover:bg-surface-bright md:h-16 md:w-16",
  compact:
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 font-label text-sm font-bold text-on-surface ring-1 ring-outline-variant/35 transition hover:bg-surface-container-high",
};

export function PhoneButton({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...rest
}: PhoneButtonProps) {
  const base = variantClass[variant];
  const width = fullWidth ? "w-full" : "";

  const defaultContent =
    variant === "fab" ? (
      <span className="material-symbols-outlined text-[28px] md:text-[32px]">call</span>
    ) : variant === "navbar" ? (
      <>
        <span className="material-symbols-outlined text-[22px] md:text-[24px]">call</span>
        <span className="hidden sm:inline">Ara</span>
      </>
    ) : (
      <>
        <span className="material-symbols-outlined text-[1.25em]">call</span>
        <span>{SITE_PHONE_DISPLAY}</span>
      </>
    );

  return (
    <a
      href={`tel:${SITE_PHONE_TEL}`}
      className={`${base} ${width} ${className}`.trim()}
      aria-label={`Ara: ${SITE_PHONE_DISPLAY}`}
      {...rest}
    >
      {children ?? defaultContent}
    </a>
  );
}
