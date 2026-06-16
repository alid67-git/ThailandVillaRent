import type { DestinationSpot } from "./types";
import type { StayRegion } from "@/data/stays/types";
import { DESTINATION_IMAGES as D } from "@/data/images";

export const DESTINATION_SPOTS: DestinationSpot[] = [
  { id: "kamala-beach", slug: "kamala-beach", region: "phuket", category: "beach", appeal: 8, lat: 7.9525, lng: 98.2834, image: D.beach, images: [D.beach, D.beach2], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "surin-beach", slug: "surin-beach", region: "phuket", category: "beach", appeal: 8, lat: 7.9742, lng: 98.2789, image: D.beach2, images: [D.beach2, D.beach], gradient: "from-teal-500/70 to-emerald-900/70" },
  { id: "bang-tao-beach", slug: "bang-tao-beach", region: "phuket", category: "beach", appeal: 8, lat: 7.9897, lng: 98.2891, image: D.beach, images: [D.beach, D.island], gradient: "from-sky-500/70 to-indigo-900/70" },
  { id: "patong-beach", slug: "patong-beach", region: "phuket", category: "beach", appeal: 7, lat: 7.8961, lng: 98.2956, image: D.beach2, images: [D.beach2, D.beach], gradient: "from-pink-500/70 to-rose-900/70" },
  { id: "phuket-fantasea", slug: "phuket-fantasea", region: "phuket", category: "show", appeal: 7, lat: 7.9478, lng: 98.2812, image: D.show, images: [D.show, D.beach], gradient: "from-purple-500/70 to-violet-900/70" },
  { id: "kamala-market", slug: "kamala-market", region: "phuket", category: "market", appeal: 6, lat: 7.951, lng: 98.2825, image: D.market, images: [D.market, D.beach], gradient: "from-orange-500/70 to-amber-900/70" },
  { id: "big-buddha-phuket", slug: "big-buddha-phuket", region: "phuket", category: "temple", appeal: 10, lat: 7.8276, lng: 98.3128, image: D.temple, images: [D.temple, D.temple2], gradient: "from-amber-500/70 to-orange-800/70" },
  { id: "old-phuket-town", slug: "old-phuket-town", region: "phuket", category: "market", appeal: 8, lat: 7.8841, lng: 98.3883, image: D.market, images: [D.market, D.temple], gradient: "from-rose-500/70 to-red-900/70" },
  { id: "wat-chalong", slug: "wat-chalong", region: "phuket", category: "temple", appeal: 8, lat: 7.8467, lng: 98.3389, image: D.temple2, images: [D.temple2, D.temple], gradient: "from-yellow-500/70 to-amber-900/70" },
  { id: "promthep-cape", slug: "promthep-cape", region: "phuket", category: "viewpoint", appeal: 9, lat: 7.7625, lng: 98.3056, image: D.viewpoint, images: [D.viewpoint, D.beach2], gradient: "from-rose-500/70 to-purple-900/70" },
  { id: "phi-phi-day-trip", slug: "phi-phi-day-trip", region: "phuket", category: "island", appeal: 10, lat: 7.7407, lng: 98.7784, image: D.island, images: [D.island, D.beach], gradient: "from-cyan-400/70 to-blue-800/70" },
  { id: "bang-pae-elephant", slug: "bang-pae-elephant", region: "phuket", category: "nature", appeal: 7, lat: 7.9485, lng: 98.278, image: D.nature, images: [D.nature, D.beach], gradient: "from-green-500/70 to-emerald-900/70" },
  { id: "chaweng-beach", slug: "chaweng-beach", region: "koh-samui", category: "beach", appeal: 8, lat: 9.5282, lng: 100.0614, image: D.beach, images: [D.beach, D.beach2], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "bo-phut-beach", slug: "bo-phut-beach", region: "koh-samui", category: "beach", appeal: 8, lat: 9.5594, lng: 100.0256, image: D.beach2, images: [D.beach2, D.beach], gradient: "from-teal-500/70 to-cyan-900/70" },
  { id: "fishermans-village", slug: "fishermans-village", region: "koh-samui", category: "market", appeal: 8, lat: 9.5612, lng: 100.0289, image: D.market, images: [D.market, D.beach2], gradient: "from-amber-500/70 to-orange-900/70" },
  { id: "big-buddha-samui", slug: "big-buddha-samui", region: "koh-samui", category: "temple", appeal: 9, lat: 9.5711, lng: 100.0867, image: D.temple, images: [D.temple, D.temple2], gradient: "from-amber-500/70 to-yellow-900/70" },
  { id: "wat-plai-laem", slug: "wat-plai-laem", region: "koh-samui", category: "temple", appeal: 8, lat: 9.5705, lng: 100.0845, image: D.temple2, images: [D.temple2, D.temple], gradient: "from-indigo-500/70 to-purple-900/70" },
  { id: "lamai-beach", slug: "lamai-beach", region: "koh-samui", category: "beach", appeal: 8, lat: 9.4612, lng: 100.0389, image: D.beach, images: [D.beach, D.island], gradient: "from-sky-500/70 to-blue-900/70" },
  { id: "maenam-beach", slug: "maenam-beach", region: "koh-samui", category: "beach", appeal: 7, lat: 9.5718, lng: 99.9845, image: D.beach2, images: [D.beach2, D.beach], gradient: "from-emerald-500/70 to-teal-900/70" },
  { id: "ang-thong-park", slug: "ang-thong-park", region: "koh-samui", category: "island", appeal: 10, lat: 9.6389, lng: 99.6767, image: D.island, images: [D.island, D.viewpoint], gradient: "from-blue-500/70 to-cyan-900/70" },
  { id: "natien-beach", slug: "natien-beach", region: "koh-samui", category: "beach", appeal: 7, lat: 9.4189, lng: 100.0234, image: D.beach, images: [D.beach, D.nature], gradient: "from-cyan-400/70 to-blue-800/70" },
];

export function getDestinationBySlug(slug: string) {
  return DESTINATION_SPOTS.find((d) => d.slug === slug);
}

export function getDestinationsByRegion(region: StayRegion) {
  return DESTINATION_SPOTS.filter((d) => d.region === region);
}

export function getAllDestinationSlugs() {
  return DESTINATION_SPOTS.map((d) => d.slug);
}
