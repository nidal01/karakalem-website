import { LegalPageBlock } from "@/components/LegalPageBlock";
import { SITE_EMAIL } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Karakalem Atölye",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel veri işleme faaliyetleri hakkında bilgilendirme.",
};

export default function KvkkPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-surface-container-low">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20 lg:px-12">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">Hukuki</p>
          <h1 className="font-section-title mt-3 text-4xl md:text-5xl">KVKK aydınlatma metni</h1>
          <p className="font-body-strong mt-4 text-sm text-on-surface-variant">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) md. 10 kapsamında — Son güncelleme:{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-12">
          <LegalPageBlock title="1. Amaç ve kapsam">
            <p>
              Bu aydınlatma metni, Karakalem Atölye tarafından yürütülen kişisel veri işleme faaliyetleri hakkında ilgili
              kişileri bilgilendirmek amacıyla hazırlanmıştır. Web sitemizi ziyaret etmeniz, iletişim kanallarımız üzerinden
              bize ulaşmanız veya sipariş sürecine ilişkin bilgi paylaşmanız halinde kişisel verileriniz işlenebilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="2. Veri sorumlusu">
            <p>
              KVKK uyarınca veri sorumlusu: <strong>Karakalem Atölye</strong>. Taleplerinizi ve sorularınızı iletişim
              bilgilerimiz üzerinden iletebilirsiniz. E-posta:{" "}
              <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
              .
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="3. İşlenen kişisel veriler">
            <p>
              Hizmetin niteliğine göre işlenebilecek veriler örneğin: kimlik ve iletişim bilgileri (ad-soyad, telefon,
              e-posta), sipariş ve iletişim içeriği, referans görsel iletileri, müşteri ilişkileri yönetimi kapsamında
              kayıtlar; web sitesi kullanımına ilişkin teknik veriler (IP adresi, tarayıcı/cihaz bilgisi, çerez
              kayıtları) ve benzeri verilerdir. Hangi verilerin işlendiği, hangi kanaldan paylaştığınıza bağlıdır.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="4. Kişisel verilerin işlenme amaçları">
            <ul className="list-disc space-y-2 pl-5">
              <li>Portre ve sipariş süreçlerinin yürütülmesi, müşteri iletişiminin sağlanması</li>
              <li>Talep ve şikâyetlerin değerlendirilmesi, hizmet kalitesinin iyileştirilmesi</li>
              <li>Ticari iletişim ve bilgilendirme (yalnızca açık rıza veya mevzuata uygun olduğu ölçüde)</li>
              <li>İş süreçlerinin planlanması ve denetimi, muhasebe ve finans süreçleri</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi, yetkili kurum taleplerine cevap verilmesi</li>
              <li>Bilgi güvenliği ve dolandırıcılığın önlenmesi</li>
            </ul>
          </LegalPageBlock>

          <LegalPageBlock title="5. Hukuki sebepler">
            <p>
              Kişisel verileriniz; KVKK md. 5 ve 6 kapsamında, açık rızanızın bulunması halinde rızanıza; sözleşmenin kurulması
              veya ifası için gerekli olması halinde; veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi; meşru menfaat
              veya kanunda öngörülen diğer şartlara dayanarak işlenebilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="6. Aktarım">
            <p>
              Verileriniz, hizmetin ifası için zorunlu olduğu ölçüde iş ortaklarımıza, altyapı veya iletişim sağlayıcılarına
              (ör. barındırma, e-posta, mesajlaşma hizmetleri) aktarılabilir. Yurt dışına aktarım söz konusu
              olduğunda KVKK&apos;da öngörülen şartlar ve gerekli güvenceler dikkate alınır.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="7. Toplanma yöntemi ve saklama süresi">
            <p>
              Verileriniz, web sitesi, telefon, e-posta veya anlaşmalı dijital kanallar aracılığıyla otomatik veya kısmen
              otomatik yollarla toplanabilir. Saklama süreleri, işleme amacının gerektirdiği süre ve ilgili mevzuatta
              öngörülen zamanaşımı süreleriyle sınırlıdır; amaç ortadan kalkınca silinir, yok edilir veya anonim hale
              getirilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="8. İlgili kişinin hakları (KVKK md. 11)">
            <p>KVKK kapsamında haklarınız arasında örneğin şunlar bulunur:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK md. 7 kapsamında silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme, silme vb. işlemlerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>Münhasıran otomatik sistemlerle analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </LegalPageBlock>

          <LegalPageBlock title="9. Başvuru">
            <p>
              Haklarınızı kullanmak için veri sorumlusuna başvurabilirsiniz. Başvurularınızda kimliğinizi doğrulayıcı bilgi ve
              belgeler talep edilebilir. Başvurunuza yanıt alamazsanız veya yanıtı yetersiz bulursanız Kişisel Verileri Koruma
              Kurulu&apos;na şikâyette bulunma hakkınız saklıdır.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="10. Güncellemeler">
            <p>
              Bu metin, mevzuat veya iş süreçlerindeki değişikliklere göre güncellenebilir. Önemli değişikliklerde sayfada yeni
              tarih yayınlanır.
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
