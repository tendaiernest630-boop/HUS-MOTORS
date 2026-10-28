# HUS MOTORS — Owner Editing Guide

This guide explains how to update your website using only **GitHub in a web browser**. You do not need to install any software or learn to code.

---

## Quick Overview

Your website reads all business information from **one file**:

📄 **`src/data/business.js`**

When you edit this file on GitHub, the website updates automatically within 1–2 minutes.

---

## What You Can Change

| What                         | Where in the file                  |
|------------------------------|------------------------------------|
| Business name                | `name: "HUS MOTORS"`              |
| Phone / WhatsApp number      | `phone:` and `whatsappNumber:`     |
| Email address                | `email:`                           |
| Homepage headline            | `heroHeadline:`                    |
| Homepage description         | `heroSubheadline:`                 |
| About text                   | `aboutText:`                       |
| Opening hours                | `openingHours:`                    |
| Business address             | `address:` and `city:`             |
| Each service title           | Inside `services: [...]`           |
| Each service description     | Inside `services: [...]`           |
| WhatsApp message per service | Inside `services: [...]`           |
| Call-to-action text          | `ctaHeading:` and `ctaText:`       |

---

## Step-by-Step: How to Edit

### Step 1 — Open the file

1. Go to your GitHub repository in your web browser.
2. Click the **`src`** folder.
3. Click the **`data`** folder.
4. Click **`business.js`**.

### Step 2 — Start editing

1. Click the **pencil icon** (✏️) near the top right of the file. It may say "Edit this file."
2. The file will open in an editor.

### Step 3 — Make your change

Find the line you want to change. For example, to change the phone number:

**Before:**
```
phone: "0778891162",
```

**After:**
```
phone: "0712345678",
```

> ⚠️ **Important rules:**
> - Keep the quotation marks (`" "`) around text.
> - Keep the comma (`,`) at the end of each line.
> - Do not delete the words before the colon (like `phone:`).

### Step 4 — Save your change

1. Scroll down to the "Commit changes" section.
2. In the description, write a short note like: `Updated phone number`.
3. Make sure "Commit directly to the main branch" is selected.
4. Click the green **"Commit changes"** button.

### Step 5 — Check the website

Wait 1–2 minutes, then open your website in a browser and refresh the page. Your change should be visible.

---

## Common Changes — Examples

### Change the phone number

Find these two lines and update them both:
```
phone: "0778891162",
whatsappNumber: "263778891162",
```

> **Note:** The `whatsappNumber` uses the international format (no leading zero, with country code 263 for Zimbabwe). So if your number is `0771234567`, the WhatsApp number would be `263771234567`.

### Change the email

```
email: "your-new-email@example.com",
```

### Add opening hours

Find the empty `openingHours` line and add your hours:
```
openingHours: "Mon–Fri 8 AM – 5 PM, Sat 8 AM – 1 PM",
```

### Add your address

```
address: "123 Example Road, Graniteside",
city: "Harare",
```

### Change the homepage headline

```
heroHeadline: "Your New Headline Here.",
```

### Change a service description

Find the service in the `services: [...]` list and change the `description:` text.

---

## How to Replace an Image

Images are stored in the **`assets/images/`** folder. To replace one:

1. Prepare your new image (JPG format recommended, under 500 KB).
2. Name it exactly the same as the old image (e.g., `hero-bg.jpg`).
3. On GitHub, navigate to `assets/images/`.
4. Click "Add file" → "Upload files".
5. Drag and drop your new image.
6. Click "Commit changes".

The website will use the new image after 1–2 minutes.

---

## Things You Should NOT Change

Unless you are comfortable with HTML and JavaScript, avoid editing:

- `index.html` — the website structure
- `assets/css/style.css` — the visual design
- `assets/js/main.js` — the website functionality

If you break something, you can always undo the change on GitHub:
1. Go to the file you changed.
2. Click the "History" button.
3. Find the previous version and click "Revert."

---

## Important Notes

### About the form
The contact form on the website does **not** send messages automatically. When a visitor fills in the form and clicks "Send via WhatsApp" or "Send via Email," their WhatsApp or email app opens with the message pre-filled. The visitor must then press "Send" in their app. This is explained clearly on the form.

### About images
The photographs on the website are illustrative — they do not show the actual HUS MOTORS premises or staff. This is noted in the website footer.

### About the brand mark
The "H" logo and text-based wordmark were created for this website. They are not an existing official company logo.

### What GitHub Pages is NOT
GitHub Pages is a free, simple hosting service. It is **not** a full website builder with drag-and-drop editing. You edit the files directly. There is no visual editor dashboard. For most changes, editing `business.js` is all you need.

---

## Need Help?

If you need changes beyond what this guide covers — such as adding new pages, changing the layout, or adding features — you may need help from a web developer.
