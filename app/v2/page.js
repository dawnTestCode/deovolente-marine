import "./v2.css";
import { site } from "../../lib/site";

export const metadata = {
  title: "Deo Volente Marine & Fiberglass Repair — Mobile Marine Repair",
  description:
    "Mobile marine repair with 35 years of experience. Inboard, outboard and fiberglass — we come to your dock, marina or driveway.",
  robots: { index: false, follow: false },
};

const TRUST = [
  "35+ Years Experience",
  "Fully Mobile — We Come to You",
  "Inboard & Outboard",
  "Fiberglass & Gelcoat",
  "Fair, Upfront Pricing",
];

const SERVICES = [
  {
    title: "Outboard Engine Repair",
    body: "Diagnostics, repair and service for outboards of all makes and sizes — at your dock, not a shop across town.",
  },
  {
    title: "Inboard Engine Repair",
    body: "Inboard diagnostics, repair and maintenance to keep you on the water all season.",
  },
  {
    title: "Fiberglass & Gelcoat Repair",
    body: "Holes, cracks, dings and dock rash — structural fiberglass repair and gelcoat finishing.",
  },
  {
    title: "Winterization",
    body: "Full winterization done right, before the cold sets in. One flat price, no surprises.",
    price: "$400 flat",
    badge: "Seasonal Special",
  },
  {
    title: "Spring Commissioning",
    body: "De-winterize, tune and check everything over so the first launch of the season just works.",
  },
  {
    title: "Diagnostics & Troubleshooting",
    body: "Not sure what's wrong? We'll find the fault and talk you through the fix and the cost — before any work starts.",
  },
  {
    title: "Routine Maintenance",
    body: "Seasonal service, tune-ups and checks so small issues never turn into big bills.",
  },
];

const STEPS = [
  { n: "1", title: "You Call", body: "Tell us what's going on with the boat. You talk to a mechanic, not a call center." },
  { n: "2", title: "We Come to You", body: "Dock, marina or driveway — the shop comes to your boat, on an appointment that fits your schedule." },
  { n: "3", title: "Back on the Water", body: "Quality work at a fair price, done where your boat sits. No hauling, no waiting rooms." },
];

export default function V2() {
  return (
    <div className="v2">
      {/* Hide the main site's chrome on this standalone preview */}
      <style>{`header.site,.promo,body>footer{display:none!important}`}</style>

      {/* SEASONAL STRIP */}
      <div className="v2-strip">
        <span>BOAT WINTERIZATION — <strong>$400 FLAT</strong></span>
        <a href={site.phoneHref}>Call to Book</a>
      </div>

      {/* HEADER */}
      <header className="v2-head">
        <div className="v2-wrap v2-head-in">
          <div className="v2-logo">
            DEO VOLENTE
            <small>MARINE &amp; FIBERGLASS REPAIR</small>
          </div>
          <a className="v2-callbtn" href={site.phoneHref}>☎ {site.phoneDisplay}</a>
        </div>
      </header>

      {/* HERO */}
      <section className="v2-hero">
        <div className="v2-wrap">
          <p className="v2-eyebrow">North Carolina · By Appointment</p>
          <h1>MOBILE<br />MARINE REPAIR</h1>
          <p className="v2-sub">
            <strong>35 years of experience.</strong> Quality work, hard work, and a fair
            price — and we come to your dock, marina, or driveway.
          </p>
          <div className="v2-cta">
            <a className="v2-btn v2-btn-orange" href={site.phoneHref}>Call {site.phoneDisplay}</a>
            <a className="v2-btn v2-btn-ghost" href="#v2-services">See Services</a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="v2-trust">
        <div className="v2-wrap v2-trust-in">
          {TRUST.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="v2-sec" id="v2-services">
        <div className="v2-wrap">
          <h2 className="v2-h2">What We Do</h2>
          <p className="v2-lede">Engine work and fiberglass — done at your boat, wherever it sits.</p>
          <div className="v2-grid">
            {SERVICES.map((s) => (
              <article className="v2-card" key={s.title}>
                {s.badge && <span className="v2-badge">{s.badge}</span>}
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                {s.price && <p className="v2-price">{s.price}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="v2-sec v2-dark">
        <div className="v2-wrap">
          <h2 className="v2-h2">How Mobile Service Works</h2>
          <div className="v2-steps">
            {STEPS.map((s) => (
              <div className="v2-step" key={s.n}>
                <span className="v2-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="v2-sec">
        <div className="v2-wrap v2-split">
          <div>
            <h2 className="v2-h2" style={{ textAlign: "left" }}>35 Years Turning Wrenches</h2>
            <p>
              Deo Volente is built on 35 years of marine mechanic experience — inboard and
              outboard engines, fiberglass and gelcoat. No shop overhead passed on to you,
              no work you didn&apos;t approve, and no guessing: you hear what&apos;s wrong,
              what it costs, and what it takes to fix it before the work starts.
            </p>
            <p>
              The business is mobile on purpose. Your boat doesn&apos;t need a trailer ride
              to get fixed — we bring the tools to you.
            </p>
            <a className="v2-btn v2-btn-navy" href={site.phoneHref}>Call {site.phoneDisplay}</a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="v2-about-img" src="/images/about.jpg"
            alt="Marine mechanic servicing an outboard engine" />
        </div>
      </section>

      {/* GALLERY */}
      <section className="v2-sec v2-paper">
        <div className="v2-wrap">
          <h2 className="v2-h2">Recent Work</h2>
          <div className="v2-gallery">
            {site.gallery.map((g) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" />
            ))}
          </div>
          <p className="v2-note">Photos shown are placeholders — real job photos coming soon.</p>
        </div>
      </section>

      {/* SERVICE AREA + BIG CTA */}
      <section className="v2-cta-band">
        <div className="v2-wrap">
          <h2>BOAT DOWN?</h2>
          <p>Serving North Carolina docks, marinas and driveways — call and we&apos;ll tell you straight whether we can get to you.</p>
          <a className="v2-bigcall" href={site.phoneHref}>{site.phoneDisplay}</a>
          <p className="v2-cta-sub">By appointment · Inboard · Outboard · Fiberglass</p>
        </div>
      </section>

      <footer className="v2-foot">
        <div className="v2-wrap">
          <p><strong>DEO VOLENTE MARINE &amp; FIBERGLASS REPAIR</strong></p>
          <p>{site.phoneDisplay} · By Appointment</p>
          <p className="v2-note">Redesign preview — not linked from the main site.</p>
        </div>
      </footer>

      {/* STICKY MOBILE CALL BAR */}
      <a className="v2-sticky" href={site.phoneHref}>☎ Call {site.phoneDisplay}</a>
    </div>
  );
}
