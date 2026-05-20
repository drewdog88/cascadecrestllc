/** Wikimedia Commons — CC BY-SA 3.0 (attribution in footer). */
const wikimedia = {
  stJohnsBridgeProfile:
    "https://upload.wikimedia.org/wikipedia/commons/0/07/StJohnsBridge.jpg",
  cathedralArches:
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Cathedral_Park_St_Johns_Bridge_-_Portland_Oregon.jpg",
  cathedralParkRiver:
    "https://upload.wikimedia.org/wikipedia/commons/6/69/Cathedral_Park_Portland_Oregon_%2837819765346%29.jpg",
  cathedralParkAnchor:
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/St_Johns_Bridge_from_Cathedral_Park_back_of_anchor_-_Portland,_Oregon.jpg",
} as const;

export const site = {
  name: "Cascade Crest",
  legalName: "Cascade Crest LLC",
  tagline: "Washington-based rental stewardship · Oregon homes",
  heroSubline: "University Park · The Bluff · Steps from campus",
} as const;

export const hero = {
  image: wikimedia.stJohnsBridgeProfile,
  alt: "St. Johns Bridge spanning the Willamette River with Forest Park hills beyond, Portland Oregon",
  credit: "Cacophony / Wikimedia Commons (CC BY-SA 3.0)",
} as const;

export const proximity = {
  headline: "Steps from campus. Minutes to the river.",
  subhead:
    "University Park on the bluff—between the University of Portland and St. Johns.",
} as const;

export type NearbyPlace = {
  name: string;
  blurb: string;
  image: string;
  alt: string;
};

export const nearbyPlaces: NearbyPlace[] = [
  {
    name: "University of Portland",
    blurb:
      "Campus life and bluff-top walks—just steps from your door.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    alt: "Tree-lined campus walkway on a green hillside",
  },
  {
    name: "Waud Bluff Trail",
    blurb:
      "Wooded switchbacks from the bluff down to the Willamette and the greenway.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    alt: "Hiker on a sunlit forest trail through tall trees",
  },
  {
    name: "The Willamette",
    blurb:
      "River views, waterfront paths, and the North Portland Greenway below the bluff.",
    image:
      "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of a wide river winding through green hills",
  },
  {
    name: "St. Johns",
    blurb:
      "Village shops, dining, and a weekend farmers market—small-town feel in the city.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    alt: "Charming small-town main street storefronts",
  },
  {
    name: "Cathedral Park",
    blurb:
      "St. Johns Bridge, riverfront lawns, and seasonal events beneath the towers.",
    image: wikimedia.cathedralArches,
    alt: "View underneath the St. Johns Bridge through Cathedral Park’s gothic concrete arches, Portland Oregon",
  },
  {
    name: "Lombard & everyday Portland",
    blurb:
      "Coffee, casual eats, and daily errands along the neighborhood’s main corridor.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    alt: "Latte art in a ceramic cup on a café table",
  },
];

export const transportation = {
  headline: "Connected by bus and bike",
  intro:
    "TriMet stops within an easy walk. Protected corridors and greenways make the bluff easy to explore without a car.",
  pillars: [
    {
      name: "TriMet nearby",
      blurb:
        "Lines 35 and 44 serve University Park—Greeley, Willamette, and Lombard stops a short walk away.",
      icon: "bus" as const,
    },
    {
      name: "Bike lanes & greenways",
      blurb:
        "Very bikeable streets, neighborhood greenways, and the Willamette Blvd corridor link campus to the river.",
      icon: "bike" as const,
    },
    {
      name: "Walk the bluff",
      blurb:
        "Campus on foot, Lombard for errands, St. Johns and Cathedral Park by bike or bus—and MAX connections to wider Portland.",
      icon: "walk" as const,
    },
  ],
  image:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  alt: "Cyclist on a road bike outdoors",
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: wikimedia.cathedralParkAnchor,
    alt: "St. Johns Bridge viewed from Cathedral Park along the Willamette River, Portland Oregon",
    span: "wide",
  },
  {
    src: wikimedia.cathedralParkRiver,
    alt: "St. Johns Bridge above Cathedral Park and the Willamette River, Portland Oregon",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    alt: "Misty green valley and forested hills at dawn",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    alt: "Layered mountain ridges at golden hour",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlight through green leaves in a Pacific Northwest forest",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",
    alt: "Portland streetcar and urban street at twilight",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    alt: "Dogs running through a green park meadow",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    alt: "Still lake reflecting mountains and sky",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80",
    alt: "Mountain lake with pine forest and morning mist",
    span: "normal",
  },
];

export const neighborhoodLabels = [
  { label: "The Bluff", image: hero.image },
  { label: "University Park", image: nearbyPlaces[0].image },
  { label: "St. Johns", image: nearbyPlaces[3].image },
  { label: "Portland & the Willamette", image: nearbyPlaces[2].image },
] as const;

export const about = {
  title: "About",
  body: `Cascade Crest is a for-profit Washington State rental company backed by a small group of private investors. We steward homes in Portland’s University Park neighborhood—on the bluff, steps from the University of Portland, with TriMet stops and bike routes nearby and a short trip to St. Johns, the Willamette, and Cathedral Park.

This site shares the spirit of the place—not a listing portal. We do not publish our property address or accept inquiries through this website.`,
} as const;

export const footer = {
  affiliation:
    "Not affiliated with the University of Portland.",
  registration: "Registered in Washington State · Property in Oregon",
  photoCredit:
    "St. Johns Bridge & Cathedral Park: Wikimedia Commons (CC BY-SA 3.0). Other photos: Unsplash License.",
} as const;

export const metadataDescription =
  "Cascade Crest LLC—a Washington-based rental company with homes in Portland’s University Park, on the bluff near the University of Portland.";
