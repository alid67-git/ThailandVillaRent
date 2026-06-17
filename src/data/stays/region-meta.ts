import type { StayRegion, StayPropertyType } from "./types";

export interface StayAreaMeta {
  key: string;
  lat: number;
  lng: number;
}

export interface StayRegionMeta {
  region: StayRegion;
  airportKey: string;
  airportKmBase: number;
  areas: StayAreaMeta[];
  newCount: number;
}

/** Distribution for 95 generated stays (5 manual = 100 total) */
export const STAY_REGION_META: StayRegionMeta[] = [
  {
    region: "phuket",
    airportKey: "hkt",
    airportKmBase: 28,
    newCount: 10,
    areas: [
      { key: "kamala", lat: 7.9495, lng: 98.2798 },
      { key: "karon", lat: 7.846, lng: 98.294 },
      { key: "kata", lat: 7.8205, lng: 98.2985 },
      { key: "bangtao", lat: 7.9897, lng: 98.2891 },
      { key: "rawai", lat: 7.766, lng: 98.321 },
    ],
  },
  {
    region: "koh-samui",
    airportKey: "usm",
    airportKmBase: 8,
    newCount: 10,
    areas: [
      { key: "boPhut", lat: 9.5594, lng: 100.0256 },
      { key: "maenam", lat: 9.5718, lng: 99.9845 },
      { key: "chaweng", lat: 9.5282, lng: 100.0614 },
      { key: "lamai", lat: 9.4612, lng: 100.0389 },
    ],
  },
  {
    region: "krabi",
    airportKey: "kbv",
    airportKmBase: 18,
    newCount: 10,
    areas: [
      { key: "aoNang", lat: 8.0456, lng: 98.8234 },
      { key: "railay", lat: 8.0104, lng: 98.8395 },
      { key: "tubkaek", lat: 8.085, lng: 98.785 },
      { key: "klongMuang", lat: 8.075, lng: 98.77 },
    ],
  },
  {
    region: "chiang-mai",
    airportKey: "cnx",
    airportKmBase: 6,
    newCount: 8,
    areas: [
      { key: "oldCity", lat: 18.7883, lng: 98.9853 },
      { key: "nimman", lat: 18.799, lng: 98.968 },
      { key: "doiSuthep", lat: 18.8047, lng: 98.9216 },
    ],
  },
  {
    region: "bangkok",
    airportKey: "bkk",
    airportKmBase: 32,
    newCount: 8,
    areas: [
      { key: "sukhumvit", lat: 13.739, lng: 100.56 },
      { key: "riverside", lat: 13.7437, lng: 100.4888 },
      { key: "sathorn", lat: 13.72, lng: 100.53 },
    ],
  },
  {
    region: "pattaya",
    airportKey: "utp",
    airportKmBase: 45,
    newCount: 8,
    areas: [
      { key: "jomtien", lat: 12.8878, lng: 100.8723 },
      { key: "central", lat: 12.9267, lng: 100.8728 },
      { key: "naklua", lat: 12.96, lng: 100.89 },
    ],
  },
  {
    region: "koh-phangan",
    airportKey: "usm",
    airportKmBase: 55,
    newCount: 8,
    areas: [
      { key: "haadRin", lat: 9.6745, lng: 100.0612 },
      { key: "bottleBeach", lat: 9.8234, lng: 99.9876 },
      { key: "thongSala", lat: 9.71, lng: 100.02 },
    ],
  },
  {
    region: "koh-tao",
    airportKey: "usm",
    airportKmBase: 90,
    newCount: 8,
    areas: [
      { key: "sairee", lat: 10.0956, lng: 99.8401 },
      { key: "maeHaad", lat: 10.0789, lng: 99.8234 },
    ],
  },
  {
    region: "koh-lipe",
    airportKey: "hdh",
    airportKmBase: 120,
    newCount: 6,
    areas: [
      { key: "pattayaBeach", lat: 6.4867, lng: 99.3012 },
      { key: "sunriseBeach", lat: 6.4923, lng: 99.3089 },
    ],
  },
  {
    region: "hua-hin",
    airportKey: "hhq",
    airportKmBase: 12,
    newCount: 7,
    areas: [
      { key: "centre", lat: 12.5689, lng: 99.9578 },
      { key: "khaoTakiab", lat: 12.52, lng: 99.97 },
    ],
  },
  {
    region: "koh-chang",
    airportKey: "tdx",
    airportKmBase: 35,
    newCount: 7,
    areas: [
      { key: "whiteSand", lat: 12.101, lng: 102.278 },
      { key: "lonelyBeach", lat: 12.015, lng: 102.285 },
    ],
  },
  {
    region: "kanchanaburi",
    airportKey: "bkk",
    airportKmBase: 130,
    newCount: 5,
    areas: [
      { key: "riverKwai", lat: 14.041, lng: 99.503 },
      { key: "erawan", lat: 14.368, lng: 99.145 },
    ],
  },
];

export const STAY_PROPERTY_TYPES: StayPropertyType[] = [
  "villa",
  "bungalow",
  "pool-villa",
];
