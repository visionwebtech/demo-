# Croft House, Jaipur — Website

A premium, client-ready website for **Croft House**, a café on K-7 Malviya Marg in C Scheme, Jaipur.

## Stack
- Vite 5 (vanilla JS, no framework — keeps the bundle tiny and fast)
- Hand-written CSS (no Tailwind / no UI library = no SaaS look)
- Real Google Maps data only (no fabricated menu, hours, testimonials, or social handles)

## Run locally
```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production bundle in /dist
npm run preview      # serve /dist at http://localhost:4173
```

## Verified facts used in the build
Every value in `src/data/site.js` is sourced from Google Maps (place_id `ChIJo41cbAC1bTkRnEwq2tPhq14`):

| Field | Value | Source |
|---|---|---|
| Name | Croft House | Google Maps listing |
| Address | K-7, Malviya Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001 | Google Maps listing |
| Phone | +91 63674 50485 | Google Maps listing + user-confirmed |
| Type | Café, Coffee shop | Google Maps listing |
| Rating | 4.5 ★ | Google Maps listing |

The exterior photograph used in the intro and hero was supplied by the client.

## Reservation flow
There is no public booking API in the verified data, so the website routes every reservation through the **verified WhatsApp number** the client provided (`+91 63674 50485`). The form on `/reserve` builds a properly URL-encoded WhatsApp deep link and opens `https://wa.me/916367450485?text=...` in a new tab. The form never claims "Confirmed" — it shows "Your reservation request is ready to send."

## What's intentionally left out
Because the user brief stated **"never invent"** and the Markdown source referenced in the brief was not attached to this build, the following fields are omitted (not faked):

- Specific menu items & prices
- Opening hours
- Owner / chef names
- Award lists or fabricated quotes
- Owner email / Instagram / Facebook
- Order-online link

The gallery uses the real Croft House photos served from `/public/images/`. Captions are descriptive only — no made-up dish names.

## Credits
Website by **Vision Web Tech**.
