# Deo Volente Marine & Fiberglass Repair — Next.js site

A clean recreation of https://yourlocalmobilemarinerepair.godaddysites.com/ as a
self-hosted **Next.js (App Router)** site. Deploy it on **Vercel**, point a domain
at it, and edit it freely. **Supabase is optional** — the site works without it.

Recreated faithfully from the original:
- Headline “Expert Boat Repairs You Can Trust” + tagline “Reliable marine repair services for all boat types.”
- Phone **252-521-1130** (tap-to-call in the header, hero, and footer)
- About / Expert Marine Mechanics section (inboard + outboard)
- Transformations gallery (6 slots)
- Winterization promo banner at the top of the page (text/price in `lib/site.js`)
- Contact section — “By Appointment”, “Drop us a line!” form (Name / Email / Phone / Message)
- Subscribe section — “Get 10% off your first purchase…”
- The original `/shop` page was empty and its Featured Products section listed
  nothing, so no products were invented. Services in `lib/site.js` are a clearly
  marked placeholder expansion of “inboard + outboard, mobile” — confirm them.

## Run it locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Make changes (the easy way)
**Almost everything lives in one file: `lib/site.js`**
Business name, phone, hours, about text, services, gallery list, pay-bill copy,
newsletter offer — edit there and the whole site updates.

- **Photos:** supplied by the owner Nov 12, 2026 and already in place —
  `public/images/hero.jpg`, `public/images/about.jpg`, `public/images/deo-volente.jpg`
  (brand graphic, also the social-share image), and `public/gallery/gallery-1.jpg`
  … `gallery-7.jpg`. To swap one, replace the file with the same name.
- **Colors / layout:** `app/globals.css` (variables at the top: `--navy`, `--teal`).
- **Pages / sections:** `app/page.js`, header + footer in `app/layout.js`.

## Deploy on Vercel + your own domain
1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → import the repo** (framework auto-detects as Next.js) → Deploy.
3. **Custom domain:** Vercel project → Settings → Domains → add your domain, then
   add the DNS record Vercel shows you at your registrar (usually a CNAME to
   `cname.vercel-dns.com` for `www`, and an A record for the root). SSL is automatic.
4. Every push to `main` redeploys automatically.

## Add Supabase (when you want form submissions saved)
Without Supabase, the contact/newsletter forms still show success and log the
submission to Vercel's function logs (demo mode). To save them for real:
1. Create a project at supabase.com.
2. SQL Editor → paste and run `supabase/schema.sql`.
3. In Vercel → Settings → Environment Variables, add:
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
   (Project Settings → API in Supabase). Redeploy.
Submissions then land in the `contact_messages` and `newsletter_subscribers` tables.

## Promo banner

The banner at the top of the page (currently “Boat Winterization — $400”) is
`promo` in `lib/site.js` — edit the text/price there, or delete the block to remove it.

## Still needed from the business owner
1. A working pay-bill link
2. Confirmation of the services list (see placeholder note above)
3. The domain name to point at Vercel
4. (Optional) An email destination / Supabase project if they want form alerts
5. Confirm whether the site name should become “Deo Volente Marine & Fiberglass
   Repair” (from the brand graphic) instead of the GoDaddy site's generic
   “Deo Volente Marine & Fiberglass Repair” — one line in `lib/site.js` (`name`).

## Redesign preview (/v2)

A ground-up redesign lives at `/v2` (noindexed, not linked from the main site):
work-truck signage look, mobile-first hero ("MOBILE MARINE REPAIR", 35 years of
experience), trust strip, fiberglass service, 3-step "how mobile service works",
sticky call bar on phones. Source: `app/v2/page.js` + `app/v2/v2.css`.
To promote it: replace `app/page.js` with the v2 layout and drop the preview
chrome-hiding style in the v2 page.
