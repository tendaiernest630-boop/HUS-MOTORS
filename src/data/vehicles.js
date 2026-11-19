/**
 * ============================================================
 *  HUS MOTORS — VEHICLE INVENTORY DATA
 * ============================================================
 *  This file contains the current vehicle listings displayed on
 *  the website. The owner can add, edit, or remove vehicles here,
 *  or use the visual Owner Dashboard (owner.html) to generate
 *  this file automatically.
 *
 *  FIELDS PER VEHICLE:
 *  - id: unique identifier (e.g. "corolla-2021")
 *  - title: full display name (e.g. "2021 Toyota Corolla LE")
 *  - category: "sedan" | "suv" | "double-cab" | "hatchback" | "wagon"
 *  - categoryLabel: friendly label (e.g. "Everyday Sedan")
 *  - year: manufacturing year (number or string)
 *  - price: transparent price or guide (e.g. "$13,500" or "Enquire for Price")
 *  - status: "available" | "reserved" | "sold"
 *  - statusLabel: display badge (e.g. "Available", "Sold", "Reserved")
 *  - mileage: odometer reading (e.g. "48,000 km")
 *  - transmission: "Automatic" | "Manual"
 *  - fuel: "Petrol" | "Diesel" | "Hybrid"
 *  - engine: engine capacity (e.g. "1.8L Dual VVT-i")
 *  - color: exterior color (e.g. "Silver Metallic")
 *  - image: WebP path
 *  - imageFallback: JPG fallback path
 *  - description: short, professional description of condition and features
 *  - features: array of notable features
 * ============================================================
 */

const VEHICLES = [
  {
    id: "corolla-2021",
    title: "2021 Toyota Corolla LE",
    category: "sedan",
    categoryLabel: "Everyday Sedan",
    year: 2021,
    price: "$13,500",
    status: "available",
    statusLabel: "Available",
    mileage: "48,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "1.8L 4-Cylinder",
    color: "Silver Metallic",
    image: "assets/images/vehicles/corolla.webp",
    imageFallback: "assets/images/vehicles/corolla.jpg",
    description: "Immaculate, highly reliable everyday sedan. Excellent fuel economy, comfortable interior, air conditioning, reverse camera, touchscreen infotainment, and full service history.",
    features: [
      "Fuel-efficient 1.8L engine",
      "Touchscreen with reverse camera",
      "Air conditioning & climate control",
      "Power steering & electric windows",
      "Keyless entry & central locking"
    ]
  },
  {
    id: "hilux-2024",
    title: "2024 Toyota Hilux Revo Z-Edition",
    category: "double-cab",
    categoryLabel: "Double-Cab Pickup",
    year: 2024,
    price: "$36,800",
    status: "available",
    statusLabel: "Available",
    mileage: "18,500 km",
    transmission: "Automatic",
    fuel: "Diesel",
    engine: "2.4L Turbo Diesel",
    color: "Glacier White",
    image: "assets/images/vehicles/hilux.webp",
    imageFallback: "assets/images/vehicles/hilux.jpg",
    description: "Robust, practical double-cab pickup ready for Zimbabwean road conditions, farm runs, work duty, or family travel. Clean interior, heavy-duty suspension, side steps, and tough bedliner.",
    features: [
      "2.4L D-4D Turbo Diesel engine",
      "Double-cab with seating for 5",
      "Heavy-duty bedliner & side steps",
      "Touchscreen multimedia system",
      "Alloy wheels & rugged all-terrain tyres"
    ]
  },
  {
    id: "rav4-2021",
    title: "2021 Toyota RAV4 XLE AWD",
    category: "suv",
    categoryLabel: "Medium SUV",
    year: 2021,
    price: "$23,500",
    status: "available",
    statusLabel: "Available",
    mileage: "52,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "2.5L Dynamic Force",
    color: "Graphite Grey",
    image: "assets/images/vehicles/rav4.webp",
    imageFallback: "assets/images/vehicles/rav4.jpg",
    description: "Spacious, comfortable family crossover SUV with All-Wheel Drive and practical ground clearance. Quiet highway ride, generous luggage boot, modern safety assists, and pristine interior.",
    features: [
      "All-Wheel Drive (AWD) capability",
      "Generous ground clearance",
      "Apple CarPlay & Android Auto",
      "Dual-zone climate control",
      "Spacious family boot capacity"
    ]
  },
  {
    id: "honda-fit-2019",
    title: "2019 Honda Fit (Jazz)",
    category: "hatchback",
    categoryLabel: "Compact Hatchback",
    year: 2019,
    price: "$7,200",
    status: "available",
    statusLabel: "Available",
    mileage: "64,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "1.3L i-VTEC",
    color: "Sky Blue Metallic",
    image: "assets/images/vehicles/honda-fit.webp",
    imageFallback: "assets/images/vehicles/honda-fit.jpg",
    description: "Zimbabwe's favorite compact runabout. Incredibly cheap to maintain, outstanding fuel mileage, easy to park, and features Honda's versatile Magic Seats for unexpected cargo.",
    features: [
      "Remarkable fuel economy",
      "Honda Magic Seats flexible cargo layout",
      "Smooth automatic transmission",
      "Clean, well-maintained interior",
      "Low maintenance and running costs"
    ]
  },
  {
    id: "fielder-2018",
    title: "2018 Toyota Corolla Fielder",
    category: "wagon",
    categoryLabel: "Family Station Wagon",
    year: 2018,
    price: "$9,400",
    status: "available",
    statusLabel: "Available",
    mileage: "76,000 km",
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "1.5L VVT-i",
    color: "Pearl White",
    image: "assets/images/vehicles/fielder.webp",
    imageFallback: "assets/images/vehicles/fielder.jpg",
    description: "The ideal balance of passenger comfort and expansive station wagon cargo space. Dependable mechanicals, inexpensive spare parts, comfortable rear legroom, and proven reliability.",
    features: [
      "Large rear wagon cargo space",
      "Dependable 1.5L Toyota engine",
      "Low maintenance costs & cheap spares",
      "Roof rails & fold-flat rear seating",
      "Air conditioning & power windows"
    ]
  },
  {
    id: "polo-2020",
    title: "2020 Volkswagen Polo 1.0 TSI",
    category: "hatchback",
    categoryLabel: "Modern Hatchback",
    year: 2020,
    price: "$11,200",
    status: "available",
    statusLabel: "Available",
    mileage: "58,000 km",
    transmission: "Manual",
    fuel: "Petrol",
    engine: "1.0L Turbocharged TSI",
    color: "Pure White",
    image: "assets/images/vehicles/polo.webp",
    imageFallback: "assets/images/vehicles/polo.jpg",
    description: "Premium German engineering in a clean, approachable hatchback. Solid road holding, responsive turbo power, crisp infotainment, and great fuel efficiency for city or highway driving.",
    features: [
      "Punchy 1.0L TSI turbo engine",
      "Solid European build quality & handling",
      "Modern digital infotainment with Bluetooth",
      "Multiple airbags & safety systems",
      "Spotless interior and exterior condition"
    ]
  }
];

// Export for Node/CommonJS test environments if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = VEHICLES;
}

