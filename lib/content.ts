export const site = {
  name: "Cascade Crest",
  legalName: "Cascade Crest LLC",
  tagline: "Washington-based rental stewardship · Oregon homes",
  heroSubline: "University Park · The Bluff · Steps from campus",
} as const;

export const hero = {
  image:
    "https://images.unsplash.com/photo-1605218454466-1ec4dffb371c?auto=format&fit=crop&w=2400&q=85",
  alt: "St. Johns Bridge spanning the Willamette River at dusk, Portland Oregon",
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
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    alt: "Tree-lined campus walkway on a green hillside",
  },
  {
    name: "Waud Bluff Trail",
    blurb:
      "Wooded switchbacks from the bluff down to the Willamette and the greenway.",
    image:
      "https://images.unsplash.com/photo-1441974231530-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    alt: "Sunlit forest trail through tall trees",
  },
  {
    name: "The Willamette",
    blurb:
      "River views, waterfront paths, and the North Portland Greenway below the bluff.",
    image:
      "https://images.unsplash.com/photo-1583422409513-18848da3b498?auto=format&fit=crop&w=1200&q=80",
    alt: "Calm river water reflecting sky and shoreline trees",
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
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80",
    alt: "Gothic bridge towers rising above a riverside park",
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
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1600&q=80",
  alt: "Cyclist riding along a tree-lined urban street",
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1516644608687-fd9bbfdda04e?auto=format&fit=crop&w=1200&q=80",
    alt: "Portland city skyline with Mount Hood in the distance",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1605218454466-1ec4dffb371c?auto=format&fit=crop&w=800&q=80",
    alt: "St. Johns Bridge over the Willamette River",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    alt: "Layered mountain ridges at golden hour",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1473448912269-2881d5e329a9?auto=format&fit=crop&w=1200&q=80",
    alt: "Pacific Northwest forest canopy from below",
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
    src: "https://images.unsplash.com/photo-1493246507134-91ee19c0c48b?auto=format&fit=crop&w=800&q=80",
    alt: "Alpine lake surrounded by evergreen forest",
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
  body: `Cascade Crest is a for-profit Washington State rental company backed by a small group of private investors. We steward a single home in Portland’s University Park neighborhood—on the bluff, steps from the University of Portland, with TriMet stops and bike routes nearby and a short trip to St. Johns, the Willamette, and Cathedral Park.

This site shares the spirit of the place—not a listing portal. We do not publish our property address or accept inquiries through this website.`,
} as const;

export const footer = {
  affiliation:
    "Not affiliated with the University of Portland.",
  registration: "Registered in Washington State · Property in Oregon",
  photoCredit: "Photography via Unsplash (license-free for web use).",
} as const;

export const metadataDescription =
  "Cascade Crest LLC—a Washington-based rental company with a home in Portland’s University Park, on the bluff near the University of Portland.";
