import type { DestinationSpot } from "./types";
import { DESTINATION_IMAGES as D } from "@/data/images";

/** 50 additional destinations across Thailand */
export const EXTRA_DESTINATION_SPOTS: DestinationSpot[] = [
  // Phuket (+10)
  { id: "karon-beach", slug: "karon-beach", region: "phuket", category: "beach", appeal: 8, lat: 7.846, lng: 98.294, image: D.beach, images: [D.beach, D.beach2, D.island], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "kata-beach", slug: "kata-beach", region: "phuket", category: "beach", appeal: 9, lat: 7.8205, lng: 98.2985, image: D.beach2, images: [D.beach2, D.beach, D.viewpoint], gradient: "from-sky-500/70 to-indigo-900/70" },
  { id: "nai-harn-beach", slug: "nai-harn-beach", region: "phuket", category: "beach", appeal: 9, lat: 7.778, lng: 98.306, image: D.beach, images: [D.beach, D.beach2, D.nature], gradient: "from-teal-500/70 to-emerald-900/70" },
  { id: "freedom-beach-phuket", slug: "freedom-beach-phuket", region: "phuket", category: "beach", appeal: 10, lat: 7.894, lng: 98.277, image: D.island, images: [D.island, D.beach, D.limestone], gradient: "from-emerald-400/70 to-teal-900/70" },
  { id: "rawai-beach", slug: "rawai-beach", region: "phuket", category: "beach", appeal: 7, lat: 7.766, lng: 98.321, image: D.beach2, images: [D.beach2, D.market, D.beach], gradient: "from-blue-500/70 to-cyan-900/70" },
  { id: "monkey-hill-phuket", slug: "monkey-hill-phuket", region: "phuket", category: "viewpoint", appeal: 7, lat: 7.884, lng: 98.395, image: D.viewpoint, images: [D.viewpoint, D.nature, D.temple], gradient: "from-green-500/70 to-emerald-900/70" },
  { id: "simon-cabaret-phuket", slug: "simon-cabaret-phuket", region: "phuket", category: "show", appeal: 7, lat: 7.891, lng: 98.312, image: D.show, images: [D.show, D.nightlife, D.beach], gradient: "from-fuchsia-500/70 to-purple-900/70" },
  { id: "chillva-market", slug: "chillva-market", region: "phuket", category: "market", appeal: 8, lat: 7.905, lng: 98.345, image: D.market, images: [D.market, D.nightlife, D.beach2], gradient: "from-violet-500/70 to-indigo-900/70" },
  { id: "naiyang-beach", slug: "naiyang-beach", region: "phuket", category: "beach", appeal: 7, lat: 8.09, lng: 98.298, image: D.beach, images: [D.beach, D.nature, D.beach2], gradient: "from-cyan-400/70 to-blue-800/70" },
  { id: "mai-khao-beach", slug: "mai-khao-beach", region: "phuket", category: "beach", appeal: 7, lat: 8.105, lng: 98.298, image: D.beach2, images: [D.beach2, D.beach, D.nature], gradient: "from-sky-500/70 to-blue-900/70" },

  // Koh Samui (+5)
  { id: "lipa-noi-beach", slug: "lipa-noi-beach", region: "koh-samui", category: "beach", appeal: 8, lat: 9.505, lng: 99.935, image: D.beach, images: [D.beach, D.beach2, D.viewpoint], gradient: "from-orange-400/70 to-rose-900/70" },
  { id: "silver-beach-samui", slug: "silver-beach-samui", region: "koh-samui", category: "beach", appeal: 8, lat: 9.448, lng: 100.047, image: D.beach2, images: [D.beach2, D.beach, D.island], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "namuang-waterfall", slug: "namuang-waterfall", region: "koh-samui", category: "nature", appeal: 7, lat: 9.478, lng: 99.99, image: D.waterfall, images: [D.waterfall, D.jungle, D.nature], gradient: "from-green-500/70 to-emerald-900/70" },
  { id: "overlap-stone-samui", slug: "overlap-stone-samui", region: "koh-samui", category: "viewpoint", appeal: 7, lat: 9.452, lng: 100.042, image: D.viewpoint, images: [D.viewpoint, D.beach, D.beach2], gradient: "from-amber-500/70 to-orange-900/70" },
  { id: "secret-garden-samui", slug: "secret-garden-samui", region: "koh-samui", category: "temple", appeal: 7, lat: 9.512, lng: 99.965, image: D.temple, images: [D.temple, D.jungle, D.nature], gradient: "from-lime-500/70 to-green-900/70" },

  // Krabi (+5)
  { id: "koh-poda", slug: "koh-poda", region: "krabi", category: "island", appeal: 9, lat: 7.965, lng: 98.78, image: D.island, images: [D.island, D.limestone, D.beach], gradient: "from-cyan-400/70 to-blue-800/70" },
  { id: "koh-hong-krabi", slug: "koh-hong-krabi", region: "krabi", category: "island", appeal: 10, lat: 8.072, lng: 98.655, image: D.limestone, images: [D.limestone, D.island, D.beach], gradient: "from-emerald-500/70 to-teal-900/70" },
  { id: "tubkaek-beach", slug: "tubkaek-beach", region: "krabi", category: "beach", appeal: 8, lat: 8.085, lng: 98.785, image: D.beach, images: [D.beach, D.limestone, D.beach2], gradient: "from-sky-500/70 to-indigo-900/70" },
  { id: "ao-thalane", slug: "ao-thalane", region: "krabi", category: "nature", appeal: 9, lat: 8.02, lng: 98.62, image: D.jungle, images: [D.jungle, D.limestone, D.waterfall], gradient: "from-green-600/70 to-emerald-900/70" },
  { id: "klong-muang-beach", slug: "klong-muang-beach", region: "krabi", category: "beach", appeal: 7, lat: 8.075, lng: 98.77, image: D.beach2, images: [D.beach2, D.beach, D.limestone], gradient: "from-teal-500/70 to-cyan-900/70" },

  // Chiang Mai (+5)
  { id: "warorot-market", slug: "warorot-market", region: "chiang-mai", category: "market", appeal: 8, lat: 18.789, lng: 99.001, image: D.market, images: [D.market, D.temple, D.city], gradient: "from-orange-500/70 to-amber-900/70" },
  { id: "doi-pui-village", slug: "doi-pui-village", region: "chiang-mai", category: "nature", appeal: 8, lat: 18.805, lng: 98.895, image: D.jungle, images: [D.jungle, D.temple2, D.viewpoint], gradient: "from-green-500/70 to-emerald-900/70" },
  { id: "nimman-road", slug: "nimman-road", region: "chiang-mai", category: "market", appeal: 8, lat: 18.799, lng: 98.968, image: D.city2, images: [D.city2, D.market, D.temple], gradient: "from-rose-500/70 to-pink-900/70" },
  { id: "art-in-paradise-cm", slug: "art-in-paradise-cm", region: "chiang-mai", category: "show", appeal: 7, lat: 18.804, lng: 98.967, image: D.show, images: [D.show, D.city, D.market], gradient: "from-purple-500/70 to-violet-900/70" },
  { id: "san-kamphaeng-hot-springs", slug: "san-kamphaeng-hot-springs", region: "chiang-mai", category: "nature", appeal: 7, lat: 18.745, lng: 99.12, image: D.waterfall, images: [D.waterfall, D.jungle, D.nature], gradient: "from-amber-500/70 to-orange-900/70" },

  // Bangkok (+5)
  { id: "wat-pho", slug: "wat-pho", region: "bangkok", category: "temple", appeal: 10, lat: 13.7465, lng: 100.493, image: D.temple2, images: [D.temple2, D.temple, D.city], gradient: "from-amber-500/70 to-yellow-900/70" },
  { id: "lumpini-park", slug: "lumpini-park", region: "bangkok", category: "nature", appeal: 7, lat: 13.731, lng: 100.541, image: D.city, images: [D.city, D.nature, D.city2], gradient: "from-green-500/70 to-emerald-900/70" },
  { id: "iconsiam", slug: "iconsiam", region: "bangkok", category: "market", appeal: 8, lat: 13.726, lng: 100.51, image: D.city2, images: [D.city2, D.city, D.market], gradient: "from-indigo-500/70 to-blue-900/70" },
  { id: "mahanakhon-skywalk", slug: "mahanakhon-skywalk", region: "bangkok", category: "viewpoint", appeal: 8, lat: 13.723, lng: 100.528, image: D.city, images: [D.city, D.city2, D.viewpoint], gradient: "from-slate-500/70 to-zinc-900/70" },
  { id: "jim-thompson-house", slug: "jim-thompson-house", region: "bangkok", category: "market", appeal: 8, lat: 13.749, lng: 100.528, image: D.temple, images: [D.temple, D.market, D.city], gradient: "from-teal-500/70 to-cyan-900/70" },

  // Pattaya (+4)
  { id: "nong-nooch-garden", slug: "nong-nooch-garden", region: "pattaya", category: "nature", appeal: 8, lat: 12.768, lng: 100.937, image: D.nature, images: [D.nature, D.jungle, D.temple], gradient: "from-lime-500/70 to-green-900/70" },
  { id: "mini-siam-pattaya", slug: "mini-siam-pattaya", region: "pattaya", category: "show", appeal: 6, lat: 12.948, lng: 100.888, image: D.show, images: [D.show, D.temple, D.city], gradient: "from-blue-500/70 to-indigo-900/70" },
  { id: "ko-sichang", slug: "ko-sichang", region: "pattaya", category: "island", appeal: 7, lat: 13.155, lng: 100.805, image: D.island, images: [D.island, D.beach, D.temple], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "pratumnak-viewpoint", slug: "pratumnak-viewpoint", region: "pattaya", category: "viewpoint", appeal: 8, lat: 12.915, lng: 100.86, image: D.viewpoint, images: [D.viewpoint, D.beach2, D.beach], gradient: "from-rose-500/70 to-purple-900/70" },

  // Koh Phangan (+3)
  { id: "zen-beach", slug: "zen-beach", region: "koh-phangan", category: "beach", appeal: 8, lat: 9.71, lng: 100.02, image: D.beach, images: [D.beach, D.beach2, D.jungle], gradient: "from-teal-500/70 to-cyan-900/70" },
  { id: "khao-rae-viewpoint", slug: "khao-rae-viewpoint", region: "koh-phangan", category: "viewpoint", appeal: 8, lat: 9.78, lng: 99.98, image: D.viewpoint, images: [D.viewpoint, D.jungle, D.beach], gradient: "from-orange-500/70 to-red-900/70" },
  { id: "salad-bay", slug: "salad-bay", region: "koh-phangan", category: "beach", appeal: 7, lat: 9.795, lng: 99.97, image: D.beach2, images: [D.beach2, D.island, D.beach], gradient: "from-sky-500/70 to-blue-900/70" },

  // Koh Tao (+3)
  { id: "john-suwan-viewpoint", slug: "john-suwan-viewpoint", region: "koh-tao", category: "viewpoint", appeal: 9, lat: 10.085, lng: 99.835, image: D.viewpoint, images: [D.viewpoint, D.beach, D.island], gradient: "from-amber-500/70 to-orange-900/70" },
  { id: "mango-bay-tao", slug: "mango-bay-tao", region: "koh-tao", category: "beach", appeal: 8, lat: 10.12, lng: 99.825, image: D.beach, images: [D.beach, D.beach2, D.nature], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "ao-leuk-tao", slug: "ao-leuk-tao", region: "koh-tao", category: "beach", appeal: 8, lat: 10.105, lng: 99.855, image: D.beach2, images: [D.beach2, D.island, D.beach], gradient: "from-emerald-500/70 to-teal-900/70" },

  // Koh Lipe (+2)
  { id: "karma-beach-lipe", slug: "karma-beach-lipe", region: "koh-lipe", category: "beach", appeal: 9, lat: 6.488, lng: 99.295, image: D.beach, images: [D.beach, D.island, D.beach2], gradient: "from-turquoise-400/70 to-blue-800/70" },
  { id: "walking-street-lipe", slug: "walking-street-lipe", region: "koh-lipe", category: "market", appeal: 7, lat: 6.487, lng: 99.3, image: D.market, images: [D.market, D.beach, D.beach2], gradient: "from-amber-500/70 to-orange-900/70" },

  // Ayutthaya (+2)
  { id: "bang-pa-in-palace", slug: "bang-pa-in-palace", region: "ayutthaya", category: "temple", appeal: 9, lat: 14.217, lng: 100.578, image: D.temple2, images: [D.temple2, D.ruins, D.temple], gradient: "from-yellow-500/70 to-amber-900/70" },
  { id: "wat-chaiwatthanaram", slug: "wat-chaiwatthanaram", region: "ayutthaya", category: "temple", appeal: 9, lat: 14.343, lng: 100.542, image: D.ruins, images: [D.ruins, D.temple, D.temple2], gradient: "from-stone-500/70 to-amber-900/70" },

  // Pai (+2)
  { id: "yun-lai-viewpoint", slug: "yun-lai-viewpoint", region: "pai", category: "viewpoint", appeal: 8, lat: 19.365, lng: 98.435, image: D.viewpoint, images: [D.viewpoint, D.jungle, D.waterfall], gradient: "from-orange-400/70 to-rose-900/70" },
  { id: "tha-pai-hot-springs", slug: "tha-pai-hot-springs", region: "pai", category: "nature", appeal: 7, lat: 19.38, lng: 98.45, image: D.waterfall, images: [D.waterfall, D.jungle, D.nature], gradient: "from-green-500/70 to-teal-900/70" },

  // Hua Hin (+2)
  { id: "cicada-market-hua-hin", slug: "cicada-market-hua-hin", region: "hua-hin", category: "market", appeal: 7, lat: 12.523, lng: 99.963, image: D.market, images: [D.market, D.beach, D.nightlife], gradient: "from-violet-500/70 to-purple-900/70" },
  { id: "khao-sam-roi-yot", slug: "khao-sam-roi-yot", region: "hua-hin", category: "nature", appeal: 9, lat: 12.185, lng: 99.985, image: D.limestone, images: [D.limestone, D.beach, D.jungle], gradient: "from-blue-500/70 to-cyan-900/70" },

  // Koh Chang (4)
  { id: "white-sand-beach-koh-chang", slug: "white-sand-beach-koh-chang", region: "koh-chang", category: "beach", appeal: 8, lat: 12.101, lng: 102.278, image: D.beach, images: [D.beach, D.beach2, D.jungle], gradient: "from-cyan-500/70 to-blue-900/70" },
  { id: "lonely-beach-koh-chang", slug: "lonely-beach-koh-chang", region: "koh-chang", category: "beach", appeal: 8, lat: 12.015, lng: 102.285, image: D.beach2, images: [D.beach2, D.beach, D.nature], gradient: "from-teal-500/70 to-emerald-900/70" },
  { id: "klong-plu-waterfall", slug: "klong-plu-waterfall", region: "koh-chang", category: "nature", appeal: 8, lat: 12.055, lng: 102.32, image: D.waterfall, images: [D.waterfall, D.jungle, D.nature], gradient: "from-green-500/70 to-emerald-900/70" },
  { id: "bang-bao-pier", slug: "bang-bao-pier", region: "koh-chang", category: "market", appeal: 7, lat: 11.985, lng: 102.32, image: D.market, images: [D.market, D.beach, D.island], gradient: "from-amber-500/70 to-orange-900/70" },

  // Koh Samet (3)
  { id: "sai-kaew-beach", slug: "sai-kaew-beach", region: "koh-samet", category: "beach", appeal: 8, lat: 12.568, lng: 101.465, image: D.beach, images: [D.beach, D.beach2, D.island], gradient: "from-sky-500/70 to-blue-900/70" },
  { id: "ao-prao-beach", slug: "ao-prao-beach", region: "koh-samet", category: "beach", appeal: 8, lat: 12.555, lng: 101.44, image: D.beach2, images: [D.beach2, D.beach, D.nature], gradient: "from-cyan-400/70 to-blue-800/70" },
  { id: "samet-viewpoint", slug: "samet-viewpoint", region: "koh-samet", category: "viewpoint", appeal: 7, lat: 12.56, lng: 101.455, image: D.viewpoint, images: [D.viewpoint, D.beach, D.jungle], gradient: "from-rose-500/70 to-orange-900/70" },

  // Kanchanaburi (4)
  { id: "bridge-river-kwai", slug: "bridge-river-kwai", region: "kanchanaburi", category: "temple", appeal: 9, lat: 14.041, lng: 99.503, image: D.ruins, images: [D.ruins, D.jungle, D.nature], gradient: "from-stone-500/70 to-amber-900/70" },
  { id: "erawan-waterfall", slug: "erawan-waterfall", region: "kanchanaburi", category: "nature", appeal: 10, lat: 14.368, lng: 99.145, image: D.waterfall, images: [D.waterfall, D.jungle, D.nature], gradient: "from-emerald-500/70 to-teal-900/70" },
  { id: "sai-yok-national-park", slug: "sai-yok-national-park", region: "kanchanaburi", category: "nature", appeal: 8, lat: 14.42, lng: 98.98, image: D.jungle, images: [D.jungle, D.waterfall, D.nature], gradient: "from-green-600/70 to-emerald-900/70" },
  { id: "hellfire-pass", slug: "hellfire-pass", region: "kanchanaburi", category: "temple", appeal: 8, lat: 14.355, lng: 98.925, image: D.ruins, images: [D.ruins, D.jungle, D.nature], gradient: "from-gray-500/70 to-stone-900/70" },

  // Phang Nga (+4)
  { id: "james-bond-island", slug: "james-bond-island", region: "phang-nga", category: "island", appeal: 10, lat: 8.275, lng: 98.5, image: D.limestone, images: [D.limestone, D.island, D.beach], gradient: "from-emerald-500/70 to-teal-900/70" },
  { id: "koh-panyee", slug: "koh-panyee", region: "phang-nga", category: "market", appeal: 9, lat: 8.336, lng: 98.53, image: D.market, images: [D.market, D.island, D.limestone], gradient: "from-amber-500/70 to-orange-900/70" },
  { id: "samet-nangshe-viewpoint", slug: "samet-nangshe-viewpoint", region: "phang-nga", category: "viewpoint", appeal: 10, lat: 8.265, lng: 98.42, image: D.viewpoint, images: [D.viewpoint, D.limestone, D.island], gradient: "from-orange-500/70 to-rose-900/70" },
  { id: "koh-yao-noi", slug: "koh-yao-noi", region: "phang-nga", category: "island", appeal: 8, lat: 8.125, lng: 98.62, image: D.beach, images: [D.beach, D.island, D.limestone], gradient: "from-cyan-500/70 to-blue-900/70" },
];
