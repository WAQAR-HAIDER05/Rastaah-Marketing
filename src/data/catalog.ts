export const PROPERTY_TYPES = [
  "Residential Plot",
  "Commercial Plot",
  "House",
  "Commercial Property",
] as const;

export const PURPOSES = ["For Sale", "For Investment"] as const;

export const LOCATIONS = ["New City", "Wah Cantt", "Surrounding areas"] as const;

export const PRICE_RANGES = [
  { id: "any", label: "Any" },
  { id: "under-50", label: "Under 50 Lakh", min: 0, max: 50 },
  { id: "50-100", label: "50 Lakh – 1 Crore", min: 50, max: 100 },
  { id: "100-300", label: "1 – 3 Crore", min: 100, max: 300 },
  { id: "300-plus", label: "3 Crore+", min: 300, max: Infinity },
] as const;

export type PropertyType = (typeof PROPERTY_TYPES)[number];
export type Purpose = (typeof PURPOSES)[number];
export type LocationName = (typeof LOCATIONS)[number];

export type Listing = {
  id: string;
  title: string;
  location: LocationName;
  type: PropertyType;
  purpose: Purpose;
  size: string;
  priceLabel: string;
  /** Illustrative value in lakh PKR for filtering only. */
  priceLakh: number;
  image: string;
  gallery: string[];
  summary: string;
  details: string[];
};

export const LISTINGS: Listing[] = [
  {
    id: "nc-a12",
    title: "Residential Plot A-12",
    location: "New City",
    type: "Residential Plot",
    purpose: "For Sale",
    size: "5 Marla",
    priceLabel: "PKR 42 Lakh",
    priceLakh: 42,
    image: "/images/cat-residential.jpg",
    gallery: ["/images/cat-residential.jpg", "/images/project-new-city.jpg", "/images/cat-investment.jpg"],
    summary:
      "A sample residential plot listing in New City, structured so live inventory can replace this placeholder.",
    details: [
      "Sample size: 5 Marla",
      "Intended use: residential",
      "Area focus: New City / Wah Cantt corridor",
      "Status in this demo: available",
    ],
  },
  {
    id: "nc-c04",
    title: "Commercial Plot C-04",
    location: "New City",
    type: "Commercial Plot",
    purpose: "For Investment",
    size: "4 Marla",
    priceLabel: "PKR 68 Lakh",
    priceLakh: 68,
    image: "/images/cat-commercial.jpg",
    gallery: ["/images/cat-commercial.jpg", "/images/project-commercial.jpg"],
    summary:
      "An illustrative commercial plot positioned for clients exploring longer-term property options.",
    details: [
      "Sample size: 4 Marla",
      "Intended use: commercial",
      "Purpose in this demo: investment",
    ],
  },
  {
    id: "wah-h10",
    title: "Family House, Wah Cantt",
    location: "Wah Cantt",
    type: "House",
    purpose: "For Sale",
    size: "10 Marla",
    priceLabel: "PKR 2.4 Crore",
    priceLakh: 240,
    image: "/images/cat-houses.jpg",
    gallery: ["/images/cat-houses.jpg", "/images/listing-house.jpg", "/images/about.jpg"],
    summary:
      "A placeholder built-home listing representing residential property in Wah Cantt.",
    details: [
      "Sample size: 10 Marla",
      "Property type: house",
      "Replace with verified built inventory when available",
    ],
  },
  {
    id: "wah-r07",
    title: "Residential Plot, Wah Cantt",
    location: "Wah Cantt",
    type: "Residential Plot",
    purpose: "For Sale",
    size: "7 Marla",
    priceLabel: "PKR 55 Lakh",
    priceLakh: 55,
    image: "/images/project-wah-cantt.jpg",
    gallery: ["/images/project-wah-cantt.jpg", "/images/cat-residential.jpg"],
    summary:
      "Sample residential plot in Wah Cantt for demonstration of search, filters and detail pages.",
    details: ["Sample size: 7 Marla", "Area: Wah Cantt", "Purpose: for sale"],
  },
  {
    id: "surr-k1",
    title: "1 Kanal Plot, Nearby Development",
    location: "Surrounding areas",
    type: "Residential Plot",
    purpose: "For Investment",
    size: "1 Kanal",
    priceLabel: "PKR 1.6 Crore",
    priceLakh: 160,
    image: "/images/project-future.jpg",
    gallery: ["/images/project-future.jpg", "/images/cat-investment.jpg"],
    summary:
      "A larger sample plot for clients comparing surrounding developments around Wah Cantt.",
    details: [
      "Sample size: 1 Kanal",
      "Focus: surrounding residential developments",
      "Figures are illustrative placeholders",
    ],
  },
  {
    id: "nc-shop",
    title: "Commercial Property, New City",
    location: "New City",
    type: "Commercial Property",
    purpose: "For Sale",
    size: "Shop / unit",
    priceLabel: "PKR 95 Lakh",
    priceLakh: 95,
    image: "/images/project-commercial.jpg",
    gallery: ["/images/project-commercial.jpg", "/images/cat-commercial.jpg"],
    summary:
      "Placeholder commercial unit listing to show how built commercial inventory can be presented.",
    details: ["Type: commercial property", "Area focus: New City", "Demo status: for sale"],
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  image: string;
  summary: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "new-city",
    name: "New City",
    location: "New City, Wah Cantt",
    type: "Residential & investment opportunities",
    image: "/images/project-new-city.jpg",
    summary: "Residential and investment opportunities in New City.",
    description:
      "New City is a planned residential area that many buyers and investors in the Wah Cantt corridor look at when considering plots and longer-term property. This page is a placeholder showcase so live project notes, plots and documents can be added without changing the layout.",
  },
  {
    slug: "wah-cantt",
    name: "Wah Cantt",
    location: "Wah Cantt",
    type: "Residential and commercial properties",
    image: "/images/project-wah-cantt.jpg",
    summary: "Residential and commercial properties across Wah Cantt.",
    description:
      "Wah Cantt is an established cantonment city in Punjab, with mature neighbourhoods, civic infrastructure and access toward Taxila, GT Road and the M-1 Motorway. Rastaah Marketing helps clients review residential and commercial options in and around the city.",
  },
  {
    slug: "commercial",
    name: "Commercial Opportunities",
    location: "Selected locations",
    type: "Strategic commercial property options",
    image: "/images/project-commercial.jpg",
    summary: "Strategic commercial property options in selected locations.",
    description:
      "Commercial plots and units are presented here as a category, not as a claim about a specific plaza or approval. Replace this copy with the commercial inventory Rastaah Marketing is actively offering.",
  },
  {
    slug: "future",
    name: "Future Developments",
    location: "Surrounding areas",
    type: "Upcoming investment opportunities",
    image: "/images/project-future.jpg",
    summary: "Upcoming investment opportunities in surrounding developments.",
    description:
      "Use this section for developments that are being evaluated or prepared for clients. No project is presented as approved, launched or sold out unless that information is confirmed and inserted here.",
  },
];

export const CATEGORIES = [
  {
    search: { type: "Residential Plot" as const },
    title: "Residential Plots",
    line: "Build your future home.",
    image: "/images/cat-residential.jpg",
  },
  {
    search: { type: "Commercial Plot" as const },
    title: "Commercial Plots",
    line: "Explore commercial property opportunities.",
    image: "/images/cat-commercial.jpg",
  },
  {
    search: { purpose: "For Investment" as const },
    title: "Investment Properties",
    line: "Discover property options for long-term investment.",
    image: "/images/cat-investment.jpg",
  },
  {
    search: { type: "House" as const },
    title: "Houses & Properties",
    line: "Explore available built properties.",
    image: "/images/cat-houses.jpg",
  },
] as const;

export const JOURNEY = [
  {
    step: "01",
    title: "Discover",
    body: "Tell us what you're looking for.",
  },
  {
    step: "02",
    title: "Explore",
    body: "Review suitable properties and locations.",
  },
  {
    step: "03",
    title: "Evaluate",
    body: "Understand the opportunity and relevant details.",
  },
  {
    step: "04",
    title: "Decide",
    body: "Move forward with the property that meets your requirements.",
  },
] as const;

export const WHY = [
  {
    title: "Local Expertise",
    body: "Property insights focused on Wah Cantt and nearby areas.",
  },
  {
    title: "Transparent Guidance",
    body: "Clear information to help clients understand opportunities.",
  },
  {
    title: "Property Opportunities",
    body: "Residential and commercial options across selected locations.",
  },
  {
    title: "Personal Assistance",
    body: "Direct communication throughout the property journey.",
  },
] as const;

export const ABOUT_FEATURES = [
  {
    title: "Local Market Knowledge",
    body: "Deep understanding of the local property landscape.",
  },
  {
    title: "Investment Guidance",
    body: "Helping clients evaluate property opportunities with clarity.",
  },
  {
    title: "Client-Focused Service",
    body: "A straightforward approach from inquiry to investment.",
  },
] as const;

export const MAP_POINTS = [
  {
    id: "wah",
    name: "Wah Cantt",
    x: 38,
    y: 46,
    note: "Established cantonment city with residential and commercial property activity.",
  },
  {
    id: "new-city",
    name: "New City",
    x: 58,
    y: 40,
    note: "Planned residential area frequently considered by buyers and investors.",
  },
  {
    id: "nearby",
    name: "Nearby developments",
    x: 72,
    y: 58,
    note: "Surrounding residential and commercial pockets along the Wah corridor.",
  },
  {
    id: "commercial",
    name: "Commercial areas",
    x: 46,
    y: 64,
    note: "Local commercial streets and plazas — shown here as a category, not a surveyed boundary.",
  },
] as const;

export type PlotStatus = "available" | "reserved" | "built";

export type CommunityPlot = {
  id: string;
  label: string;
  type: "Residential" | "Commercial";
  status: PlotStatus;
  size: string;
  gx: number;
  gz: number;
};

export const COMMUNITY_PLOTS: CommunityPlot[] = [
  { id: "A-11", label: "Plot A-11", type: "Residential", status: "built", size: "5 Marla", gx: 0, gz: 0 },
  { id: "A-12", label: "Plot A-12", type: "Residential", status: "available", size: "5 Marla", gx: 1, gz: 0 },
  { id: "A-13", label: "Plot A-13", type: "Residential", status: "reserved", size: "5 Marla", gx: 2, gz: 0 },
  { id: "A-14", label: "Plot A-14", type: "Residential", status: "available", size: "7 Marla", gx: 3, gz: 0 },
  { id: "A-21", label: "Plot A-21", type: "Residential", status: "available", size: "5 Marla", gx: 0, gz: 1 },
  { id: "A-22", label: "Plot A-22", type: "Residential", status: "built", size: "5 Marla", gx: 1, gz: 1 },
  { id: "A-23", label: "Plot A-23", type: "Residential", status: "available", size: "5 Marla", gx: 2, gz: 1 },
  { id: "A-24", label: "Plot A-24", type: "Residential", status: "reserved", size: "7 Marla", gx: 3, gz: 1 },
  { id: "B-11", label: "Plot B-11", type: "Residential", status: "available", size: "10 Marla", gx: 5, gz: 0 },
  { id: "B-12", label: "Plot B-12", type: "Residential", status: "available", size: "10 Marla", gx: 6, gz: 0 },
  { id: "B-13", label: "Plot B-13", type: "Residential", status: "built", size: "10 Marla", gx: 7, gz: 0 },
  { id: "B-21", label: "Plot B-21", type: "Residential", status: "reserved", size: "10 Marla", gx: 5, gz: 1 },
  { id: "B-22", label: "Plot B-22", type: "Residential", status: "available", size: "7 Marla", gx: 6, gz: 1 },
  { id: "B-23", label: "Plot B-23", type: "Residential", status: "available", size: "7 Marla", gx: 7, gz: 1 },
  { id: "C-11", label: "Plot C-11", type: "Commercial", status: "available", size: "4 Marla", gx: 0, gz: 3 },
  { id: "C-12", label: "Plot C-12", type: "Commercial", status: "reserved", size: "4 Marla", gx: 1, gz: 3 },
  { id: "C-13", label: "Plot C-13", type: "Commercial", status: "available", size: "4 Marla", gx: 2, gz: 3 },
  { id: "C-14", label: "Plot C-14", type: "Commercial", status: "built", size: "Shop", gx: 3, gz: 3 },
  { id: "C-21", label: "Plot C-21", type: "Commercial", status: "available", size: "4 Marla", gx: 0, gz: 4 },
  { id: "C-22", label: "Plot C-22", type: "Commercial", status: "available", size: "4 Marla", gx: 1, gz: 4 },
  { id: "C-23", label: "Plot C-23", type: "Commercial", status: "reserved", size: "4 Marla", gx: 2, gz: 4 },
  { id: "C-24", label: "Plot C-24", type: "Commercial", status: "available", size: "Shop", gx: 3, gz: 4 },
  { id: "D-11", label: "Plot D-11", type: "Residential", status: "available", size: "1 Kanal", gx: 5, gz: 3 },
  { id: "D-12", label: "Plot D-12", type: "Residential", status: "built", size: "1 Kanal", gx: 6, gz: 3 },
  { id: "D-13", label: "Plot D-13", type: "Residential", status: "available", size: "1 Kanal", gx: 7, gz: 3 },
  { id: "D-21", label: "Plot D-21", type: "Residential", status: "reserved", size: "10 Marla", gx: 5, gz: 4 },
  { id: "D-22", label: "Plot D-22", type: "Residential", status: "available", size: "10 Marla", gx: 6, gz: 4 },
  { id: "D-23", label: "Plot D-23", type: "Residential", status: "available", size: "10 Marla", gx: 7, gz: 4 },
];

export function listingById(id: string) {
  return LISTINGS.find((item) => item.id === id);
}

export function projectBySlug(slug: string) {
  return PROJECTS.find((item) => item.slug === slug);
}

export function filterListings(params: {
  location?: string;
  type?: string;
  purpose?: string;
  range?: string;
}) {
  const range = PRICE_RANGES.find((item) => item.id === params.range);
  return LISTINGS.filter((item) => {
    if (params.location && params.location !== "any" && item.location !== params.location) {
      return false;
    }
    if (params.type && params.type !== "any" && item.type !== params.type) return false;
    if (params.purpose && params.purpose !== "any" && item.purpose !== params.purpose) {
      return false;
    }
    if (range && range.id !== "any") {
      if (item.priceLakh < range.min || item.priceLakh >= range.max) return false;
    }
    return true;
  });
}
