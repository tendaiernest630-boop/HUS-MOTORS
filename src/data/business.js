/**
 * ============================================================
 *  HUS MOTORS — CENTRAL BUSINESS CONFIGURATION
 * ============================================================
 *  This file contains the central business information, contact
 *  details, and services. Edit this file directly or via GitHub
 *  to update information across the entire website.
 * ============================================================
 */

const BUSINESS = {

  /* ── Business Identity ─────────────────────────────── */
  name: "HUS MOTORS",
  tagline: "Quality Vehicles. Reliable Service. Practical Automotive Help.",
  shortDescription:
    "Vehicle sales, shipping and transportation, help selling your car, towing and recovery, plus original motor spares and mechanical repairs in Zimbabwe.",

  /* ── Contact Details ───────────────────────────────── */
  phone: "0778891162",
  phoneDisplay: "+263 77 889 1162",
  whatsappNumber: "263778891162",
  email: "Pridetakudzwa74@gmail.com",

  /* ── Location ──────────────────────────────────────── */
  city: "Harare",
  country: "Zimbabwe",
  addressNote: "Direct enquiries via WhatsApp and phone. Physical premises details supplied upon appointment.",

  /* ── Opening Hours ─────────────────────────────────── */
  openingHours: "Mon – Fri: 8:00 AM – 5:00 PM | Sat: 8:00 AM – 1:00 PM",
  emergencyNote: "Towing and recovery assistance available on call.",

  /* ── Homepage Hero ─────────────────────────────────── */
  heroHeadline: "Reliable Vehicles. Honest Service. Real Automotive Help.",
  heroSubheadline:
    "From verified everyday vehicles and cross-border shipping to towing assistance, help selling your car, and original motor spares — HUS MOTORS gives you straightforward automotive solutions in Zimbabwe.",
  heroPrimaryCTA: "WhatsApp Us",
  heroSecondaryCTA: "Browse Vehicles",
  heroTertiaryCTA: "Our Services",

  /* ── About Section ─────────────────────────────────── */
  aboutHeading: "About HUS MOTORS",
  aboutText:
    "HUS MOTORS is a Zimbabwean automotive business built around practical solutions, fair market pricing, and transparent, personal service. Whether you are looking to purchase a clean everyday vehicle, ship a car from the port, sell your current vehicle, recover a broken-down car, or find reliable motor spares, we are here to help.",
  aboutSubtext:
    "We cater to everyday commuters, families, and commercial drivers across Zimbabwe. No inflated showroom markups, no misleading vehicle promises — just honest, straightforward automotive service you can approach with confidence.",

  /* ── Four Core Pillars ─────────────────────────────── */
  pillars: [
    {
      title: "Direct Personal Contact",
      description: "Chat or speak directly with the team on WhatsApp or phone. No call centres or automated menus — just clear, fast answers.",
      icon: "chat"
    },
    {
      title: "Fair Market Pricing",
      description: "We price vehicles, services, and parts at reasonable market levels so ordinary customers and families get genuine value.",
      icon: "tag"
    },
    {
      title: "Inspected & Verified Stock",
      description: "Every vehicle we offer is honestly described with verified mechanical condition, mileage, and documentation.",
      icon: "shield"
    },
    {
      title: "Complete Automotive Support",
      description: "From purchasing and shipping to breakdown recovery and spare parts, you have one trusted point of contact for your vehicle.",
      icon: "layers"
    }
  ],

  /* ── Core Services (The 4 Main Business Services) ──── */
  coreServices: [
    {
      id: "vehicle-sales",
      title: "Vehicle Sales",
      subtitle: "Clean, Verified Everyday Vehicles",
      badge: "Popular Market",
      description:
        "We offer clean, well-maintained everyday sedans, hatchbacks, family wagons, medium SUVs, and double-cab pickups suited for Zimbabwean roads. Every vehicle is inspected, honestly presented with clear details, and ready for you to view or enquire about.",
      highlights: [
        "Everyday sedans, practical hatchbacks & family SUVs",
        "Rugged double-cab pickups for work and family",
        "Transparent condition reports & realistic pricing",
        "Custom vehicle sourcing upon request"
      ],
      image: "assets/images/vehicles/corolla.webp",
      imageFallback: "assets/images/vehicles/corolla.jpg",
      icon: "car",
      ctaText: "Browse Vehicles",
      ctaLink: "#vehicles",
      whatsappMessage:
        "Hello HUS MOTORS, I am interested in purchasing a vehicle. I would like to know what is currently available."
    },
    {
      id: "vehicle-shipping",
      title: "Vehicle Shipping & Transportation",
      subtitle: "Safe Transit From Port to Doorstep",
      badge: "Logistics",
      description:
        "Need a vehicle transported or cleared? HUS MOTORS assists customers with reliable vehicle shipping and transportation — whether moving vehicles across towns or coordinating transport from regional ports (Durban, Walvis Bay, Beira) into Harare and Bulawayo.",
      highlights: [
        "Port-to-Harare / Bulawayo transit coordination",
        "Cross-border vehicle transport assistance",
        "Professional carrier handling to prevent transit damage",
        "Clear communication and tracking updates"
      ],
      image: "assets/images/services/shipping-transport.webp",
      imageFallback: "assets/images/services/shipping-transport.jpg",
      icon: "truck",
      ctaText: "Enquire About Shipping",
      ctaLink: "#contact",
      whatsappMessage:
        "Hello HUS MOTORS, I need assistance with vehicle shipping and transportation. Here are the details of the vehicle and route:"
    },
    {
      id: "sell-your-car",
      title: "Help Selling Your Vehicle",
      subtitle: "Hassle-Free Marketing to Serious Buyers",
      badge: "Fast Sale",
      description:
        "Selling a car can be stressful with endless calls and tyre-kickers. HUS MOTORS assists vehicle owners by presenting and marketing their cars to genuine buyers at fair market value. Reach out with your car details and photos to get started.",
      highlights: [
        "Assistance connecting your vehicle with ready buyers",
        "Help presenting photos and accurate vehicle specifications",
        "Fair market valuation advice based on current Zimbabwean market",
        "Simple enquiry process with no upfront complicated obligations"
      ],
      image: "assets/images/services/sell-your-car.webp",
      imageFallback: "assets/images/services/sell-your-car.jpg",
      icon: "handshake",
      ctaText: "Sell Your Car With Us",
      ctaLink: "#contact",
      whatsappMessage:
        "Hello HUS MOTORS, I would like assistance selling my vehicle. Here are the details (make, model, year, condition, price):"
    },
    {
      id: "towing-recovery",
      title: "Towing & Roadside Recovery",
      subtitle: "Prompt Flatbed Recovery When You Need Help",
      badge: "Roadside Help",
      description:
        "Broken down or developed mechanical trouble? HUS MOTORS provides towing and recovery assistance for disabled vehicles, runners, and non-runners. Prompts, professional recovery to get your vehicle safely to a workshop or your home.",
      highlights: [
        "Flatbed towing for cars, SUVs, and light commercials",
        "Assistance with mechanical breakdown and recovery",
        "Accident-damaged vehicle collection and transport",
        "Direct telephone line for prompt dispatch"
      ],
      image: "assets/images/services/towing-recovery.webp",
      imageFallback: "assets/images/services/towing-recovery.jpg",
      icon: "tow",
      ctaText: "Request Towing",
      ctaLink: "#contact",
      whatsappMessage:
        "Hello HUS MOTORS, I need towing and roadside recovery assistance. My current location and vehicle are:"
    }
  ],

  /* ── Additional Workshop & Spares Services ─────────── */
  workshopServices: [
    {
      id: "spares",
      title: "New & Used Original Motor Spares",
      description: "Genuine new and tested used motor spares for popular Toyota, Honda, Nissan, VW, and other makes.",
      icon: "cog"
    },
    {
      id: "engine-work",
      title: "Engine Rebuilding & Diagnostics",
      description: "Engine assessments, head-gasket replacements, overhaul diagnostics, and mechanical rebuilding.",
      icon: "wrench"
    },
    {
      id: "motorcycle",
      title: "Motorcycle Servicing",
      description: "Routine servicing, oil changes, brake adjustments, and tune-ups for delivery bikes and private motorcycles.",
      icon: "motorcycle"
    },
    {
      id: "keys-aircon-battery",
      title: "Key Programming, AC Regas & Batteries",
      description: "Transponder key programming, vehicle aircon refuelling/regas, and battery diagnostic testing.",
      icon: "key"
    }
  ],

  /* ── Final Call to Action ──────────────────────────── */
  ctaHeading: "Ready to Discuss Your Automotive Needs?",
  ctaText:
    "Whether you are looking to buy a clean vehicle, arrange shipping, sell your car, request towing, or locate a specific spare part — contact HUS MOTORS today. One message gets you an immediate, honest response.",
  ctaButtonText: "Message HUS MOTORS on WhatsApp",

  /* ── Footer ────────────────────────────────────────── */
  footerNote: "HUS MOTORS — Automotive Solutions, Vehicle Sales, Shipping & Spares",
  copyrightYear: "2026"
};

// Export for Node/CommonJS environments if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = BUSINESS;
}
