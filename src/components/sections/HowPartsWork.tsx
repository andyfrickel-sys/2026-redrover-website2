import React from "react";

const stages = [
  {
    step: "01",
    title: "They See You",
    description:
      "A useful post puts your business in front of the right homeowner.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/1dc12cc5-f203-43d6-a3be-f982923977b6.webp",
    alt: "Social media post introducing a local home-service company to homeowners",
    offset: "",
  },
  {
    step: "02",
    title: "They Find You",
    description: "Local search leads them to a fast, professional website.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/8a57c967-ebc8-460a-b193-6edf67ebcdf6.webp",
    alt: "Local search result helping a homeowner find a nearby service business",
    offset: "lg:translate-y-8",
  },
  {
    step: "03",
    title: "They Trust You",
    description: "Recent reviews make you feel like the safer choice.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/840f7aa5-b5ce-4af9-ae65-9542b89d466e.webp",
    alt: "Recent five-star customer review building trust in a local service business",
    offset: "lg:translate-y-8",
  },
  {
    step: "04",
    title: "They Contact You",
    description: "An easy next step turns their research into a real lead.",
    image:
      "https://vibe.filesafe.space/1788454197571242570/attachments/bace96f6-1eaf-43f9-9009-8a55df0a8058.webp",
    alt: "Incoming phone call and completed estimate request form",
    offset: "",
  },
];

// Badge X-centers inside a 1240-wide viewBox (4 equal cols, 22px gaps).
const BX = [147, 462, 778, 1093];
// Badge Y-centers inside the 72px marker-lane band (card1/4 = 36, card2/3 = 60).
const BY = [36, 68, 68, 36];

export const HowPartsWork: React.FC = () => {
  return (
    <section
      id="how-parts-work"
      className="relative overflow-hidden bg-[#F7F9FC] pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20"
    >
      {/* Subtle pale-blue dotted background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `radial-gradient(#93c5fd 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Restrained pale-blue circular glows */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Introduction Header for all screen sizes */}
        <div className="mx-auto w-full text-center sm:mb-10 lg:mb-12 mb-5">
          <p className="font-bold uppercase tracking-[0.2em] text-[#A20C1A] text-xl">
            HOW CUSTOMERS CHOOSE
          </p>
          <div className="mx-auto my-3 h-[2px] w-12 rounded-full bg-[#A20C1A]" />
          <h2 className="mt-2 text-3xl font-extrabold leading-[1.12] tracking-tight text-[#071B45] sm:text-4xl lg:text-5xl">
            Your Customers Don’t Make Decisions
            <br className="hidden sm:inline" /> in Just One Place.
          </h2>
          <p className="mx-auto mt-4 w-full text-base leading-relaxed text-slate-600 sm:text-lg lg:text-[19px]">
            They notice you, look you up, check your reputation, and then decide
            whether to call.
            <br className="hidden md:inline" /> Every step has to support the
            next.
          </p>
        </div>

        {/* Desktop View: Exact attached image */}
        <div className="hidden lg:block w-full">
          <img
            src="https://vibe.filesafe.space/1788454197571242570/attachments/74708807-8cb9-4b01-a862-5453b25f01fa.png"
            alt="How Customers Choose - Your Customers Don't Make Decisions in Just One Place"
            className="w-full h-auto rounded-2xl"
            width={1240}
            height={680}
            loading="lazy"
          />
        </div>

        {/* Tablet & Mobile View: Responsive HTML Content */}
        <div className="block lg:hidden">
          {/* Journey Cards Container */}
          <div className="relative mt-10 sm:mt-12">
            {/* Mobile vertical connector line behind badges */}
            <div
              className="pointer-events-none absolute left-1/2 top-[224px] bottom-0 block h-auto w-[2px] -translate-x-1/2 bg-[#A20C1A]/70 sm:hidden"
              aria-hidden="true"
            />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {stages.map((stage) => (
                <div
                  key={stage.step}
                  className="group relative flex flex-col rounded-2xl border border-slate-200/80 shadow-[0_8px_25px_rgba(7,27,69,0.06)] bg-white"
                >
                  {/* 1. Large visual area */}
                  <div
                    className="overflow-hidden rounded-t-2xl bg-white"
                    style={{ height: "224px" }}
                  >
                    <img
                      src={stage.image}
                      alt={stage.alt}
                      loading="lazy"
                      width={300}
                      height={220}
                      className="h-full w-full scale-110 object-cover"
                    />
                  </div>

                  {/* 2. Dedicated marker lane */}
                  <div
                    className="relative flex items-center justify-center bg-transparent"
                    style={{ height: "88px" }}
                  >
                    <div className="relative z-[1001] flex h-12 w-12 items-center justify-center rounded-full bg-[#A20C1A] text-base font-extrabold text-white shadow-md ring-4 ring-white">
                      {stage.step}
                    </div>
                  </div>

                  {/* 3. Headline + 4. Description */}
                  <div className="rounded-b-2xl bg-white px-5 pb-7 pt-4 text-center">
                    <h3 className="text-[24px] font-extrabold leading-tight text-[#071B45]">
                      {stage.title}
                    </h3>
                    <p className="mt-2.5 text-[16px] leading-relaxed text-slate-600">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Outcome Banner */}
          <div className="mt-10 rounded-2xl bg-[#071B45] p-7 text-white shadow-xl sm:mt-12">
            <div className="flex flex-col items-center justify-between gap-6">
              {/* Left side tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold tracking-widest text-white sm:text-sm">
                <span>SEEN</span>
                <span className="text-base font-black text-[#A20C1A]">➔</span>
                <span>FOUND</span>
                <span className="text-base font-black text-[#A20C1A]">➔</span>
                <span>TRUSTED</span>
                <span className="text-base font-black text-[#A20C1A]">➔</span>
                <span>CONTACTED</span>
              </div>

              {/* Divider */}
              <div className="h-[1px] w-full bg-white/15" />

              {/* Right side text */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  One connected customer journey.
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300 sm:text-base">
                  You’re not buying three unrelated marketing services. You’re
                  building one consistent online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
