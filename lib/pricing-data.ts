export type PricingCard = {
  size: string;
  portraitLabel: string;
  portraitPrice: string;
  framedLabel: string;
  framedPrice: string;
};

export type PricingPanel = {
  id: string;
  cards: PricingCard[];
};

export type PricingCategory = {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageSrc?: string;
  imageAlt?: string;
  panels: PricingPanel[];
  tabLabels: [string, string];
};

export const PRICING_HERO_IMAGE =
  "https://karakalemportre.net/wp-content/uploads/2026/01/kanepe-kara-1a.avif";

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "karakalem",
    title: "Karakalem Portre",
    subtitle: "Klasik siyah-beyaz sanatın en saf hali.",
    badge: "En Popüler",
    panels: [
      {
        id: "kara-tek",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "1500 TL", framedLabel: "Çerçeveli", framedPrice: "2200 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "2500 TL", framedLabel: "Çerçeveli", framedPrice: "3700 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "4000 TL", framedLabel: "Çerçeveli", framedPrice: "7000 TL" },
        ],
      },
      {
        id: "kara-cift",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "2200 TL", framedLabel: "Çerçeveli", framedPrice: "2900 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "3500 TL", framedLabel: "Çerçeveli", framedPrice: "4700 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "7000 TL", framedLabel: "Çerçeveli", framedPrice: "10000 TL" },
        ],
      },
    ],
    tabLabels: ["Tek Kişilik", "Çift Kişilik"],
  },
  {
    id: "kurufirca",
    title: "Kurufırçalama Portre",
    subtitle: "Modern dokular ve yüksek kontrast.",
    badge: "Modern Stil",
    imageSrc: "https://karakalemportre.net/wp-content/uploads/2026/01/kanepe-kuru-f-1a.avif",
    imageAlt: "Kurufırçalama portre örneği",
    panels: [
      {
        id: "kuru-tek",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "3000 TL", framedLabel: "Çerçeveli", framedPrice: "3700 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "5000 TL", framedLabel: "Çerçeveli", framedPrice: "6200 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "8000 TL", framedLabel: "Çerçeveli", framedPrice: "11000 TL" },
        ],
      },
      {
        id: "kuru-cift",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "4500 TL", framedLabel: "Çerçeveli", framedPrice: "5200 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "8000 TL", framedLabel: "Çerçeveli", framedPrice: "9200 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "12000 TL", framedLabel: "Çerçeveli", framedPrice: "15000 TL" },
        ],
      },
    ],
    tabLabels: ["Tek Kişilik", "Çift Kişilik"],
  },
  {
    id: "kurupastel",
    title: "Kuru Pastel Portre",
    subtitle: "Yumuşak renkler ve canlı portreler.",
    badge: "Renkli Seçenek",
    imageSrc: "https://karakalemportre.net/wp-content/uploads/2026/01/kanepe-kuru-p-1a.avif",
    imageAlt: "Kuru pastel portre örneği",
    panels: [
      {
        id: "pastel-tek",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "6000 TL", framedLabel: "Çerçeveli", framedPrice: "7500 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "9000 TL", framedLabel: "Çerçeveli", framedPrice: "11000 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "12000 TL", framedLabel: "Çerçeveli", framedPrice: "15000 TL" },
        ],
      },
      {
        id: "pastel-cift",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "9000 TL", framedLabel: "Çerçeveli", framedPrice: "10500 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "14000 TL", framedLabel: "Çerçeveli", framedPrice: "16000 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "17000 TL", framedLabel: "Çerçeveli", framedPrice: "20000 TL" },
        ],
      },
    ],
    tabLabels: ["Tek Kişilik", "Çift Kişilik"],
  },
  {
    id: "yagliboya",
    title: "Yağlı Boya Portre",
    subtitle: "Premium kalite, ömürlük başyapıtlar.",
    badge: "Lüks Seçim",
    imageSrc: "https://karakalemportre.net/wp-content/uploads/2026/01/kanepe-yagli-1a.avif",
    imageAlt: "Yağlı boya portre örneği",
    panels: [
      {
        id: "yagli-tek",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "12000 TL", framedLabel: "Çerçeveli", framedPrice: "13500 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "16000 TL", framedLabel: "Çerçeveli", framedPrice: "18000 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "24000 TL", framedLabel: "Çerçeveli", framedPrice: "28000 TL" },
        ],
      },
      {
        id: "yagli-cift",
        cards: [
          { size: "35×50 cm", portraitLabel: "Portre", portraitPrice: "16000 TL", framedLabel: "Çerçeveli", framedPrice: "18000 TL" },
          { size: "50×70 cm", portraitLabel: "Portre", portraitPrice: "24000 TL", framedLabel: "Çerçeveli", framedPrice: "26000 TL" },
          { size: "70×100 cm", portraitLabel: "Portre", portraitPrice: "36000 TL", framedLabel: "Çerçeveli", framedPrice: "40000 TL" },
        ],
      },
    ],
    tabLabels: ["Tek Kişilik", "Çift Kişilik"],
  },
];
