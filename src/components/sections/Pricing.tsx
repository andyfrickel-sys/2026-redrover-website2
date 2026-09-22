import { Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PLANS, fmt, type Plan } from "@/lib/plans";

export const Pricing = () => {
  const navigate = useNavigate();

  const goToOrder = (plan: Plan) => {
    navigate(`/order?plan=${plan.id}&billing=monthly`);
  };

  return (
    <section
      id="pricing"
      className="border-t border-border/60 bg-secondary text-primary-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {/* ===== Top promotional banner ===== */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl shadow-primary/30 ring-1 ring-white/10">
          <img
            src="https://vibe.filesafe.space/1788454197571242570/attachments/41615e59-2674-4767-9efc-b5ffd6cc0b3c.png"
            alt="Founders Pricing - First 50 Clients Get 50% Off"
            className="block h-auto w-full select-none"
            loading="eager"
          />

          {/* "27" placed inside the dashed box after "Only" */}
          <div
            className="pointer-events-none absolute flex items-center justify-center font-black text-white"
            style={{
              left: "24.77%",
              top: "73.07%",
              width: "7.78%",
              height: "14.09%",
              fontSize: "clamp(12px, 3.1vw, 54px)",
              letterSpacing: "-0.02em",
              textShadow:
                "0 2px 10px rgba(0,0,0,0.5), 0 0 16px rgba(255,255,255,0.4)",
            }}
            aria-label="27 Founder Spots Left"
          >
            27
          </div>
        </div>

        {/* ===== Pricing cards ===== */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-4 lg:gap-6">
          {PLANS.map((plan) => {
            const isFeatured = plan.featured;
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl transition-all duration-300 ${
                  isFeatured
                    ? "z-10 bg-gradient-to-b from-[#B81528] via-[#A20C1A] to-[#800A14] p-7 text-white shadow-2xl shadow-primary/30 ring-1 ring-white/20 md:-my-4 md:py-9"
                    : "bg-white p-7 text-foreground shadow-lg ring-1 ring-border/70 hover:shadow-xl"
                }`}
              >
                {/* MOST POPULAR strip */}
                {isFeatured && (
                  <div className="-mx-7 -mt-7 mb-5 rounded-t-3xl bg-[#800A14]/80 px-6 py-2.5 text-center ring-1 ring-white/10 md:-mt-9">
                    <span className="inline-flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-white">
                      Most Popular
                      <span className="text-sm">❤</span>
                    </span>
                  </div>
                )}

                {/* Founders badge */}
                <div className="mb-3 flex">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider shadow-sm ${
                      isFeatured
                        ? "bg-[#FFB800] text-black"
                        : "bg-[#FFB800]/15 text-[#A20C1A] ring-1 ring-[#FFB800]/40"
                    }`}
                  >
                    {plan.foundersLabel}
                  </span>
                </div>

                {/* Title & subtitle */}
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isFeatured ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.tagline}
                  </h3>
                  <p
                    className={`mt-1 text-xs ${
                      isFeatured ? "text-white/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.name}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold line-through decoration-[#FF3B30] decoration-2 ${
                        isFeatured
                          ? "text-white/50"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {fmt(plan.monthly)}
                    </span>
                    <span className="rounded-full bg-[#FF3B30] px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">
                      50% Off
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span
                      className={`text-5xl font-black tracking-tight ${
                        isFeatured
                          ? "text-white drop-shadow"
                          : "text-foreground"
                      }`}
                    >
                      {fmt(plan.foundersMonthly)}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isFeatured ? "text-white/75" : "text-muted-foreground"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span
                      className={`font-bold line-through decoration-[#FF3B30] decoration-2 ${
                        isFeatured
                          ? "text-white/50"
                          : "text-muted-foreground/70"
                      }`}
                    >
                      {fmt(plan.setupFee)}
                    </span>
                    <span
                      className={`font-semibold ${
                        isFeatured ? "text-white/90" : "text-foreground"
                      }`}
                    >
                      {fmt(plan.foundersSetupFee)} one-time setup
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`mt-4 text-xs leading-relaxed ${
                    isFeatured ? "text-white/85" : "text-foreground/75"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Divider */}
                <div
                  className={`my-5 h-px w-full ${
                    isFeatured ? "bg-white/15" : "bg-border/60"
                  }`}
                />

                {/* Features list */}
                <ul className="space-y-2.5 text-left text-xs">
                  {plan.features.map((feature, idx) => {
                    const isHeader = feature.endsWith(":");
                    if (isHeader) {
                      return (
                        <li
                          key={idx}
                          className={`pt-1 font-semibold ${
                            isFeatured ? "text-white" : "text-foreground"
                          }`}
                        >
                          {feature}
                        </li>
                      );
                    }
                    return (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                            isFeatured ? "text-white" : "text-primary"
                          }`}
                        />
                        <span
                          className={
                            isFeatured ? "text-white/90" : "text-foreground/80"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Best for */}
                <div
                  className={`mt-6 rounded-xl p-3 text-xs ${
                    isFeatured
                      ? "border border-white/10 bg-black/20 text-white/90"
                      : "border border-border/50 bg-muted/60 text-foreground/80"
                  }`}
                >
                  <p
                    className={`font-semibold uppercase tracking-wide ${
                      isFeatured ? "text-white" : "text-primary"
                    }`}
                  >
                    Best for
                  </p>
                  <p className="mt-1 leading-relaxed">{plan.bestFor}</p>
                </div>

                {/* CTA button */}
                <div className="mt-6 pt-2">
                  <Button
                    type="button"
                    onClick={() => goToOrder(plan)}
                    size="lg"
                    className={`w-full rounded-2xl font-bold shadow-md transition-all ${
                      isFeatured
                        ? "bg-white text-primary hover:bg-white/90 hover:scale-[1.02]"
                        : "bg-[#1B2232] text-white hover:bg-[#111622] hover:scale-[1.02]"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== Bottom disclaimer ===== */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <Lock className="lucide lucide-lock h-3.5 w-3.5 shrink-0 text-gold" />
          <span className="text-card">
            Founders pricing is limited to the first 50 clients and locks in
            your introductory rate once you join.
          </span>
        </div>
      </div>
    </section>
  );
};
