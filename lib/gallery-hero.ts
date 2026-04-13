export type GalleryHeroKey = "all" | "karakalem" | "kuru-fircalama" | "kuru-pastel" | "yagli-boya";

export const GALLERY_HERO: Record<
  GalleryHeroKey,
  { src: string; title: string; subtitle: string; kicker: string }
> = {
  all: {
    src: "/images/karakalem/980x2055-web2.jpg",
    kicker: "Portföy",
    title: "Galeri",
    subtitle: "Dört teknikten seçkin çalışmalar — filtreyle teknik seçin, hero ve liste birlikte güncellenir.",
  },
  karakalem: {
    src: "/images/karakalem/1672580515949.jpg",
    kicker: "Karakalem",
    title: "Grafit ve ışık",
    subtitle: "İnce çizgi, derin gölge; klasik karakalem portreler.",
  },
  "kuru-fircalama": {
    src: "/images/kuru-fircalama/20211223_051551_edited.jpg",
    kicker: "Kuru fırçalama",
    title: "Yumuşak geçişler",
    subtitle: "Pastel etkili, atmosferik yüzeyler.",
  },
  "kuru-pastel": {
    src: "/images/kuru-pastel/kuru-4-web-1.jpg",
    kicker: "Kuru pastel",
    title: "Renk ve sıcaklık",
    subtitle: "Toz pigmentle canlı, dokulu portreler.",
  },
  "yagli-boya": {
    src: "/images/yagli-boya/yagli-4-web-1.jpg",
    kicker: "Yağlı boya",
    title: "Tuval derinliği",
    subtitle: "Klasik ressamlık hissi, zengin katmanlar.",
  },
};

export const HERO_KEYS = new Set<string>(Object.keys(GALLERY_HERO));
