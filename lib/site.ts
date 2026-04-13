export const SITE_NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/galeri", label: "Galeri" },
  { href: "/surec", label: "Süreç" },
  { href: "/fiyatlar", label: "Fiyatlar" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const SITE_PHONE_DISPLAY = "0530 096 2629";
export const SITE_PHONE_TEL = "+905300962629";
export const SITE_EMAIL = "portreevi@hotmail.com";

/** wa.me için ülke kodu + numara, başında + yok */
export const SITE_WHATSAPP_E164 = "905300962629";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Merhaba, Karakalem Atölye hakkında bilgi almak istiyorum.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE_WHATSAPP_E164}?text=${text}`;
}
