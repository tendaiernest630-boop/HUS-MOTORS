# HUS MOTORS — Website

A professional automotive website for **HUS MOTORS**, built as a static site for GitHub Pages.

## What Is This?

A complete, single-page website presenting HUS MOTORS' automotive services:

- New & Used Original Motor Spares
- Accident-Damaged Vehicle Purchases
- Engine Rebuilding & Repairs
- Motorcycle Servicing
- Key Programming
- Air-Conditioning Refuelling
- Battery Charging

## Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom design system, no frameworks
- **Vanilla JavaScript** — zero dependencies, no tracking
- **GitHub Pages** — free static hosting

## Project Structure

```
HUS MOTORS/
├── index.html                  ← The website
├── src/
│   └── data/
│       └── business.js         ← ⭐ EDIT THIS to update business info
├── assets/
│   ├── css/
│   │   └── style.css           ← Design system
│   ├── js/
│   │   └── main.js             ← Site functionality
│   └── images/
│       ├── hero-bg.jpg
│       ├── motor-spares.jpg
│       ├── accident-vehicles.jpg
│       ├── engine-rebuilding.jpg
│       └── motorcycle-servicing.jpg
├── OWNER-EDITING-GUIDE.md      ← How to update the website
└── README.md                   ← This file
```

## How to Update Content

See **[OWNER-EDITING-GUIDE.md](OWNER-EDITING-GUIDE.md)** for step-by-step instructions.

The quick version: edit `src/data/business.js` on GitHub to change the phone number, email, services, headlines, and other business information.

## Deploying to GitHub Pages

1. Push this repository to GitHub (e.g. as `hus-motors`).
2. Go to **Settings → Pages**.
3. Under "Source", select **Deploy from a branch**.
4. Choose `main` branch and `/ (root)` folder.
5. Click **Save**.
6. Your site will be live at `https://YOUR-USERNAME.github.io/hus-motors/` within 1–2 minutes.

## Security Notes

- No backend, database, or server-side code
- No API keys or credentials in the codebase
- No third-party tracking scripts
- No cookies or local storage
- Form submissions are handled client-side — the visitor completes the send action in WhatsApp or their email app
- No customer data is stored in the repository
- All external links use `rel="noopener noreferrer"`

This is a static site hosted on GitHub Pages. GitHub Pages does not support custom server headers (such as Content-Security-Policy). The site is as secure as a static HTML site can be on this platform, but it is not "unhackable" — no website is.

## Custom Domain (Optional)

To use a custom domain like `husmotors.co.zw`:

1. Purchase the domain from a registrar.
2. In your repository, go to **Settings → Pages**.
3. Enter your custom domain.
4. Set up DNS records as instructed by GitHub.
5. The site will work at both the GitHub Pages URL and your custom domain.

This is optional and costs money. The site works perfectly on the free GitHub Pages URL.

## Licence

This website was built for HUS MOTORS. All rights reserved.
