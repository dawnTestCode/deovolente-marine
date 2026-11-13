// ============================================================
//  EDIT EVERYTHING ABOUT THE BUSINESS IN THIS ONE FILE
//  Change text here and the whole site updates — no need to
//  dig through components.
// ============================================================

export const site = {
  name: "Deo Volente Marine & Fiberglass Repair",
  tagline: "Reliable marine repair services for all boat types.",
  headline: "Expert Boat Repairs You Can Trust",
  phoneDisplay: "252-521-1130",
  phoneHref: "tel:+12525211130",

  // Hours as shown on the original GoDaddy site
  hours: [
    { days: "Monday – Sunday", time: "By Appointment" },
  ],
  hoursNote: "We love our customers, so feel free to visit during normal business hours — or call to book a mobile appointment and we'll come to you.",

  // Hero photo (boat on stands at the yard) — public/images/hero.jpg
  heroImage: "/images/hero.jpg",

  about: {
    title: "About Our Marine Repair",
    heading: "Expert Marine Mechanics",
    body: "Our team consists of experienced marine mechanics who specialize in both inboard and outboard engine repairs. We are committed to providing high-quality service to keep your boat running smoothly on the water.",
    image: "/images/about.jpg",
  },

  // PLACEHOLDER LIST — confirm/edit these with the business owner.
  // Expanded only from what the original site states (inboard + outboard repair, mobile service).
  services: [
    {
      title: "Outboard Engine Repair",
      description: "Diagnostics, repair and service for outboard motors of all makes and sizes.",
    },
    {
      title: "Inboard Engine Repair",
      description: "Inboard engine diagnostics, repair and maintenance to keep you on the water.",
    },
    {
      title: "Mobile Service — We Come to You",
      description: "Repairs at your dock, marina or driveway. Call to book an appointment.",
    },
    {
      title: "Diagnostics & Troubleshooting",
      description: "Not sure what's wrong? We'll find the fault and talk you through the fix and the cost.",
    },
    {
      title: "Routine Maintenance",
      description: "Seasonal service, tune-ups and checks so small issues never become big bills.",
    },
    {
      title: "Repairs & Transformations",
      description: "From tired to turn-key — see the gallery below for recent work.",
    },
  ],

  // Gallery photos live in public/gallery/ — photos supplied by the site owner Nov 12, 2026.
  gallery: [
    { src: "/gallery/gallery-1.jpg", alt: "Working on a sailboat's rigging at the mast" },
    { src: "/gallery/gallery-2.jpg", alt: "Marine speakers fitted in a boat hull" },
    { src: "/gallery/gallery-3.jpg", alt: "Carburetor repair in hand" },
    { src: "/gallery/gallery-4.jpg", alt: "Tying up a boat at the dock" },
    { src: "/gallery/gallery-6.jpg", alt: "Dock tools and anchors ready for work" },
    { src: "/gallery/gallery-7.jpg", alt: "Boat on its trailer outside the workshop, ready for service" },
  ],

  // Big banner at the very top of the page — edit or remove freely.
  promo: {
    title: "Boat Winterization",
    price: "$400",
    note: "Mobile service — we come to you. Call to book your spot.",
    button: "Call to Book",
  },

  subscribe: {
    title: "Subscribe",
    offer: "Get 10% off your first purchase when you sign up for our newsletter!",
  },
};
