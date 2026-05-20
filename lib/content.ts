export const site = {
  name: "Cascade Crest",
  legalName: "Cascade Crest LLC",
  tagline: "Washington-based rental stewardship · Oregon homes",
  heroSubline: "University Park · The Bluff · Steps from campus",
} as const;

/** Wikimedia Commons — CC BY-SA / CC BY (attribution in footer). */
const wikimedia = {
  universityOfPortland:
    "https://upload.wikimedia.org/wikipedia/commons/8/85/University_of_Portland_%28497062163%29.jpg",
  universityParkNeighborhood:
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/University_Park_%28Portland%2C_Oregon%29.jpg",
} as const;

/** Verified aerial / drone-style Unsplash assets (HTTP 200 on images.unsplash.com). */
const aerial = {
  stJohnsBridge:
    "https://images.unsplash.com/photo-1543813425-d5ce8a18cd79?auto=format&fit=crop&w=2400&q=85",
  portlandBridgeHood:
    "https://images.unsplash.com/photo-1774464695572-fcbb4171ff76?auto=format&fit=crop&w=1200&q=80",
  portlandSkyline:
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
  portlandWaterfront:
    "https://images.unsplash.com/photo-1567984828708-5750f8acb181?auto=format&fit=crop&w=1200&q=80",
  riverAndBridges:
    "https://images.unsplash.com/photo-1587590102356-3b3454479809?auto=format&fit=crop&w=1200&q=80",
  willametteRiver:
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=80",
  bridgeOverWater:
    "https://images.unsplash.com/photo-1755976547060-32a82c6d18a9?auto=format&fit=crop&w=1200&q=80",
  portlandHills:
    "https://images.unsplash.com/photo-1573828562803-1d582aa6ab6a?auto=format&fit=crop&w=1200&q=80",
  nightSkylineBridge:
    "https://images.unsplash.com/photo-1635170870336-67546b863d13?auto=format&fit=crop&w=1200&q=80",
  cityAndMountain:
    "https://images.unsplash.com/photo-1575421377056-f78e26f4b173?auto=format&fit=crop&w=1200&q=80",
} as const;

export const hero = {
  image: aerial.stJohnsBridge,
  alt: "Aerial view of the St. Johns Bridge through fog above the Willamette River, Portland Oregon",
  credit: "Photo via Unsplash",
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
    image: wikimedia.universityOfPortland,
    alt: "University of Portland campus on the bluff with lawns and historic buildings, Portland Oregon",
  },
  {
    name: "Waud Bluff Trail",
    blurb:
      "Wooded switchbacks from the bluff down to the Willamette and the greenway.",
    image: aerial.riverAndBridges,
    alt: "Aerial view of the Willamette River, bridges, and North Portland from above the bluff",
  },
  {
    name: "The Willamette",
    blurb:
      "River views, waterfront paths, and the North Portland Greenway below the bluff.",
    image: aerial.willametteRiver,
    alt: "Aerial view of a wide river winding through green Pacific Northwest hills",
  },
  {
    name: "St. Johns",
    blurb:
      "Village shops, dining, and a weekend farmers market—small-town feel in the city.",
    image: aerial.portlandBridgeHood,
    alt: "Aerial view of Portland with bridges over the Willamette and Mount Hood beyond",
  },
  {
    name: "Cathedral Park",
    blurb:
      "St. Johns Bridge, riverfront lawns, and seasonal events beneath the towers.",
    image: aerial.bridgeOverWater,
    alt: "Aerial view of a bridge crossing the Willamette River in North Portland",
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
  image: aerial.portlandHills,
  alt: "Aerial view of Portland hillside neighborhoods, trees, and city streets",
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: aerial.portlandBridgeHood,
    alt: "Aerial view of Portland bridges, downtown, and Mount Hood",
    span: "wide",
  },
  {
    src: aerial.stJohnsBridge,
    alt: "Aerial view of the St. Johns Bridge and the Willamette River",
    span: "tall",
  },
  {
    src: aerial.portlandSkyline,
    alt: "Aerial view of the Portland skyline with Mount Hood in the distance",
    span: "wide",
  },
  {
    src: aerial.riverAndBridges,
    alt: "Aerial drone view of the Willamette River and Portland bridges",
    span: "normal",
  },
  {
    src: aerial.portlandWaterfront,
    alt: "Aerial view of Portland buildings along the Willamette waterfront",
    span: "normal",
  },
  {
    src: aerial.willametteRiver,
    alt: "Aerial view of the Willamette River and surrounding green landscape",
    span: "normal",
  },
  {
    src: aerial.bridgeOverWater,
    alt: "Aerial view of a bridge spanning the Willamette River",
    span: "tall",
  },
  {
    src: aerial.nightSkylineBridge,
    alt: "Aerial view of Portland’s skyline and bridges at night",
    span: "normal",
  },
];

export const neighborhoodLabels = [
  { label: "The Bluff", image: aerial.riverAndBridges },
  { label: "University Park", image: wikimedia.universityParkNeighborhood },
  { label: "St. Johns", image: aerial.stJohnsBridge },
  { label: "Portland & the Willamette", image: aerial.willametteRiver },
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
    "University of Portland & University Park: Wikimedia Commons. Aerial and other photos: Unsplash.",
} as const;

export const metadataDescription =
  "Cascade Crest LLC—a Washington-based rental company with homes in Portland’s University Park, on the bluff near the University of Portland.";
