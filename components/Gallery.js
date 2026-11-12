"use client";
import { useState } from "react";

export function Gallery({ items }) {
  const [failed, setFailed] = useState({});
  return (
    <div className="gallery">
      {items.map((g, i) => (
        <figure key={g.src}>
          {!failed[g.src] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={g.src} alt={g.alt} onError={() => setFailed((f) => ({ ...f, [g.src]: true }))} />
          ) : (
            <div className="empty">Gallery photo {i + 1}<br />public/gallery/gallery-{i + 1}.jpg</div>
          )}
        </figure>
      ))}
    </div>
  );
}
