import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  X,
} from "lucide-react";

interface WebsiteTemplate {
  title: string;
  industry: string;
  slug: string;
  imageUrl: string;
  tagline: string;
}

const templates: WebsiteTemplate[] = [
  {
    title: "ClearFlow Plumbing",
    industry: "Plumbing & Mechanical",
    slug: "plumbing",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/256564df-3c5f-4c4d-9d78-82be294c5acb.png",
    tagline: "High-converting layout built for emergency and scheduled calls",
  },
  {
    title: "Summit Peak Electric",
    industry: "Electrical & Lighting",
    slug: "electrical",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/e3f9e405-7dc6-431d-bd54-6383be44c37b.png",
    tagline: "Modern electrical services layout optimized for local search",
  },
  {
    title: "ClearView Mobile Auto Glass",
    industry: "Auto Glass & Mobile Repair",
    slug: "auto-glass",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/27fe38b1-3826-4b19-8a2c-9f53798ee458.png",
    tagline: "Mobile-first instant quote booking and click-to-call flow",
  },
  {
    title: "Northwest Property Inspections",
    industry: "Home Inspection Services",
    slug: "home-inspection",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/f885c1e1-423f-4b0c-a958-f3653b5aecb8.png",
    tagline: "Trust-building credentials and direct online appointment booking",
  },
  {
    title: "Harbor Ridge Estate Law",
    industry: "Legal & Professional Services",
    slug: "estate-law",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/50dc4315-5567-4f10-862f-9b82a35c4bc2.png",
    tagline: "Sophisticated consultation capture with clear authority badges",
  },
  {
    title: "ProWash Exterior Cleaning",
    industry: "Pressure Washing & Soft Wash",
    slug: "pressure-washing",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/af888119-6037-4104-abbb-e8315bce70da.png",
    tagline: "Interactive 4-step project estimator and instant quote capture",
  },
  {
    title: "Evergreen Landscape & Living",
    industry: "Landscaping & Hardscapes",
    slug: "landscaping",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/dbb3ac86-e992-4c0d-b4cd-1d0b2ae82b3d.png",
    tagline:
      "High-end residential estimate scheduler and outdoor living gallery",
  },
  {
    title: "Summit Ledger & Advisory",
    industry: "Accounting & Tax Advisory",
    slug: "accounting",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/3c132e94-2dae-4e59-9652-67c3fc7aee6f.png",
    tagline: "Strategic consultation capture tailored for growing businesses",
  },
  {
    title: "Evergreen Spine & Wellness",
    industry: "Chiropractic & Rehabilitation",
    slug: "chiropractic",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/6c2a0e5e-0aca-4fa6-82d2-3d194d595f49.png",
    tagline: "Direct new-patient visit scheduler with condition breakdown",
  },
  {
    title: "Tropic Flame Street Kitchen",
    industry: "Food Truck & Event Catering",
    slug: "food-truck",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/f9577964-4e2b-42c1-a4fd-5e536c9b537c.png",
    tagline:
      "Vibrant menu showcase, truck finder, and high-volume catering bookings",
  },
  {
    title: "Summit Ridge Roofing & Exteriors",
    industry: "Roofing & Exterior Solutions",
    slug: "roofing",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/ce92700e-4b67-4466-a9f0-8c1937594ceb.png",
    tagline:
      "Luxury roofing & exterior solutions with direct estimate request flow",
  },
  {
    title: "Evergreen Family Dental",
    industry: "Family & Cosmetic Dentistry",
    slug: "dental",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/7cad67d4-7a1c-4849-8d20-32a8b131b8fb.png",
    tagline:
      "Patient-friendly online visit scheduling for gentle family & cosmetic care",
  },
  {
    title: "Summit Air Heating & Cooling",
    industry: "HVAC & Indoor Comfort",
    slug: "hvac",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/7c06ae00-59de-4ba9-841a-07f26307ffba.png",
    tagline: "Year-round heating, cooling & rapid service request dispatch",
  },
  {
    title: "Harper & Stone Law Group",
    industry: "Criminal Defense Attorney",
    slug: "criminal-defense",
    imageUrl:
      "https://vibe.filesafe.space/1788454197571242570/attachments/503b8aa7-66c2-430e-bfaa-ef761d8976eb.png",
    tagline:
      "High-stakes trial representation with confidential consultation capture",
  },
];

export const WebsiteShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-scroll to the right every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const reducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      if (!isPausedRef.current) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => window.clearInterval(timer);
  }, [emblaApi]);

  return (
    <section
      id="templates"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-background via-slate-50/60 to-background py-20 sm:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 h-72 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto w-[90%] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven Conversion Layouts</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl lg:text-5xl leading-[1.15]">
            Choose A Beautifully Designed,
            <br />
            Lead-Generating Website
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />

          <span className="mt-5 block font-bold uppercase tracking-wider text-primary text-sm sm:text-base lg:text-xl">
            Built for your insustry | Customized For your brand | Optimized To
            Dominate
          </span>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Every website is engineered for speed, mobile responsiveness, local
            SEO, and capturing more inquiries from high-intent homeowners.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-12 sm:mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 sm:-ml-6">
              {templates.map((tpl, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <div
                    key={tpl.title}
                    className="min-w-0 shrink-0 grow-0 basis-[100%] sm:basis-[50%] lg:basis-[40%] pl-4 sm:pl-6 transition-all duration-300 pt-5 pb-5"
                  >
                    <Link
                      to={`/industries/${tpl.slug}`}
                      className={`group block overflow-hidden rounded-2xl border bg-card transition-all duration-300 ${
                        isActive
                          ? "border-primary/40 shadow-2xl shadow-secondary/15 scale-[1.01]"
                          : "border-border/70 shadow-md opacity-85 hover:opacity-100"
                      }`}
                    >
                      {/* Browser mock top chrome bar */}
                      <div className="flex items-center justify-between border-b border-border/70 bg-slate-100/90 px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-3 w-3 rounded-full bg-red-400" />
                          <span className="h-3 w-3 rounded-full bg-amber-400" />
                          <span className="h-3 w-3 rounded-full bg-emerald-400" />
                        </div>
                        <div className="flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm border border-slate-200/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          <span>{tpl.industry}</span>
                        </div>
                        <div className="text-[11px] font-semibold text-slate-400">
                          {idx + 1} / {templates.length}
                        </div>
                      </div>

                      {/* Website Screenshot preview — fixed height, no cropping */}
                      <div className="relative w-full overflow-hidden bg-slate-900 h-[280px] sm:h-[320px] flex items-center justify-center">
                        <img
                          src={tpl.imageUrl}
                          alt={`${tpl.industry} website design`}
                          className="block w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      </div>

                      {/* Footer card info */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border/60 bg-white p-4 sm:p-5">
                        <div>
                          <h3 className="text-lg font-bold text-secondary">
                            {tpl.industry}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {tpl.tagline}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-primary shadow-sm whitespace-nowrap">
                          <span>View This Layout</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between sm:justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous website design"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-secondary shadow-sm transition hover:bg-primary hover:text-white hover:border-primary active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center max-w-[280px] sm:max-w-none">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to website slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next website design"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-secondary shadow-sm transition hover:bg-primary hover:text-white hover:border-primary active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox — brings clicked slide to the front at 2x size */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-secondary/80 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${templates[lightboxIndex].title} website preview`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close preview"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary shadow-lg transition hover:bg-primary hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev / Next inside lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + templates.length) % templates.length,
              );
            }}
            aria-label="Previous website design"
            className="absolute left-3 sm:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-lg transition hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-5xl animate-in zoom-in-90 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl border-2 border-primary/40 bg-card shadow-2xl">
              {/* Browser mock top chrome bar */}
              <div className="flex items-center justify-between border-b border-border/70 bg-slate-100/90 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm border border-slate-200/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{templates[lightboxIndex].industry}</span>
                </div>
                <div className="text-[11px] font-semibold text-slate-400">
                  {lightboxIndex + 1} / {templates.length}
                </div>
              </div>

              {/* Website Screenshot */}
              <div className="relative w-full overflow-hidden bg-slate-900 max-h-[70vh] flex items-center justify-center">
                <img
                  src={templates[lightboxIndex].imageUrl}
                  alt={`${templates[lightboxIndex].industry} website design`}
                  className="block w-full h-full object-contain"
                />
              </div>

              {/* Footer card info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border/60 bg-white p-4 sm:p-5">
                <div>
                  <h3 className="text-lg font-bold text-secondary">
                    {templates[lightboxIndex].industry}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {templates[lightboxIndex].tagline}
                  </p>
                </div>
                <Link
                  to={`/industries/${templates[lightboxIndex].slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary shadow-sm whitespace-nowrap"
                >
                  <span>View This Layout</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % templates.length);
            }}
            aria-label="Next website design"
            className="absolute right-3 sm:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-lg transition hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
};
