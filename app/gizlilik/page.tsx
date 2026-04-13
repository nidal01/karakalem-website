import { LegalPageBlock } from "@/components/LegalPageBlock";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Karakalem Atölye",
  description:
    "Kişisel verilerin korunması, çerezler ve veri güvenliği hakkında bilgilendirme.",
};

export default function GizlilikPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-surface-container-low">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20 lg:px-12">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">Hukuki</p>
          <h1 className="font-section-title mt-3 text-4xl md:text-5xl">Gizlilik politikası</h1>
          <p className="font-body-strong mt-4 text-sm text-on-surface-variant">
            Son güncelleme: {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-12">
          <LegalPageBlock title="1. Genel">
            <p>
              Karakalem Atölye olarak ziyaretçilerimizin ve müşterilerimizin kişisel verilerinin gizliliğine önem veriyoruz.
              Bu metin, web sitemizi kullanırken hangi verilerin işlenebileceğini ve bunların nasıl korunduğunu özetler.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="2. Veri sorumlusu">
            <p>
              Sipariş, iletişim ve teknik süreçler kapsamında toplanan kişisel verileriniz, hizmetin ifası ve yasal
              yükümlülüklerin yerine getirilmesi amacıyla işlenir. Detaylı talepleriniz için iletişim bilgilerimiz üzerinden
              bize ulaşabilirsiniz.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="3. Toplanan veriler">
            <p>Örneğin şunlar işlenebilir:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>İletişim için paylaştığınız ad, e-posta veya telefon</li>
              <li>Sipariş sürecinde ilettiğiniz referans görselleri ve tercihler</li>
              <li>Site kullanımına ilişkin teknik günlükler (IP, tarayıcı türü, ziyaret zamanı) — sunucu güvenliği için</li>
            </ul>
          </LegalPageBlock>

          <LegalPageBlock title="4. Amaç ve hukuki sebep">
            <p>
              Veriler; siparişin alınması, size dönüş yapılması, teslimatın koordine edilmesi ve yasal düzenlemelere uyum
              için işlenir. Açık rızanız veya sözleşmenin kurulması / ifası gibi hukuki sebeplere dayanır.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="5. Çerezler (cookies)">
            <p>
              Sitemiz, temel işlevsellik ve istatistik için çerez benzeri teknolojiler kullanabilir. Tarayıcı ayarlarınızdan
              çerezleri kısıtlayabilirsiniz; bazı özellikler bundan etkilenebilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="6. Saklama süresi">
            <p>
              Veriler, işleme amacının gerektirdiği süre ve yasal zamanaşımı süreleri boyunca saklanır; süre sonunda silinir,
              anonimleştirilir veya yok edilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="7. Haklarınız">
            <p>KVKK kapsamında örneğin şunları talep edebilirsiniz:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Düzeltme, silme veya anonimleştirme</li>
              <li>İşlemenin sınırlandırılması veya itiraz</li>
            </ul>
          </LegalPageBlock>

          <LegalPageBlock title="8. Güvenlik">
            <p>
              Verilerinize yetkisiz erişimi önlemek için makul teknik ve idari tedbirler uygularız; internet üzerinden
              iletimin %100 güvenli olduğu garanti edilemez.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="9. Değişiklikler">
            <p>
              Bu politika güncellenebilir. Önemli değişikliklerde sayfada yeni tarih gösterilir. Siteyi kullanmaya devam
              etmeniz güncel metni kabul ettiğiniz anlamına gelebilir.
            </p>
          </LegalPageBlock>

          <p className="font-body-strong text-sm text-on-surface-variant">
            Sorularınız için:{" "}
            <Link className="text-primary underline-offset-4 hover:underline" href="/iletisim">
              İletişim
            </Link>{" "}
            sayfamızı kullanabilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
