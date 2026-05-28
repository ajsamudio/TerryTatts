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

export const GALLERY: GalleryItem[] = [
  // --- First 8: shown on homepage (featured grid + IG strip) ---
  { id: "1",  title: "LA Sleeve",          style: "Realism",     src: "/gallery/galleryTat1.jpg", alt: "LA cityscape half sleeve with Interstate 110 and Casper",    ratio: "square" },
  { id: "2",  title: "Foo Dog",            style: "Japanese",    src: "/gallery/tatt25.jpg",      alt: "Foo dog Barong mask thigh piece with ornamental geometry",   ratio: "tall"   },
  { id: "3",  title: "Virgin Mary",        style: "Realism",     src: "/gallery/tatt20.jpg",      alt: "Virgin Mary and rose black and grey realism forearm",        ratio: "tall"   },
  { id: "4",  title: "Red Dragon",         style: "Color",       src: "/gallery/tatt21.jpg",      alt: "Red ink dragon coiling up the spine",                        ratio: "tall"   },
  { id: "5",  title: "Evil Clown",         style: "Realism",     src: "/gallery/tatt8.jpg",       alt: "Evil clown face black and grey realism on forearm",          ratio: "square" },
  { id: "6",  title: "Mandala Hand",       style: "Blackwork",   src: "/gallery/tatt11.jpg",      alt: "Geometric mandala blackwork across hand and forearm",        ratio: "tall"   },
  { id: "7",  title: "Eye & Fang",         style: "Traditional", src: "/gallery/tatt22.jpg",      alt: "Traditional all-seeing eye and open fang mouth hand tattoo", ratio: "square" },
  { id: "8",  title: "All In",             style: "Blackwork",   src: "/gallery/tatt27.jpg",      alt: "Playing cards skull and skeleton hand forearm sleeve",       ratio: "tall"   },

  // --- Full gallery ---
  { id: "9",  title: "Anubis",             style: "Blackwork",   src: "/gallery/tatt9.jpg",       alt: "Anubis god holding ankh blackwork forearm piece",            ratio: "tall"   },
  { id: "10", title: "Pagoda",             style: "Japanese",    src: "/gallery/tatt12.jpg",      alt: "Japanese pagoda and cherry blossoms half sleeve",            ratio: "tall"   },
  { id: "11", title: "Fear of God",        style: "Blackwork",   src: "/gallery/tatt13.jpg",      alt: "Fear of God back piece with all-seeing eye and fallen angel", ratio: "tall"  },
  { id: "12", title: "Cross & Rosary",     style: "Realism",     src: "/gallery/tatt14.jpg",      alt: "Cross and rosary chain black and grey realism forearm",      ratio: "tall"   },
  { id: "13", title: "Kobe 24",            style: "Realism",     src: "/gallery/tatt16.jpg",      alt: "Kobe Bryant number 24 tribute realism forearm piece",        ratio: "tall"   },
  { id: "14", title: "Lealtad Familia",    style: "Blackwork",   src: "/gallery/tatt19.jpg",      alt: "Lealtad Familia chicano script lettering across the hand",   ratio: "tall"   },
  { id: "15", title: "Portrait & Peonies", style: "Realism",     src: "/gallery/tatt23.jpg",      alt: "Black and grey portrait with peony flowers on thigh",        ratio: "tall"   },
  { id: "16", title: "Horus",              style: "Blackwork",   src: "/gallery/tatt28.jpg",      alt: "Horus Egyptian warrior god blackwork forearm",               ratio: "tall"   },
  { id: "17", title: "Cabrera",            style: "Blackwork",   src: "/gallery/tatt29.jpg",      alt: "Cabrera family name old english lettering chest piece",       ratio: "wide"   },
  { id: "18", title: "Mamba Mentality",    style: "Realism",     src: "/gallery/tatt30.jpg",      alt: "Mamba Mentality sleeve with red butterfly and realism eye",  ratio: "tall"   },
  { id: "19", title: "Orchid Branch",      style: "Fine Line",   src: "/gallery/tatt17.jpg",      alt: "Fine line orchid branch flowers on shoulder",                ratio: "tall"   },
  { id: "20", title: "Fallen Angel",       style: "Blackwork",   src: "/gallery/tatt18.jpg",      alt: "Fallen angel Icarus blackwork leg piece with lightning",     ratio: "tall"   },
  { id: "21", title: "2010",               style: "Fine Line",   src: "/gallery/tatt7.jpg",       alt: "2010 date with olive laurel wreath chest piece",             ratio: "wide"   },
  { id: "22", title: "Portrait Study",     style: "Realism",     src: "/gallery/tatt10.jpg",      alt: "Woman face portrait with spider web and autumn leaves",      ratio: "tall"   },
  { id: "23", title: "Memorial",           style: "Blackwork",   src: "/gallery/tatt15.jpg",      alt: "Memorial tribute forearm with dove and walking figure",      ratio: "tall"   },
  { id: "24", title: "Francisco",          style: "Fine Line",   src: "/gallery/galleryTat2.jpg", alt: "Francisco name script with red heartbeat fine line",         ratio: "square" },
  { id: "25", title: "Kanji",              style: "Blackwork",   src: "/gallery/galleryTat3.jpg", alt: "Japanese kanji loyalty character on neck",                   ratio: "square" },
  { id: "26", title: "Cactus & Skull",     style: "Blackwork",   src: "/gallery/Tat4.jpg",        alt: "Cactus and cat skull blackwork on forearm",                  ratio: "wide"   },
  { id: "27", title: "Three Doves",        style: "Realism",     src: "/gallery/tat5.jpg",        alt: "Three doves flying in formation on neck",                    ratio: "square" },
  { id: "28", title: "AK-47",              style: "Fine Line",   src: "/gallery/tatt6.jpg",       alt: "AK-47 fine line tattoo behind the ear",                      ratio: "tall"   },
  { id: "29", title: "Isaiah",             style: "Blackwork",   src: "/gallery/tatt24.jpg",      alt: "Isaiah chicano lettering bold forearm piece",                ratio: "wide"   },
  { id: "30", title: "Memorial Wreath",    style: "Fine Line",   src: "/gallery/tatt26.jpg",      alt: "Fine line memorial date with butterflies and floral wreath",  ratio: "square" },
];

export const STYLES: ("All" | TattooStyle)[] = [
  "All",
  "Realism",
  "Blackwork",
  "Fine Line",
  "Japanese",
  "Color",
  "Traditional",
];
