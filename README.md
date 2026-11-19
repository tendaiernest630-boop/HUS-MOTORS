# HUS MOTORS — Professional Automotive Website

Official website for **HUS MOTORS**, an established Zimbabwean automotive business offering vehicle sales, cross-border vehicle shipping and transportation, private vehicle selling assistance, roadside towing and recovery, and original motor spares.

Built for GitHub Pages with zero external dependencies, rapid loading speed, mobile-first design, and seamless WhatsApp integration.

---

## Key Features

- **The 4 Core Pillars:**
  1. **Vehicle Sales** — Verified, clean everyday market inventory (sedans, hatchbacks, family wagons, SUVs, double-cab pickups).
  2. **Vehicle Shipping & Transportation** — Regional port transit (Durban, Walvis Bay, Beira) to Harare/Bulawayo and vehicle logistics.
  3. **Help Selling Your Car** — Assisting vehicle owners to market and sell their cars to verified buyers at fair market value.
  4. **Towing & Roadside Recovery** — Prompt flatbed recovery and transport for breakdowns and accident-damaged vehicles.
- **Secondary Automotive Capabilities:**
  - Tested new & used original motor spares.
  - Engine rebuilding & diagnostics.
  - Commercial & private motorcycle servicing.
  - Vehicle transponder key programming, AC refuelling & battery diagnostics.
- **Interactive Vehicle Showroom (`#vehicles`):**
  - Category filters: All, Sedans, Double-Cabs, SUVs, Hatchbacks, Station Wagons.
  - Vehicle details modal popup with detailed specifications and equipment lists.
  - Pre-filled WhatsApp buttons that automatically cite the vehicle name, year, and price.
- **Visual Owner Vehicle Manager (`owner.html`):**
  - Private browser-based dashboard to add, edit, price, and mark vehicles as Available, Reserved, or Sold.
  - 1-click code exporter & downloader to update `src/data/vehicles.js`.
- **Fast Smart Enquiry Form:**
  - Client-side validation with zero data exposure.
  - Instant pre-filled sending via WhatsApp or Email.
- **Performance & Media Optimization:**
  - WebP images with progressive JPEG fallbacks.
  - Commercial-use automotive photography reflecting real Zimbabwean and African vehicle environments.
  - Accessible WCAG-compliant color contrast and keyboard navigation.

---

## Tech Stack

- **HTML5** — Semantic, accessible markup with Schema.org `AutoDealer` structured data.
- **CSS3** — Custom responsive design system with dark carbon and warm amber/gold aesthetic.
- **Vanilla JavaScript** — High-performance, zero dependencies, zero tracking, zero bloat.
- **Hosting** — GitHub Pages (static, SSL/HTTPS enabled).

---

## Project Structure

```
HUS MOTORS/
├── index.html                   ← Main website
├── owner.html                   ← Private Owner Vehicle Management Portal
├── sitemap.xml                  ← Search engine sitemap
├── robots.txt                   ← Search crawler instructions
├── .nojekyll                    ← GitHub Pages bypass Jekyll
├── src/
│   └── data/
│       ├── business.js          ← Business phone, email, address, and service details
│       └── vehicles.js          ← Vehicle inventory listings, pricing, and specs
├── assets/
│   ├── css/
│   │   └── style.css            ← Design system & responsive layout
│   ├── js/
│   │   └── main.js              ← Dynamic vehicle rendering, filtering & WhatsApp handling
│   └── images/
│       ├── hero-bg.webp / .jpg
│       ├── services/
│       │   ├── shipping-transport.webp / .jpg
│       │   ├── towing-recovery.webp / .jpg
│       │   ├── sell-your-car.webp / .jpg
│       │   └── african-mechanic.webp / .jpg
│       └── vehicles/
│           ├── corolla.webp / .jpg
│           ├── hilux.webp / .jpg
│           ├── rav4.webp / .jpg
│           ├── honda-fit.webp / .jpg
│           ├── fielder.webp / .jpg
│           └── polo.webp / .jpg
├── OWNER-EDITING-GUIDE.md       ← Step-by-step owner maintenance instructions
└── README.md                    ← Project documentation
```

---

## Owner Guides & Updating Content

- **Updating Stock or Prices:** See **[OWNER-EDITING-GUIDE.md](OWNER-EDITING-GUIDE.md)** for instructions on using `owner.html` or editing `src/data/vehicles.js`.
- **Updating Business Contact Info:** Edit `src/data/business.js`.

---

## Domain & Production Setup

- **Recommended Domain:** `husmotors.co.zw` (~$3 to $10/year through ZISPA registrars such as Webdev, Webzim, Tremhost).
- **Configuration:** Set DNS A records to GitHub Pages IPs (`185.199.108.153`, etc.) and point CNAME `www` to `pridetakudzwa74.github.io`.

---

## Licence

Built for HUS MOTORS. All rights reserved.
