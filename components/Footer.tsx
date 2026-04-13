import { SITE_LOGO_HEIGHT, SITE_LOGO_SRC, SITE_LOGO_WIDTH } from "@/lib/branding";
import {
  SITE_EMAIL,
  SITE_NAV_LINKS,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from "@/lib/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

const linkClassName =
  "font-headline text-sm font-semibold text-on-surface/60 hover:text-on-surface";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0e0e0d] pb-[calc(1rem+var(--sticky-bar-offset,0px))] md:pb-[calc(1.25rem+var(--sticky-bar-offset,0px))]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 text-center sm:px-6 md:grid-cols-2 md:px-12 md:py-14 md:text-left lg:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-1">
          <Image
            src={SITE_LOGO_SRC}
            alt="Karakalem Portre — Çizgi ötesi"
            width={SITE_LOGO_WIDTH}
            height={SITE_LOGO_HEIGHT}
            className="footer-logo-image mx-auto md:mx-0"
            sizes="(max-width: 768px) 85vw, 18rem"
          />
          <p className="font-body-strong mx-auto mt-4 max-w-sm text-sm md:mx-0">
            Grafit ve renkle hikâyenizi duvara taşıyoruz.
          </p>
        </div>
        <div>
          <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.35em] text-on-surface-variant">
            Sayfalar
          </h4>
          <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
            {SITE_NAV_LINKS.map(({ href, label }) => (
              <Link key={href} className={linkClassName} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.35em] text-on-surface-variant">
            İletişim
          </h4>
          <div className="mt-4 flex flex-col items-center gap-3 md:items-start">
            <WhatsAppButton
              variant="footer"
              message="Merhaba, Karakalem Atölye ile iletişime geçmek istiyorum."
              className="w-fit max-w-full justify-center"
            />
            <a
              className="font-headline text-sm font-semibold text-on-surface/80 transition hover:text-on-surface"
              href={`tel:${SITE_PHONE_TEL}`}
            >
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              className="font-headline text-sm font-semibold text-on-surface/80 transition hover:text-on-surface"
              href={`mailto:${SITE_EMAIL}`}
            >
              ✉️ {SITE_EMAIL}
            </a>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <h4 className="font-label text-[10px] font-bold uppercase tracking-[0.35em] text-on-surface-variant">
            Hukuki
          </h4>
          <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
            <Link className={linkClassName} href="/gizlilik">
              Gizlilik politikası
            </Link>
            <Link className={linkClassName} href="/kullanim-kosullari">
              Kullanım koşulları
            </Link>
            <Link className={linkClassName} href="/kvkk">
              KVKK aydınlatma metni
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-8 text-center md:px-12">
        <p className="font-label text-xs font-medium text-on-surface/40">
          © {new Date().getFullYear()} Karakalem Atölye
        </p>
      </div>
    </footer>
  );
}
