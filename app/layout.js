import "./globals.css";
import { site } from "../lib/site";

export const metadata = {
  title: `${site.name} — Mobile Marine Repair`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — Mobile Marine Repair`,
    description: site.tagline,
    images: ["/images/deo-volente.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
