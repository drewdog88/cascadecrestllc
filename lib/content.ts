import { assetPath } from "./asset-path";

export const site = {
  name: "Cascade Crest",
  legalName: "Cascade Crest LLC",
  tagline: "Stewarding homes on the Portland bluff",
  heroSubline: "University Park · The Bluff · Steps from campus",
} as const;

export const brand = {
  logoAlt: `${site.legalName} — ${site.tagline}`,
  wordmark: assetPath("/images/logo/cascade-crest-wordmark.png"),
  icon: assetPath("/images/logo/cascade-crest-icon.png"),
} as const;

export const apply = {
  ctaLabel: "Apply for tenancy",
  href: "/apply",
  screeningProvider: "RentSpree",
  screeningFeeDisclosure:
    process.env.SCREENING_FEE_DISCLOSURE ??
    "$39.99–$49.99 (applicant pays screening partner)",
} as const;

const photos = {
  stJohnsBridge: assetPath("/images/photos/st-johns-bridge.webp"),
  portlandBridgeHood: assetPath("/images/photos/portland-bridge-hood.webp"),
  portlandSkyline: assetPath("/images/photos/portland-skyline.webp"),
  portlandWaterfront: assetPath("/images/photos/portland-waterfront.webp"),
  riverAndBridges: assetPath("/images/photos/river-and-bridges.webp"),
  willametteRiver: assetPath("/images/photos/willamette-river.webp"),
  bridgeOverWater: assetPath("/images/photos/bridge-over-water.webp"),
  portlandHills: assetPath("/images/photos/portland-hills.webp"),
  nightSkylineBridge: assetPath("/images/photos/night-skyline-bridge.webp"),
  portlandCafeLatte: assetPath("/images/photos/portland-cafe-latte.webp"),
  universityOfPortland: assetPath("/images/photos/university-of-portland.webp"),
  universityParkNeighborhood: assetPath(
    "/images/photos/university-park-neighborhood.webp",
  ),
  waudBluffTrail: assetPath("/images/photos/waud-bluff-trail.webp"),
} as const;

export const hero = {
  image: photos.stJohnsBridge,
  alt: "Aerial view of the St. Johns Bridge through fog above the Willamette River, Portland Oregon",
  credit: "Photo via Unsplash",
} as const;

export const proximity = {
  headline: "Steps from campus. Minutes to the river.",
  subhead:
    "University Park on the bluff—between the University of Portland and St. Johns.",
} as const;

export type ImageCredit = {
  name: string;
  url: string;
};

export type NearbyPlace = {
  name: string;
  blurb: string;
  image: string;
  alt: string;
  credit?: ImageCredit;
};

export const nearbyPlaces: NearbyPlace[] = [
  {
    name: "University of Portland",
    blurb:
      "Campus life and bluff-top walks—just steps from your door.",
    image: photos.universityOfPortland,
    alt: "University of Portland campus on the bluff with lawns and historic buildings, Portland Oregon",
  },
  {
    name: "Waud Bluff Trail",
    blurb:
      "Wooded switchbacks from the bluff down to the Willamette and the greenway.",
    image: photos.waudBluffTrail,
    alt: "Waud Bluff trail segment along the Willamette Greenway, connecting University of Portland River campus and Swan Island to Willamette Boulevard",
    credit: {
      name: "npGREENWAY",
      url: "https://npgreenway.org/waud-bluff-segment-update/",
    },
  },
  {
    name: "The Willamette",
    blurb:
      "River views, waterfront paths, and the North Portland Greenway below the bluff.",
    image: photos.willametteRiver,
    alt: "Aerial view of a wide river winding through green Pacific Northwest hills",
  },
  {
    name: "St. Johns",
    blurb:
      "Village shops, dining, and a weekend farmers market—small-town feel in the city.",
    image: photos.portlandBridgeHood,
    alt: "Aerial view of Portland with bridges over the Willamette and Mount Hood beyond",
  },
  {
    name: "Cathedral Park",
    blurb:
      "St. Johns Bridge, riverfront lawns, and seasonal events beneath the towers.",
    image: photos.bridgeOverWater,
    alt: "Aerial view of a bridge crossing the Willamette River in North Portland",
  },
  {
    name: "Lombard & everyday Portland",
    blurb:
      "Coffee, casual eats, and daily errands along the neighborhood’s main corridor.",
    image: photos.portlandCafeLatte,
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
  image: photos.portlandHills,
  alt: "Aerial view of Portland hillside neighborhoods, trees, and city streets",
} as const;

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: photos.portlandBridgeHood,
    alt: "Aerial view of Portland bridges, downtown, and Mount Hood",
    span: "wide",
  },
  {
    src: photos.stJohnsBridge,
    alt: "Aerial view of the St. Johns Bridge and the Willamette River",
    span: "tall",
  },
  {
    src: photos.portlandSkyline,
    alt: "Aerial view of the Portland skyline with Mount Hood in the distance",
    span: "wide",
  },
  {
    src: photos.riverAndBridges,
    alt: "Aerial drone view of the Willamette River and Portland bridges",
    span: "normal",
  },
  {
    src: photos.portlandWaterfront,
    alt: "Aerial view of Portland buildings along the Willamette waterfront",
    span: "normal",
  },
  {
    src: photos.willametteRiver,
    alt: "Aerial view of the Willamette River and surrounding green landscape",
    span: "normal",
  },
  {
    src: photos.bridgeOverWater,
    alt: "Aerial view of a bridge spanning the Willamette River",
    span: "tall",
  },
  {
    src: photos.nightSkylineBridge,
    alt: "Aerial view of Portland’s skyline and bridges at night",
    span: "normal",
  },
];

export const neighborhoodLabels = [
  { label: "The Bluff", image: photos.riverAndBridges },
  { label: "University Park", image: photos.universityParkNeighborhood },
  { label: "St. Johns", image: photos.stJohnsBridge },
  { label: "Portland & the Willamette", image: photos.willametteRiver },
] as const;

export const about = {
  title: "About",
  body: `Cascade Crest is a for-profit Washington State rental company backed by a small group of private investors. We steward homes in Portland’s University Park neighborhood—on the bluff, steps from the University of Portland, with TriMet stops and bike routes nearby and a short trip to St. Johns, the Willamette, and Cathedral Park.

This site shares the spirit of the place—not a public listing portal. We do not publish our property street address here. Applicants review screening criteria on this site, then complete the application and background screening with our licensed partner—we do not store applicant personal data on this website.`,
} as const;

export const footer = {
  affiliation:
    "Not affiliated with the University of Portland.",
  registration: "Registered in Washington State · Property in Oregon",
  legalLinks: [
    { label: "Apply", href: "/apply" },
    { label: "Screening criteria", href: "/screening-criteria" },
    { label: "Compliance", href: "/compliance" },
    { label: "Privacy", href: "/privacy" },
    { label: "Fair housing", href: "/fair-housing" },
  ] as const,
  photoCredits: [
    {
      label: "Waud Bluff trail map",
      name: "npGREENWAY",
      url: "https://npgreenway.org/waud-bluff-segment-update/",
    },
    {
      label: "University of Portland & University Park photos",
      name: "Wikimedia Commons",
      url: "https://commons.wikimedia.org/",
    },
    {
      label: "Other photos",
      name: "Unsplash",
      url: "https://unsplash.com/",
    },
  ],
} as const;

export const metadataDescription =
  "Cascade Crest LLC—a Washington-based rental company with homes in Portland’s University Park, on the bluff near the University of Portland.";
