/**
 * ============================================================
 *  HUS MOTORS — CENTRAL BUSINESS CONFIGURATION
 * ============================================================
 *  This is the ONLY file you need to edit to update your
 *  business details across the entire website.
 *
 *  HOW TO EDIT:
 *  1. Open this file on GitHub.
 *  2. Click the pencil (✏️) icon to edit.
 *  3. Change the text between the quotation marks.
 *  4. Click "Commit changes" to save.
 *  5. Wait 1–2 minutes for the website to update.
 * ============================================================
 */

const BUSINESS = {

  /* ── Business Identity ─────────────────────────────── */
  name: "HUS MOTORS",
  tagline: "Automotive Solutions. Parts You Need. Service You Can Trust.",
  shortDescription:
    "Motor spares, engine rebuilding, motorcycle servicing, key programming, and more — one enquiry away.",

  /* ── Contact Details ───────────────────────────────── */
  phone: "0778891162",
  // NOTE: Update this to the correct international format
  // once confirmed, e.g. "+263778891162"
  whatsappNumber: "263778891162",
  email: "Pridetakudzwa74@gmail.com",

  /* ── Location (update once confirmed) ──────────────── */
  address: "",          // e.g. "123 Example Road, Harare"
  city: "",             // e.g. "Harare"
  country: "Zimbabwe",

  /* ── Opening Hours (update once confirmed) ─────────── */
  openingHours: "",     // e.g. "Mon–Fri 8 AM – 5 PM, Sat 8 AM – 1 PM"

  /* ── Homepage Hero ─────────────────────────────────── */
  heroHeadline: "Automotive Solutions. Parts You Need. Service You Can Trust.",
  heroSubheadline:
    "From original motor spares to engine rebuilding, motorcycle servicing to key programming — HUS MOTORS is your direct line to practical automotive help.",
  heroPrimaryCTA: "WhatsApp Us",
  heroSecondaryCTA: "View Our Services",

  /* ── About Section ─────────────────────────────────── */
  aboutHeading: "About HUS MOTORS",
  aboutText:
    "HUS MOTORS is an automotive service and motor-spares business offering a focused range of practical vehicle solutions. We sell new and used original motor spares, buy accident-damaged vehicles, rebuild and repair engines, service motorcycles, programme vehicle keys, refuel air-conditioning systems, and charge batteries. Our goal is to make it easy for vehicle owners to find the parts and services they need through direct, transparent communication.",

  /* ── Why Contact Us Section ────────────────────────── */
  whyHeading: "Why Contact HUS MOTORS?",
  whyPoints: [
    {
      title: "Direct Communication",
      description:
        "Speak directly with the business — no call centres or automated menus. Ask your question and get a straightforward answer.",
      icon: "chat",
    },
    {
      title: "Practical Automotive Knowledge",
      description:
        "Get help identifying the right parts or services for your vehicle. We deal with real engines, real spares, and real repairs every day.",
      icon: "wrench",
    },
    {
      title: "Multiple Services, One Contact",
      description:
        "Whether you need a spare part, an engine rebuild, motorcycle servicing, or key programming — one enquiry can cover it all.",
      icon: "layers",
    },
    {
      title: "Transparent Process",
      description:
        "We explain what we can help with and what we cannot. No hidden charges, no pressure — just clear information so you can decide.",
      icon: "shield",
    },
  ],

  /* ── Final CTA Section ─────────────────────────────── */
  ctaHeading: "Ready to Get Started?",
  ctaText:
    "Whether you are looking for a specific motor spare, need an engine assessment, want to sell an accident-damaged vehicle, or require any of our automotive services — reach out to HUS MOTORS today.",
  ctaButtonText: "Send Us a WhatsApp Message",

  /* ── Footer ────────────────────────────────────────── */
  footerNote: "HUS MOTORS — Automotive Service & Motor Spares",
  copyrightYear: "2024",

  /* ── Services ──────────────────────────────────────── */
  services: [
    {
      id: "motor-spares",
      title: "New & Used Original Motor Spares",
      shortTitle: "Motor Spares",
      description:
        "HUS MOTORS sells new and used original motor spares. If you are looking for a specific part, get in touch with your vehicle details and we will let you know what is available. Availability varies — enquire to check stock for your make and model.",
      icon: "cog",
      image: "motor-spares.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I am enquiring about motor spares. I need a part for my vehicle — here are the details:",
    },
    {
      id: "accident-vehicles",
      title: "Accident-Damaged Vehicle Purchases",
      shortTitle: "We Buy Damaged Vehicles",
      description:
        'HUS MOTORS buys accident-damaged vehicles — "runners and non-runners." If you have a damaged vehicle you would like to sell, contact us with the vehicle details, condition, and photos if possible.',
      icon: "car-crash",
      image: "accident-vehicles.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I have an accident-damaged vehicle I would like to sell. Here are the details:",
    },
    {
      id: "engine-rebuilding",
      title: "Engine Rebuilding & Repairs",
      shortTitle: "Engine Work",
      description:
        "HUS MOTORS offers engine dismantling, rebuilding, and repair services. If your engine needs attention — whether it is a knock, overheating, loss of power, or a full rebuild — get in touch to discuss the work involved.",
      icon: "engine",
      image: "engine-rebuilding.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I need help with engine rebuilding or repairs. My vehicle details are:",
    },
    {
      id: "motorcycle-servicing",
      title: "Motorcycle Servicing",
      shortTitle: "Motorcycle Service",
      description:
        "HUS MOTORS provides motorcycle servicing. Whether your motorcycle needs a routine service, a specific repair, or a check-up, reach out with the make, model, and what you need.",
      icon: "motorcycle",
      image: "motorcycle-servicing.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I need motorcycle servicing. My motorcycle details are:",
    },
    {
      id: "key-programming",
      title: "Key Programming",
      shortTitle: "Key Programming",
      description:
        "HUS MOTORS offers vehicle key-programming services. If you need a key programmed, contact us with your vehicle make, model, and year so we can advise whether we can assist with your particular vehicle.",
      icon: "key",
      image: "key-programming.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I need key programming for my vehicle. The details are:",
    },
    {
      id: "aircon-refuelling",
      title: "Air-Conditioning Refuelling",
      shortTitle: "Aircon Refuelling",
      description:
        "HUS MOTORS provides air-conditioning refuelling for vehicles. If your vehicle's aircon is not cooling properly, get in touch and we can arrange a refuelling service.",
      icon: "snowflake",
      image: "aircon-refuelling.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I need air-conditioning refuelling for my vehicle. The details are:",
    },
    {
      id: "battery-charging",
      title: "Battery Charging",
      shortTitle: "Battery Charging",
      description:
        "HUS MOTORS offers battery-charging services. If your vehicle battery is flat or not holding charge, contact us to arrange a charge or discuss your battery needs.",
      icon: "battery",
      image: "battery-charging.webp",
      whatsappMessage:
        "Hello HUS MOTORS, I need battery charging for my vehicle. The details are:",
    },
  ],
};
