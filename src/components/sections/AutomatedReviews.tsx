import { useState, useEffect, useCallback } from "react";
import {
  Star,
  ShieldCheck,
  Globe,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { reviewCards } from "./automatedReviewsData";

const guarantees = [
  "Automated review requests after every job",
  "Email & SMS reminder sequences",
  "Unhappy customer private feedback protection",
  "Professional review response assistance",
  "Showcase your top reviews on your site",
  "Real-time alerts for new public reviews",
];

export const AutomatedReviews = () => {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const isOpen = zoomIndex !== null;

  const close = useCallback(() => setZoomIndex(null), []);
  const prev = useCallback(
    () =>
      setZoomIndex((i) =>
        i === null ? i : (i - 1 + reviewCards.length) % reviewCards.length,
      ),
    [],
  );
  const next = useCallback(
    () => setZoomIndex((i) => (i === null ? i : (i + 1) % reviewCards.length)),
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

  const active = zoomIndex !== null ? reviewCards[zoomIndex] : null;

  return (
    <section id="automated-reviews" className="rr-reviews-section">
      <style>{css}</style>

      {/* Decorative background */}
      <div className="rr-reviews-bg" aria-hidden="true">
        <div className="rr-reviews-dots" />
        <div className="rr-reviews-glow rr-reviews-glow--left" />
        <div className="rr-reviews-glow rr-reviews-glow--right" />
      </div>

      <div className="rr-reviews-inner">
        {/* Header */}
        <header className="rr-reviews-header">
          <p className="rr-reviews-eyebrow">Reputation On Autopilot</p>
          <h2 className="rr-reviews-title">
            A Review System That Never Forgets
          </h2>
          <div className="rr-reviews-divider" />
          <p className="rr-reviews-lede">
            Happy customers are your best marketing — but most never think to
            leave a review. Red Rover automatically follows up after every job
            and makes it effortless for satisfied customers to share their
            experience, so your reputation keeps growing without you lifting a
            finger.
          </p>
        </header>

        {/* 6 Visual Cards Grid */}
        <div className="rr-reviews-grid">
          {reviewCards.map(({ title, body, image, alt }, idx) => {
            return (
              <article key={title} className="rr-reviews-card group">
                {/* Image poster area */}
                <button
                  type="button"
                  className="rr-reviews-image-wrap"
                  onClick={() => setZoomIndex(idx)}
                  aria-label={`Zoom in: ${title}`}
                >
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    className="rr-reviews-img"
                  />
                  <div className="rr-reviews-card-overlay" aria-hidden="true" />
                  <span className="rr-reviews-zoom-hint" aria-hidden="true">
                    <span className="rr-reviews-zoom-icon">⤢</span>
                    Click to enlarge
                  </span>
                </button>

                {/* Accessible text for screen-readers and search engines */}
                <div className="sr-only">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Guarantees list */}
        <div className="rr-reviews-guarantees">
          <ul>
            {guarantees.map((item) => (
              <li key={item}>
                <CheckCircle2 className="rr-reviews-check" strokeWidth={2.2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome bar */}
        <div className="rr-reviews-outcome">
          <span className="rr-reviews-outcome-item">
            <Star className="rr-reviews-outcome-icon rr-reviews-outcome-icon--fill" />
            MORE REVIEWS
          </span>
          <span className="rr-reviews-outcome-sep" aria-hidden="true" />
          <span className="rr-reviews-outcome-item">
            <ShieldCheck className="rr-reviews-outcome-icon" />
            STRONGER REPUTATION
          </span>
          <span className="rr-reviews-outcome-sep" aria-hidden="true" />
          <span className="rr-reviews-outcome-item">
            <Globe className="rr-reviews-outcome-icon" />
            EASIER CHOICE
          </span>
        </div>
      </div>

      {/* Click-to-zoom lightbox */}
      {active && (
        <div
          className="rr-reviews-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} enlarged view`}
          onClick={close}
        >
          <button
            type="button"
            className="rr-reviews-lightbox-close"
            onClick={close}
            aria-label="Close enlarged view"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="rr-reviews-lightbox-nav rr-reviews-lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure
            className="rr-reviews-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.alt}
              className="rr-reviews-lightbox-img"
            />
            <figcaption className="rr-reviews-lightbox-caption">
              <strong>{active.title}</strong>
              <span>{active.body}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="rr-reviews-lightbox-nav rr-reviews-lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
};

const css = `
.rr-reviews-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #031B36 0%, #07142B 100%);
  color: #fff;
  font-family: Inter, Arial, sans-serif;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 40px);
}
.rr-reviews-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.rr-reviews-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.6;
}
.rr-reviews-glow {
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  filter: blur(140px);
  opacity: 0.5;
}
.rr-reviews-glow--left { left: -120px; top: 18%; background: rgba(227, 24, 45, 0.16); }
.rr-reviews-glow--right { right: -120px; bottom: 12%; background: rgba(30, 120, 255, 0.16); }

.rr-reviews-inner { position: relative; z-index: 1; max-width: 1152px; margin: 0 auto; }
.rr-reviews-header { text-align: center; width: 90%; margin: 0 auto; }
.rr-reviews-eyebrow {
  margin: 0;
  color: #FF1F38;
  font-size: clamp(11px, 1.2vw, 13px);
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}
.rr-reviews-title {
  margin: 14px 0 0;
  font-size: clamp(30px, 4.4vw, 52px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: #fff;
}
.rr-reviews-divider {
  width: 64px;
  height: 3px;
  border-radius: 99px;
  margin: 18px auto 0;
  background: linear-gradient(90deg, #E3182D, #FF1F38);
}
.rr-reviews-lede {
  margin: 16px auto 0;
  max-width: 680px;
  font-size: clamp(16px, 1.8vw, 19px);
  line-height: 1.6;
  color: rgba(190, 210, 235, 0.8);
  font-weight: 400;
}

.rr-reviews-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: clamp(44px, 6vw, 64px);
}
@media (min-width: 640px) {
  .rr-reviews-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
@media (min-width: 1024px) {
  .rr-reviews-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
}

.rr-reviews-card {
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
.rr-reviews-card:hover {
  transform: translateY(-6px);
  border-color: rgba(30, 144, 255, 0.7);
  box-shadow: 0 30px 70px -20px rgba(30, 120, 255, 0.4), 0 0 30px -4px rgba(30, 144, 255, 0.3);
}

.rr-reviews-image-wrap {
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

.rr-reviews-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform .4s ease;
}
.rr-reviews-card:hover .rr-reviews-img {
  transform: scale(1.02);
}

.rr-reviews-card-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.rr-reviews-zoom-hint {
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
.rr-reviews-card:hover .rr-reviews-zoom-hint { opacity: 1; }
.rr-reviews-zoom-icon { font-size: 15px; line-height: 1; }

.rr-reviews-guarantees {
  margin: clamp(40px, 5vw, 56px) auto 0;
  max-width: 100%;
  background: rgba(4, 12, 28, 0.55);
  border: 1px solid rgba(120, 160, 220, 0.14);
  border-radius: 20px;
  padding: clamp(22px, 3vw, 30px);
}
.rr-reviews-guarantees ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
@media (min-width: 640px) {
  .rr-reviews-guarantees ul {
    grid-template-columns: 1fr 1fr;
    gap: 14px 28px;
  }
}
@media (min-width: 1024px) {
  .rr-reviews-guarantees ul {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px 24px;
  }
}
.rr-reviews-guarantees li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(14px, 1.3vw, 15px);
  color: rgba(225, 235, 250, 0.9);
  font-weight: 500;
}
.rr-reviews-check {
  width: 18px;
  height: 18px;
  color: #E3182D;
  flex-shrink: 0;
}

.rr-reviews-outcome {
  margin: clamp(36px, 5vw, 48px) auto 0;
  max-width: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px 24px;
  padding: 16px 28px;
  background: rgba(4, 12, 28, 0.6);
  border: 1px solid rgba(120, 160, 220, 0.2);
  border-radius: 9999px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}
.rr-reviews-outcome-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: clamp(12px, 1.2vw, 13px);
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #fff;
  text-transform: uppercase;
}
.rr-reviews-outcome-icon {
  width: 18px;
  height: 18px;
  color: #E3182D;
}
.rr-reviews-outcome-icon--fill {
  fill: #E3182D;
}
.rr-reviews-outcome-sep {
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
}
@media (max-width: 639px) {
  .rr-reviews-outcome {
    border-radius: 20px;
    padding: 16px;
  }
  .rr-reviews-outcome-sep {
    display: none;
  }
}

/* ---------- Click-to-zoom lightbox ---------- */
.rr-reviews-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(16px, 4vw, 48px);
  background: rgba(2, 8, 20, 0.92);
  backdrop-filter: blur(8px);
  animation: rr-reviews-fade .25s ease;
}
@keyframes rr-reviews-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
.rr-reviews-lightbox-figure {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  max-width: min(92vw, 1100px);
  max-height: 90vh;
  animation: rr-reviews-pop .3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@keyframes rr-reviews-pop {
  from { transform: scale(0.94); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.rr-reviews-lightbox-img {
  max-width: 100%;
  max-height: 78vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 40px -8px rgba(227, 24, 45, 0.25);
}
.rr-reviews-lightbox-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  max-width: 640px;
  color: #fff;
}
.rr-reviews-lightbox-caption strong {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.rr-reviews-lightbox-caption span {
  font-size: clamp(13px, 1.4vw, 15px);
  line-height: 1.5;
  color: rgba(190, 210, 235, 0.85);
}
.rr-reviews-lightbox-close,
.rr-reviews-lightbox-nav {
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
.rr-reviews-lightbox-close:hover,
.rr-reviews-lightbox-nav:hover {
  background: rgba(227, 24, 45, 0.85);
  border-color: rgba(255, 31, 56, 0.9);
  transform: scale(1.06);
}
.rr-reviews-lightbox-close {
  top: clamp(16px, 3vw, 28px);
  right: clamp(16px, 3vw, 28px);
  width: 44px;
  height: 44px;
}
.rr-reviews-lightbox-nav {
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
}
.rr-reviews-lightbox-nav:hover { transform: translateY(-50%) scale(1.06); }
.rr-reviews-lightbox-nav--prev { left: clamp(12px, 3vw, 28px); }
.rr-reviews-lightbox-nav--next { right: clamp(12px, 3vw, 28px); }
@media (max-width: 639px) {
  .rr-reviews-lightbox-nav { width: 40px; height: 40px; }
  .rr-reviews-lightbox-close { width: 38px; height: 38px; }
}
`;
