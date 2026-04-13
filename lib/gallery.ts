export type GalleryCategory = {
  id: string;
  title: string;
  images: string[];
};

export type GalleryData = {
  categories: GalleryCategory[];
};

export type GalleryItem = {
  src: string;
  catId: string;
  title: string;
};
