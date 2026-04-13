import { CTASection } from "@/components/CTASection";
import { PhoneButton } from "@/components/PhoneButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_EMAIL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Karakalem Atölye",
  description: "WhatsApp veya telefon ile hemen ulaşın — portre teklifi ve sorularınız için.",
};

export default function IletisimPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-surface-container-low">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20 lg:px-12">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">İletişim</p>
          <h1 className="font-section-title mt-3 text-4xl md:text-6xl">Hemen yazın veya arayın</h1>
          <p className="font-body-strong mt-6 max-w-2xl text-lg">
            Teklif ve teknik sorularınız için en hızlı yol WhatsApp; doğrudan görüşmek için telefon hattımız açık.
          </p>
          <div className="mt-10 flex max-w-xl flex-col gap-4 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              message="Merhaba, portre siparişi hakkında bilgi almak istiyorum."
              className="min-h-[52px] flex-1 justify-center sm:min-w-[220px]"
            />
            <PhoneButton variant="outline" className="min-h-[52px] flex-1 justify-center sm:min-w-[220px]" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-24">
        <div className="absolute inset-0 -z-10 bg-surface-container-low" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-section-title text-3xl leading-tight md:text-4xl">
                Portrenizi <span className="font-display-italic text-primary">birlikte</span> planlayalım
              </h2>
              <p className="font-body-strong mt-6 leading-relaxed">
                Boyut, teknik ve teslim tercihinizi mesajda veya telefonda netleştiriyoruz; size en uygun seçeneği
                birlikte belirliyoruz.
              </p>
              <ul className="font-body-strong mt-8 space-y-4 text-on-surface/90">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined shrink-0 text-primary-fixed-dim">chat</span>
                  <span>WhatsApp üzerinden fotoğraf ve ölçü paylaşabilirsiniz.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined shrink-0 text-primary-fixed-dim">call</span>
                  <span>Anında görüşmek için doğrudan arayın.</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-4 rounded-xl border border-white/10 bg-background/60 p-8 backdrop-blur-md md:p-10">
              <p className="font-label text-[10px] font-bold uppercase tracking-[0.35em] text-on-surface-variant">
                Hatlar
              </p>
              <WhatsAppButton
                message="Merhaba, Karakalem Atölye ile iletişime geçmek istiyorum."
                fullWidth
                className="justify-center py-4"
              />
              <PhoneButton variant="compact" fullWidth className="justify-center py-4" />
              <div className="border-t border-white/10 pt-6">
                <p className="font-label text-xs font-semibold text-on-surface-variant">E-posta (isteğe bağlı)</p>
                <a
                  className="font-headline mt-2 inline-block text-sm font-semibold text-on-surface/85 transition hover:text-on-surface"
                  href={`mailto:${SITE_EMAIL}`}
                >
                  ✉️ {SITE_EMAIL}
                </a>
                <p className="mt-1 font-label text-[11px] text-on-surface/45">
                  Tercihiniz telefon veya WhatsApp ise yukarıdaki kanalları kullanın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Reklamdan mı geldiniz?"
        subtitle="Tek mesajla başlayın — size en kısa sürede dönüş yapılır."
        message="Merhaba, sitenizi gördüm; portre hakkında bilgi almak istiyorum."
      />
    </>
  );
}
