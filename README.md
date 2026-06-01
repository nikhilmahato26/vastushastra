# Disha Vastu — Single-Page Lead-Gen Website

A modern, responsive, conversion-focused single-page website for a Vastu Shastra
consultancy. Light-mode, industrial/architectural aesthetic with scroll
animations and micro-interactions.

**Stack:** React (JavaScript) · Vite · Tailwind CSS · Framer Motion

---

## Quick start (local)

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

```bash
npm run build     # production build → /dist
npm run preview   # preview the production build locally
```

---

## Editing content

**Everything** — brand details, phone/WhatsApp numbers, services, prices,
testimonials, FAQs, pricing plans — lives in **one file**:

```
src/data/siteContent.js
```

Change a price, swap an image URL, or update the phone number there and it
propagates across the whole site. No component edits needed.

Key things to update before going live:

- `brand.phone`, `brand.phoneHref`, `brand.whatsapp` (international format, no `+`)
- `brand.email`, `brand.address`, `brand.socials`
- Image URLs (currently Unsplash placeholders)

### Wiring up the contact form

`src/components/ContactForm.jsx` currently simulates submission. Replace the
`await new Promise(...)` block in `handleSubmit` with a real endpoint —
e.g. [Formspree](https://formspree.io), EmailJS, or your own API.

---

## Folder structure

```
src/
├── data/
│   └── siteContent.js      ← all content
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── FAQAccordion.jsx
│   ├── ContactForm.jsx
│   ├── CTA.jsx
│   ├── Footer.jsx
│   ├── FloatingCTA.jsx
│   ├── Toast.jsx           ← accessible toast system
│   ├── icons.jsx           ← WhatsApp / phone icons + helpers
│   └── motion.jsx          ← shared Framer Motion variants + <Reveal>
├── sections/
│   ├── Services.jsx
│   ├── About.jsx           ← also holds the Process timeline
│   └── Testimonials.jsx    ← also holds Pricing
├── App.jsx
├── main.jsx
└── index.css
```

---

## Deploy

### Vercel
1. Push the repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build: `npm run build`. Output: `dist`.
4. Deploy.

Or via CLI:
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push to GitHub and import at [app.netlify.com](https://app.netlify.com).
2. Build command: `npm run build` · Publish directory: `dist`.

Or via CLI:
```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

---

## Accessibility & performance notes
- Semantic HTML, keyboard-navigable, visible focus rings.
- `prefers-reduced-motion` is respected (animations collapse to static).
- Images lazy-load; the hero image loads eagerly.
- Toasts use an `aria-live` region.
