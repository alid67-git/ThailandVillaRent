import type { DestinationRegion, DestinationSpot } from "./types";
import { DESTINATION_REGIONS } from "./types";
import { DESTINATION_IMAGES as D } from "@/data/images";
import { EXTRA_DESTINATION_SPOTS } from "./catalog-extra";

const BASE_DESTINATION_SPOTS: DestinationSpot[] = [
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

  // Krabi
  { id: "railay-beach", slug: "railay-beach", region: "krabi", category: "beach", appeal: 10, lat: 8.0104, lng: 98.8395, image: D.limestone, images: [D.limestone, D.beach], gradient: "from-emerald-500/70 to-teal-900/70" },
  { id: "ao-nang-beach", slug: "ao-nang-beach", region: "krabi", category: "beach", appeal: 8, lat: 8.0456, lng: 98.8234, image: D.beach, images: [D.beach, D.limestone], gradient: "from-sky-500/70 to-blue-900/70" },
  { id: "phra-nang-cave", slug: "phra-nang-cave", region: "krabi", category: "beach", appeal: 9, lat: 8.0067, lng: 98.8378, image: D.limestone, images: [D.limestone, D.beach2], gradient: "from-rose-500/70 to-orange-900/70" },
  { id: "tiger-cave-temple", slug: "tiger-cave-temple", region: "krabi", category: "temple", appeal: 8, lat: 8.1234, lng: 98.9256, image: D.temple, images: [D.temple, D.jungle], gradient: "from-amber-500/70 to-orange-800/70" },
  { id: "emerald-pool", slug: "emerald-pool", region: "krabi", category: "nature", appeal: 9, lat: 8.1502, lng: 98.8123, image: D.waterfall, images: [D.waterfall, D.jungle], gradient: "from-green-500/70 to-emerald-900/70" },

  // Chiang Mai
  { id: "doi-suthep", slug: "doi-suthep", region: "chiang-mai", category: "temple", appeal: 10, lat: 18.8047, lng: 98.9216, image: D.temple2, images: [D.temple2, D.jungle], gradient: "from-yellow-500/70 to-amber-900/70" },
  { id: "old-city-chiang-mai", slug: "old-city-chiang-mai", region: "chiang-mai", category: "market", appeal: 9, lat: 18.7883, lng: 98.9853, image: D.temple, images: [D.temple, D.market], gradient: "from-rose-500/70 to-red-900/70" },
  { id: "sunday-walking-street", slug: "sunday-walking-street", region: "chiang-mai", category: "market", appeal: 8, lat: 18.787, lng: 98.993, image: D.market, images: [D.market, D.temple], gradient: "from-orange-500/70 to-amber-900/70" },
  { id: "doi-inthanon", slug: "doi-inthanon", region: "chiang-mai", category: "nature", appeal: 10, lat: 18.5875, lng: 98.4872, image: D.jungle, images: [D.jungle, D.viewpoint], gradient: "from-green-600/70 to-emerald-900/70" },
  { id: "sticky-waterfall", slug: "sticky-waterfall", region: "chiang-mai", category: "nature", appeal: 8, lat: 19.0567, lng: 98.8934, image: D.waterfall, images: [D.waterfall, D.jungle], gradient: "from-cyan-500/70 to-teal-900/70" },

  // Bangkok
  { id: "grand-palace", slug: "grand-palace", region: "bangkok", category: "temple", appeal: 10, lat: 13.75, lng: 100.4913, image: D.temple2, images: [D.temple2, D.city], gradient: "from-amber-500/70 to-yellow-900/70" },
  { id: "wat-arun", slug: "wat-arun", region: "bangkok", category: "temple", appeal: 10, lat: 13.7437, lng: 100.4888, image: D.temple, images: [D.temple, D.city2], gradient: "from-indigo-500/70 to-blue-900/70" },
  { id: "chatuchak-market", slug: "chatuchak-market", region: "bangkok", category: "market", appeal: 9, lat: 13.7999, lng: 100.5501, image: D.market, images: [D.market, D.city], gradient: "from-lime-500/70 to-green-900/70" },
  { id: "asiatique-riverfront", slug: "asiatique-riverfront", region: "bangkok", category: "show", appeal: 7, lat: 13.7047, lng: 100.5019, image: D.city2, images: [D.city2, D.show], gradient: "from-purple-500/70 to-violet-900/70" },

  // Pattaya
  { id: "walking-street-pattaya", slug: "walking-street-pattaya", region: "pattaya", category: "nightlife", appeal: 7, lat: 12.9267, lng: 100.8728, image: D.nightlife, images: [D.nightlife, D.beach2], gradient: "from-pink-500/70 to-rose-900/70" },
  { id: "koh-larn", slug: "koh-larn", region: "pattaya", category: "island", appeal: 8, lat: 12.9145, lng: 100.7834, image: D.island, images: [D.island, D.beach], gradient: "from-cyan-400/70 to-blue-800/70" },
  { id: "sanctuary-of-truth", slug: "sanctuary-of-truth", region: "pattaya", category: "temple", appeal: 9, lat: 12.9723, lng: 100.889, image: D.temple2, images: [D.temple2, D.beach], gradient: "from-amber-600/70 to-orange-900/70" },
  { id: "jomtien-beach", slug: "jomtien-beach", region: "pattaya", category: "beach", appeal: 7, lat: 12.8878, lng: 100.8723, image: D.beach2, images: [D.beach2, D.beach], gradient: "from-sky-500/70 to-indigo-900/70" },

  // Koh Phangan
  { id: "haad-rin-beach", slug: "haad-rin-beach", region: "koh-phangan", category: "beach", appeal: 8, lat: 9.6745, lng: 100.0612, image: D.beach, images: [D.beach, D.nightlife], gradient: "from-fuchsia-500/70 to-purple-900/70" },
  { id: "bottle-beach", slug: "bottle-beach", region: "koh-phangan", category: "beach", appeal: 9, lat: 9.8234, lng: 99.9876, image: D.beach2, images: [D.beach2, D.island], gradient: "from-teal-500/70 to-cyan-900/70" },
  { id: "than-sadet-waterfall", slug: "than-sadet-waterfall", region: "koh-phangan", category: "nature", appeal: 7, lat: 9.7456, lng: 100.0123, image: D.waterfall, images: [D.waterfall, D.jungle], gradient: "from-green-500/70 to-emerald-900/70" },

  // Koh Tao
  { id: "sairee-beach", slug: "sairee-beach", region: "koh-tao", category: "beach", appeal: 8, lat: 10.0956, lng: 99.8401, image: D.beach, images: [D.beach, D.island], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "shark-bay-tao", slug: "shark-bay-tao", region: "koh-tao", category: "nature", appeal: 8, lat: 10.0789, lng: 99.8234, image: D.beach2, images: [D.beach2, D.nature], gradient: "from-blue-500/70 to-indigo-900/70" },

  // Koh Lipe
  { id: "pattaya-beach-lipe", slug: "pattaya-beach-lipe", region: "koh-lipe", category: "beach", appeal: 10, lat: 6.4867, lng: 99.3012, image: D.beach, images: [D.beach, D.island], gradient: "from-turquoise-400/70 to-blue-800/70" },
  { id: "sunrise-beach-lipe", slug: "sunrise-beach-lipe", region: "koh-lipe", category: "beach", appeal: 9, lat: 6.4923, lng: 99.3089, image: D.beach2, images: [D.beach2, D.beach], gradient: "from-orange-400/70 to-rose-900/70" },

  // Ayutthaya
  { id: "ayutthaya-historical-park", slug: "ayutthaya-historical-park", region: "ayutthaya", category: "temple", appeal: 10, lat: 14.3532, lng: 100.5689, image: D.ruins, images: [D.ruins, D.temple], gradient: "from-stone-500/70 to-amber-900/70" },
  { id: "wat-mahathat", slug: "wat-mahathat", region: "ayutthaya", category: "temple", appeal: 9, lat: 14.3567, lng: 100.5678, image: D.ruins, images: [D.ruins, D.temple2], gradient: "from-amber-500/70 to-orange-900/70" },

  // Pai
  { id: "pai-canyon", slug: "pai-canyon", region: "pai", category: "viewpoint", appeal: 8, lat: 19.3567, lng: 98.4234, image: D.viewpoint, images: [D.viewpoint, D.jungle], gradient: "from-orange-500/70 to-red-900/70" },
  { id: "pam-bok-waterfall", slug: "pam-bok-waterfall", region: "pai", category: "nature", appeal: 7, lat: 19.3678, lng: 98.4456, image: D.waterfall, images: [D.waterfall, D.jungle], gradient: "from-green-500/70 to-teal-900/70" },

  // Hua Hin
  { id: "hua-hin-beach", slug: "hua-hin-beach", region: "hua-hin", category: "beach", appeal: 7, lat: 12.5689, lng: 99.9578, image: D.beach, images: [D.beach, D.beach2], gradient: "from-sky-500/70 to-blue-900/70" },
];

export const DESTINATION_SPOTS: DestinationSpot[] = [
  ...BASE_DESTINATION_SPOTS,
  ...EXTRA_DESTINATION_SPOTS,
];

export function getDestinationBySlug(slug: string) {
  return DESTINATION_SPOTS.find((d) => d.slug === slug);
}

export function getDestinationsByRegion(region: DestinationRegion) {
  return DESTINATION_SPOTS.filter((d) => d.region === region);
}

export function getDestinationRegionsWithSpots(): DestinationRegion[] {
  return DESTINATION_REGIONS.filter((r) => DESTINATION_SPOTS.some((d) => d.region === r));
}

export function getAllDestinationSlugs() {
  return DESTINATION_SPOTS.map((d) => d.slug);
}
