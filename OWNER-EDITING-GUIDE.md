# HUS MOTORS — Owner Editing & Management Guide

Welcome to the **HUS MOTORS** website management guide. This guide explains how to update your business details, manage vehicle inventory, use the visual Owner Portal, and configure custom domains.

---

## 1. Quick Overview

Your website is built on a clean, zero-maintenance static architecture hosted on **GitHub Pages**. All website information is split into two central, easily readable configuration files:

1. 📄 **`src/data/business.js`** — Business phone, WhatsApp number, email, address, opening hours, headlines, and core service descriptions.
2. 🚗 **`src/data/vehicles.js`** — Vehicle inventory listings, prices, specifications, availability badges, and photos.

You also have an interactive **Owner Vehicle Portal (`owner.html`)** that allows you to manage cars visually in your browser!

---

## 2. Managing Vehicle Inventory

You have two convenient ways to update vehicle stock:

### Method A — Using the Visual Owner Portal (`owner.html`) ⭐ (Recommended)

1. Open `owner.html` in your web browser (or navigate to `https://pridetakudzwa74.github.io/owner.html` or your current live URL).
2. Enter your Owner Passcode (default: **`2630`**).
3. On the dashboard, you can:
   - **Change Availability:** Use the dropdown on any vehicle to toggle between **Available**, **Reserved / In Transit**, or **Sold**.
   - **Edit Pricing or Details:** Click the pencil (✏️) icon next to any car to change the price, mileage, or description.
   - **Add a New Vehicle:** Click **"Add New Vehicle"**, fill out the short form, and click **"Save Vehicle"**.
   - **Delete Outdated Stock:** Click the red trash icon to remove vehicles you no longer stock.
4. Click **"Download vehicles.js"** (or "Copy vehicles.js Code").
5. In your GitHub repository:
   - Go to `src/data/vehicles.js`.
   - Click the pencil icon (✏️).
   - Paste or upload your updated code and click **"Commit changes"**.
6. Within 1–2 minutes, your live website updates automatically!

---

### Method B — Editing `src/data/vehicles.js` Directly on GitHub

Each vehicle in `src/data/vehicles.js` looks like this:

```javascript
{
  id: "corolla-2021",
  title: "2021 Toyota Corolla LE",
  category: "sedan",
  categoryLabel: "Everyday Sedan",
  year: 2021,
  price: "$13,500",
  status: "available", // "available" | "reserved" | "sold"
  statusLabel: "Available",
  mileage: "48,000 km",
  transmission: "Automatic",
  fuel: "Petrol",
  engine: "1.8L 4-Cylinder",
  color: "Silver Metallic",
  image: "assets/images/vehicles/corolla.webp",
  imageFallback: "assets/images/vehicles/corolla.jpg",
  description: "Clean, fuel-efficient everyday sedan. Immaculate condition, full service history.",
  features: [
    "Touchscreen with reverse camera",
    "Air conditioning & climate control",
    "Keyless entry & central locking"
  ]
}
```

- To mark a car as sold, simply change `status: "available"` to `status: "sold"` and `statusLabel: "Sold"`.
- To update the price, change `price: "$13,500"` to your new price or `"Enquire for Price"`.

---

## 3. Updating Business Details (`src/data/business.js`)

Open `src/data/business.js` on GitHub and click the pencil icon (✏️).

| Item | Line in `business.js` | Example |
|------|------------------------|---------|
| Phone (Display) | `phoneDisplay:` | `"+263 77 889 1162"` |
| WhatsApp Number | `whatsappNumber:` | `"263778891162"` *(International format without + or leading 0)* |
| Email Address | `email:` | `"Pridetakudzwa74@gmail.com"` |
| Physical Address | `addressNote:` | `"123 Graniteside Industrial Area, Harare"` |
| Opening Hours | `openingHours:` | `"Mon – Fri: 8 AM – 5 PM, Sat: 8 AM – 1 PM"` |
| Hero Headline | `heroHeadline:` | `"Reliable Vehicles. Honest Service. Real Automotive Help."` |

After making changes, scroll down and click **"Commit changes"**.

---

## 4. Vehicle Photography & Uploading Photos

Vehicle images are stored in `assets/images/vehicles/`.

### How to Add Photos for a New Vehicle:
1. Take clear, well-lit photos of the vehicle (front-quarter angle is best).
2. Save the photo as a clean JPG or WebP under 300 KB (e.g. `hilux-white.jpg`).
3. On GitHub, navigate to `assets/images/vehicles/`.
4. Click **"Add file"** → **"Upload files"**.
5. Drag your photo, and click **"Commit changes"**.
6. In `src/data/vehicles.js` or in `owner.html`, set the image path to:
   `assets/images/vehicles/hilux-white.jpg`.

---

## 5. Technical Architecture & CMS Investigation

### Why GitHub Pages Works This Way
GitHub Pages is a static hosting platform. It hosts HTML, CSS, JavaScript, and images without a server backend (like Node.js, PHP, or Python) or a live SQL database. 

> ⚠️ **Security Warning:** Static websites run entirely in the visitor's web browser. Anyone can view client-side code by right-clicking and selecting "Inspect / View Source". Therefore, **never store private database passwords or secret API keys in website code**.

### Three Paths for Ongoing Owner Management:

| Solution | Setup Difficulty | Monthly Cost | How It Works |
|----------|------------------|--------------|--------------|
| **Option 1: Owner Portal (`owner.html`) + GitHub** *(Currently Installed)* | Zero setup | **$0 / month** | You edit vehicles visually in `owner.html`, download/copy `vehicles.js`, and commit to GitHub. 100% secure, zero servers, zero recurring bills. |
| **Option 2: Decap CMS (formerly Netlify CMS)** | Moderate (1 hour) | **$0 / month** | An open-source admin panel added to your repo. You log in at `/admin/` with email and password via Netlify Identity. When you hit "Publish", it automatically commits to GitHub for you. |
| **Option 3: Supabase Cloud Database** | Advanced (2 hours) | **$0 / month** *(Free tier)* | Vehicles are stored in a hosted PostgreSQL database. The owner logs into an online dashboard to change stock; the website updates instantly without needing a GitHub Pages rebuild. |

**Recommendation:** Start with **Option 1** (`owner.html`). It is already installed, costs nothing, requires no external accounts, and is completely immune to database hacking. If you find yourself updating vehicle stock multiple times a day, we can connect Decap CMS.

---

## 6. Custom Domain Setup (`husmotors.co.zw`)

### Domain Investigation Findings:
- `husmotors.com`: **Unavailable**. It is already registered and operated by an imported vehicle dealer in Sofia, Bulgaria.
- `husmotors.co.zw`: **Recommended & Available**. Standard registration cost through Zimbabwean ZISPA registrars (Webdev, Webzim, Tremhost, Ecowebzim) is **$3.00 to $10.00 USD per year**.
- **Why `.co.zw` is best:** Builds local Zimbabwean customer trust, avoids confusion with the Bulgarian company, and establishes clear brand authority in Harare and nationwide.

### Step-by-Step GitHub Pages Domain Configuration:
Once you purchase `husmotors.co.zw` from your registrar:
1. In your registrar's DNS Management panel, add the following **A Records** for `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Add a **CNAME Record** for `www` pointing to:
   `pridetakudzwa74.github.io` (or your active GitHub Pages username)
3. In your GitHub repository:
   - Create a file in the root folder named `CNAME`.
   - Put `husmotors.co.zw` on the first line and save.
   - Go to **Settings → Pages**.
   - Under "Custom domain", verify `husmotors.co.zw`.
   - Check the box **"Enforce HTTPS"** (GitHub generates a free SSL certificate automatically within 24 hours).

---

## 7. Customer Enquiry Workflow

When a customer clicks:
- **"Enquire on WhatsApp"** on any vehicle: WhatsApp opens with a message pre-filled with the vehicle title and price.
- **"Request Towing"**: WhatsApp opens with breakdown and recovery enquiry text.
- **"Sell Your Car"**: WhatsApp opens asking for make, model, year, and photos.
- **Contact Form**: The form validates that the customer entered a name, valid phone/email, and service, then prepares a clean enquiry message for WhatsApp or Email.

No customer data is stored on public servers or in the code, guaranteeing customer privacy and compliance.

---

## 8. Need Help?

For questions regarding your repository or website configuration, contact:
- **Email:** `Pridetakudzwa74@gmail.com`
- **Telephone / WhatsApp:** `+263 77 889 1162`
