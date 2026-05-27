export type TattooStyle =
  | "Traditional"
  | "Blackwork"
  | "Fine Line"
  | "Realism"
  | "Japanese"
  | "Color";

export type GalleryItem = {
  id: string;
  title: string;
  style: TattooStyle;
  /** Path under /public — drop your image at this exact path. */
  src: string;
  alt: string;
  /** Used for masonry height variety when no image is present. */
  ratio: "tall" | "square" | "wide";
};

// NOTE for the demo: images live at /public/gallery/<file>.jpg.
// Until real photos are added, the gallery renders styled placeholder tiles
// (see <GalleryGrid />). Just drop files matching these paths and they appear.
export const GALLERY: GalleryItem[] = [
  { id: "1", title: "Serpent & Rose", style: "Traditional", src: "/gallery/traditional-1.jpg", alt: "Traditional serpent and rose forearm piece", ratio: "tall" },
  { id: "2", title: "Mountain Lines", style: "Fine Line", src: "/gallery/fineline-1.jpg", alt: "Fine line mountain range on ribcage", ratio: "square" },
  { id: "3", title: "Raven Skull", style: "Blackwork", src: "/gallery/blackwork-1.jpg", alt: "Heavy blackwork raven skull on shoulder", ratio: "tall" },
  { id: "4", title: "Koi Half Sleeve", style: "Japanese", src: "/gallery/japanese-1.jpg", alt: "Japanese koi half sleeve in color", ratio: "wide" },
  { id: "5", title: "Portrait Study", style: "Realism", src: "/gallery/realism-1.jpg", alt: "Black and grey realism portrait", ratio: "tall" },
  { id: "6", title: "Wildflower Spray", style: "Fine Line", src: "/gallery/fineline-2.jpg", alt: "Fine line wildflowers on bicep", ratio: "square" },
  { id: "7", title: "Anchor Classic", style: "Traditional", src: "/gallery/traditional-2.jpg", alt: "Traditional anchor with banner", ratio: "wide" },
  { id: "8", title: "Mandala Sleeve", style: "Blackwork", src: "/gallery/blackwork-2.jpg", alt: "Geometric mandala blackwork sleeve", ratio: "tall" },
  { id: "9", title: "Peony Color", style: "Color", src: "/gallery/color-1.jpg", alt: "Saturated color peony tattoo", ratio: "square" },
  { id: "10", title: "Tiger Snarl", style: "Japanese", src: "/gallery/japanese-2.jpg", alt: "Japanese tiger snarl on thigh", ratio: "tall" },
  { id: "11", title: "Hand Stack", style: "Blackwork", src: "/gallery/blackwork-3.jpg", alt: "Stacked black ornamental band on hand", ratio: "wide" },
  { id: "12", title: "Eye Study", style: "Realism", src: "/gallery/realism-2.jpg", alt: "Hyper-real eye realism", ratio: "square" },
];

export const STYLES: ("All" | TattooStyle)[] = [
  "All",
  "Traditional",
  "Blackwork",
  "Fine Line",
  "Realism",
  "Japanese",
  "Color",
];
