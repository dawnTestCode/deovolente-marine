import hero from "./hero.js";
import about from "./about.js";
import deoVolente from "./deo-volente.js";
import gallery1 from "./gallery-1.js";
import gallery2 from "./gallery-2.js";
import gallery3 from "./gallery-3.js";
import gallery4 from "./gallery-4.js";
import gallery6 from "./gallery-6.js";
import gallery7 from "./gallery-7.js";

// Keyed by the public URL path each photo is served at.
export const IMAGES = {
  "/images/hero.jpg": hero,
  "/images/about.jpg": about,
  "/images/deo-volente.jpg": deoVolente,
  "/gallery/gallery-1.jpg": gallery1,
  "/gallery/gallery-2.jpg": gallery2,
  "/gallery/gallery-3.jpg": gallery3,
  "/gallery/gallery-4.jpg": gallery4,
  "/gallery/gallery-6.jpg": gallery6,
  "/gallery/gallery-7.jpg": gallery7,
};

export function serveImage(path) {
  const b64 = IMAGES[path];
  if (!b64) return new Response("Not found", { status: 404 });
  return new Response(Buffer.from(b64, "base64"), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
