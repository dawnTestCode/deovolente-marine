import { site } from "../lib/site";
import { ContactForm, SubscribeForm } from "../components/Forms";
import { Gallery } from "../components/Gallery";

export default function Home() {
  return (
    <main>
      {/* HERO — from the original site */}
      <div className="hero">
        <div className="wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-card" src="/images/deo-volente.jpg"
            alt="Deo Volente — marine & fiberglass repair" />
          <h1>{site.headline}</h1>
          <p>{site.tagline}</p>
          <div className="row">
            <a className="btn alt" href={site.phoneHref}>Call {site.phoneDisplay}</a>
            <a className="btn" href="#contact" style={{ background: "transparent", border: "2px solid #fff" }}>
              Drop Us a Line
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap split">
          <div>
            <h2 style={{ marginTop: 0 }}>{site.about.title}</h2>
            <h3>{site.about.heading}</h3>
            <p>{site.about.body}</p>
            <a className="btn" href="#contact">Book a Repair</a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.about.image} alt="Marine mechanic servicing an outboard engine" />
        </div>
      </section>

      {/* SERVICES / FEATURED */}
      <section id="services" className="alt">
        <div className="wrap">
          <h2 className="title">Featured Services</h2>
          <p className="lede">Inboard and outboard specialists — mobile, so the shop comes to you.</p>
          <div className="grid">
            {site.services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery">
        <div className="wrap">
          <h2 className="title">Boat Repair Transformations</h2>
          <p className="lede">Explore our boat repair transformations gallery.</p>
          <Gallery items={site.gallery} />
        </div>
      </section>

      {/* PAY YOUR BILL */}
      <section id="pay" className="tint">
        <div className="wrap center">
          <h2 className="title">{site.payBill.title}</h2>
          <p className="lede">{site.payBill.body}</p>
          <a className="btn" href={site.payBill.url}>{site.payBill.button}</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap">
          <h2 className="title">Contact Us</h2>
          <p className="lede">
            <strong>Better yet, see us in person!</strong><br />
            {site.hoursNote}
          </p>
          <table className="hours"><tbody>
            {site.hours.map((h) => (
              <tr key={h.days}><td>{h.days}</td><td><strong>{h.time}</strong></td></tr>
            ))}
          </tbody></table>
          <div style={{ height: 36 }} />
          <h3 className="center">Drop us a line!</h3>
          <ContactForm />
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="alt">
        <div className="wrap">
          <h2 className="title">{site.subscribe.title}</h2>
          <p className="lede">{site.subscribe.offer}</p>
          <SubscribeForm />
        </div>
      </section>
    </main>
  );
}
