/**
 * Source URLs for one-time download via scripts/optimize-images.mjs.
 * After optimization, lib/content.ts uses /images/photos/*.webp paths only.
 */
export const remoteImages = [
  {
    slug: "st-johns-bridge",
    url: "https://images.unsplash.com/photo-1543813425-d5ce8a18cd79?auto=format&fit=crop&w=2400&q=85",
    maxWidth: 1920,
  },
  {
    slug: "portland-bridge-hood",
    url: "https://images.unsplash.com/photo-1774464695572-fcbb4171ff76?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "portland-skyline",
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "portland-waterfront",
    url: "https://images.unsplash.com/photo-1567984828708-5750f8acb181?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "river-and-bridges",
    url: "https://images.unsplash.com/photo-1587590102356-3b3454479809?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "willamette-river",
    url: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "bridge-over-water",
    url: "https://images.unsplash.com/photo-1755976547060-32a82c6d18a9?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "portland-hills",
    url: "https://images.unsplash.com/photo-1573828562803-1d582aa6ab6a?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "night-skyline-bridge",
    url: "https://images.unsplash.com/photo-1635170870336-67546b863d13?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "portland-cafe-latte",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    maxWidth: 1200,
  },
  {
    slug: "university-of-portland",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/85/University_of_Portland_%28497062163%29.jpg",
    maxWidth: 1200,
  },
  {
    slug: "university-park-neighborhood",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/University_Park_%28Portland%2C_Oregon%29.jpg",
    maxWidth: 1200,
  },
];

export const localImages = [
  {
    slug: "waud-bluff-trail",
    inputPath: "public/images/photos/waud-bluff-trail.webp",
    maxWidth: 1200,
  },
];
