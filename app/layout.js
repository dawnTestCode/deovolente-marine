import "./globals.css";
import { site } from "../lib/site";

export const metadata = {
  title: `${site.name} — ${site.headline}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.headline}`,
    description: site.tagline,
    images: ["/images/deo-volente.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site">
          <div className="wrap">
            <a className="logo" href="/">{site.name}</a>
            <nav className="main">
              <a href="/#about">About</a>
              <a href="/#services">Services</a>
              <a href="/#gallery">Gallery</a>
              <a href="/#pay">Pay Your Bill</a>
              <a href="/#contact">Contact</a>
            </nav>
            <a className="phone-pill" href={site.phoneHref}>{site.phoneDisplay}</a>
          </div>
        </header>
        {children}
        <footer>
          <div className="wrap">
            <p><strong style={{ color: "#fff", textTransform: "capitalize" }}>{site.name}</strong></p>
            <p><a href={site.phoneHref}>{site.phoneDisplay}</a> · By Appointment</p>
            <p>Copyright © {new Date().getFullYear()} {site.name} — All Rights Reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
