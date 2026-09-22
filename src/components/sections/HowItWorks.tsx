import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { howItWorksSteps } from "./howItWorksData";

export const HowItWorks = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const isOpen = zoomIndex !== null;

  const close = useCallback(() => setZoomIndex(null), []);
  const prev = useCallback(
    () =>
      setZoomIndex((i) =>
        i === null
          ? i
          : (i - 1 + howItWorksSteps.length) % howItWorksSteps.length,
      ),
    [],
  );
  const next = useCallback(
    () =>
      setZoomIndex((i) => (i === null ? i : (i + 1) % howItWorksSteps.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  const active = zoomIndex !== null ? howItWorksSteps[zoomIndex] : null;

  return (
    <section id="how-it-works" className="rr-steps-section">
      <style>{css}</style>

      {/* Decorative background */}
      <div className="rr-steps-bg" aria-hidden="true">
        <div className="rr-steps-dots" />
        <div className="rr-steps-glow rr-steps-glow--left" />
        <div className="rr-steps-glow rr-steps-glow--right" />
      </div>

      <div className="rr-steps-inner">
        {/* Header */}
        <header className="rr-steps-header">
          <p className="rr-steps-eyebrow">A Simple 4-Step Process</p>
          <h2 className="rr-steps-title">We Set It Up. We Keep It Running.</h2>
          <div className="rr-steps-divider" />
          <p className="rr-steps-lede">
            From the initial audit through launch and ongoing management, our
            team handles the heavy lifting so you can stay focused on serving
            your customers.
          </p>
        </header>

        {/* 4 Visual Cards Grid */}
        <div className="rr-steps-grid">
          {howItWorksSteps.map(({ title, body, image, alt }, idx) => (
            <article key={title} className="rr-steps-card group">
              <button
                type="button"
                className="rr-steps-image-wrap"
                onClick={() => setZoomIndex(idx)}
                aria-label={`Zoom in: ${title}`}
              >
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  className="rr-steps-img"
                />
                <div className="rr-steps-card-overlay" aria-hidden="true" />
                <span className="rr-steps-zoom-hint" aria-hidden="true">
                  <span className="rr-steps-zoom-icon">⤢</span>
                  Click to enlarge
                </span>
              </button>

              {/* Accessible text for screen-readers and search engines */}
              <div className="sr-only">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Direct CTA to Free Audit Form */}
        <div className="rr-steps-cta">
          <a href="#audit" className="rr-steps-cta-btn">
            Get Your Free Audit
            <span className="rr-steps-cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Click-to-zoom lightbox */}
      {active && (
        <div
          className="rr-steps-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} enlarged view`}
          onClick={close}
        >
          <button
            type="button"
            className="rr-steps-lightbox-close"
            onClick={close}
            aria-label="Close enlarged view"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="rr-steps-lightbox-nav rr-steps-lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous step"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure
            className="rr-steps-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.alt}
              className="rr-steps-lightbox-img"
            />
            <figcaption className="rr-steps-lightbox-caption">
              <strong>{active.title}</strong>
              <span>{active.body}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="rr-steps-lightbox-nav rr-steps-lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next step"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
};

const css = `
.rr-steps-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #031B36 0%, #07142B 100%);
  color: #fff;
  font-family: Inter, Arial, sans-serif;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 40px);
}
.rr-steps-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.rr-steps-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.6;
}
.rr-steps-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.5;
}
.rr-steps-glow--left { left: -120px; top: 18%; background: rgba(227, 24, 45, 0.16); }
.rr-steps-glow--right { right: -120px; bottom: 12%; background: rgba(30, 120, 255, 0.16); }

.rr-steps-inner { position: relative; z-index: 1; max-width: 1152px; margin: 0 auto; }
.rr-steps-header { text-align: center; width: 90%; margin: 0 auto; }
.rr-steps-eyebrow {
  margin: 0;
  color: #FF1F38;
  font-size: clamp(11px, 1.2vw, 13px);
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.rr-steps-title {
  margin: 14px 0 0;
  font-size: clamp(30px, 4.4vw, 52px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: #fff;
}
.rr-steps-divider {
  width: 64px;
  height: 3px;
  border-radius: 99px;
  margin: 18px auto 0;
  background: linear-gradient(90deg, #E3182D, #FF1F38);
}
.rr-steps-lede {
  margin: 16px auto 0;
  max-width: 680px;
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.6;
  color: rgba(190, 210, 235, 0.8);
  font-weight: 400;
}

.rr-steps-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: clamp(44px, 6vw, 64px);
}
@media (min-width: 640px) {
  .rr-steps-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
@media (min-width: 1024px) {
  .rr-steps-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}

.rr-steps-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  overflow: hidden;
  background: #051329;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.85);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}
.rr-steps-card:hover {
  transform: translateY(-6px);
  border-color: rgba(30, 144, 255, 0.7);
  box-shadow: 0 30px 70px -20px rgba(30, 120, 255, 0.4), 0 0 30px -4px rgba(30, 144, 255, 0.3);
}

.rr-steps-image-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #020b18;
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0;
  margin: 0;
  cursor: zoom-in;
}

.rr-steps-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform .4s ease;
}
.rr-steps-card:hover .rr-steps-img {
  transform: scale(1.02);
}

.rr-steps-card-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.rr-steps-zoom-hint {
  position: absolute;
  left: 50%;
  bottom: 14px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(3, 12, 28, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  opacity: 0;
  transition: opacity .25s ease;
  pointer-events: none;
  white-space: nowrap;
}
.rr-steps-card:hover .rr-steps-zoom-hint { opacity: 1; }
.rr-steps-zoom-icon { font-size: 15px; line-height: 1; }

/* ---------- Click-to-zoom lightbox ---------- */
.rr-steps-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 4vw, 48px);
  background: rgba(2, 8, 20, 0.92);
  backdrop-filter: blur(8px);
  animation: rr-steps-fade .25s ease;
}
@keyframes rr-steps-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.rr-steps-lightbox-figure {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  max-width: min(92vw, 1100px);
  max-height: 90vh;
  animation: rr-steps-pop .3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes rr-steps-pop {
  from { transform: scale(0.94); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.rr-steps-lightbox-img {
  max-width: 100%;
  max-height: 78vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 40px -8px rgba(227, 24, 45, 0.25);
}
.rr-steps-lightbox-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  max-width: 640px;
  color: #fff;
}
.rr-steps-lightbox-caption strong {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.rr-steps-lightbox-caption span {
  font-size: clamp(13px, 1.4vw, 15px);
  line-height: 1.5;
  color: rgba(190, 210, 235, 0.85);
}
.rr-steps-lightbox-close,
.rr-steps-lightbox-nav {
  position: fixed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(3, 12, 28, 0.7);
  color: #fff;
  border-radius: 9999px;
  cursor: pointer;
  transition: background .2s ease, border-color .2s ease, transform .2s ease;
  backdrop-filter: blur(6px);
}
.rr-steps-lightbox-close:hover,
.rr-steps-lightbox-nav:hover {
  background: rgba(227, 24, 45, 0.85);
  border-color: rgba(255, 31, 56, 0.9);
  transform: scale(1.06);
}
.rr-steps-lightbox-close {
  top: clamp(16px, 3vw, 28px);
  right: clamp(16px, 3vw, 28px);
  width: 44px;
  height: 44px;
}
.rr-steps-lightbox-nav {
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
}
.rr-steps-lightbox-nav:hover { transform: translateY(-50%) scale(1.06); }
.rr-steps-lightbox-nav--prev { left: clamp(12px, 3vw, 28px); }
.rr-steps-lightbox-nav--next { right: clamp(12px, 3vw, 28px); }
@media (max-width: 639px) {
  .rr-steps-lightbox-nav { width: 40px; height: 40px; }
  .rr-steps-lightbox-close { width: 38px; height: 38px; }
}

/* ---------- Direct CTA ---------- */
.rr-steps-cta {
  display: flex;
  justify-content: center;
  margin-top: clamp(36px, 5vw, 52px);
}
.rr-steps-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 34px;
  border-radius: 9999px;
  font-family: Inter, Arial, sans-serif;
  font-size: clamp(15px, 1.5vw, 18px);
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(135deg, #E3182D 0%, #FF1F38 100%);
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 18px 44px -12px rgba(227, 24, 45, 0.6), 0 0 24px -6px rgba(255, 31, 56, 0.45);
  transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}
.rr-steps-cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 24px 56px -12px rgba(227, 24, 45, 0.75), 0 0 34px -4px rgba(255, 31, 56, 0.6);
}
.rr-steps-cta-arrow {
  font-size: 1.1em;
  transition: transform .25s ease;
}
.rr-steps-cta-btn:hover .rr-steps-cta-arrow {
  transform: translateX(4px);
}
`;
