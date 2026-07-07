import { useEffect, useRef } from "react";
import { createDistortedPixels } from "./distortedPixels/createDistortedPixels";

export default function DistortedPixelsCanvas({
  image,
  className = "",
  alt = "",
}) {
  const containerRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageEl = container?.querySelector("img");
    if (!container || !imageEl) return;

    let cancelled = false;

    const start = () => {
      if (cancelled || !imageEl.naturalWidth) return;
      sketchRef.current?.destroy();
      sketchRef.current = createDistortedPixels({
        container,
        image: imageEl,
      });
    };

    if (imageEl.complete && imageEl.naturalWidth > 0) {
      start();
    } else {
      imageEl.addEventListener("load", start, { once: true });
    }

    return () => {
      cancelled = true;
      imageEl.removeEventListener("load", start);
      sketchRef.current?.destroy();
      sketchRef.current = null;
    };
  }, [image]);

  return (
    <div
      ref={containerRef}
      className={`${className} absolute inset-0 overflow-hidden`}
    >
      <img
        src={image}
        alt={alt}
        className="invisible absolute pointer-events-none"
        draggable={false}
      />
    </div>
  );
}
