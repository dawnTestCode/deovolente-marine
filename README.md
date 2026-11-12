# Your Local Mobile Marine Repair — Next.js recreation

A clean recreation of https://yourlocalmobilemarinerepair.godaddysites.com/ as a
self-hosted **Next.js (App Router)** site. Deploy it on **Vercel**, point a domain
at it, and edit it freely. **Supabase is optional** — the site works without it.

Recreated faithfully from the original:
- Headline “Expert Boat Repairs You Can Trust” + tagline “Reliable marine repair services for all boat types.”
- Phone **252-521-1130** (tap-to-call in the header, hero, and footer)
- About / Expert Marine Mechanics section (inboard + outboard)
- Transformations gallery (6 slots)
- “Pay Your Bill Online Easily” section
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

- **Photos:** download the originals from the GoDaddy site builder (they're the
  business's photos — the crawler can't pull the full-res gallery out of GoDaddy).
  Drop them in as `public/gallery/gallery-1.jpg` … `gallery-6.jpg` and
  `public/images/about.jpg`. No code change needed.
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

## Pay Your Bill button
Set `NEXT_PUBLIC_PAY_BILL_URL` in Vercel to a Stripe Payment Link / Square /
other payment page, or paste the URL into `lib/site.js` (`payBill.url`).
The original site's payment link pointed at a `deovolentemarine.com` cart page
that no longer resolves, so it was **not** carried over.

## Still needed from the business owner
1. The 6 gallery photos + an about photo (from GoDaddy)
2. A working pay-bill link
3. Confirmation of the services list (see placeholder note above)
4. The domain name to point at Vercel
5. (Optional) An email destination / Supabase project if they want form alerts
