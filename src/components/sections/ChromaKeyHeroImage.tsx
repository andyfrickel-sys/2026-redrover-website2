import { useEffect, useRef, useState } from "react";
import { HERO_IMAGE_URL } from "./heroImageData";

/**
 * Renders the hero visual with the green chroma-key background removed
 * at runtime via a canvas. No binary asset is stored in the repo.
 */
export function ChromaKeyHeroImage({
  alt,
  className,
  width = 1000,
  height = 920,
}: {
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, w, h);
      const d = imageData.data;

      // Chroma key: remove green-dominant pixels (green screen on the left side).
      const G_THRESH = 28; // how much G must exceed R and B to be keyed out
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];
        const greenExcess = g - Math.max(r, b);
        if (greenExcess > G_THRESH) {
          d[i + 3] = 0; // fully transparent
        } else if (greenExcess > 4) {
          // soft edge + spill suppression
          const t = (greenExcess - 4) / (G_THRESH - 4);
          d[i + 3] = Math.round(d[i + 3] * (1 - t));
          d[i + 1] = Math.max(r, b);
        } else if (g > Math.max(r, b) + 2) {
          // spill removal on kept pixels
          d[i + 1] = Math.max(r, b);
        }
      }
      ctx.putImageData(imageData, 0, 0);
      setReady(true);
    };
    img.src = HERO_IMAGE_URL;
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      width={width}
      height={height}
      className={className}
      style={{ opacity: ready ? 1 : 0, transition: "opacity 0.3s ease" }}
    />
  );
}
