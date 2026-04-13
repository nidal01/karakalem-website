"use client";

import { PhoneButton } from "@/components/PhoneButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_LOGO_HEIGHT, SITE_LOGO_SRC, SITE_LOGO_WIDTH } from "@/lib/branding";
import { SITE_NAV_LINKS } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#0e0e0d]/75 backdrop-blur-xl">
        <div className="relative mx-auto flex h-[6rem] max-w-7xl items-center gap-3 px-6 lg:h-[6.75rem] lg:gap-4 lg:px-12">
          <Link
            href="/"
            className="relative z-20 flex min-w-0 shrink-0 items-center self-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src={SITE_LOGO_SRC}
              alt="Karakalem Portre — Çizgi ötesi"
              width={SITE_LOGO_WIDTH}
              height={SITE_LOGO_HEIGHT}
              priority
              className="logo-image"
              sizes="(max-width: 768px) 72vw, 16rem"
            />
          </Link>
          <div
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1"
            role="navigation"
            aria-label="Sayfalar"
          >
            {SITE_NAV_LINKS.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    active
                      ? "nav-link-active whitespace-nowrap border-b-2 border-primary/50 pb-0.5 font-label text-[17px] font-semibold leading-tight tracking-tight text-[#f2f0eb]"
                      : "whitespace-nowrap px-2 py-1 font-label text-[17px] font-semibold leading-tight tracking-tight text-on-surface/55 transition-colors hover:text-on-surface lg:px-3"
                  }
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <div className="relative z-20 ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <WhatsAppButton variant="navbar">WhatsApp</WhatsAppButton>
              <PhoneButton variant="navbar" />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-on-surface md:hidden"
              aria-label="Menü"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[6rem] z-40 border-t border-white/5 bg-[#0e0e0d]/98 px-6 py-6 backdrop-blur-xl transition md:hidden lg:top-[6.75rem] ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-1">
          {SITE_NAV_LINKS.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3 py-3 font-label text-[19px] font-semibold leading-snug ${
                  active ? "text-on-surface" : "text-on-surface/70"
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-4 flex flex-col gap-2">
            <WhatsAppButton
              variant="primary"
              fullWidth
              className="justify-center py-3.5"
              onClick={() => setOpen(false)}
            >
              WhatsApp ile yazın
            </WhatsAppButton>
            <PhoneButton
              variant="outline"
              fullWidth
              className="justify-center py-3.5"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
