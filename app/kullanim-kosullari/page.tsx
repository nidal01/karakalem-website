import { LegalPageBlock } from "@/components/LegalPageBlock";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Karakalem Atölye",
  description: "Web sitesi ve portre sipariş hizmeti kullanım şartları.",
};

export default function KullanimKosullariPage() {
  return (
    <>
      <section className="border-b border-white/[0.06] bg-surface-container-low">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20 lg:px-12">
          <p className="font-label text-[11px] font-bold uppercase tracking-[0.35em] text-primary">Hukuki</p>
          <h1 className="font-section-title mt-3 text-4xl md:text-5xl">Kullanım koşulları</h1>
          <p className="font-body-strong mt-4 text-sm text-on-surface-variant">
            Son güncelleme: {new Date().getFullYear()}
          </p>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-12">
          <LegalPageBlock title="1. Taraflar ve kabul">
            <p>
              Bu web sitesine erişerek veya sipariş sürecini başlatarak aşağıdaki koşulları okuduğunuzu ve kabul ettiğinizi
              beyan etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen siteyi kullanmayın.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="2. Hizmetin niteliği">
            <p>
              Karakalem Atölye, özel siparişe göre el çizimi portre ve ilgili sanatsal üretim hizmeti sunar. Görseller,
              örnekler ve fiyat bilgileri bilgilendirme amaçlıdır; nihai eser, referans fotoğrafın kalitesi ve seçilen
              teknikle uyumlu olarak üretilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="3. Sipariş ve iletişim">
            <p>
              Sipariş; WhatsApp, telefon veya e-posta üzerinden netleşen ölçü, teknik, teslim ve ücret üzerinden
              oluşur. Tarafların mutabakatı olmadan bağlayıcı teslim tarihi veya nihai fiyat taahhüdü oluşmayabilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="4. Referans görseller ve kullanım hakları">
            <p>
              Sipariş için gönderdiğiniz fotoğrafların telif ve kullanım haklarından sorumlu olduğunuzu kabul edersiniz.
              Üçüncü kişi haklarını ihlal eden içerikler için sipariş reddedilebilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="5. Fikri mülkiyet">
            <p>
              Üretilen özgün çizim ve eserler üzerindeki haklar yürürlükteki mevzuat çerçevesinde atölye veya tarafların
              anlaşmasına göre belirlenir. Sitenin metin, görsel ve tasarım unsurları izinsiz kopyalanamaz veya ticari
              amaçla çoğaltılamaz.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="6. Sorumluluk sınırlaması">
            <p>
              Site &quot;olduğu gibi&quot; sunulur. Teknik kesintiler, üçüncü taraf bağlantıları veya iletişim gecikmelerinden
              doğan dolaylı zararlardan, yasal olarak mümkün olan azami ölçüde sorumluluk kabul edilmez.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="7. Değişiklikler">
            <p>
              Bu koşullar güncellenebilir. Güncel metin bu sayfada yayımlanır; önemli değişikliklerde makul şekilde
              bilgilendirme yapılabilir.
            </p>
          </LegalPageBlock>

          <LegalPageBlock title="8. Uygulanacak hukuk ve uyuşmazlık">
            <p>
              Uyuşmazlıklarda Türkiye Cumhuriyeti kanunları uygulanır; yetkili mahkeme ve icra daireleri Türkiye
              Cumhuriyeti mevzuatına tabidir (taraflarca aksi yazılı olarak kararlaştırılmadıkça).
            </p>
          </LegalPageBlock>

          <p className="font-body-strong text-sm text-on-surface-variant">
            İletişim:{" "}
            <Link className="text-primary underline-offset-4 hover:underline" href="/iletisim">
              İletişim sayfası
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
