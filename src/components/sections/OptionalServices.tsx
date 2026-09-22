const optionalServices = [
  "AI website chat",
  "Missed-call text-back",
  "Lead follow-up automation",
  "After-hours Voice AI",
  "Business-listing management",
  "Advanced local SEO",
  "Google and Meta advertising",
  "Landing pages and sales funnels",
  "Real Time Appointment Booking",
  "Automated Appointment Reminders",
];

export const OptionalServices = () => (
  <section
    id="optional-services"
    className="border-t border-border/60 bg-background"
  >
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          A Foundation You Can Build On
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-4 text-lg text-muted-foreground">
          Start by getting the essentials working consistently. As your business
          grows, Red Rover can add systems that help capture and convert more
          opportunities.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="grid gap-3 sm:grid-cols-2">
          {optionalServices.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-sm font-medium text-secondary">{s}</span>
              <span className="ml-auto text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Optional
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          These optional services are not included in the core plan unless
          specified.
        </p>
      </div>
    </div>
  </section>
);
