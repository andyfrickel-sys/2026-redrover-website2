import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ProblemCard {
  id: string;
  step: string;
  category: string;
  title: string;
  image: string;
  alt: string;
}

const problemCards: ProblemCard[] = [
  {
    id: "website",
    step: "01",
    category: "WEBSITE",
    title: "Your Website Is Costing You Calls",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/f91f9c14-b0eb-4b40-bcb9-37ad3192c83e.png",
    alt: "Your Website Is Costing You Calls — slow load time and high visitor drop-off leading to missed calls",
  },
  {
    id: "reviews",
    step: "02",
    category: "REVIEWS",
    title: "Happy Customers Forget to Leave Reviews",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/6ac785a9-bbfd-482b-b311-952588b8b55f.png",
    alt: "Happy Customers Forget to Leave Reviews — without consistent follow-up, competitors look safer and trust is lost",
  },
  {
    id: "social",
    step: "03",
    category: "SOCIAL MEDIA",
    title: "Your Business Goes Quiet Online",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/47979619-1fed-489f-9d28-7dbeda2c715a.png",
    alt: "Your Business Goes Quiet Online — lack of consistent posting creates less visibility",
  },
];

export const Problem = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openModal = (idx: number) => setActiveIdx(idx);
  const closeModal = () => setActiveIdx(null);

  const prevCard = () => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx - 1 + problemCards.length) % problemCards.length);
  };

  const nextCard = () => {
    if (activeIdx === null) return;
    setActiveIdx((activeIdx + 1) % problemCards.length);
  };

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="relative overflow-hidden bg-secondary text-secondary-foreground"
      style={{
        backgroundImage:
          "radial-gradient(hsl(0 0% 100% / 0.06) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* Burgundy glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(353 87% 34% / 0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(353 87% 34% / 0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 pt-[60px] md:pb-[80px] md:pt-[90px]">
        {/* Intro */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="font-bold uppercase tracking-[0.18em] sm:text-sm text-amber-300 text-xl">
            The Real Problem
          </p>
          <h2
            id="problem-heading"
            className="mt-3 font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(36px, 5vw, 62px)" }}
          >
            Sound Familiar?
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mx-auto mt-5 max-w-[760px] text-[clamp(17px,2.2vw,20px)] leading-relaxed text-white/75">
            Running the business comes first. These three jobs keep getting
            pushed to tomorrow—and customers notice.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative mt-12 sm:mt-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {problemCards.map((card, idx) => (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                aria-label={`Enlarge ${card.title}`}
                onClick={() => openModal(idx)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(idx);
                  }
                }}
                className="group relative flex flex-col overflow-hidden rounded-[26px] border border-white/20 bg-slate-950/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FF1F38]/60 hover:shadow-[0_24px_60px_-16px_rgba(227,24,45,0.45)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="relative w-full overflow-hidden bg-slate-900 aspect-[4/5]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Subtle top gloss gradient */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/[0.04]"
                    aria-hidden="true"
                  />

                  {/* Zoom hint on hover */}
                  <div
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-slate-950/75 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                    aria-hidden="true"
                  >
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement pill */}
        <div className="mx-auto mt-10 max-w-[700px]">
          <div className="rounded-full border border-primary/70 bg-secondary-foreground/5 px-6 py-4 text-center text-[clamp(16px,2vw,19px)] font-medium text-white">
            The problem isn't knowing what to do. It's{" "}
            <span className="font-bold text-amber-300">
              finding time to keep doing it
            </span>
            .
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <Dialog
        open={activeIdx !== null}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogContent
          className="max-w-[92vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl border-white/20 bg-slate-950/95 p-3 sm:p-5 text-white shadow-2xl backdrop-blur-xl"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {activeIdx !== null
              ? problemCards[activeIdx].title
              : "Problem detail preview"}
          </DialogTitle>

          {activeIdx !== null && (
            <div className="relative flex flex-col items-center">
              <div className="relative max-h-[82vh] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl">
                <img
                  src={problemCards[activeIdx].image}
                  alt={problemCards[activeIdx].alt}
                  className="max-h-[80vh] w-full object-contain"
                />
              </div>

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevCard();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-primary hover:border-primary"
                aria-label="Previous card"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextCard();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-slate-900/80 text-white backdrop-blur-md transition hover:bg-primary hover:border-primary"
                aria-label="Next card"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="mt-3 flex items-center justify-between w-full px-2 text-xs sm:text-sm text-slate-400">
                <span>
                  {activeIdx + 1} of {problemCards.length}
                </span>
                <span className="font-semibold text-white">
                  {problemCards[activeIdx].title}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
